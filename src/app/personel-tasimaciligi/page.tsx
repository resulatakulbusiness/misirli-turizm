import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import serviceImage from "../../../public/images/misirli-turizm-kurumsal-personel-servisi.webp";
import { MobileCta } from "@/components/mobile-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import styles from "./service.module.css";

export const metadata: Metadata = {
  title: "İstanbul Kurumsal Personel Taşımacılığı | Mısırlı Turizm",
  description:
    "İstanbul’da vardiya, personel lokasyonu, durak, güzergâh ve kapasiteyi birlikte planlayan kurumsal personel taşımacılığı hizmetini inceleyin.",
  alternates: { canonical: "/personel-tasimaciligi" },
  openGraph: {
    title: "İstanbul Kurumsal Personel Taşımacılığı | Mısırlı Turizm",
    description:
      "Kurumsal personel ulaşımını araç tedarikinden öte; lokasyon, vardiya ve güzergâh verileriyle planlayan B2B hizmet modeli.",
    url: "/personel-tasimaciligi",
    siteName: "Mısırlı Turizm",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/misirli-turizm-kurumsal-personel-servisi.webp",
        width: 1200,
        height: 900,
        alt: "İstanbul kurumsal personel taşımacılığı için Mısırlı Turizm servis aracı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "İstanbul Kurumsal Personel Taşımacılığı | Mısırlı Turizm",
    description:
      "Personel lokasyonlarını, vardiyaları ve güzergâhları birlikte ele alan kurumsal ulaşım planı.",
    images: ["/images/misirli-turizm-kurumsal-personel-servisi.webp"],
  },
};

const serviceScope = [
  {
    number: "01",
    title: "Personel dağılımı",
    text: "Çalışanların genel ikamet bölgeleri, tesis konumu ve toplanma yoğunlukları aynı harita mantığında değerlendirilir.",
  },
  {
    number: "02",
    title: "Vardiya eşleştirmesi",
    text: "Giriş ve çıkış saatleri, çalışma günleri ve olası fazla mesai düzeni servis takvimiyle eşleştirilir.",
  },
  {
    number: "03",
    title: "Durak kurgusu",
    text: "Erişilebilirlik, bekleme ve yol süresi dengelenerek uygulanabilir toplanma noktaları oluşturulur.",
  },
  {
    number: "04",
    title: "Güzergâh tasarımı",
    text: "Birbirine yakın noktalar gruplanır; hatların gereksiz kesişmesini azaltan rota seçenekleri hazırlanır.",
  },
  {
    number: "05",
    title: "Kapasite planı",
    text: "Beklenen yolcu sayısı, vardiya yoğunluğu ve hat yapısı birlikte ele alınarak kapasite senaryosu kurulur.",
  },
  {
    number: "06",
    title: "Operasyon takibi",
    text: "Personel, vardiya veya tesis düzenindeki değişiklikler planın ilgili bölümüne yansıtılır.",
  },
];

const planningSteps = [
  {
    title: "İhtiyaç verisini toplama",
    text: "Tesis, çalışma takvimi, vardiya giriş–çıkışları, yaklaşık personel sayısı ve bölgesel dağılım netleştirilir.",
  },
  {
    title: "Hat alternatiflerini kurma",
    text: "Durak kümeleri, süre pencereleri, trafik yönü ve kapasite ihtiyacı üzerinden farklı rota senaryoları karşılaştırılır.",
  },
  {
    title: "Saha planını doğrulama",
    text: "Kâğıt üzerindeki plan; tesis giriş koşulları, güvenli duraklar ve vardiya toleransları bakımından kontrol edilir.",
  },
  {
    title: "Başlatma ve güncelleme",
    text: "Onaylı hat ve sorumluluk akışı devreye alınır; değişen ihtiyaçlarda planın güncel kalması sağlanır.",
  },
];

