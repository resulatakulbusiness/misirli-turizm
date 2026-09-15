import Image from "next/image";
import Link from "next/link";
import factoryImage from "../../public/images/hero-vardiyali-fabrika-servisi.webp";
import officeImage from "../../public/images/hero-kurumsal-ofis-servisi.webp";
import personnelImage from "../../public/images/hero-personel-tasimaciligi.webp";
import { QuotePlanner } from "./quote-planner";
import { SiteFooter } from "./site-footer";
import styles from "./sections.module.css";

const serviceModel = [
  {
    number: "01",
    title: "İhtiyacı birlikte okuruz",
    text: "Personel konumları, vardiya saatleri, tesis girişleri ve mevcut aksama noktaları tek tabloda değerlendirilir.",
    tags: ["Lokasyon", "Vardiya", "Durak"],
  },
  {
    number: "02",
    title: "Uygulanabilir hatlar kurarız",
    text: "Toplanma noktaları, yol süreleri ve kapasite ihtiyacı dengelenerek sahada çalışabilecek güzergâh seçenekleri hazırlanır.",
    tags: ["Rota", "Süre", "Kapasite"],
  },
  {
    number: "03",
    title: "Operasyonu yönetiriz",
    text: "Plan, yalnızca kâğıt üzerinde kalmaz; günlük servis akışı, değişen ihtiyaçlar ve kurum iletişimi aynı sistem içinde ele alınır.",
    tags: ["Koordinasyon", "Takip", "İyileştirme"],
  },
];

const operationSteps = [
  {
    title: "Veri ve ihtiyaç analizi",
    text: "İşyeri konumu, personel dağılımı, çalışma günleri ve vardiya giriş–çıkış saatleri netleştirilir.",
  },
  {
    title: "Hat ve durak tasarımı",
    text: "Birbirine yakın personel noktaları gruplanır; güvenli duraklar, tahmini süreler ve alternatif yollar belirlenir.",
  },
  {
    title: "Araç ve kapasite planı",
    text: "Her hatta beklenen yolcu sayısına ve yol koşullarına uygun kapasite senaryosu oluşturulur.",
  },
  {
    title: "Saha başlangıcı",
    text: "Güzergâh, saat ve sorumluluk akışı kurumla birlikte kontrol edilerek operasyon devreye alınır.",
  },
  {
    title: "Takip ve iyileştirme",
    text: "Vardiya, personel veya rota değişikliklerinde plan güncellenir; süreklilik ve verimlilik birlikte korunur.",
  },
];

const useCases = [
  {
    label: "Üretim ve sanayi",
    title: "Fabrika vardiyalarında kesintisiz akış",
    text: "Giriş–çıkış saatlerinin üretim planıyla uyumlu olduğu, çoklu vardiyayı ve farklı çalışan yoğunluklarını karşılayan servis düzeni.",
    code: "06:00 / 14:00 / 22:00",
  },
  {
    label: "Lojistik ve depo",
    title: "Değişken yoğunluğa uyumlu plan",
    text: "Sezon, fazla mesai ve değişen vardiyalarda kapasite ihtiyacını yeniden değerlendiren esnek operasyon yaklaşımı.",
    code: "ESNEK VARDİYA",
  },
  {
    label: "Plaza ve ofis",
    title: "Çok noktadan düzenli ulaşım",
    text: "Avrupa ve Anadolu yakasındaki personel dağılımını, trafik pencerelerini ve iş başlangıç saatini birlikte ele alan hat yapısı.",
    code: "ÇOKLU LOKASYON",
  },
  {
    label: "Çağrı merkezi",
    title: "Gece–gündüz vardiya koordinasyonu",
    text: "Gün içi değişen ekipler için toplanma noktalarını ve servis saatlerini vardiya düzenine bağlayan kontrollü model.",
    code: "7/24 OPERASYON",
  },
];

