import { cmsConfiguration, isCmsAuthenticated, isSameOrigin } from "@/lib/cms-auth";
import { listCmsPagesFromGitHub, saveCmsPageToGitHub } from "@/lib/cms-github";
import type { CmsPage } from "@/lib/cms-types";
import { normalizeCmsPath } from "@/lib/cms-types";

const reservedRoots = new Set(["api", "yonetim", "_next"]);

function validatePage(value: unknown): CmsPage {
  if (!value || typeof value !== "object") throw new Error("İçerik verisi geçersiz.");
  const page = value as Partial<CmsPage>;
  const normalizedPath = normalizeCmsPath(page.path ?? "");

  if (!page.id || !page.title?.trim() || !page.h1?.trim() || !normalizedPath) {
    throw new Error("Başlık, H1 ve URL alanları zorunludur.");
  }
  if (reservedRoots.has(normalizedPath.split("/")[0])) throw new Error("Bu URL sistem tarafından ayrılmıştır.");
  if ((page.metaTitle?.length ?? 0) > 70) throw new Error("SEO başlığı 70 karakterden uzun olamaz.");
  if ((page.metaDescription?.length ?? 0) > 170) throw new Error("Meta açıklama 170 karakterden uzun olamaz.");
  if (!Array.isArray(page.sections) || !Array.isArray(page.faqs)) throw new Error("İçerik bölümleri geçersiz.");

  const now = new Date().toISOString();
  return {
    id: page.id,
    path: normalizedPath,
    title: page.title.trim(),
    h1: page.h1.trim(),
    excerpt: page.excerpt?.trim() ?? "",
    contentType: page.contentType ?? "guide",
    status: page.status === "published" ? "published" : "draft",
    focusKeyword: page.focusKeyword?.trim() ?? "",
    secondaryKeywords: (page.secondaryKeywords ?? []).map((item) => item.trim()).filter(Boolean).slice(0, 20),
    metaTitle: page.metaTitle?.trim() || page.title.trim(),
    metaDescription: page.metaDescription?.trim() || page.excerpt?.trim() || "",
    canonicalPath: normalizedPath,
    heroImage: page.heroImage?.trim() ?? "",
    heroImageAlt: page.heroImageAlt?.trim() ?? "",
    sections: page.sections.slice(0, 30).map((section) => ({
      id: section.id,
      eyebrow: section.eyebrow?.trim() ?? "",
      title: section.title?.trim() ?? "",
      body: section.body?.trim() ?? "",
      bullets: (section.bullets ?? []).map((item) => item.trim()).filter(Boolean).slice(0, 20),
      image: section.image?.trim() ?? "",
      imageAlt: section.imageAlt?.trim() ?? "",
    })),
    faqs: page.faqs.slice(0, 30).map((faq) => ({ id: faq.id, question: faq.question.trim(), answer: faq.answer.trim() })).filter((faq) => faq.question && faq.answer),
    createdAt: page.createdAt || now,
    updatedAt: now,
  };
}

export async function GET() {
  if (!await isCmsAuthenticated()) return Response.json({ error: "Oturum gerekli." }, { status: 401 });
  if (!cmsConfiguration().publishingReady) return Response.json({ pages: [], warning: "GitHub yayın anahtarı tanımlı değil." });

  try {
    return Response.json({ pages: await listCmsPagesFromGitHub() });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "İçerikler alınamadı." }, { status: 502 });
  }
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return Response.json({ error: "Geçersiz istek kaynağı." }, { status: 403 });
  if (!await isCmsAuthenticated()) return Response.json({ error: "Oturum gerekli." }, { status: 401 });
  if (!cmsConfiguration().publishingReady) return Response.json({ error: "GitHub yayın anahtarı tanımlı değil." }, { status: 503 });

  try {
    const page = validatePage(await request.json());
    const result = await saveCmsPageToGitHub(page);
    return Response.json({ page, commit: result.commit });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "İçerik kaydedilemedi." }, { status: 400 });
  }
}
