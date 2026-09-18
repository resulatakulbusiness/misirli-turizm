import Image from "next/image";
import brandLogo from "../../public/brand/misirli-turizm-logo.png";
import { absoluteUrl, siteUrl } from "@/lib/site-url";
import { siteContact } from "@/lib/site-contact";
import type { SectorPageData } from "@/lib/sector-pages";
import { MobileCta } from "./mobile-cta";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { SiteLink as Link } from "./site-link";
import styles from "./sector-page.module.css";

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

function SectorJsonLd({ data }: { data: SectorPageData }) {
  const canonical = absoluteUrl(`/${data.slug}`);
  const breadcrumbItems = [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: absoluteUrl() },
    ...(data.isHub
      ? []
      : [{ "@type": "ListItem", position: 2, name: "Sektörel Çözümler", item: absoluteUrl("/sektorler") }]),
    {
      "@type": "ListItem",
      position: data.isHub ? 2 : 3,
      name: data.breadcrumb,
      item: canonical,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": data.isHub ? "CollectionPage" : "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: data.seoTitle,
        description: data.seoDescription,
        inLanguage: "tr-TR",
        isPartOf: { "@type": "WebSite", "@id": `${siteUrl}/#website` },
        about: { "@id": `${canonical}#service` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: breadcrumbItems,
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: data.serviceType,
        serviceType: data.serviceType,
        url: canonical,
        description: data.schemaDescription,
        provider: {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          name: "Mısırlı Turizm",
          url: absoluteUrl(),
          telephone: siteContact.phoneE164,
          email: siteContact.email,
        },
        areaServed: { "@type": "City", name: "İstanbul" },
        audience: { "@type": "BusinessAudience", audienceType: data.audience },
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}

export function SectorPage({ data }: { data: SectorPageData }) {
  return (
    <>
      <SectorJsonLd data={data} />
      <SiteHeader />
      <main className={styles.page} data-sector-theme={data.theme}>
        <section className={styles.hero} aria-labelledby="sector-title">
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={`${styles.container} ${styles.heroLayout}`}>
            <div className={styles.heroContent}>
              <nav className={styles.breadcrumbs} aria-label="İçerik yolu">
                <Link href="/">Ana Sayfa</Link>
                <span>/</span>
                {!data.isHub && <><Link href="/sektorler">Sektörel Çözümler</Link><span>/</span></>}
                <span>{data.breadcrumb}</span>
              </nav>
              <span className={styles.eyebrow}>{data.eyebrow}</span>
              <h1 id="sector-title">
                {data.title} <span>{data.accent}</span>
              </h1>
              <p className={styles.heroLead}>
                {data.hero.beforeKeyword}<strong>{data.primaryKeyword}</strong>{data.hero.afterKeyword}
              </p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryButton} href="/iletisim">
                  Operasyonu değerlendirelim <ArrowIcon />
                </Link>
                <a className={styles.secondaryButton} href="#sektor-detayi">Sektör detayları</a>
              </div>
              <div className={styles.heroTags} aria-label="Operasyon başlıkları">
                {data.hero.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>

            <div className={styles.heroVisual}>
              <Image
                src={data.image}
                alt={data.imageAlt}
                priority
                sizes="(max-width: 980px) 94vw, 48vw"
              />
              <span className={styles.brandBadge} aria-hidden="true">
                <Image src={brandLogo} alt="" />
              </span>
              <div className={styles.imageShade} aria-hidden="true" />
              <div className={styles.imageCaption}>
                <span>Mısırlı Turizm · sektörel planlama</span>
                <p>{data.imageCaption}</p>
              </div>
              <div className={styles.livePlan} aria-hidden="true">
                <span>01</span><p>Veriyi oku</p><i />
                <span>02</span><p>Hattı kur</p><i />
                <span>03</span><p>Sahayı izle</p>
              </div>
            </div>
          </div>
        </section>

        <nav className={styles.pageNav} aria-label="Sayfa bölümleri">
          <div className={styles.container}>
            <a href="#sektor-detayi">Sektör dinamiği</a>
            <a href="#operasyon-modeli">Operasyon modeli</a>
            <a href="#karar-alanlari">Karar alanları</a>
            <a href="#satinalma">Kurumsal değerlendirme</a>
            <a href="#sss">SSS</a>
          </div>
        </nav>

        <section className={styles.introSection} id="sektor-detayi" aria-labelledby="sector-intro-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <span>{data.intro.kicker}</span>
                <h2 id="sector-intro-title">{data.intro.title}</h2>
              </div>
              <div className={styles.richCopy}>
                {data.intro.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
            <div className={styles.signalGrid}>
              {data.signals.map((signal, index) => (
                <article key={signal.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{signal.title}</h3>
                  <p>{signal.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.operationsSection} id="operasyon-modeli" aria-labelledby="operations-title">
          <div className={`${styles.container} ${styles.operationsLayout}`}>
            <div className={styles.operationsIntro}>
              <span>{data.operations.kicker}</span>
              <h2 id="operations-title">{data.operations.title}</h2>
              {data.operations.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <Link href="/kurumsal-servis-guzergah-planlama">Güzergâh planlama yaklaşımı <ArrowIcon /></Link>
            </div>
            <ol className={styles.timeline}>
              {data.operations.steps.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{step.title}</h3><p>{step.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.decisionSection} id="karar-alanlari" aria-labelledby="decision-title">
          <div className={styles.container}>
            <div className={styles.decisionHeader}>
              <div><span>{data.decision.kicker}</span><h2 id="decision-title">{data.decision.title}</h2></div>
              <div>{data.decision.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            </div>
            <div className={styles.decisionGrid}>
              {data.decision.items.map((item, index) => (
                <article key={item.title} className={index === 0 ? styles.decisionFeatured : undefined}>
                  <div><span>{item.label}</span><i>{String(index + 1).padStart(2, "0")}</i></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.scenarioSection} aria-labelledby="scenarios-title">
          <div className={`${styles.container} ${styles.scenarioLayout}`}>
            <div className={styles.scenarioTitle}>
              <span>{data.scenarios.kicker}</span>
              <h2 id="scenarios-title">{data.scenarios.title}</h2>
              {data.scenarios.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className={styles.scenarioCards}>
              {data.scenarios.items.map((item) => (
                <article key={item.title}>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.procurementSection} id="satinalma" aria-labelledby="procurement-title">
          <div className={`${styles.container} ${styles.procurementLayout}`}>
            <div className={styles.procurementCopy}>
              <span>{data.procurement.kicker}</span>
              <h2 id="procurement-title">{data.procurement.title}</h2>
              {data.procurement.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className={styles.checklist}>
              {data.procurement.checks.map((item) => (
                <div key={item}><CheckIcon /><span>{item}</span></div>
              ))}
              <Link href="/personel-servisi-fiyatlari">Fiyatı etkileyen unsurları inceleyin <ArrowIcon /></Link>
            </div>
          </div>
        </section>

        <section className={styles.conversionSection} aria-labelledby="conversion-title">
          <div className={`${styles.container} ${styles.conversionCard}`}>
            <div>
              <span>İlk operasyon görüşmesi</span>
              <h2 id="conversion-title">{data.closing.title}</h2>
              <p>{data.closing.beforeKeyword}<strong>{data.primaryKeyword}</strong>{data.closing.afterKeyword}</p>
            </div>
            <div className={styles.conversionActions}>
              <Link href="/iletisim">Bilgileri paylaşın <ArrowIcon /></Link>
              <a href={siteContact.phoneHref}>{siteContact.phoneDisplay}</a>
            </div>
          </div>
        </section>

        <section className={styles.faqSection} id="sss" aria-labelledby="faq-title">
          <div className={`${styles.container} ${styles.faqLayout}`}>
            <div className={styles.faqIntro}>
              <span>Sık sorulan sorular</span>
              <h2 id="faq-title">Karar öncesindeki soruları açıkça yanıtlıyoruz.</h2>
              <p>Her operasyon kurumun gerçek personel, vardiya ve tesis verisiyle değerlendirilir. Hazır rota veya tek kalıp fiyat vaadi verilmez.</p>
            </div>
            <div className={styles.faqList}>
              {data.faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.relatedSection} aria-labelledby="related-title">
          <div className={styles.container}>
            <div className={styles.relatedHeading}>
              <div><span>Bağlantılı içerikler</span><h2 id="related-title">Operasyonu diğer karar alanlarıyla birlikte değerlendirin.</h2></div>
              <Link href="/hizmetlerimiz">Tüm hizmetler <ArrowIcon /></Link>
            </div>
            <div className={styles.relatedGrid}>
              {data.related.map((item) => (
                <Link href={item.href} key={item.href}>
                  <div className={styles.relatedImage}><Image src={item.image} alt="" sizes="(max-width: 720px) 92vw, 30vw" /></div>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <b>İnceleyin <ArrowIcon /></b>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  );
}