const scenarios = [
  {
    label: "Üretim tesisi",
    title: "Çoklu vardiyada zaman uyumu",
    text: "Üretim başlangıcını geciktirmeyecek giriş planı ile vardiya çıkışındaki beklemeyi dengeleyen hat yapısı.",
  },
  {
    label: "Depo ve lojistik",
    title: "Yoğunluğa uyarlanabilen kapasite",
    text: "Sezon, vardiya değişimi ve fazla mesai dönemlerinde yeniden değerlendirilebilen operasyon kurgusu.",
  },
  {
    label: "Plaza ve ofis",
    title: "Dağınık lokasyonlardan düzenli akış",
    text: "Personel bölgelerini, trafik pencerelerini ve iş başlangıç saatini aynı rota kararında buluşturan model.",
  },
  {
    label: "Çağrı merkezi",
    title: "Gece–gündüz ekip koordinasyonu",
    text: "Gün içinde değişen ekiplerin giriş ve çıkış saatlerine göre ayrı ya da bağlantılı servis planı.",
  },
];

const pricingFactors = [
  "Toplam güzergâh mesafesi ve hat yönü",
  "Durak sayısı ve personelin bölgesel dağılımı",
  "Vardiya adedi ile giriş–çıkış saatleri",
  "Haftalık ve aylık çalışma takvimi",
  "Hat bazında gerekli araç kapasitesi",
  "Bekleme, köprü, otoyol ve özel saha koşulları",
];

const selectionChecklist = [
  "Teklifin hangi personel ve vardiya verisine dayandığı açık mı?",
  "Durak ve güzergâhlar saha uygulanabilirliği açısından inceleniyor mu?",
  "Araç kapasitesi her hat için ayrı değerlendiriliyor mu?",
  "Operasyon başlangıcında görev ve iletişim akışı tanımlanıyor mu?",
  "Sürücü ve araç evrak kontrolünün sorumlusu belli mi?",
  "Değişiklik ve aksama senaryoları için işleyiş anlatılıyor mu?",
  "Plan, operasyon başladıktan sonra ölçülüp güncellenebiliyor mu?",
];

const regionalModels = [
  {
    title: "Avrupa Yakası kümeleri",
    text: "Esenyurt, Beylikdüzü, Avcılar, Küçükçekmece veya çevre bölgelerdeki personel yoğunlukları; tesis yönü ve trafik penceresine göre kümelenebilir.",
  },
  {
    title: "Anadolu Yakası kümeleri",
    text: "Pendik, Tuzla, Kartal, Sancaktepe veya çevre bölgelerde durak sırası; vardiya saati ve tesis erişimi birlikte düşünülür.",
  },
  {
    title: "İki yakalı operasyon",
    text: "Personel dağılımı iki yakaya uzanıyorsa tek uzun hat yerine aktarmasız ayrı hatlar veya farklı kapasite senaryoları karşılaştırılır.",
  },
];

