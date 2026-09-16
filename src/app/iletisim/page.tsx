import type { Metadata } from "next";
import Image from "next/image";
import { SiteLink as Link } from "@/components/site-link";
import contactImage from "../../../public/images/hero-kurumsal-ofis-servisi.webp";
import { MobileCta } from "@/components/mobile-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteContact } from "@/lib/site-contact";
import { absoluteUrl, siteUrl } from "@/lib/site-url";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Mısırlı Turizm İletişim | Personel Servisi Teklifi",
  description:
    "Mısırlı Turizm ile telefon, WhatsApp veya e-posta üzerinden iletişime geçin; İstanbul personel servisi ihtiyacınız için ön değerlendirme alın.",
  alternates: { canonical: "/iletisim" },
  openGraph: {
    title: "Mısırlı Turizm İletişim | Personel Servisi Teklifi",
    description:
      "İstanbul kurumsal personel taşımacılığı ihtiyacınızı telefon, WhatsApp veya hızlı teklif formuyla paylaşın.",
    url: "/iletisim",
    siteName: "Mısırlı Turizm",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/hero-kurumsal-ofis-servisi.webp",
        width: 1920,
        height: 1080,
        alt: "Mısırlı Turizm kurumsal personel servisi iletişim",
      },
    ],
  },
};

