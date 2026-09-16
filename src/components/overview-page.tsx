import Image, { type StaticImageData } from "next/image";
import { SiteLink as Link } from "./site-link";
import type { ReactNode } from "react";
import { siteContact } from "@/lib/site-contact";
import { MobileCta } from "./mobile-cta";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import styles from "./overview-page.module.css";

type OverviewItem = {
  label: string;
  title: string;
  text: ReactNode;
  href?: string;
};

export type OverviewPageData = {
  slug: string;
  schemaType: "AboutPage" | "CollectionPage";
  breadcrumb: string;
  eyebrow: string;
  title: string;
  accent: string;
  summary: ReactNode;
  image: StaticImageData;
  imageAlt: string;
  secondaryImage: StaticImageData;
  secondaryImageAlt: string;
  keywords: string[];
  schemaDescription: string;
  intro: { kicker: string; title: string; text: ReactNode; notes: string[] };
  items: { kicker: string; title: string; lead: ReactNode; cards: OverviewItem[] };
  process: { kicker: string; title: string; text: ReactNode; steps: OverviewItem[] };
  focus: { kicker: string; title: string; text: ReactNode; points: string[] };
  faqs: Array<{ question: string; answer: string }>;
};

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" /></svg>;
}

function CheckIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-9" /></svg>;
}

export function OverviewPage({ data }: { data: OverviewPageData }) {
  const canonical = `https://misirliturizm.com/${data.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://misirliturizm.com/" },
          { "@type": "ListItem", position: 2, name: data.breadcrumb, item: canonical },
        ],
      },
      {
        "@type": data.schemaType,
        "@id": `${canonical}#webpage`,
        name: data.title,
        url: canonical,
        about: { "@id": "https://misirliturizm.com/#organization" },
        description: data.schemaDescription,
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: data.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <SiteHeader />
      <main>
        <section className={styles.hero} aria-labelledby="overview-page-title">
          <div className={styles.pattern} aria-hidden="true" />
          <div className={`${styles.container} ${styles.heroLayout}`}>
            <div className={styles.heroCopy}>
              <nav className={styles.breadcrumbs} aria-label="İçerik yolu"><Link href="/">Ana Sayfa</Link><span>/</span><span>{data.breadcrumb}</span></nav>
              <span className={styles.eyebrow}>{data.eyebrow}</span>
              <h1 id="overview-page-title">{data.title} <span>{data.accent}</span></h1>
              <div className={styles.summary}>{data.summary}</div>
              <div className={styles.actions}><Link href="/iletisim">Kurumsal görüşme başlatın <ArrowIcon /></Link><a href={siteContact.phoneHref}>{siteContact.phoneDisplay}</a></div>
              <div className={styles.keywords}>{data.keywords.map((keyword) => <strong key={keyword}>{keyword}</strong>)}</div>
            </div>
            <div className={styles.visualGrid}>
              <figure><Image src={data.image} alt={data.imageAlt} priority sizes="(max-width: 900px) 88vw, 41vw" /></figure>
              <figure><Image src={data.secondaryImage} alt={data.secondaryImageAlt} sizes="(max-width: 900px) 42vw, 20vw" /></figure>
              <div><span>Mısırlı yaklaşımı</span><strong>Veri → Plan → Saha → Kontrol</strong></div>
            </div>
          </div>
        </section>

        <section className={styles.intro} aria-labelledby="overview-intro-title">
          <div className={`${styles.container} ${styles.introLayout}`}>
            <div><span>{data.intro.kicker}</span><h2 id="overview-intro-title">{data.intro.title}</h2></div>
            <div className={styles.introCopy}><div>{data.intro.text}</div><ul>{data.intro.notes.map((note) => <li key={note}><CheckIcon />{note}</li>)}</ul></div>
          </div>
        </section>

        <section className={styles.items} aria-labelledby="overview-items-title">
          <div className={styles.container}>
            <div className={styles.heading}><div><span>{data.items.kicker}</span><h2 id="overview-items-title">{data.items.title}</h2></div><div>{data.items.lead}</div></div>
            <div className={styles.cardGrid}>
              {data.items.cards.map((item, index) => {
                const content = <><span>{item.label} · {String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><div>{item.text}</div>{item.href ? <strong>Sayfayı inceleyin <ArrowIcon /></strong> : null}</>;
                return item.href ? <Link key={item.title} href={item.href}>{content}</Link> : <article key={item.title}>{content}</article>;
              })}
            </div>
          </div>
        </section>

        <section className={styles.process} aria-labelledby="overview-process-title">
          <div className={`${styles.container} ${styles.processLayout}`}>
            <div className={styles.processIntro}><span>{data.process.kicker}</span><h2 id="overview-process-title">{data.process.title}</h2><div>{data.process.text}</div><Link href="/iletisim">İhtiyacınızı paylaşın <ArrowIcon /></Link></div>
            <ol>{data.process.steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><div>{step.text}</div></div></li>)}</ol>
          </div>
        </section>

        <section className={styles.focus} aria-labelledby="overview-focus-title">
          <div className={`${styles.container} ${styles.focusLayout}`}>
            <figure><Image src={data.secondaryImage} alt={data.secondaryImageAlt} sizes="(max-width: 860px) 92vw, 48vw" /></figure>
            <div><span>{data.focus.kicker}</span><h2 id="overview-focus-title">{data.focus.title}</h2><div>{data.focus.text}</div><ul>{data.focus.points.map((point) => <li key={point}><CheckIcon />{point}</li>)}</ul></div>
          </div>
        </section>

        <section className={styles.faq} aria-labelledby="overview-faq-title">
          <div className={`${styles.container} ${styles.faqLayout}`}>
            <div><span>İnteraktif SSS</span><h2 id="overview-faq-title">Merak edilenleri açık ve ölçülü yanıtlıyoruz.</h2><p>Sorulara dokunarak cevapları açabilir, ilgili hizmete veya iletişim kanalına geçebilirsiniz.</p></div>
            <div className={styles.faqList}>{data.faqs.map((item, index) => <details key={item.question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}<i /></summary><p>{item.answer}</p></details>)}</div>
          </div>
        </section>

        <section className={styles.finalCta}><div className={`${styles.container} ${styles.finalCtaInner}`}><div><span>Mısırlı Turizm</span><h2>Kurumsal ulaşım ihtiyacınızı birlikte netleştirelim.</h2></div><Link href="/iletisim">Bize ulaşın <ArrowIcon /></Link></div></section>
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  );
}
