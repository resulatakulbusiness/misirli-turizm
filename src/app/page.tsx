import { Hero } from "@/components/hero";
import { HomeSections, faqs } from "@/components/home-sections";
import { MobileCta } from "@/components/mobile-cta";
import { SiteHeader } from "@/components/site-header";
import { siteContact } from "@/lib/site-contact";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://misirliturizm.com/#organization",
        name: "Mısırlı Turizm",
        url: "https://misirliturizm.com/",
        logo: "https://misirliturizm.com/brand/misirli-turizm-logo.png",
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
        "@type": "Service",
        "@id": "https://misirliturizm.com/#service",
        name: "Kurumsal Personel Taşımacılığı",
        serviceType: "Kurumsal personel taşımacılığı ve servis operasyon planlama",
        provider: { "@id": "https://misirliturizm.com/#organization" },
        areaServed: {
          "@type": "City",
          name: "İstanbul",
        },
        description:
          "Personel lokasyonları, vardiya saatleri, duraklar, güzergâhlar ve araç kapasitesini birlikte değerlendiren B2B ulaşım planlama hizmeti.",
      },
      {
        "@type": "FAQPage",
        "@id": "https://misirliturizm.com/#faq",
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