const servicePages = [
  {
    label: "Vardiya operasyonu",
    title: "Vardiyalı personel servisi",
    text: "Gece, gündüz ve çoklu vardiyalara göre ayrı saat, durak ve kapasite planı.",
    href: "/vardiyali-personel-servisi",
    image: factoryImage,
    alt: "Vardiyalı personel servisine binen fabrika çalışanları",
  },
  {
    label: "Üretim ve sanayi",
    title: "Fabrika personel taşımacılığı",
    text: "Üretim başlangıcını ve tesis giriş koşullarını destekleyen servis organizasyonu.",
    href: "/fabrika-personel-tasimaciligi",
    image: personnelImage,
    alt: "Fabrika personel taşımacılığında kullanılan Mısırlı Turizm servis aracı",
  },
  {
    label: "Rota ve durak",
    title: "Kurumsal güzergâh planlama",
    text: "Personel konumlarından güvenli duraklara ve uygulanabilir servis hatlarına.",
    href: "/kurumsal-servis-guzergah-planlama",
    image: officeImage,
    alt: "İstanbul iş merkezine giden kurumsal personel servis araçları",
  },
];

const trustControls = [
  "Güzergâh ve durakların saha uygulanabilirliği",
  "Vardiya saatleriyle servis takviminin uyumu",
  "Araç kapasitesi ve yolcu yoğunluğu dengesi",
  "Sürücü ve araç evraklarının operasyon öncesi kontrolü",
  "Değişiklik ve aksama anlarında iletişim sorumluluğu",
  "Düzenli geri bildirimle rota ve zaman iyileştirmesi",
];

const faqs = [
  {
    question: "Kurumsal personel taşımacılığı planı nasıl hazırlanır?",
    answer:
      "Önce tesis konumu, personel dağılımı, çalışma günleri ve vardiya saatleri alınır. Uygun toplanma noktaları ve güzergâh seçenekleri oluşturulduktan sonra araç kapasitesi ve servis takvimi birlikte planlanır.",
  },
  {
    question: "İstanbul’da birden fazla ilçeden personel alınabilir mi?",
    answer:
      "Evet. Personelin farklı ilçelere dağılması halinde noktalar bölgesel kümelere ayrılır. Her küme için süre, durak sayısı, trafik penceresi ve kapasite değerlendirilerek ayrı ya da birleşik hat senaryoları hazırlanır.",
  },
  {
    question: "Vardiyalı fabrikalar için servis planı yapılır mı?",
    answer:
      "Tek, çift, üçlü veya değişken vardiya düzenleri için giriş ve çıkış saatleri ayrı ayrı ele alınır. Vardiyalar arası araç kullanım senaryoları planlanırken üretim akışı ve çalışan bekleme süresi birlikte değerlendirilir.",
  },
  {
    question: "Personel servisi fiyatını hangi bilgiler belirler?",
    answer:
      "Fiyat; toplam güzergâh mesafesi, durak sayısı, vardiya adedi, çalışma günleri, araç kapasitesi, bekleme süreleri ve operasyonun özel koşullarına göre belirlenir. Bu nedenle doğru teklif için önce ihtiyaç analizi yapılır.",
  },
  {
    question: "Mevcut servis güzergâhları yeniden düzenlenebilir mi?",
    answer:
      "Mevcut hatlar; personel noktaları, doluluk, süre ve vardiya uyumu açısından incelenebilir. Sorunlu duraklar veya gereksiz kesişmeler belirlendikten sonra uygulanabilir yeni rota seçenekleri oluşturulur.",
  },
  {
    question: "Kaç kişilik işletmeler için personel servisi planlanır?",
    answer:
      "Planlama yalnızca toplam çalışan sayısına bağlı değildir. Personelin konum dağılımı ve vardiya yapısı da önemlidir. Küçük ekiplerden çoklu vardiyalı işletmelere kadar ihtiyaç, hat bazında değerlendirilir.",
  },
  {
    question: "Teklif için hangi bilgileri paylaşmalıyız?",
    answer:
      "Firma ve tesis konumu, yaklaşık personel sayısı, çalışma günleri, vardiya giriş–çıkış saatleri ve personelin genel ikamet bölgeleri ilk değerlendirme için yeterlidir. Kesin adresler gerekli olduğunda güvenli süreçte toplanır.",
  },
  {
    question: "Operasyon başladıktan sonra rota değiştirilebilir mi?",
    answer:
      "Personel, vardiya veya tesis düzeni değiştiğinde güzergâh yeniden değerlendirilebilir. Amaç, günlük işleyişi bozmadan durak ve saat planını yeni ihtiyaca uyarlamaktır.",
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

function RouteIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="8" cy="23" r="3" />
      <circle cx="24" cy="9" r="3" />
      <path d="M11 22c6-1 4-9 10-11" />
    </svg>
  );
}

