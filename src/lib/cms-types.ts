export type CmsPageStatus = "draft" | "published";

export type CmsSection = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
  imageAlt: string;
};

export type CmsFaq = {
  id: string;
  question: string;
  answer: string;
};

export type CmsPage = {
  id: string;
  path: string;
  title: string;
  h1: string;
  excerpt: string;
  contentType: "service" | "region" | "guide" | "corporate";
  status: CmsPageStatus;
  focusKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;
  heroImage: string;
  heroImageAlt: string;
  sections: CmsSection[];
  faqs: CmsFaq[];
  createdAt: string;
  updatedAt: string;
};

export type CmsMedia = {
  name: string;
  path: string;
  url: string;
  size: number;
  sha: string;
};

export function normalizeCmsPath(value: string) {
  return value
    .trim()
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9/\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/\/+/g, "/")
    .replace(/^\/+|\/+$/g, "");
}

export function cmsFileName(path: string) {
  return `${normalizeCmsPath(path).replaceAll("/", "--")}.json`;
}

export function createEmptyCmsPage(): CmsPage {
  const now = new Date().toISOString();

  return {
    id: crypto.randomUUID(),
    path: "",
    title: "",
    h1: "",
    excerpt: "",
    contentType: "guide",
    status: "draft",
    focusKeyword: "",
    secondaryKeywords: [],
    metaTitle: "",
    metaDescription: "",
    canonicalPath: "",
    heroImage: "",
    heroImageAlt: "",
    sections: [],
    faqs: [],
    createdAt: now,
    updatedAt: now,
  };
}