const serviceFaqs = [
  {
    question: "Personel taşımacılığı ile yalnızca servis aracı kiralamak arasındaki fark nedir?",
    answer:
      "Personel taşımacılığı; araç ihtiyacının yanında çalışan lokasyonlarını, vardiya saatlerini, durakları, güzergâhları, kapasiteyi ve günlük koordinasyonu tek operasyon planında ele alır. Mısırlı Turizm’in hizmet modeli de bu bütünsel planlama yaklaşımına dayanır.",
  },
  {
    question: "Kurumsal personel servisine hangi işletmeler ihtiyaç duyar?",
    answer:
      "Personelinin iş yerine düzenli ve planlı ulaşmasını isteyen üretim tesisi, depo, lojistik merkezi, plaza, ofis, çağrı merkezi ve benzeri işletmeler bu hizmetten yararlanabilir. Plan, sektör adından çok tesis ve çalışma düzenine göre şekillenir.",
  },
  {
    question: "Güzergâh analizi için çalışanların tam adresleri gerekir mi?",
    answer:
      "İlk ön değerlendirmede yaklaşık ikamet bölgeleri veya mahalle düzeyi dağılım çoğu zaman yeterlidir. Kesin durak tasarımı aşamasında gerekli ayrıntılar, kurumun belirlediği güvenli veri paylaşım süreciyle netleştirilir.",
  },
  {
    question: "İstanbul’un iki yakası için aynı operasyon planlanabilir mi?",
    answer:
      "Evet, ancak iki yakaya yayılan personel dağılımında tek bir uzun hat varsayımı yapılmaz. Tesis konumu, köprü geçişi, vardiya saati ve yolcu yoğunluğuna göre ayrı hatlar veya farklı kapasite seçenekleri karşılaştırılır.",
  },
  {
    question: "Vardiya saatleri değiştiğinde servis planı nasıl güncellenir?",
    answer:
      "Yeni giriş–çıkış saatleri, etkilenen personel grupları ve araç döngüsü yeniden değerlendirilir. Değişiklik yalnız saate değil, durak sırası ve kapasiteye de etki ediyorsa ilgili hat birlikte güncellenir.",
  },
  {
    question: "İstanbul personel servisi fiyatı neden standart değildir?",
    answer:
      "Aynı çalışan sayısı; farklı mesafe, durak, vardiya ve çalışma günü düzenlerinde başka bir operasyon maliyeti oluşturur. Bu nedenle fiyat, genel bir araç tarifesinden değil gerçek hat ihtiyacından hareketle hazırlanır.",
  },
  {
    question: "Kurumsal servis firması seçerken hangi sorular sorulmalı?",
    answer:
      "Teklifin hangi verilere dayandığı, güzergâhların nasıl doğrulandığı, kapasite planının nasıl yapıldığı, evrak kontrol sorumluluğu ve aksama anındaki iletişim akışı açıkça sorulmalıdır.",
  },
  {
    question: "Personel taşımacılığı planına ne kadar önce başlanmalı?",
    answer:
      "Süre; hat sayısı, personel dağılımı, vardiya karmaşıklığı ve saha koşullarına göre değişir. Sağlıklı yaklaşım, hedef başlangıç tarihinden önce veri kontrolü ve rota değerlendirmesine yeterli zaman ayırmaktır.",
  },
];

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

