import "server-only";

import { createHmac, createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "misirli_cms_session";
const SESSION_SECONDS = 60 * 60 * 12;

function equalHex(left: string, right: string) {
  if (!/^[a-f0-9]+$/i.test(left) || !/^[a-f0-9]+$/i.test(right) || left.length !== right.length) {
    return false;
  }

  return timingSafeEqual(Buffer.from(left, "hex"), Buffer.from(right, "hex"));
}

function sessionSignature(payload: string) {
  const secret = process.env.CMS_SESSION_SECRET;
  if (!secret) return "";
  return createHmac("sha256", secret).update(payload).digest("hex");
}

export function cmsConfiguration() {
  return {
    authReady: Boolean(process.env.CMS_ADMIN_PASSWORD_HASH && process.env.CMS_SESSION_SECRET),
    publishingReady: Boolean(process.env.CMS_GITHUB_TOKEN),
    repository: process.env.CMS_GITHUB_REPOSITORY ?? "resulatakulbusiness/misirli-turizm",
  };
}

export function verifyCmsPassword(password: string) {
  const configuredHash = process.env.CMS_ADMIN_PASSWORD_HASH?.trim().toLowerCase();
  if (!configuredHash) return false;
  const passwordHash = createHash("sha256").update(password).digest("hex");
  return equalHex(passwordHash, configuredHash);
}

export async function createCmsSession() {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  const payload = Buffer.from(JSON.stringify({ expiresAt })).toString("base64url");
  const signature = sessionSignature(payload);
  if (!signature) throw new Error("CMS_SESSION_SECRET eksik.");

  const store = await cookies();
  store.set(COOKIE_NAME, `${payload}.${signature}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: SESSION_SECONDS,
    priority: "high",
  });
}

export async function clearCmsSession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export async function isCmsAuthenticated() {
  const value = (await cookies()).get(COOKIE_NAME)?.value;
  if (!value) return false;

  const [payload, signature] = value.split(".");
  if (!payload || !signature) return false;

  const expected = sessionSignature(payload);
  if (!expected || !equalHex(signature, expected)) return false;

  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as { expiresAt?: number };
    return typeof parsed.expiresAt === "number" && parsed.expiresAt > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}

export function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  return !origin || origin === new URL(request.url).origin;
}
