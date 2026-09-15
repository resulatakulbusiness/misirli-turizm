import type { Metadata } from "next";
import factoryImage from "../../../public/images/hero-vardiyali-fabrika-servisi.webp";
import { ServiceClusterPage, type ServiceClusterData } from "@/components/service-cluster-page";

export const metadata: Metadata = {
  title: "Fabrika Personel Taşımacılığı İstanbul | Mısırlı Turizm",
  description:
    "Fabrika ve üretim tesisleri için vardiya, çalışan bölgeleri, duraklar ve araç kapasitesini birlikte planlayan İstanbul personel servisi.",
  alternates: { canonical: "/fabrika-personel-tasimaciligi" },
  openGraph: {
    title: "Fabrika Personel Taşımacılığı İstanbul | Mısırlı Turizm",
    description: "Üretim ritmine uygun vardiya ve güzergâh planlı fabrika personel servisi.",
    url: "/fabrika-personel-tasimaciligi",
    images: [{
      url: "/images/hero-vardiyali-fabrika-servisi.webp",
      width: 1920,
      height: 1080,
      alt: "İstanbul fabrika personel taşımacılığı",
    }],
  },
};

const data: ServiceClusterData = {
  slug: "fabrika-personel-tasimaciligi",
  breadcrumb: "Fabrika Personel Taşımacılığı",
  eyebrow: "Üretim · sanayi · OSB operasyonu",
  title: "Fabrika Personel Taşımacılığı",
  accent: "üretim ritmine bağlanır.",
  summary: (
    <p>
      <strong>Fabrika personel taşımacılığı</strong>; çalışanları tesise ulaştırmanın yanında
      üretim başlangıcını, vardiya teslimini ve tesis giriş koşullarını koruyan bir operasyon
      işidir. Hatlar, çalışan bölgeleriyle fabrikanın gerçek çalışma düzeni birlikte okunarak kurulur.
    </p>
  ),
  schemaDescription:
    "İstanbul’daki fabrika, üretim tesisi ve sanayi işletmeleri için vardiya saatleri, çalışan bölgeleri, duraklar, güzergâh ve kapasitenin birlikte planlandığı personel servisi.",
  serviceType: "Fabrika ve üretim tesisi personel taşımacılığı",
  image: factoryImage,
  imageAlt: "Üretim tesisi girişinde çalışanları karşılayan fabrika personel servis aracı",
  imageCaption: "Üretim başlangıcını destekleyen kontrollü servis akışı",
  keywords: [
    "fabrika personel taşımacılığı",
    "fabrika personel servisi",
    "OSB personel servisi",
  ],
  overview: {
    kicker: "Tesis odaklı ulaşım",
    title: "Fabrika servisi, üretim planının görünmeyen halkasıdır.",
    lead: (
      <p>
        <strong>Fabrika personel servisi</strong> geciktiğinde yalnız bir araç değil, ekip
        teslimi ve üretim başlangıcı da etkilenebilir. Bu nedenle tesis kapısı, vardiya toleransı,
        personel yoğunluğu ve hat süresi tek bir karar modeli içinde değerlendirilir.
      </p>
    ),
    cards: [
      {
        title: "Üretim başlangıcı",
        text: <p>Servis varışları, personelin güvenlik ve giriş işlemlerini tamamlayabileceği gerçek zaman penceresine göre planlanır.</p>,
      },
      {
        title: "Sanayi bölgesi trafiği",
        text: <p><strong>OSB personel servisi</strong> rotalarında ağır vasıta trafiği, tesis girişleri ve pik saat etkisi ayrıca dikkate alınır.</p>,
      },
      {
        title: "Ekip ve kapasite dengesi",
        text: <p>Üretim hattı, depo ve destek ekiplerinin vardiya yoğunluğu farklıysa kapasite ve sefer yapısı buna göre ayrıştırılır.</p>,
      },
    ],
  },
  visual: {
    kicker: "Saha uygulanabilirliği",
    title: "Haritadaki kısa yol, fabrikaya en doğru yol olmayabilir.",
    text: (
      <p>
        Sanayi bölgelerinde kapı seçimi, araç giriş kuralı, vardiya değişim yoğunluğu ve
        çevre yolundaki trafik aynı rotanın süresini değiştirebilir. <strong>Üretim tesisi
        personel servisi</strong> planı bu saha ayrıntılarını güzergâha yansıtır.
      </p>
    ),
    points: [
      "Tesis giriş kapısı ve güvenlik kontrol süresinin hesaba katılması",
      "OSB içi ağır vasıta ve vardiya değişim trafiğinin değerlendirilmesi",
      "Üretim ekiplerine göre personel yoğunluğunun ayrıştırılması",
      "Aksama halinde kurum ve saha sorumlularının iletişim akışı",
    ],
  },
  process: {
    kicker: "Fabrika servisi planı",
    title: "Personel listesinden tesis kapısına dört kontrollü adım.",
    lead: (
      <p>
        Her <strong>işçi servisi</strong> talebi aynı araç listesiyle cevaplanmaz. Tesisin
        çalışma biçimi ve personelin bölgesel dağılımı planın temelini oluşturur.
      </p>
    ),
    steps: [
      {
        title: "Tesis düzenini anlama",
        text: <p>Giriş kapıları, vardiya saatleri, çalışma günleri, erken varış ihtiyacı ve saha içi kurallar netleştirilir.</p>,
      },
      {
        title: "Çalışan bölgelerini kümeleme",
        text: <p>Personel yoğunlukları, güvenli duraklar ve tesis yönü esas alınarak uygulanabilir toplama bölgeleri oluşturulur.</p>,
      },
      {
        title: "Hat ve kapasiteyi eşleştirme",
        text: <p>Her hattaki beklenen yolcu sayısı, yol süresi ve vardiya döngüsü uygun kapasite senaryosuyla eşleştirilir.</p>,
      },
      {
        title: "Başlangıç ve saha kontrolü",
        text: <p>Onaylanan saat, durak ve sorumluluk akışı sahada gözlenir; gereken iyileştirmeler kurumla birlikte ele alınır.</p>,
      },
    ],
  },
  decision: {
    kicker: "Satın alma değerlendirmesi",
    title: "Fabrika servis teklifinde yalnız araç adedini karşılaştırmayın.",
    text: (
      <p>
        <strong>Fabrika personel servisi fiyatı</strong>; hattın uzunluğu kadar sefer saati,
        kapı beklemesi, vardiya sayısı ve yolcu dağılımından da etkilenir. Teklifin hangi saha
        varsayımlarına dayandığı açık olmalıdır.
      </p>
    ),
    items: [
      "Tesis kapısı ve vardiya varış toleransı",
      "Hat bazında yolcu ve kapasite planı",
      "Çalışma günü, fazla mesai ve hafta sonu düzeni",
      "Sürücü ve araç kontrol sorumlulukları",
      "Aksama ve değişikliklerde yedek iletişim süreci",
    ],
  },
  faqs: [
    {
      question: "Fabrika personel servisi nasıl planlanır?",
      answer: "Tesis konumu ve giriş kuralları, vardiya saatleri, çalışanların bölgesel dağılımı ve yaklaşık yolcu sayıları birlikte değerlendirilir. Durak, hat, süre ve kapasite planı bu verilerden oluşturulur.",
    },
    {
      question: "OSB içindeki fabrikalar için rota neden farklıdır?",
      answer: "Organize sanayi bölgelerinde ağır vasıta trafiği, farklı tesis kapıları ve aynı saatlerde gerçekleşen vardiya değişimleri rota süresini etkileyebilir. Bu nedenle OSB içi bölüm ayrıca incelenir.",
    },
    {
      question: "Birden fazla vardiyaya fabrika servisi verilebilir mi?",
      answer: "Evet. Her vardiyanın personel sayısı, giriş–çıkış saati ve araç döngüsü ayrı değerlendirilerek bağlantılı veya bağımsız hat senaryoları hazırlanabilir.",
    },
    {
      question: "Fazla mesai ekibi için ek servis planlanabilir mi?",
      answer: "Fazla mesai sıklığı ve yaklaşık ekip büyüklüğü önceden biliniyorsa ek sefer, ortak durak veya farklı kapasite seçenekleri operasyon modeline dahil edilebilir.",
    },
    {
      question: "Fabrika personel taşımacılığı fiyatını hangi bilgiler belirler?",
      answer: "Güzergâh mesafesi, durak sayısı, vardiya ve sefer adedi, araç kapasitesi, çalışma günleri, bekleme süresi ve tesis giriş koşulları fiyatın temel değişkenleridir.",
    },
  ],
  related: [
    { href: "/personel-tasimaciligi", label: "Ana hizmet", title: "İstanbul kurumsal personel taşımacılığı" },
    { href: "/vardiyali-personel-servisi", label: "Vardiya modeli", title: "Vardiyalı personel servisi" },
    { href: "/personel-servisi-fiyatlari", label: "Ticari araştırma", title: "Personel servisi fiyatını belirleyenler" },
  ],
};

export default function FactoryTransportationPage() {
  return <ServiceClusterPage data={data} />;
}
