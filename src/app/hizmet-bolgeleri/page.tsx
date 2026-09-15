import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import factoryImage from "../../../public/images/hero-vardiyali-fabrika-servisi.webp";
import officeImage from "../../../public/images/hero-kurumsal-ofis-servisi.webp";
import personnelImage from "../../../public/images/hero-personel-tasimaciligi.webp";
import { MobileCta } from "@/components/mobile-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import styles from "./regions.module.css";

export const metadata: Metadata = {
  title: "İstanbul Personel Servisi Hizmet Bölgeleri | Mısırlı",
  description:
    "İstanbul Avrupa ve Anadolu Yakası personel servisi planlama bölgelerini; tesis yönü, vardiya, durak ve çalışan dağılımıyla birlikte inceleyin.",
  alternates: { canonical: "/hizmet-bolgeleri" },
  openGraph: {
    title: "İstanbul Personel Servisi Hizmet Bölgeleri | Mısırlı",
    description: "Avrupa ve Anadolu Yakası için bölge, vardiya ve güzergâh odaklı personel servisi planlama yaklaşımı.",
    url: "/hizmet-bolgeleri",
    images: [{
      url: "/images/hero-kurumsal-ofis-servisi.webp",
      width: 1920,
      height: 1080,
      alt: "İstanbul personel servisi hizmet bölgeleri",
    }],
  },
};

const europeClusters = [
  {
    title: "Başakşehir ve İkitelli",
    text: "Organize sanayi, üretim ve depo yoğunluğunda vardiya saati ile tesis giriş yönünün birlikte değerlendirilmesi gerekir.",
    tags: ["Başakşehir", "İkitelli", "Mahmutbey"],
  },
  {
    title: "Esenyurt ve Kıraç",
    text: "Çalışan yoğunluğu, TEM bağlantıları ve sanayi bölgelerine giriş trafiği hatların tek tek karşılaştırılmasını gerektirir.",
    tags: ["Esenyurt", "Kıraç", "Haramidere"],
  },
  {
    title: "Beylikdüzü ve Avcılar",
    text: "E-5 yönü, metrobüs bağlantıları ve sahil–kuzey aksı arasındaki personel dağılımı durak kararını değiştirir.",
    tags: ["Beylikdüzü", "Avcılar", "Ambarlı"],
  },
  {
    title: "Küçükçekmece ve Halkalı",
    text: "Yoğun konut bölgeleri ile iş merkezleri arasındaki hareket, vardiya başlangıcına göre farklı rota senaryoları oluşturabilir.",
    tags: ["Küçükçekmece", "Halkalı", "Sefaköy"],
  },
  {
    title: "Büyükçekmece ve Hadımköy",
    text: "Uzun mesafe, otoyol bağlantısı ve tesislerin dağınık konumu nedeniyle süre ve kapasite birlikte planlanır.",
    tags: ["Büyükçekmece", "Hadımköy", "Arnavutköy"],
  },
  {
    title: "Silivri ve Çatalca",
    text: "Geniş coğrafyada durak sayısı ile ana arter erişimi dengelenerek sürdürülebilir servis hatları değerlendirilir.",
    tags: ["Silivri", "Çatalca", "Selimpaşa"],
  },
];

const asiaClusters = [
  {
    title: "Tuzla ve sanayi aksı",
    text: "Tersane, organize sanayi ve üretim tesislerinde vardiya değişim trafiği servis süresinin önemli bir parçasıdır.",
    tags: ["Tuzla", "Orhanlı", "Aydınlı"],
  },
  {
    title: "Pendik ve Kurtköy",
    text: "TEM, E-5 ve havaalanı çevresindeki hareketlilik, çalışan noktalarının tesis yönüne göre kümelenmesini gerektirir.",
    tags: ["Pendik", "Kurtköy", "Kaynarca"],
  },
  {
    title: "Kartal ve Maltepe",
    text: "Sahil ve üst bölge bağlantılarında durak erişimi ile ana arter yönü aynı rota içinde dengelenir.",
    tags: ["Kartal", "Maltepe", "Yakacık"],
  },
  {
    title: "Sancaktepe ve Sultanbeyli",
    text: "Dağınık yerleşim, bağlantı yolları ve yoğun saat yönü nedeniyle güvenli durak kümeleri önem kazanır.",
    tags: ["Sancaktepe", "Sultanbeyli", "Samandıra"],
  },
  {
    title: "Ümraniye ve Dudullu",
    text: "Sanayi alanları ile konut yoğunluğunun kesiştiği bölgede vardiya saati ve hat kesişmeleri birlikte incelenir.",
    tags: ["Ümraniye", "Dudullu", "Çakmak"],
  },
  {
    title: "Ataşehir ve Çekmeköy",
    text: "Plaza, ofis ve farklı çalışma saatlerinde TEM bağlantısı ile personel toplama yönü planın temelini oluşturur.",
    tags: ["Ataşehir", "Çekmeköy", "İçerenköy"],
  },
];