export function HomeSections() {
  return (
    <>
      <section className={styles.quoteSection} id="hizli-teklif" aria-labelledby="quote-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.kicker}>Hızlı ön değerlendirme</span>
              <h2 id="quote-title">İlk rota kararını doğru bilgilerle verelim.</h2>
            </div>
            <p>
              Beş dakikadan kısa sürede operasyon yapınızı özetleyin. Görüşmede genel
              sorularla vakit kaybetmeden vardiya, personel dağılımı ve güzergâh ihtiyacınıza
              odaklanalım.
            </p>
          </div>

          <div className={styles.quoteLayout}>
            <aside className={styles.quoteContext}>
              <span className={styles.contextLabel}>Doğru teklif için</span>
              <h3>Fiyattan önce operasyonu netleştiriyoruz.</h3>
              <p>
                Aynı personel sayısı, farklı vardiya ve lokasyon dağılımlarında tamamen farklı
                bir servis planı gerektirebilir.
              </p>
              <ul>
                <li>
                  <CheckIcon /> Personel yoğunluğu
                </li>
                <li>
                  <CheckIcon /> Vardiya saatleri
                </li>
                <li>
                  <CheckIcon /> Tesis ve durak bölgeleri
                </li>
                <li>
                  <CheckIcon /> Öncelikli operasyon hedefi
                </li>
              </ul>
              <div className={styles.contextRoute} aria-hidden="true">
                <RouteIcon />
                <span />
                <i />
              </div>
            </aside>
            <QuotePlanner />
          </div>
        </div>
      </section>

      <section className={styles.modelSection} id="hizmet-modeli" aria-labelledby="model-title">
        <div className={styles.container}>
          <div className={`${styles.sectionHeading} ${styles.sectionHeadingCompact}`}>
            <div>
              <span className={styles.kicker}>Hizmet modelimiz</span>
              <h2 id="model-title">Servis aracından önce çalışan bir sistem kurarız.</h2>
            </div>
            <p>
              Mısırlı Turizm, kurumsal personel taşımacılığını araç temininden ibaret görmez;
              planlama, saha uygulaması ve günlük yönetimi birbirine bağlı tek hizmet olarak ele
              alır.
            </p>
          </div>
          <div className={styles.modelGrid}>
            {serviceModel.map((item) => (
              <article key={item.number}>
                <span className={styles.cardNumber}>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul>
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.serviceShowcase} aria-labelledby="service-pages-title">
        <div className={styles.container}>
          <div className={`${styles.sectionHeading} ${styles.sectionHeadingCompact}`}>
            <div>
              <span className={styles.kicker}>Hizmetlerimiz</span>
              <h2 id="service-pages-title">Her operasyon ihtiyacı için ayrı uzmanlık sayfası.</h2>
            </div>
            <p>
              Vardiya, tesis ve güzergâh kararlarını tek bir genel metinde bırakmıyoruz;
              ihtiyacınıza uygun hizmet sayfasında ayrıntılı ve bağlantılı biçimde açıklıyoruz.
            </p>
          </div>
          <div className={styles.serviceShowcaseGrid}>
            {servicePages.map((item) => (
              <Link key={item.href} href={item.href}>
                <Image src={item.image} alt={item.alt} sizes="(max-width: 680px) 92vw, (max-width: 960px) 46vw, 31vw" />
                <div className={styles.showcaseShade} aria-hidden="true" />
                <div className={styles.showcaseCopy}>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <strong>Detaylı incele <ArrowIcon /></strong>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.serviceShowcaseLinks}>
            <Link href="/personel-servisi-fiyatlari">Personel servisi fiyatlarını belirleyenler <ArrowIcon /></Link>
            <Link href="/hizmet-bolgeleri">İstanbul hizmet bölgelerini inceleyin <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className={styles.processSection} id="operasyon-akisi" aria-labelledby="process-title">
        <div className={`${styles.container} ${styles.processLayout}`}>
          <div className={styles.processIntro}>
            <span className={styles.kicker}>Operasyon akışı</span>
            <h2 id="process-title">Veriden sahaya, beş kontrollü adım.</h2>
            <p>
              İlk araç yola çıkmadan önce kimlerin, hangi vardiyada, nereden ve ne zaman
              taşınacağı netleşir. Böylece teklif, güzergâh ve saha planı aynı veriye dayanır.
            </p>
            <a href="#hizli-teklif" className={styles.textLink}>
              Operasyonunuzu özetleyin <ArrowIcon />
            </a>
          </div>
          <ol className={styles.processList}>
            {operationSteps.map((item, index) => (
              <li key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.useCaseSection} id="sektorler" aria-labelledby="use-case-title">
        <div className={styles.container}>
          <div className={`${styles.sectionHeading} ${styles.sectionHeadingCompact}`}>
            <div>
              <span className={styles.kicker}>İşletmeye göre planlama</span>
              <h2 id="use-case-title">Her çalışma düzeni aynı rotayla yönetilmez.</h2>
            </div>
            <p>
              Tesis konumu kadar vardiya ritmi ve personel yoğunluğu da planı değiştirir. Bu
              nedenle her operasyon, kendi işleyişi içinde ele alınır.
            </p>
          </div>
          <div className={styles.useCaseGrid}>
            {useCases.map((item, index) => (
              <article key={item.label}>
                <div className={styles.useCaseTop}>
                  <span>{item.label}</span>
                  <i>0{index + 1}</i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <strong>{item.code}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.trustSection} id="kurumsal-sinyaller" aria-labelledby="trust-title">
        <div className={`${styles.container} ${styles.trustLayout}`}>
          <div className={styles.trustPanel}>
            <span className={styles.panelEyebrow}>Kurumsal kontrol masası</span>
            <h3>Operasyon planı tek bakışta anlaşılır olmalı.</h3>
            <div className={styles.controlBoard} aria-label="Örnek operasyon kontrol görünümü">
              <div>
                <span>Vardiya planı</span>
                <strong>Tanımlandı</strong>
                <i className={styles.statusReady}>Hazır</i>
              </div>
              <div>
                <span>Durak kümeleri</span>
                <strong>Bölgesel plan</strong>
                <i className={styles.statusReview}>İncele</i>
              </div>
              <div>
                <span>Kapasite</span>
                <strong>Hat bazlı</strong>
                <i className={styles.statusReady}>Hazır</i>
              </div>
            </div>
            <small>Temsilî süreç görünümüdür; gerçek operasyon verisi içermez.</small>
          </div>
          <div className={styles.trustContent}>
            <span className={styles.kicker}>Şeffaf ve denetlenebilir yaklaşım</span>
            <h2 id="trust-title">Güven, genel ifadelerden değil kontrol noktalarından oluşur.</h2>
            <p>
              Kurumsal ulaşımda iyi bir plan; saat, rota ve kapasite kadar sorumlulukların da
              açık olmasını gerektirir. Değerlendirmemizi somut operasyon başlıkları üzerinden
              yürütürüz.
            </p>
            <ul>
              {trustControls.map((item) => (
                <li key={item}>
                  <CheckIcon /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.faqSection} id="sikca-sorulan-sorular" aria-labelledby="faq-title">
        <div className={`${styles.container} ${styles.faqLayout}`}>
          <div className={styles.faqIntro}>
            <span className={styles.kicker}>Sıkça sorulan sorular</span>
            <h2 id="faq-title">Tekliften önce merak edilenler.</h2>
            <p>
              Kurumsal personel servisi planlarken ilk kararları hızlandıran temel soruları
              kısa ve açık biçimde yanıtladık.
            </p>
            <a href="#hizli-teklif" className={styles.textLink}>
              Hızlı ön değerlendirme <ArrowIcon />
            </a>
          </div>
          <div className={styles.faqList}>
            {faqs.map((item, index) => (
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

      <section className={styles.finalCta} aria-labelledby="final-cta-title">
        <div className={`${styles.container} ${styles.finalCtaInner}`}>
          <div>
            <span>Kurumsal personel taşımacılığı</span>
            <h2 id="final-cta-title">Servis ihtiyacınızı rotaya, vardiyaya ve sahaya birlikte bağlayalım.</h2>
          </div>
          <a href="#hizli-teklif">
            Ön değerlendirmeyi başlat <ArrowIcon />
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

export { faqs };
