import type { MetadataRoute } from "next";
import { listLocalCmsPages } from "@/lib/cms-content";
import { absoluteUrl } from "@/lib/site-url";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/personel-tasimaciligi", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/hizmetlerimiz", changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/kurumsal", changeFrequency: "monthly" as const, priority: 0.75 },
    { path: "/vardiyali-personel-servisi", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/fabrika-personel-tasimaciligi", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/kurumsal-servis-guzergah-planlama", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/personel-servisi-fiyatlari", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/sektorler", changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/sektorler/lojistik-depo-personel-servisi", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/sektorler/saglik-hastane-personel-servisi", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/sektorler/ofis-plaza-personel-servisi", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/sektorler/avm-perakende-personel-servisi", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/hizmet-bolgeleri", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/hizmet-bolgeleri/basaksehir-personel-servisi", changeFrequency: "monthly" as const, priority: 0.75 },
    { path: "/hizmet-bolgeleri/istanbul-avrupa-yakasi-personel-servisi", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/hizmet-bolgeleri/istanbul-anadolu-yakasi-personel-servisi", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/iletisim", changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const managedPages = (await listLocalCmsPages())
    .filter((page) => page.status === "published")
    .map((page) => ({
      url: absoluteUrl(`/${page.path}`),
      lastModified: page.updatedAt,
      changeFrequency: "monthly" as const,
      priority: page.contentType === "service" || page.contentType === "region" ? 0.8 : 0.7,
    }));

  return [...routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  })), ...managedPages];
}
