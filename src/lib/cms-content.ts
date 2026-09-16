import "server-only";

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import type { CmsPage } from "./cms-types";

const pagesDirectory = path.join(process.cwd(), "content", "pages");

export async function listLocalCmsPages() {
  try {
    const files = (await readdir(pagesDirectory)).filter((file) => file.endsWith(".json"));
    const pages = await Promise.all(files.map(async (file) => {
      const source = await readFile(path.join(pagesDirectory, file), "utf8");
      return JSON.parse(source) as CmsPage;
    }));
    return pages;
  } catch {
    return [];
  }
}

export async function getLocalCmsPage(routePath: string) {
  const pages = await listLocalCmsPages();
  return pages.find((page) => page.path === routePath && page.status === "published") ?? null;
}