export default function PersonnelTransportationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://misirliturizm.com/personel-tasimaciligi#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ana Sayfa",
            item: "https://misirliturizm.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Personel Taşımacılığı",
            item: "https://misirliturizm.com/personel-tasimaciligi",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://misirliturizm.com/personel-tasimaciligi#service",
        name: "İstanbul Kurumsal Personel Taşımacılığı",
        serviceType: "Kurumsal personel taşımacılığı ve servis operasyon planlama",
        url: "https://misirliturizm.com/personel-tasimaciligi",
        provider: {
          "@type": "Organization",
          "@id": "https://misirliturizm.com/#organization",
          name: "Mısırlı Turizm",
          url: "https://misirliturizm.com/",
        },
        areaServed: { "@type": "City", name: "İstanbul" },
        audience: { "@type": "BusinessAudience", audienceType: "İşletmeler" },
        description:
          "Personel lokasyonları, vardiyalar, duraklar, güzergâhlar, kapasite ve günlük koordinasyonu birlikte planlayan kurumsal ulaşım hizmeti.",
      },
      {
        "@type": "FAQPage",
        "@id": "https://misirliturizm.com/personel-tasimaciligi#faq",
        mainEntity: serviceFaqs.map((item) => ({
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
        <section className={styles.hero} aria-labelledby="service-title">
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={`${styles.container} ${styles.heroLayout}`}>
            <div className={styles.heroContent}>
              <nav className={styles.breadcrumbs} aria-label="İçerik yolu">
                <Link href="/">Ana Sayfa</Link>
                <span>/</span>
                <span>Personel Taşımacılığı</span>
              </nav>
              <span className={styles.eyebrow}>İstanbul · B2B ulaşım operasyonu</span>
              <h1 id="service-title">İstanbul Kurumsal Personel Taşımacılığı</h1>
              <p className={styles.heroLead}>
                Çalışanların nerede olduğu, vardiyanın ne zaman başladığı ve tesisin hangi
                koşullarda çalıştığı bilinmeden doğru servis hattı kurulamaz. Mısırlı Turizm;
                bu verileri güzergâh, durak, kapasite ve günlük koordinasyon planına dönüştürür.
              </p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryButton} href="/#hizli-teklif">
                  Operasyonunuzu özetleyin <ArrowIcon />
                </Link>
                <a className={styles.secondaryButton} href="#nasil-planlanir">
                  Planlama modelini inceleyin
                </a>
              </div>
              <ul className={styles.heroChecks} aria-label="Hizmet kapsamı özeti">
                <li><CheckIcon /> Lokasyon ve durak analizi</li>
                <li><CheckIcon /> Vardiya uyumlu hatlar</li>
                <li><CheckIcon /> Operasyon takibi</li>
              </ul>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.imageFrame}>
                <Image
                  src={serviceImage}
                  alt="İstanbul’da kurumsal personel taşımacılığı operasyonunda kullanılan Mısırlı Turizm servis aracı"
                  priority
                  sizes="(max-width: 920px) 90vw, 520px"
                />
                <div className={styles.imageShade} />
                <div className={styles.imageCaption}>
                  <span>Planın odağı</span>
                  <strong>Doğru hat · doğru vardiya · doğru kapasite</strong>
                </div>
              </div>
              <div className={styles.routeCard}>
                <span>Operasyon mantığı</span>
                <div><i /> Personel bölgeleri</div>
                <b />
                <div><i /> Tesis ve vardiya</div>
              </div>
            </div>
          </div>
        </section>

        <nav className={styles.pageNav} aria-label="Sayfa bölümleri">
          <div className={styles.container}>
            <a href="#hizmet-kapsami">Hizmet kapsamı</a>
            <a href="#nasil-planlanir">Nasıl planlanır?</a>
            <a href="#kullanim-senaryolari">Kullanım alanları</a>
            <a href="#fiyat-faktorleri">Fiyat faktörleri</a>
            <a href="#sik-sorulanlar">Sık sorulanlar</a>
          </div>
        </nav>

        <section className={styles.scopeSection} id="hizmet-kapsami" aria-labelledby="scope-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <span className={styles.kicker}>Hizmetin gerçek kapsamı</span>
                <h2 id="scope-title">Personel servisi, araçtan önce bir veri ve planlama işidir.</h2>
              </div>
              <p>
                Kurumsal personel taşımacılığında sonuç; yalnızca aracın varlığıyla değil,
                personelin zamanında ve yönetilebilir bir akışla tesise ulaşmasıyla ölçülür.
                Bu yüzden altı operasyon başlığı aynı planın parçasıdır.
              </p>
            </div>
            <div className={styles.scopeGrid}>
              {serviceScope.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.planningSection} id="nasil-planlanir" aria-labelledby="planning-title">
          <div className={`${styles.container} ${styles.planningLayout}`}>
            <div className={styles.planningIntro}>
              <span className={styles.kicker}>Planlama metodumuz</span>
              <h2 id="planning-title">İlk listeden çalışan saha planına.</h2>
              <p>
                Amaç, teorik olarak en kısa rotayı değil; vardiya saatinde uygulanabilen,
                kapasitesi doğru ve değişiklik olduğunda yönetilebilen ulaşım düzenini kurmaktır.
              </p>
              <Link href="/#hizli-teklif">İlk verileri paylaşın <ArrowIcon /></Link>
            </div>
            <ol className={styles.planningSteps}>
              {planningSteps.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.scenarioSection} id="kullanim-senaryolari" aria-labelledby="scenario-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <span className={styles.kicker}>İşletme düzenine göre</span>
                <h2 id="scenario-title">Aynı hizmet, farklı operasyon senaryoları.</h2>
              </div>
              <p>
                Sektör etiketi tek başına rota kararı vermez. Tesisin çalışma ritmi, personel
                dağılımı ve vardiya yapısı her senaryoda yeniden değerlendirilir.
              </p>
            </div>
            <div className={styles.scenarioGrid}>
              {scenarios.map((scenario, index) => (
                <article key={scenario.label}>
                  <div><span>{scenario.label}</span><i>0{index + 1}</i></div>
                  <h3>{scenario.title}</h3>
                  <p>{scenario.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.istanbulSection} aria-labelledby="istanbul-title">
          <div className={`${styles.container} ${styles.istanbulLayout}`}>
            <div className={styles.istanbulContent}>
              <span className={styles.kicker}>İstanbul’da güzergâh yaklaşımı</span>
              <h2 id="istanbul-title">İlçe listesinden değil, yön ve yoğunluk ilişkisinden başlarız.</h2>
              <p>
                İstanbul personel servisi planında aynı ilçedeki iki çalışan bile farklı trafik
                yönleri veya vardiyalar nedeniyle ayrı hatlarda değerlendirilebilir. Bölge adı
                başlangıç verisidir; kararı tesis yönü, durak sırası ve zaman penceresi verir.
              </p>
            </div>
            <div className={styles.regionalGrid}>
              {regionalModels.map((model) => (
                <article key={model.title}>
                  <h3>{model.title}</h3>
                  <p>{model.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.pricingSection} id="fiyat-faktorleri" aria-labelledby="pricing-title">
          <div className={`${styles.container} ${styles.pricingLayout}`}>
            <div className={styles.pricePanel}>
              <span>Standart tarife yerine</span>
              <h2 id="pricing-title">İhtiyaca dayalı teklif</h2>
              <p>
                Personel sayısı tek başına fiyat oluşturmaz. Doğru teklif, aynı anda çalışan
                güzergâh ve vardiya bileşenleri netleştikten sonra hazırlanabilir.
              </p>
              <Link href="/#hizli-teklif">Hızlı ön değerlendirme <ArrowIcon /></Link>
            </div>
            <div className={styles.factorContent}>
              <span className={styles.kicker}>Personel servisi fiyatını belirleyenler</span>
              <h3>Teklifte görünmesi gereken altı temel değişken.</h3>
              <ul>
                {pricingFactors.map((factor) => (
                  <li key={factor}><CheckIcon /> {factor}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.selectionSection} aria-labelledby="selection-title">
          <div className={`${styles.container} ${styles.selectionLayout}`}>
            <div className={styles.selectionIntro}>
              <span className={styles.kicker}>Satın alma kontrol listesi</span>
              <h2 id="selection-title">Kurumsal servis firması seçerken yalnızca son fiyata bakmayın.</h2>
              <p>
                İki teklif aynı tutara yakın görünse de dayandıkları rota, kapasite ve sorumluluk
                modeli farklı olabilir. Karşılaştırmayı bu sorular üzerinden yapın.
              </p>
            </div>
            <ul className={styles.checklist}>
              {selectionChecklist.map((item, index) => (
                <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.faqSection} id="sik-sorulanlar" aria-labelledby="faq-title">
          <div className={`${styles.container} ${styles.faqLayout}`}>
            <div className={styles.faqIntro}>
              <span className={styles.kicker}>Karar öncesi sorular</span>
              <h2 id="faq-title">İstanbul personel taşımacılığı hakkında merak edilenler.</h2>
              <p>
                Hizmet kapsamı, güzergâh verisi, vardiya değişimi ve teklif hazırlığına ilişkin
                temel karar noktalarını açık biçimde yanıtladık.
              </p>
            </div>
            <div className={styles.faqList}>
              {serviceFaqs.map((item, index) => (
                <details key={item.question} open={index === 0}>
                  <summary>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item.question}
                    <i />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.finalCta} aria-labelledby="service-cta-title">
          <div className={`${styles.container} ${styles.finalCtaInner}`}>
            <div>
              <span>İlk adım: operasyon özeti</span>
              <h2 id="service-cta-title">Personel dağılımınızı ve vardiya yapınızı uygulanabilir bir servis planına dönüştürelim.</h2>
            </div>
            <Link href="/#hizli-teklif">Ön değerlendirmeyi başlat <ArrowIcon /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  );
}
