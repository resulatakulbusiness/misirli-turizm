import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectorPage } from "@/components/sector-page";
import { getSectorPage, sectorPages } from "@/lib/sector-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return sectorPages.map((page) => ({ slug: page.slug.replace("sektorler/", "") }));
}

export async function generateMetadata({ params }: PageProps<"/sektorler/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const data = getSectorPage(slug);

  if (!data) return {};

  return {
    title: data.seoTitle,
    description: data.seoDescription,
    keywords: data.seoKeywords,
    alternates: { canonical: `/${data.slug}` },
    openGraph: {
      title: data.seoTitle,
      description: data.seoDescription,
      url: `/${data.slug}`,
      siteName: "Mısırlı Turizm",
      locale: "tr_TR",
      type: "website",
      images: [{
        url: data.image.src,
        width: data.image.width,
        height: data.image.height,
        alt: data.imageAlt,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: data.seoTitle,
      description: data.seoDescription,
      images: [data.image.src],
    },
  };
}

export default async function SectorDetailPage({ params }: PageProps<"/sektorler/[slug]">) {
  const { slug } = await params;
  const data = getSectorPage(slug);

  if (!data) notFound();

  return <SectorPage data={data} />;
}