const faqs = [
  {
    question: "İstanbul’un hangi bölgelerinde personel servisi planlanabilir?",
    answer: "İlk değerlendirme Avrupa ve Anadolu Yakası’ndaki personel dağılımı, tesis konumu ve vardiya saatlerine göre yapılır. Kesin hizmet kapsamı ve saha uygunluğu teklif öncesinde kurumla birlikte doğrulanır.",
  },
  {
    question: "İki yakaya yayılan personel için tek hat kurulabilir mi?",
    answer: "Tek uzun hat varsayımı yapılmaz. Köprü geçişi, trafik yönü, vardiya saati ve yolcu yoğunluğuna göre ayrı hatlar veya farklı kapasite senaryoları karşılaştırılır.",
  },
  {
    question: "İlçe personel servisi sayfaları ayrı mı hazırlanacak?",
    answer: "Evet. Her ilçe; tesis ve sanayi yapısı, ana ulaşım aksları, çalışan yoğunluğu, vardiya senaryosu ve ilgili hizmet bağlantılarıyla özgün bir sayfa olarak ele alınacaktır.",
  },
  {
    question: "Personelin farklı ilçelerde olması fiyatı etkiler mi?",
    answer: "Dağılım; durak sayısı, hat adedi, toplam süre ve gerekli kapasiteyi değiştirebildiği için fiyat değerlendirmesini etkileyebilir.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11m-4-4 4 4-4 4" />
    </svg>
  );
}

