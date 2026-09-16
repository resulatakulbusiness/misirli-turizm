import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { siteContact } from "@/lib/site-contact";
import { MobileCta } from "./mobile-cta";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import styles from "./region-landing-page.module.css";

type RegionCard = {
  eyebrow: string;
  title: string;
  text: ReactNode;
  tags: string[];
  href?: string;
};

type TextCard = {
  title: string;
  text: ReactNode;
};

export type RegionLandingPageData = {
  slug: string;
  side: string;
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
  overview: {
    kicker: string;
    title: string;
    text: ReactNode;
    notes: string[];
  };
  corridors: {
    kicker: string;
    title: string;
    lead: ReactNode;
    items: RegionCard[];
  };
  route: {
    kicker: string;
    title: string;
    text: ReactNode;
    nodes: string[];
  };
  planning: {
    kicker: string;
    title: string;
    lead: ReactNode;
    steps: TextCard[];
  };
  useCases: {
    kicker: string;
    title: string;
    text: ReactNode;
    items: string[];
  };
  faqs: Array<{ question: string; answer: string }>;
  related: Array<{ href: string; label: string; title: string }>;
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11m-4-4 4 4-4 4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m4 10 4 4 8-9" />
    </svg>
  );
}

export function RegionLandingPage({ data }: { data: RegionLandingPageData }) {
  const canonical = `https://misirliturizm.com/hizmet-bolgeleri/${data.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://misirliturizm.com/" },
          { "@type": "ListItem", position: 2, name: "Hizmet Bölgeleri", item: "https://misirliturizm.com/hizmet-bolgeleri" },
          { "@type": "ListItem", position: 3, name: data.title, item: canonical },
        ],
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: data.title,
        serviceType: "Kurumsal personel taşımacılığı ve servis güzergâh planlama",
        url: canonical,
        provider: {
          "@type": "Organization",
          "@id": "https://misirliturizm.com/#organization",
          name: "Mısırlı Turizm",
          url: "https://misirliturizm.com/",
          telephone: siteContact.phoneE164,
          email: siteContact.email,
        },
        areaServed: { "@type": "AdministrativeArea", name: `${data.side}, İstanbul` },
        audience: { "@type": "BusinessAudience", audienceType: "İşletmeler" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />
      <main>
        <section className={styles.hero} aria-labelledby="region-title">
          <div className={styles.heroPattern} aria-hidden="true" />
          <div className={`${styles.container} ${styles.heroLayout}`}>
            <div className={styles.heroCopy}>
              <nav className={styles.breadcrumbs} aria-label="İçerik yolu">
                <Link href="/">Ana Sayfa</Link><span>/</span>
                <Link href="/hizmet-bolgeleri">Hizmet Bölgeleri</Link><span>/</span>
                <span>{data.side}</span>
              </nav>
              <span className={styles.eyebrow}>{data.eyebrow}</span>
              <h1 id="region-title">{data.title} <span>{data.accent}</span></h1>
              <div className={styles.heroSummary}>{data.summary}</div>
              <div className={styles.heroActions}>
                <Link href="/iletisim">Bölgeniz için teklif alın <ArrowIcon /></Link>
                <a href={siteContact.phoneHref}>{siteContact.phoneDisplay}</a>
              </div>
              <div className={styles.keywordRow} aria-label="Sayfanın ana konuları">
                {data.keywords.map((keyword) => <strong key={keyword}>{keyword}</strong>)}
              </div>
            </div>
            <figure className={styles.heroVisual}>
              <Image src={data.image} alt={data.imageAlt} priority sizes="(max-width: 960px) 92vw, 48vw" />
              <figcaption><span>{data.side}</span><strong>Personel · Vardiya · Durak · Tesis</strong></figcaption>
              <div className={styles.liveRoute} aria-hidden="true"><i /><i /><i /><i /></div>
            </figure>
          </div>
        </section>

        <section className={styles.signalRail} aria-label="Planlama değişkenleri">
          <div className={styles.container}>
            {[
              ["01", "Personel kümeleri"],
              ["02", "Vardiya pencereleri"],
              ["03", "Ana arter yönü"],
              ["04", "Araç kapasitesi"],
            ].map(([number, label]) => <div key={number}><span>{number}</span><strong>{label}</strong></div>)}
          </div>
        </section>

        <section className={styles.overview} aria-labelledby="overview-title">
          <div className={`${styles.container} ${styles.overviewLayout}`}>
            <div className={styles.sectionTitle}>
              <span>{data.overview.kicker}</span>
              <h2 id="overview-title">{data.overview.title}</h2>
            </div>
            <div className={styles.overviewCopy}>
              <div>{data.overview.text}</div>
              <ul>{data.overview.notes.map((note) => <li key={note}><CheckIcon />{note}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className={styles.corridors} aria-labelledby="corridors-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div><span>{data.corridors.kicker}</span><h2 id="corridors-title">{data.corridors.title}</h2></div>
              <div>{data.corridors.lead}</div>
            </div>
            <div className={styles.corridorGrid}>
              {data.corridors.items.map((item, index) => {
                const content = (
                  <>
                    <span>{item.eyebrow} · {String(index + 1).padStart(2, "0")}</span>
                    <h3>{item.title}</h3>
                    <div>{item.text}</div>
                    <ul>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                    {item.href ? <strong>İlçe sayfasını inceleyin <ArrowIcon /></strong> : null}
                  </>
                );
                return item.href ? <Link key={item.title} href={item.href}>{content}</Link> : <article key={item.title}>{content}</article>;
              })}
            </div>
          </div>
        </section>

        <section className={styles.routeSection} aria-labelledby="route-title">
          <div className={`${styles.container} ${styles.routeLayout}`}>
            <div className={styles.routeCopy}>
              <span>{data.route.kicker}</span>
              <h2 id="route-title">{data.route.title}</h2>
              <div>{data.route.text}</div>
              <Link href="/kurumsal-servis-guzergah-planlama">Güzergâh planlama yaklaşımımız <ArrowIcon /></Link>
            </div>
            <div className={styles.routeBoard} aria-label={`${data.side} personel servisi rota modeli`}>
              <div className={styles.routeLine} aria-hidden="true"><i /><i /><i /></div>
              {data.route.nodes.map((node, index) => (
                <div key={node}><span>{String(index + 1).padStart(2, "0")}</span><strong>{node}</strong></div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.planning} aria-labelledby="planning-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div><span>{data.planning.kicker}</span><h2 id="planning-title">{data.planning.title}</h2></div>
              <div>{data.planning.lead}</div>
            </div>
            <ol className={styles.stepGrid}>
              {data.planning.steps.map((step, index) => (
                <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><div>{step.text}</div></li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.useCases} aria-labelledby="use-cases-title">
          <div className={`${styles.container} ${styles.useCaseLayout}`}>
            <figure><Image src={data.secondaryImage} alt={data.secondaryImageAlt} sizes="(max-width: 860px) 92vw, 48vw" /></figure>
            <div>
              <span>{data.useCases.kicker}</span>
              <h2 id="use-cases-title">{data.useCases.title}</h2>
              <div>{data.useCases.text}</div>
              <ul>{data.useCases.items.map((item) => <li key={item}><CheckIcon />{item}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className={styles.related} aria-labelledby="related-title">
          <div className={styles.container}>
            <div className={styles.relatedHeading}><span>İç link mimarisi</span><h2 id="related-title">Bölge planını ilgili hizmetlerle birlikte değerlendirin.</h2></div>
            <div className={styles.relatedGrid}>
              {data.related.map((item) => <Link key={item.href} href={item.href}><span>{item.label}</span><strong>{item.title}</strong><ArrowIcon /></Link>)}
            </div>
          </div>
        </section>

        <section className={styles.faq} aria-labelledby="region-faq-title">
          <div className={`${styles.container} ${styles.faqLayout}`}>
            <div><span>SEO + GEO soru kümesi</span><h2 id="region-faq-title">{data.side} personel servisi hakkında sık sorulanlar.</h2><p>Her soru görünür içerikle yanıtlanır ve yapılandırılmış veride aynı cevapla eşleşir.</p></div>
            <div className={styles.faqList}>
              {data.faqs.map((item, index) => (
                <details key={item.question} open={index === 0}>
                  <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}<i /></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.finalCta}>
          <div className={`${styles.container} ${styles.finalCtaInner}`}>
            <div><span>{data.side} operasyonu</span><h2>Personel bölgelerinizi vardiya ve tesis yönüyle birlikte planlayalım.</h2></div>
            <Link href="/iletisim">Mısırlı Turizm’e ulaşın <ArrowIcon /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  );
}
