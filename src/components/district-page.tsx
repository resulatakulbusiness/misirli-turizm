import Image, { type StaticImageData } from "next/image";
import brandLogo from "../../public/brand/misirli-turizm-logo.png";
import { SiteLink as Link } from "./site-link";
import type { ReactNode } from "react";
import { siteContact } from "@/lib/site-contact";
import { absoluteUrl, siteUrl } from "@/lib/site-url";
import { MobileCta } from "./mobile-cta";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import styles from "./district-page.module.css";

type ContentItem = {
  title: string;
  text: ReactNode;
};

type ZoneItem = ContentItem & {
  label: string;
  tags: string[];
};

export type DistrictPageData = {
  slug: string;
  district: string;
  province?: string;
  parentRegion: { name: string; href: string };
  eyebrow: string;
  title: string;
  accent: string;
  summary: ReactNode;
  schemaDescription: string;
  image: StaticImageData;
  imageAlt: string;
  imageCaption: string;
  keywords: string[];
  officialContext: {
    sourceHref: string;
    sourceLabel: string;
    title: string;
    text: ReactNode;
    metrics: Array<{ value: string; label: string }>;
  };
  localPlanning: {
    kicker: string;
    title: string;
    lead: ReactNode;
    cards: ContentItem[];
  };
  zones: {
    kicker: string;
    title: string;
    lead: ReactNode;
    items: ZoneItem[];
  };
  strategy: {
    kicker: string;
    title: string;
    text: ReactNode;
    points: string[];
  };
  process: {
    kicker: string;
    title: string;
    lead: ReactNode;
    steps: ContentItem[];
  };
  pricing: {
    kicker: string;
    title: string;
    text: ReactNode;
    factors: string[];
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

export function DistrictPage({ data }: { data: DistrictPageData }) {
  const canonical = absoluteUrl(`/hizmet-bolgeleri/${data.slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: absoluteUrl() },
          { "@type": "ListItem", position: 2, name: "Hizmet Bölgeleri", item: absoluteUrl("/hizmet-bolgeleri") },
          { "@type": "ListItem", position: 3, name: data.parentRegion.name, item: absoluteUrl(data.parentRegion.href) },
          { "@type": "ListItem", position: 4, name: `${data.district} Personel Servisi`, item: canonical },
        ],
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: `${data.district} Personel Servisi`,
        serviceType: "Kurumsal personel taşımacılığı ve servis güzergâh planlama",
        url: canonical,
        provider: {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          name: "Mısırlı Turizm",
          url: absoluteUrl(),
          telephone: siteContact.phoneE164,
          email: siteContact.email,
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: `${data.district}, ${data.province ?? "İstanbul"}`,
        },
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
        <section className={styles.hero} aria-labelledby="district-title">
          <div className={styles.heroPattern} aria-hidden="true" />
          <div className={`${styles.container} ${styles.heroLayout}`}>
            <div className={styles.heroContent}>
              <nav className={styles.breadcrumbs} aria-label="İçerik yolu">
                <Link href="/">Ana Sayfa</Link>
                <span>/</span>
                <Link href="/hizmet-bolgeleri">Hizmet Bölgeleri</Link>
                <span>/</span>
                <Link href={data.parentRegion.href}>{data.parentRegion.name}</Link>
                <span>/</span>
                <span>{data.district}</span>
              </nav>
              <span className={styles.eyebrow}>{data.eyebrow}</span>
              <h1 id="district-title">
                {data.title} <span>{data.accent}</span>
              </h1>
              <div className={styles.heroSummary}>{data.summary}</div>
              <div className={styles.heroActions}>
                <a
                  className={styles.primaryButton}
                  href={siteContact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp&apos;tan teklif isteyin <ArrowIcon />
                </a>
                <a className={styles.secondaryButton} href={siteContact.phoneHref}>
                  {siteContact.phoneDisplay}
                </a>
              </div>
              <div className={styles.keywordList} aria-label="Sayfanın ana konu başlıkları">
                {data.keywords.map((keyword) => <strong key={keyword}>{keyword}</strong>)}
              </div>
            </div>

            <figure className={styles.heroVisual}>
              <Image src={data.image} alt={data.imageAlt} priority sizes="(max-width: 960px) 92vw, 47vw" />
              <span className={styles.brandBadge} aria-hidden="true">
                <Image src={brandLogo} alt="" />
              </span>
              <figcaption>
                <span>{data.district} · {data.province ?? "İstanbul"}</span>
                <strong>{data.imageCaption}</strong>
              </figcaption>
              <div className={styles.routeBadge} aria-hidden="true">
                <span>Personel</span><i /><span>Durak</span><i /><span>Tesis</span>
              </div>
            </figure>
          </div>
        </section>

        <section className={styles.contextRail} aria-labelledby="context-title">
          <div className={`${styles.container} ${styles.contextLayout}`}>
            <div>
              <span>Resmî bölge bağlamı</span>
              <h2 id="context-title">{data.officialContext.title}</h2>
              <div>{data.officialContext.text}</div>
              <a href={data.officialContext.sourceHref} target="_blank" rel="noopener noreferrer">
                {data.officialContext.sourceLabel} <ArrowIcon />
              </a>
            </div>
            <dl>
              {data.officialContext.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt>{metric.value}</dt>
                  <dd>{metric.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className={styles.planningSection} id="yerel-planlama" aria-labelledby="planning-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <span>{data.localPlanning.kicker}</span>
                <h2 id="planning-title">{data.localPlanning.title}</h2>
              </div>
              <div>{data.localPlanning.lead}</div>
            </div>
            <div className={styles.planningGrid}>
              {data.localPlanning.cards.map((card, index) => (
                <article key={card.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{card.title}</h3>
                  <div>{card.text}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.zoneSection} id="bolge-kumeleri" aria-labelledby="zones-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <span>{data.zones.kicker}</span>
                <h2 id="zones-title">{data.zones.title}</h2>
              </div>
              <div>{data.zones.lead}</div>
            </div>
            <div className={styles.zoneGrid}>
              {data.zones.items.map((zone) => (
                <article key={zone.title}>
                  <span>{zone.label}</span>
                  <h3>{zone.title}</h3>
                  <div>{zone.text}</div>
                  <ul>{zone.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.strategySection} aria-labelledby="strategy-title">
          <div className={`${styles.container} ${styles.strategyLayout}`}>
            <div className={styles.strategyVisual}>
              <Image src={data.image} alt="" sizes="(max-width: 780px) 92vw, 48vw" />
              <div aria-hidden="true">
                <span>TEM</span><i /><span>İOSB</span><i /><span>Vardiya</span>
              </div>
            </div>
            <div className={styles.strategyCopy}>
              <span>{data.strategy.kicker}</span>
              <h2 id="strategy-title">{data.strategy.title}</h2>
              <div>{data.strategy.text}</div>
              <ul>
                {data.strategy.points.map((point) => <li key={point}><CheckIcon />{point}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.processSection} id="planlama-sureci" aria-labelledby="process-title">
          <div className={`${styles.container} ${styles.processLayout}`}>
            <div className={styles.processIntro}>
              <span>{data.process.kicker}</span>
              <h2 id="process-title">{data.process.title}</h2>
              <div>{data.process.lead}</div>
              <Link href="/kurumsal-servis-guzergah-planlama">Güzergâh planlamayı inceleyin <ArrowIcon /></Link>
            </div>
            <ol>
              {data.process.steps.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{step.title}</h3><div>{step.text}</div></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.pricingSection} aria-labelledby="pricing-title">
          <div className={`${styles.container} ${styles.pricingLayout}`}>
            <div>
              <span>{data.pricing.kicker}</span>
              <h2 id="pricing-title">{data.pricing.title}</h2>
              <div>{data.pricing.text}</div>
              <Link href="/personel-servisi-fiyatlari">Fiyatlandırma değişkenlerini görün <ArrowIcon /></Link>
            </div>
            <ul>
              {data.pricing.factors.map((factor, index) => (
                <li key={factor}><span>{String(index + 1).padStart(2, "0")}</span>{factor}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.relatedSection} aria-labelledby="related-title">
          <div className={styles.container}>
            <div className={styles.relatedHeading}>
              <span>Bağlamsal iç linkler</span>
              <h2 id="related-title">{data.district} operasyonunun ilgili hizmetlerini birlikte inceleyin.</h2>
            </div>
            <div className={styles.relatedGrid}>
              {data.related.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span>{item.label}</span><h3>{item.title}</h3><ArrowIcon />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.faqSection} aria-labelledby="faq-title">
          <div className={`${styles.container} ${styles.faqLayout}`}>
            <div className={styles.faqIntro}>
              <span>Yerel arama soruları</span>
              <h2 id="faq-title">{data.district} personel servisi hakkında sık sorulanlar.</h2>
              <p>Teklif ve rota değerlendirmesi öncesinde en sık sorulan yerel operasyon sorularını yanıtladık.</p>
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

        <section className={styles.finalCta} aria-labelledby="district-cta-title">
          <div className={`${styles.container} ${styles.finalCtaInner}`}>
            <div>
              <span>{data.district} operasyonu</span>
              <h2 id="district-cta-title">Personel bölgelerinizi vardiya ve tesis yönüyle birlikte değerlendirelim.</h2>
            </div>
            <a href={siteContact.whatsappHref} target="_blank" rel="noopener noreferrer">
              WhatsApp&apos;tan bilgi alın <ArrowIcon />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  );
}