function RegionGrid({ items }: { items: typeof europeClusters }) {
  return (
    <div className={styles.regionGrid}>
      {items.map((item, index) => (
        <article key={item.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <ul>
            {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default function ServiceRegionsPage() {
  const canonical = "https://misirliturizm.com/hizmet-bolgeleri";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://misirliturizm.com/" },
          { "@type": "ListItem", position: 2, name: "Hizmet Bölgeleri", item: canonical },
        ],
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: "İstanbul Personel Servisi Hizmet Bölgeleri",
        serviceType: "İstanbul kurumsal personel servisi bölge ve güzergâh planlama",
        url: canonical,
        provider: { "@type": "Organization", "@id": "https://misirliturizm.com/#organization", name: "Mısırlı Turizm" },
        areaServed: { "@type": "City", name: "İstanbul" },
        description: "Avrupa ve Anadolu Yakası için personel dağılımı, tesis yönü, vardiya, durak ve güzergâh odaklı kurumsal servis planlama yaklaşımı.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />
      <main>
        <section className={styles.hero} aria-labelledby="regions-title">
          <div className={`${styles.container} ${styles.heroLayout}`}>
            <div className={styles.heroContent}>
              <nav className={styles.breadcrumbs} aria-label="İçerik yolu">
                <Link href="/">Ana Sayfa</Link><span>/</span><span>Hizmet Bölgeleri</span>
              </nav>
              <span className={styles.eyebrow}>Avrupa Yakası · Anadolu Yakası</span>
              <h1 id="regions-title">İstanbul Personel Servisi <span>Hizmet Bölgeleri</span></h1>
              <p>
                <strong>İstanbul personel servisi</strong> planında ilçe adı başlangıç noktasıdır;
                gerçek kararı personel dağılımı, tesis yönü, vardiya saati ve güvenli duraklar
                verir. Bölge mimarisini bu dört veriyi birlikte ele alacak şekilde kuruyoruz.
              </p>
              <div className={styles.heroActions}>
                <Link href="/#hizli-teklif">Bölgenizi paylaşın <ArrowIcon /></Link>
                <a href="#avrupa-yakasi">Bölgeleri inceleyin</a>
              </div>
              <div className={styles.keywordRow}>
                <strong>Avrupa Yakası personel servisi</strong>
                <strong>Anadolu Yakası personel servisi</strong>
              </div>
            </div>
            <div className={styles.mosaic} aria-label="İstanbul personel servisi operasyon görselleri">
              <figure className={styles.mosaicMain}>
                <Image src={officeImage} alt="İstanbul iş merkezinde kurumsal personel servis araçları" priority sizes="(max-width: 900px) 90vw, 45vw" />
              </figure>
              <figure>
                <Image src={factoryImage} alt="Fabrika vardiyası için personel servis aracı" sizes="(max-width: 900px) 44vw, 22vw" />
              </figure>
              <figure>
                <Image src={personnelImage} alt="Mısırlı Turizm kurumsal personel servis aracı" sizes="(max-width: 900px) 44vw, 22vw" />
              </figure>
              <div className={styles.mosaicLabel}><span>İstanbul</span><strong>İki yaka · tek planlama disiplini</strong></div>
            </div>
          </div>
        </section>

        <section className={styles.introSection} aria-labelledby="approach-title">
          <div className={`${styles.container} ${styles.introLayout}`}>
            <div>
              <span className={styles.kicker}>Bölge stratejisi</span>
              <h2 id="approach-title">İlçe sayfaları isim değişmiş kopyalar olmayacak.</h2>
            </div>
            <p>
              Her ilçe sayfası; bölgenin iş ve sanayi yapısı, ana ulaşım aksları, vardiya
              senaryoları, komşu ilçe bağlantıları ve ilgili hizmetlerle özgün biçimde
              hazırlanacak. Böylece <strong>ilçe personel servisi</strong> aramalarında gerçek
              kullanıcı niyetine cevap veren, birbirini tekrar etmeyen bir içerik ağı oluşacak.
            </p>
          </div>
        </section>

        <section className={styles.regionSection} id="avrupa-yakasi" aria-labelledby="europe-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div><span>01 · Avrupa Yakası</span><h2 id="europe-title">Sanayi, konut ve ana arterleri birlikte okuyan hatlar.</h2></div>
              <p><strong>Avrupa Yakası personel servisi</strong> planında E-5, TEM, bağlantı yolları ve sanayi bölgelerinin vardiya trafiği birlikte değerlendirilir.</p>
            </div>
            <RegionGrid items={europeClusters} />
          </div>
        </section>

        <section className={`${styles.regionSection} ${styles.asiaSection}`} id="anadolu-yakasi" aria-labelledby="asia-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div><span>02 · Anadolu Yakası</span><h2 id="asia-title">Tesis yönü ve çalışan yoğunluğuna göre bölgesel kümeler.</h2></div>
              <p><strong>Anadolu Yakası personel servisi</strong> hatlarında TEM, E-5, sanayi aksları ve farklı iş merkezi yönleri vardiya saatine göre ele alınır.</p>
            </div>
            <RegionGrid items={asiaClusters} />
          </div>
        </section>

        <section className={styles.structureSection} id="ilce-yapisi" aria-labelledby="structure-title">
          <div className={`${styles.container} ${styles.structureLayout}`}>
            <div>
              <span className={styles.kicker}>İlçe bazlı büyüme modeli</span>
              <h2 id="structure-title">Her yeni ilçe sayfası ana hizmetlere çift yönlü bağlanacak.</h2>
              <p>Lokasyon sayfaları tek başına bırakılmayacak; kullanıcı ihtiyacına göre hizmet, fiyat, vardiya ve güzergâh sayfalarıyla bağlamsal iç link alacak.</p>
            </div>
            <div className={styles.linkMap}>
              <Link href="/personel-tasimaciligi"><span>Ana hizmet</span><strong>Personel taşımacılığı</strong></Link>
              <Link href="/vardiyali-personel-servisi"><span>Vardiya</span><strong>Vardiyalı personel servisi</strong></Link>
              <Link href="/fabrika-personel-tasimaciligi"><span>Tesis</span><strong>Fabrika personel servisi</strong></Link>
              <Link href="/kurumsal-servis-guzergah-planlama"><span>Rota</span><strong>Güzergâh planlama</strong></Link>
            </div>
          </div>
        </section>

        <section className={styles.faqSection} aria-labelledby="regions-faq-title">
          <div className={`${styles.container} ${styles.faqLayout}`}>
            <div><span className={styles.kicker}>Bölge soruları</span><h2 id="regions-faq-title">İstanbul personel servisi bölgeleri hakkında.</h2></div>
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

        <section className={styles.finalCta}>
          <div className={`${styles.container} ${styles.finalCtaInner}`}>
            <div><span>İstanbul operasyonu</span><h2>Personel bölgelerinizi vardiya ve tesis yönüyle birlikte değerlendirelim.</h2></div>
            <Link href="/#hizli-teklif">Hızlı ön değerlendirme <ArrowIcon /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  );
}
