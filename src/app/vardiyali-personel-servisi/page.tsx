import type { Metadata } from "next";
import factoryImage from "../../../public/images/hero-vardiyali-fabrika-servisi.webp";
import { ServiceClusterPage, type ServiceClusterData } from "@/components/service-cluster-page";

export const metadata: Metadata = {
  title: "Vardiyalı Personel Servisi İstanbul | Mısırlı Turizm",
  description:
    "İstanbul’da gece, gündüz ve çoklu vardiya düzenine uygun personel servisi; hat, durak, kapasite ve giriş–çıkış saatleri birlikte planlanır.",
  alternates: { canonical: "/vardiyali-personel-servisi" },
  openGraph: {
    title: "Vardiyalı Personel Servisi İstanbul | Mısırlı Turizm",
    description: "Çoklu vardiya düzenine göre planlanan kurumsal personel servisi operasyonu.",
    url: "/vardiyali-personel-servisi",
    images: [{
      url: "/images/hero-vardiyali-fabrika-servisi.webp",
      width: 1920,
      height: 1080,
      alt: "İstanbul vardiyalı personel servisi operasyonu",
    }],
  },
};

const data: ServiceClusterData = {
  slug: "vardiyali-personel-servisi",
  breadcrumb: "Vardiyalı Personel Servisi",
  eyebrow: "Gece · gündüz · çoklu vardiya",
  title: "Vardiyalı Personel Servisi",
  accent: "saatten önce planlanır.",
  summary: (
    <p>
      Bir <strong>vardiyalı personel servisi</strong>, yalnızca giriş saatinde tesiste olmakla
      çözülmez. Çıkıştaki araç döngüsü, gece vardiyasının güvenli durakları, fazla mesai ve
      vardiyalar arasındaki kapasite değişimi aynı operasyon planında ele alınmalıdır.
    </p>
  ),
  schemaDescription:
    "İstanbul’daki işletmeler için gece, gündüz ve çoklu vardiyaya uygun durak, güzergâh, araç kapasitesi ve servis saatlerinin birlikte planlandığı personel ulaşım hizmeti.",
  serviceType: "Vardiyalı personel servisi ve çoklu vardiya ulaşım planlaması",
  image: factoryImage,
  imageAlt: "Gece vardiyasına gelen çalışanların kurumsal servis aracına binişi",
  imageCaption: "Her vardiyaya ayrı zaman, durak ve kapasite senaryosu",
  keywords: [
    "vardiyalı personel servisi",
    "gece vardiyası personel servisi",
    "çoklu vardiya servis planlama",
  ],
  overview: {
    kicker: "Vardiya düzeninin gerçek ihtiyacı",
    title: "Aynı güzergâh, her vardiyada aynı sonucu vermez.",
    lead: (
      <p>
        <strong>Vardiyalı personel taşımacılığı</strong> planlanırken sabah, akşam ve gece
        saatlerinin trafik, yolcu yoğunluğu ve güvenli bekleme koşulları ayrı değerlendirilir.
        Tek rota kopyalanmaz; vardiyanın çalışma ritmine göre uygulanabilir hale getirilir.
      </p>
    ),
    cards: [
      {
        title: "Giriş–çıkış eşleştirmesi",
        text: <p>Her ekibin tesise varış toleransı, vardiya teslim süresi ve çıkış yoğunluğu servis saatleriyle eşleştirilir.</p>,
      },
      {
        title: "Gece durak güvenliği",
        text: <p><strong>Gece vardiyası personel servisi</strong> için aydınlatma, erişim ve bekleme süresi durak kararının parçasıdır.</p>,
      },
      {
        title: "Değişken kapasite",
        text: <p>Bir vardiyada yoğun, diğerinde düşük olan personel sayısı hat ve araç kapasitesinin ayrı kurgulanmasını gerektirebilir.</p>,
      },
    ],
  },
  visual: {
    kicker: "Vardiya matrisi",
    title: "Saat değişince yalnızca kalkış zamanı değişmez.",
    text: (
      <p>
        Vardiya kayması; aynı anda durak sırasını, araç döngüsünü ve tesise varış penceresini
        etkileyebilir. Bu nedenle <strong>vardiya servis planlama</strong> çalışması her hattın
        hangi ekibi, hangi zaman aralığında taşıdığını görünür hale getirir.
      </p>
    ),
    points: [
      "Vardiya başlangıç ve bitiş pencerelerinin ayrı tanımlanması",
      "Fazla mesai ve hafta sonu senaryolarının önceden konuşulması",
      "Gece saatlerinde güvenli ve erişilebilir durak seçimi",
      "Araçların ardışık vardiyalar arasındaki dönüş süresinin kontrolü",
    ],
  },
  process: {
    kicker: "Planlama süreci",
    title: "Vardiya tablosundan saha akışına dört adım.",
    lead: (
      <p>
        Sağlıklı bir <strong>çoklu vardiya servis planı</strong>, yalnız personel listesinden
        değil; tesis kuralları, zaman toleransı ve bölgesel dağılımdan üretilir.
      </p>
    ),
    steps: [
      {
        title: "Vardiya verisini ayırma",
        text: <p>Çalışma günleri, giriş–çıkış saatleri, ekip değişimleri ve yaklaşık yolcu sayıları vardiya bazında netleştirilir.</p>,
      },
      {
        title: "Personel kümelerini kurma",
        text: <p>Aynı vardiyada çalışanların ikamet bölgeleri, güvenli toplanma noktaları ve tesis yönü birlikte değerlendirilir.</p>,
      },
      {
        title: "Hat ve döngü kontrolü",
        text: <p>Bir aracın birden fazla vardiyada kullanılacağı senaryolarda dönüş, bekleme ve yeniden hareket süreleri kontrol edilir.</p>,
      },
      {
        title: "Değişiklik akışını tanımlama",
        text: <p>Fazla mesai, vardiya kayması veya personel değişiminde hangi bilginin kim tarafından güncelleneceği belirlenir.</p>,
      },
    ],
  },
  decision: {
    kicker: "Teklif öncesi kontrol",
    title: "Vardiyalı servis teklifinde açık olması gerekenler.",
    text: (
      <p>
        Bir <strong>vardiyalı personel servisi fiyatı</strong> yalnız kilometreye bakılarak
        kıyaslanamaz. Aynı rotanın kaç kez çalışacağı ve vardiyalar arasındaki bekleme düzeni
        teklifin operasyon karşılığını değiştirir.
      </p>
    ),
    items: [
      "Her vardiyanın yaklaşık personel sayısı",
      "Tesis girişinde gerekli erken varış süresi",
      "Hafta sonu ve fazla mesai çalışma düzeni",
      "Gece vardiyası için durak güvenliği beklentisi",
      "Araç değişimi veya aksama halinde iletişim planı",
    ],
  },
  faqs: [
    {
      question: "Vardiyalı personel servisi nasıl planlanır?",
      answer: "Önce her vardiyanın giriş–çıkış saatleri, personel sayısı ve ikamet bölgeleri ayrılır. Durak kümeleri, tesis varış toleransı ve araç döngüsü kontrol edilerek her vardiyaya uygulanabilir hat planı hazırlanır.",
    },
    {
      question: "Gece vardiyası için farklı güzergâh gerekir mi?",
      answer: "Her zaman gerekmez; ancak gece trafiği, güvenli durak ihtiyacı ve personel yoğunluğu gündüzden farklıysa durak sırası veya güzergâh ayrı planlanabilir.",
    },
    {
      question: "Fazla mesai olduğunda servis saati değiştirilebilir mi?",
      answer: "Değişiklik süreci operasyon başında tanımlanırsa fazla mesai ekibi için saat, durak ve gerekli kapasite yeniden değerlendirilebilir. Son dakika değişikliklerinin yönetimi için kurum içi bildirim sorumlusu belirlenmelidir.",
    },
    {
      question: "Üç vardiya için aynı araç kullanılabilir mi?",
      answer: "Bu karar hat süreleri, vardiyalar arasındaki zaman, bakım ve dinlenme düzeni ile araç kapasitesine bağlıdır. Uygunluk, araç döngüsü tablosu üzerinden kontrol edilmelidir.",
    },
    {
      question: "Vardiyalı personel servisi fiyatını neler etkiler?",
      answer: "Hat mesafesi, vardiya sayısı, günlük sefer adedi, durak dağılımı, araç kapasitesi, bekleme süresi ve haftalık çalışma düzeni temel değişkenlerdir.",
    },
  ],
  related: [
    { href: "/personel-tasimaciligi", label: "Ana hizmet", title: "İstanbul kurumsal personel taşımacılığı" },
    { href: "/fabrika-personel-tasimaciligi", label: "Tesis senaryosu", title: "Fabrika personel taşımacılığı" },
    { href: "/kurumsal-servis-guzergah-planlama", label: "Planlama", title: "Servis güzergâh ve durak planlama" },
  ],
};

export default function ShiftServicePage() {
  return <ServiceClusterPage data={data} />;
}
