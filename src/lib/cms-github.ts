import "server-only";

import type { CmsMedia, CmsPage } from "./cms-types";
import { cmsFileName } from "./cms-types";

type GitHubFile = {
  name: string;
  path: string;
  sha: string;
  size: number;
  type: "file" | "dir";
  content?: string;
};

const API_VERSION = "2022-11-28";

function repository() {
  return process.env.CMS_GITHUB_REPOSITORY ?? "resulatakulbusiness/misirli-turizm";
}

function token() {
  const value = process.env.CMS_GITHUB_TOKEN;
  if (!value) throw new Error("CMS_GITHUB_TOKEN tanımlı değil.");
  return value;
}

async function githubRequest<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`https://api.github.com/repos/${repository()}${path}`, {
    ...init,
    cache: "no-store",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token()}`,
      "X-GitHub-Api-Version": API_VERSION,
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`GitHub isteği başarısız (${response.status}): ${detail.slice(0, 240)}`);
  }

  return response.json() as Promise<T>;
}

async function listDirectory(path: string) {
  try {
    return await githubRequest<GitHubFile[]>(`/contents/${path}?ref=main`);
  } catch (error) {
    if (error instanceof Error && error.message.includes("(404)")) return [];
    throw error;
  }
}

async function readFile(path: string) {
  try {
    return await githubRequest<GitHubFile>(`/contents/${path}?ref=main`);
  } catch (error) {
    if (error instanceof Error && error.message.includes("(404)")) return null;
    throw error;
  }
}

async function upsertFile(path: string, content: string, message: string, sha?: string) {
  return githubRequest<{ content: GitHubFile; commit: { sha: string; html_url: string } }>(`/contents/${path}`, {
    method: "PUT",
    body: JSON.stringify({ message, content, branch: "main", ...(sha ? { sha } : {}) }),
  });
}

export async function listCmsPagesFromGitHub() {
  const files = (await listDirectory("content/pages")).filter((item) => item.type === "file" && item.name.endsWith(".json"));
  const pages = await Promise.all(files.map(async (file) => {
    const source = await readFile(file.path);
    if (!source?.content) return null;
    return JSON.parse(Buffer.from(source.content.replace(/\n/g, ""), "base64").toString("utf8")) as CmsPage;
  }));

  return pages.filter((page): page is CmsPage => Boolean(page)).sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export async function saveCmsPageToGitHub(page: CmsPage) {
  const path = `content/pages/${cmsFileName(page.path)}`;
  const current = await readFile(path);
  const content = Buffer.from(`${JSON.stringify(page, null, 2)}\n`, "utf8").toString("base64");
  return upsertFile(path, content, `cms: ${page.status === "published" ? "publish" : "save draft"} ${page.title}`, current?.sha);
}

export async function listCmsMediaFromGitHub(): Promise<CmsMedia[]> {
  const files = (await listDirectory("public/uploads")).filter((item) => item.type === "file");
  return files.map((item) => ({
    name: item.name,
    path: item.path,
    url: `/${item.path.replace(/^public\//, "")}`,
    size: item.size,
    sha: item.sha,
  })).sort((a, b) => b.name.localeCompare(a.name));
}

export async function saveCmsMediaToGitHub(fileName: string, base64: string) {
  const path = `public/uploads/${fileName}`;
  return upsertFile(path, base64, `cms: upload media ${fileName}`);
}
