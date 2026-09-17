import type { Metadata } from "next";
import { SectorPage } from "@/components/sector-page";
import { sectorsHub } from "@/lib/sector-pages";

export const metadata: Metadata = {
  title: sectorsHub.seoTitle,
  description: sectorsHub.seoDescription,
  keywords: sectorsHub.seoKeywords,
  alternates: { canonical: `/${sectorsHub.slug}` },
  openGraph: {
    title: sectorsHub.seoTitle,
    description: sectorsHub.seoDescription,
    url: `/${sectorsHub.slug}`,
    siteName: "Mısırlı Turizm",
    locale: "tr_TR",
    type: "website",
    images: [{
      url: sectorsHub.image.src,
      width: sectorsHub.image.width,
      height: sectorsHub.image.height,
      alt: sectorsHub.imageAlt,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: sectorsHub.seoTitle,
    description: sectorsHub.seoDescription,
    images: [sectorsHub.image.src],
  },
};

export default function SectorsPage() {
  return <SectorPage data={sectorsHub} />;
}