const faqs = [
  {
    question: "Personel servisi teklifi için hangi bilgiler gerekir?",
    answer:
      "Firma ve tesis konumu, yaklaşık personel sayısı, vardiya giriş–çıkış saatleri, çalışma günleri ve çalışanların genel bölgesel dağılımı ilk değerlendirme için yeterlidir.",
  },
  {
    question: "Mısırlı Turizm’e WhatsApp üzerinden ulaşabilir miyim?",
    answer:
      `Evet. ${siteContact.phoneDisplay} numaralı hat üzerinden WhatsApp mesajı gönderebilir ve operasyon ihtiyacınızı özetleyebilirsiniz.`,
  },
  {
    question: "İstanbul’un farklı ilçelerindeki personel için teklif alınabilir mi?",
    answer:
      "Evet. Personel bölgeleri, tesis yönü ve vardiya saatleri birlikte değerlendirilir; uygulanabilir durak ve hat seçenekleri bu verilere göre hazırlanır.",
  },
  {
    question: "Teklif öncesinde güzergâh bilgisi paylaşmak zorunlu mu?",
    answer:
      "Hazır bir güzergâhınızın olması gerekmez. Personelin genel bölgeleri ve tesis konumu paylaşıldığında ilk rota ve durak değerlendirmesi planlama sürecinde oluşturulur.",
  },
  {
    question: "Mısırlı Turizm adresi nerede?",
    answer:
      `Doğrulanmış iletişim adresimiz ${siteContact.addressDisplay} şeklindedir. Ziyaret öncesinde ${siteContact.phoneDisplay} numarasından randevu ve uygunluk bilgisi alabilirsiniz.`,
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11m-4-4 4 4-4 4" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m7 4 2 4-2 2c1.2 2.8 3.2 4.8 6 6l2-2 4 2-1 3c-.2.7-.9 1.1-1.6 1C9.9 19.1 4.9 14.1 4 7.6 3.9 6.9 4.3 6.2 5 6l2-2Z" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h16v11H9l-5 4V5Z" />
      <path d="M8 10h8M8 13h5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function ContactPage() {
  const canonical = absoluteUrl("/iletisim");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: absoluteUrl() },
          { "@type": "ListItem", position: 2, name: "İletişim", item: canonical },
        ],
      },
      {
        "@type": "ContactPage",
        "@id": `${canonical}#webpage`,
        name: "Mısırlı Turizm İletişim",
        url: canonical,
        about: { "@id": `${siteUrl}/#organization` },
        description:
          "İstanbul kurumsal personel taşımacılığı ve servis operasyon planlama talepleri için Mısırlı Turizm iletişim sayfası.",
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Mısırlı Turizm",
        url: absoluteUrl(),
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
          email: siteContact.email,
          contactType: "sales",
          availableLanguage: "Turkish",
          areaServed: "İstanbul",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: faqs.map((item) => ({
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
        <section className={styles.hero} aria-labelledby="contact-title">
          <div className={styles.heroPattern} aria-hidden="true" />
          <div className={`${styles.container} ${styles.heroLayout}`}>
            <div className={styles.heroContent}>
              <nav className={styles.breadcrumbs} aria-label="İçerik yolu">
                <Link href="/">Ana Sayfa</Link>
                <span>/</span>
                <span>İletişim</span>
              </nav>
              <span className={styles.eyebrow}>Kurumsal teklif ve operasyon görüşmesi</span>
              <h1 id="contact-title">
                Mısırlı Turizm <span>İletişim</span>
              </h1>
              <p>
                <strong>İstanbul personel servisi</strong> ihtiyacınızı; personel sayısı,
                vardiya düzeni, tesis konumu ve çalışan bölgeleriyle birlikte paylaşın.
                İlk görüşmeyi doğrudan doğru operasyon verileri üzerinden ilerletelim.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href={siteContact.phoneHref}>
                  Hemen arayın <PhoneIcon />
                </a>
                <a
                  className={styles.secondaryButton}
                  href={siteContact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp&apos;tan yazın <MessageIcon />
                </a>
              </div>
              <div className={styles.contactSummary}>
                <strong>{siteContact.phoneDisplay}</strong>
                <span>{siteContact.email}</span>
              </div>
            </div>

            <figure className={styles.heroVisual}>
              <Image
                src={contactImage}
                alt="İstanbul’da kurumsal personel servisi operasyonuna hazırlanan servis araçları"
                priority
                sizes="(max-width: 900px) 92vw, 48vw"
              />
              <figcaption>
                <span>İlk görüşme</span>
                <strong>Vardiya · Bölge · Tesis · Personel</strong>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.channels} id="iletisim-kanallari" aria-labelledby="channels-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <span>Doğrudan iletişim</span>
                <h2 id="channels-title">Size uygun kanaldan ulaşın.</h2>
              </div>
              <p>
                Hızlı görüşme için telefon veya WhatsApp’ı; yazılı kurumsal talepler için
                e-posta kanalını kullanabilirsiniz.
              </p>
            </div>
            <div className={styles.channelGrid}>
              <a href={siteContact.phoneHref}>
                <i><PhoneIcon /></i>
                <span>Telefon</span>
                <h3>{siteContact.phoneDisplay}</h3>
                <p>Operasyon ihtiyacınızı doğrudan aktarın.</p>
                <strong>Şimdi arayın <ArrowIcon /></strong>
              </a>
              <a href={siteContact.whatsappHref} target="_blank" rel="noopener noreferrer">
                <i><MessageIcon /></i>
                <span>WhatsApp</span>
                <h3>Mesajınızı gönderin</h3>
                <p>Vardiya, personel ve hizmet bölgesi bilgilerini paylaşın.</p>
                <strong>WhatsApp’ı açın <ArrowIcon /></strong>
              </a>
              <a href={siteContact.emailHref}>
                <i><MailIcon /></i>
                <span>E-posta</span>
                <h3>{siteContact.email}</h3>
                <p>Kurumsal talebinizi ve operasyon özetinizi iletin.</p>
                <strong>E-posta gönderin <ArrowIcon /></strong>
              </a>
            </div>
          </div>
        </section>

        <section className={styles.location} id="konum" aria-labelledby="location-title">
          <div className={`${styles.container} ${styles.locationLayout}`}>
            <div className={styles.locationCopy}>
              <span>Doğrulanmış şirket konumu</span>
              <h2 id="location-title">Mısırlı Turizm Pendik iletişim adresi.</h2>
              <p>
                <strong>{siteContact.addressDisplay}</strong> adresindeki konumumuz kurumsal
                iletişim ve operasyon görüşmeleri için kayıtlıdır. Ziyaret öncesinde
                {" "}<a href={siteContact.phoneHref}>{siteContact.phoneDisplay}</a> numarasından
                randevu ve uygunluk bilgisi almanızı öneririz.
              </p>
              <div className={styles.addressCard}>
                <i><LocationIcon /></i>
                <div><span>Adres</span><strong>{siteContact.addressDisplay}</strong></div>
              </div>
              <a className={styles.mapLink} href={siteContact.mapsSearchHref} target="_blank" rel="noopener noreferrer">
                Google Haritalar&apos;da yol tarifi alın <ArrowIcon />
              </a>
            </div>
            <div className={styles.mapFrame}>
              <iframe
                src={siteContact.mapsEmbedHref}
                title="Mısırlı Turizm Kaynarca Pendik konumu"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className={styles.preparation} aria-labelledby="preparation-title">
          <div className={`${styles.container} ${styles.preparationLayout}`}>
            <div>
              <span>Görüşme öncesi</span>
              <h2 id="preparation-title">Doğru teklif için beş temel bilgi.</h2>
              <p>
                İlk görüşmede aşağıdaki bilgilerin yaklaşık olarak paylaşılması,
                <strong> personel servisi teklifinin</strong> araç sayısından önce gerçek
                operasyon ihtiyacına dayanmasını sağlar.
              </p>
              <a href={siteContact.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp&apos;tan ön bilgi gönderin <ArrowIcon /></a>
            </div>
            <ol>
              <li><span>01</span><strong>Tesis veya işyeri konumu</strong></li>
              <li><span>02</span><strong>Yaklaşık personel sayısı</strong></li>
              <li><span>03</span><strong>Vardiya giriş ve çıkış saatleri</strong></li>
              <li><span>04</span><strong>Personelin genel ikamet bölgeleri</strong></li>
              <li><span>05</span><strong>Hedef başlangıç tarihi ve öncelik</strong></li>
            </ol>
          </div>
        </section>

        <section className={styles.linksSection} aria-labelledby="links-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <span>Görüşme öncesi inceleyin</span>
                <h2 id="links-title">İhtiyacınıza uygun hizmet sayfasına geçin.</h2>
              </div>
              <p>Her hizmet ayrı arama niyeti ve özgün kapsamla hazırlanmıştır.</p>
            </div>
            <div className={styles.linkGrid}>
              <Link href="/personel-tasimaciligi"><span>Ana hizmet</span><strong>Kurumsal personel taşımacılığı</strong><ArrowIcon /></Link>
              <Link href="/vardiyali-personel-servisi"><span>Vardiya</span><strong>Vardiyalı personel servisi</strong><ArrowIcon /></Link>
              <Link href="/fabrika-personel-tasimaciligi"><span>Üretim</span><strong>Fabrika personel taşımacılığı</strong><ArrowIcon /></Link>
              <Link href="/hizmet-bolgeleri"><span>İstanbul</span><strong>Personel servisi hizmet bölgeleri</strong><ArrowIcon /></Link>
            </div>
          </div>
        </section>

        <section className={styles.faqSection} aria-labelledby="contact-faq-title">
          <div className={`${styles.container} ${styles.faqLayout}`}>
            <div>
              <span>İletişim öncesi</span>
              <h2 id="contact-faq-title">Sık sorulan sorular.</h2>
            </div>
            <div className={styles.faqList}>
              {faqs.map((item, index) => (
                <details key={item.question} open={index === 0}>
                  <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}<i /></summary>
                  <p>{item.answer}</p>
                </details>
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
