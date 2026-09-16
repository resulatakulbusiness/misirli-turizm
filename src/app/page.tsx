import { Hero } from "@/components/hero";
import { HomeSections, faqs } from "@/components/home-sections";
import { MobileCta } from "@/components/mobile-cta";
import { SiteHeader } from "@/components/site-header";
import { siteContact } from "@/lib/site-contact";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Mısırlı Turizm",
        url: absoluteUrl(),
        logo: absoluteUrl("/brand/misirli-turizm-logo.png"),
        telephone: siteContact.phoneE164,
        email: siteContact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteContact.streetAddress,
          addressLocality: siteContact.addressLocality,
          addressRegion: siteContact.addressRegion,
          addressCountry: siteContact.postalCountry,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteContact.phoneE164,
          contactType: "customer service",
          availableLanguage: "Turkish",
          areaServed: "TR",
        },
        description:
          "İstanbul'daki işletmeler için personel lokasyonu, vardiya ve güzergâh planlamasını birlikte ele alan kurumsal ulaşım çözüm ortağı.",
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: absoluteUrl(),
        name: "Mısırlı Turizm",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "tr-TR",
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: absoluteUrl(),
        name: "Mısırlı Turizm | Planlı Kurumsal Personel Ulaşımı",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl("/images/hero-personel-tasimaciligi.webp"),
        },
        inLanguage: "tr-TR",
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/#service`,
        name: "Kurumsal Personel Taşımacılığı",
        serviceType: "Kurumsal personel taşımacılığı ve servis operasyon planlama",
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: {
          "@type": "City",
          name: "İstanbul",
        },
        description:
          "Personel lokasyonları, vardiya saatleri, duraklar, güzergâhlar ve araç kapasitesini birlikte değerlendiren B2B ulaşım planlama hizmeti.",
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
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
      <SiteHeader overlay />
      <main>
        <Hero />
        <HomeSections />
      </main>
      <MobileCta />
    </>
  );
}
