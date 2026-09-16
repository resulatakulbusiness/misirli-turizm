import Image, { type StaticImageData } from "next/image";
import { SiteLink as Link } from "./site-link";
import type { ReactNode } from "react";
import { siteContact } from "@/lib/site-contact";
import { absoluteUrl, siteUrl } from "@/lib/site-url";
import { MobileCta } from "./mobile-cta";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import styles from "./service-cluster-page.module.css";

type ContentCard = {
  title: string;
  text: ReactNode;
};

type RelatedPage = {
  href: string;
  label: string;
  title: string;
};

export type ServiceClusterData = {
  slug: string;
  breadcrumb: string;
  eyebrow: string;
  title: string;
  accent: string;
  summary: ReactNode;
  schemaDescription: string;
  serviceType: string;
  image: StaticImageData;
  imageAlt: string;
  imageCaption: string;
  keywords: string[];
  overview: {
    kicker: string;
    title: string;
    lead: ReactNode;
    cards: ContentCard[];
  };
  visual: {
    kicker: string;
    title: string;
    text: ReactNode;
    points: string[];
  };
  process: {
    kicker: string;
    title: string;
    lead: ReactNode;
    steps: ContentCard[];
  };
  decision: {
    kicker: string;
    title: string;
    text: ReactNode;
    items: string[];
  };
  faqs: Array<{ question: string; answer: string }>;
  related: RelatedPage[];
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

export function ServiceClusterPage({ data }: { data: ServiceClusterData }) {
  const canonical = absoluteUrl(`/${data.slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ana Sayfa",
            item: absoluteUrl(),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Personel Taşımacılığı",
            item: absoluteUrl("/personel-tasimaciligi"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: data.breadcrumb,
            item: canonical,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: data.title,
        serviceType: data.serviceType,
        url: canonical,
        provider: {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          name: "Mısırlı Turizm",
          url: absoluteUrl(),
          telephone: siteContact.phoneE164,
          email: siteContact.email,
        },
        areaServed: { "@type": "City", name: "İstanbul" },
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />
      <main>
        <section className={styles.hero} aria-labelledby="cluster-title">
          <div className={styles.heroPattern} aria-hidden="true" />
          <div className={`${styles.container} ${styles.heroLayout}`}>
            <div className={styles.heroContent}>
              <nav className={styles.breadcrumbs} aria-label="İçerik yolu">
                <Link href="/">Ana Sayfa</Link>
                <span>/</span>
                <Link href="/personel-tasimaciligi">Personel Taşımacılığı</Link>
                <span>/</span>
                <span>{data.breadcrumb}</span>
              </nav>
              <span className={styles.eyebrow}>{data.eyebrow}</span>
              <h1 id="cluster-title">
                {data.title} <span>{data.accent}</span>
              </h1>
              <div className={styles.heroSummary}>{data.summary}</div>
              <div className={styles.heroActions}>
                <Link className={styles.primaryButton} href="/iletisim">
                  Hızlı ön değerlendirme <ArrowIcon />
                </Link>
                <a className={styles.secondaryButton} href="#detaylar">
                  Hizmet detayları
                </a>
              </div>
              <div className={styles.keywordList} aria-label="Sayfanın ana konu başlıkları">
                {data.keywords.map((keyword) => <strong key={keyword}>{keyword}</strong>)}
              </div>
            </div>

            <figure className={styles.heroVisual}>
              <Image
                src={data.image}
                alt={data.imageAlt}
                priority
                sizes="(max-width: 920px) 92vw, 48vw"
              />
              <figcaption>
                <span>Mısırlı Turizm</span>
                <strong>{data.imageCaption}</strong>
              </figcaption>
              <div className={styles.visualBadge} aria-hidden="true">
                <i /> <span>Planla</span><b /><i /> <span>Uygula</span><b /><i /> <span>İyileştir</span>
              </div>
            </figure>
          </div>
        </section>

        <nav className={styles.pageNav} aria-label="Sayfa bölümleri">
          <div className={styles.container}>
            <a href="#detaylar">Hizmet kapsamı</a>
            <a href="#planlama">Planlama süreci</a>
            <a href="#karar-noktalari">Karar noktaları</a>
            <a href="#sik-sorulanlar">Sık sorulanlar</a>
            <a href="#ilgili-hizmetler">İlgili hizmetler</a>
          </div>
        </nav>

        <section className={styles.overviewSection} id="detaylar" aria-labelledby="overview-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <span>{data.overview.kicker}</span>
                <h2 id="overview-title">{data.overview.title}</h2>
              </div>
              <div className={styles.leadCopy}>{data.overview.lead}</div>
            </div>
            <div className={styles.cardGrid}>
              {data.overview.cards.map((card, index) => (
                <article key={card.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{card.title}</h3>
                  <div>{card.text}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.visualSection} aria-labelledby="visual-title">
          <div className={`${styles.container} ${styles.visualLayout}`}>
            <div className={styles.visualImage}>
              <Image
                src={data.image}
                alt=""
                sizes="(max-width: 760px) 92vw, 52vw"
              />
              <div className={styles.visualRoute} aria-hidden="true">
                <span>Personel</span><i /><span>Durak</span><i /><span>Tesis</span>
              </div>
            </div>
            <div className={styles.visualCopy}>
              <span>{data.visual.kicker}</span>
              <h2 id="visual-title">{data.visual.title}</h2>
              <div>{data.visual.text}</div>
              <ul>
                {data.visual.points.map((point) => (
                  <li key={point}><CheckIcon /> {point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.processSection} id="planlama" aria-labelledby="process-title">
          <div className={`${styles.container} ${styles.processLayout}`}>
            <div className={styles.processIntro}>
              <span>{data.process.kicker}</span>
              <h2 id="process-title">{data.process.title}</h2>
              <div>{data.process.lead}</div>
              <Link href="/iletisim">Operasyonunuzu anlatın <ArrowIcon /></Link>
            </div>
            <ol className={styles.steps}>
              {data.process.steps.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <div>{step.text}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.decisionSection} id="karar-noktalari" aria-labelledby="decision-title">
          <div className={`${styles.container} ${styles.decisionLayout}`}>
            <div>
              <span>{data.decision.kicker}</span>
              <h2 id="decision-title">{data.decision.title}</h2>
              <div className={styles.decisionText}>{data.decision.text}</div>
            </div>
            <ul>
              {data.decision.items.map((item, index) => (
                <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.faqSection} id="sik-sorulanlar" aria-labelledby="faq-title">
          <div className={`${styles.container} ${styles.faqLayout}`}>
            <div className={styles.faqIntro}>
              <span>Karar öncesi sorular</span>
              <h2 id="faq-title">{data.breadcrumb} hakkında sık sorulanlar.</h2>
              <p>Teklif ve planlama öncesinde en sık karşılaşılan operasyon sorularını açık biçimde yanıtladık.</p>
            </div>
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

        <section className={styles.relatedSection} id="ilgili-hizmetler" aria-labelledby="related-title">
          <div className={styles.container}>
            <div className={styles.relatedHeading}>
              <span>İç link haritası</span>
              <h2 id="related-title">Operasyonun ilgili parçalarını birlikte inceleyin.</h2>
            </div>
            <div className={styles.relatedGrid}>
              {data.related.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <ArrowIcon />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.finalCta} aria-labelledby="cluster-cta-title">
          <div className={`${styles.container} ${styles.finalCtaInner}`}>
            <div>
              <span>İlk adım: doğru veriler</span>
              <h2 id="cluster-cta-title">İhtiyacınızı araç listesinden önce operasyon planına dönüştürelim.</h2>
            </div>
            <Link href="/iletisim">Hızlı ön değerlendirme <ArrowIcon /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  );
}
