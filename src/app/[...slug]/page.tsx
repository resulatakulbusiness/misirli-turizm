import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { MobileCta } from "@/components/mobile-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteLink as Link } from "@/components/site-link";
import { getLocalCmsPage, listLocalCmsPages } from "@/lib/cms-content";
import { absoluteUrl, siteUrl } from "@/lib/site-url";
import styles from "./cms-page.module.css";

export const dynamicParams = false;

export async function generateStaticParams() {
  const pages = await listLocalCmsPages();
  return pages
    .filter((page) => page.status === "published")
    .map((page) => ({ slug: page.path.split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = await getLocalCmsPage(slug.join("/"));
  if (!page) return {};

  return {
    title: page.metaTitle || page.title,
    description: page.metaDescription || page.excerpt,
    keywords: [page.focusKeyword, ...page.secondaryKeywords].filter(Boolean),
    alternates: { canonical: `/${page.canonicalPath || page.path}` },
    openGraph: {
      title: page.metaTitle || page.title,
      description: page.metaDescription || page.excerpt,
      url: `/${page.path}`,
      type: "article",
      images: page.heroImage ? [{ url: page.heroImage, alt: page.heroImageAlt || page.h1 }] : undefined,
    },
  };
}

function inlineText(value: string): ReactNode[] {
  return value.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((part, index) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>
      : part,
  );
}

export default async function CmsContentPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const page = await getLocalCmsPage(slug.join("/"));
  if (!page) notFound();

  const canonical = absoluteUrl(`/${page.path}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: page.metaTitle || page.title,
        description: page.metaDescription || page.excerpt,
        about: { "@id": `${siteUrl}/#organization` },
        primaryImageOfPage: page.heroImage ? { "@type": "ImageObject", url: absoluteUrl(page.heroImage) } : undefined,
        inLanguage: "tr-TR",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: absoluteUrl() },
          { "@type": "ListItem", position: 2, name: page.title, item: canonical },
        ],
      },
      ...(page.faqs.length ? [{
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }] : []),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <SiteHeader />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <nav aria-label="İçerik yolu"><Link href="/">Ana Sayfa</Link><span>/</span><span>{page.title}</span></nav>
            <span className={styles.type}>{page.contentType === "region" ? "Hizmet Bölgesi" : page.contentType === "service" ? "Kurumsal Hizmet" : "Mısırlı Turizm Rehberi"}</span>
            <h1>{inlineText(page.h1)}</h1>
            <p>{inlineText(page.excerpt)}</p>
            {page.focusKeyword && <strong className={styles.keyword}>{page.focusKeyword}</strong>}
          </div>
          {page.heroImage && (
            <div className={styles.heroImage}>
              <Image src={page.heroImage} alt={page.heroImageAlt || page.h1} fill priority sizes="(max-width: 900px) 100vw, 48vw" />
            </div>
          )}
        </section>

        <div className={styles.content}>
          {page.sections.map((section, index) => (
            <section className={`${styles.section} ${section.image ? styles.withImage : ""}`} key={section.id}>
              <div className={styles.sectionCopy}>
                {section.eyebrow && <span>{section.eyebrow}</span>}
                <h2>{inlineText(section.title)}</h2>
                {section.body.split(/\n{2,}/).filter(Boolean).map((paragraph) => <p key={paragraph}>{inlineText(paragraph)}</p>)}
                {section.bullets.length > 0 && <ul>{section.bullets.map((item) => <li key={item}>{inlineText(item)}</li>)}</ul>}
              </div>
              {section.image && (
                <div className={styles.sectionImage}>
                  <Image src={section.image} alt={section.imageAlt || section.title} fill sizes="(max-width: 860px) 100vw, 42vw" />
                </div>
              )}
              <span className={styles.sectionNumber}>{String(index + 1).padStart(2, "0")}</span>
            </section>
          ))}
        </div>

        {page.faqs.length > 0 && (
          <section className={styles.faq}>
            <div><span>Sık Sorulan Sorular</span><h2>Karar vermeden önce merak edilenler</h2></div>
            <div className={styles.faqList}>
              {page.faqs.map((faq) => <details key={faq.id}><summary>{faq.question}<i>+</i></summary><p>{faq.answer}</p></details>)}
            </div>
          </section>
        )}

        <section className={styles.cta}>
          <div><span>Kurumsal ulaşım planı</span><h2>İhtiyacınızı birlikte netleştirelim.</h2></div>
          <Link href="/iletisim">Bize ulaşın <b>→</b></Link>
        </section>
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  );
}
