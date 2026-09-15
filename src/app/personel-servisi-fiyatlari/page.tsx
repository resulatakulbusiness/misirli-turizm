import type { Metadata } from "next";
import personnelImage from "../../../public/images/hero-personel-tasimaciligi.webp";
import { ServiceClusterPage, type ServiceClusterData } from "@/components/service-cluster-page";

export const metadata: Metadata = {
  title: "Personel Servisi Fiyatları İstanbul | Mısırlı Turizm",
  description:
    "İstanbul personel servisi fiyatlarını belirleyen mesafe, durak, vardiya, sefer, kapasite ve çalışma günü değişkenlerini öğrenin; teklif hazırlayın.",
  alternates: { canonical: "/personel-servisi-fiyatlari" },
  openGraph: {
    title: "Personel Servisi Fiyatları İstanbul | Mısırlı Turizm",
    description: "Personel servisi teklifinin hangi operasyon verileriyle hesaplandığını inceleyin.",
    url: "/personel-servisi-fiyatlari",
    images: [{
      url: "/images/hero-personel-tasimaciligi.webp",
      width: 1920,
      height: 1080,
      alt: "İstanbul personel servisi fiyat teklifi için kurumsal servis aracı",
    }],
  },
};

const data: ServiceClusterData = {
  slug: "personel-servisi-fiyatlari",
  breadcrumb: "Personel Servisi Fiyatları",
  eyebrow: "Şeffaf teklif için doğru veriler",
  title: "Personel Servisi Fiyatları",
  accent: "tek rakamdan oluşmaz.",
  summary: (
    <p>
      <strong>Personel servisi fiyatları</strong>; yalnız araç büyüklüğü veya kilometreyle
      hesaplanmaz. Durak sayısı, vardiya ve sefer adedi, yolcu dağılımı, çalışma günleri ve
      tesis koşulları aynı teklif modelinin parçalarıdır.
    </p>
  ),
  schemaDescription:
    "İstanbul personel servisi fiyat teklifinde mesafe, durak, vardiya, sefer, araç kapasitesi, çalışma günü ve saha koşullarını açıklayan kurumsal değerlendirme hizmeti.",
  serviceType: "Personel servisi fiyat teklifi ve operasyon maliyeti değerlendirmesi",
  image: personnelImage,
  imageAlt: "Personel servisi fiyat teklifi için değerlendirilen Mısırlı Turizm aracı",
  imageCaption: "Fiyatı araç değil, çalışan operasyonun bütünü belirler",
  keywords: [
    "personel servisi fiyatları",
    "personel taşımacılığı fiyatları",
    "personel servisi fiyat teklifi",
  ],
  overview: {
    kicker: "Teklifin gerçek bileşenleri",
    title: "Aynı personel sayısı, farklı operasyonlarda farklı maliyet oluşturur.",
    lead: (
      <p>
        <strong>Personel taşımacılığı fiyatları</strong> karşılaştırılırken tekliflerin aynı
        durak, vardiya, gün ve kapasite varsayımlarına dayanması gerekir. Aksi halde düşük görünen
        rakam, operasyon başladığında gerçek ihtiyacı karşılamayabilir.
      </p>
    ),
    cards: [
      {
        title: "Hat ve mesafe",
        text: <p>Gidiş–dönüş yönü, toplam hat uzunluğu, köprü veya otoyol kullanımı ve gerçek yol süresi birlikte değerlendirilir.</p>,
      },
      {
        title: "Vardiya ve sefer",
        text: <p>Günlük kaç giriş ve çıkış yapılacağı, bekleme süresi ve araç döngüsü <strong>servis maliyetini</strong> doğrudan etkiler.</p>,
      },
      {
        title: "Kapasite ve dağılım",
        text: <p>Toplam çalışan sayısından çok her hatta ve her vardiyada kaç kişinin taşınacağı kapasite kararını belirler.</p>,
      },
    ],
  },
  visual: {
    kicker: "Karşılaştırılabilir teklif",
    title: "Fiyat istemeden önce operasyon kapsamını eşitleyin.",
    text: (
      <p>
        Sağlıklı bir <strong>personel servisi fiyat teklifi</strong>; hangi durakları, kaç
        vardiyayı, hangi çalışma günlerini ve nasıl bir değişiklik sürecini kapsadığını açıkça
        göstermelidir. Böylece teklifler yalnız rakamla değil, hizmet karşılığıyla kıyaslanır.
      </p>
    ),
    points: [
      "Yaklaşık personel bölgeleri ve durak sayısı",
      "Vardiya başlangıç–bitiş saatleri ve günlük sefer adedi",
      "Haftalık çalışma günleri ile fazla mesai düzeni",
      "Hat bazında beklenen yolcu ve kapasite ihtiyacı",
    ],
  },
  process: {
    kicker: "Teklif hazırlama süreci",
    title: "Belirsiz talepten karşılaştırılabilir teklife.",
    lead: (
      <p>
        Teklifin amacı yalnız toplam bedeli söylemek değil, <strong>personel servisi
        maliyetinin</strong> hangi operasyon modeline ait olduğunu netleştirmektir.
      </p>
    ),
    steps: [
      {
        title: "Temel ihtiyacı toplama",
        text: <p>Tesis konumu, yaklaşık personel sayısı, bölgeler, vardiyalar ve çalışma takvimi ilk değerlendirme için alınır.</p>,
      },
      {
        title: "Hat varsayımını kurma",
        text: <p>Durak kümeleri, güzergâh yönü, tahmini süre ve köprü/otoyol gibi özel koşullar belirlenir.</p>,
      },
      {
        title: "Kapasite ve seferi eşleştirme",
        text: <p>Her hat ve vardiyadaki yolcu yoğunluğuna uygun kapasite ile günlük sefer döngüsü birlikte değerlendirilir.</p>,
      },
      {
        title: "Kapsamı açık teklif oluşturma",
        text: <p>Teklifin kapsadığı günler, saatler ve operasyon varsayımları görünür hale getirilerek değerlendirmeye sunulur.</p>,
      },
    ],
  },
  decision: {
    kicker: "Fiyatı etkileyen değişkenler",
    title: "Teklif isterken paylaşmanız gereken beş bilgi.",
    text: (
      <p>
        Kesin olmayan ilk aşamada yaklaşık bilgiler yeterlidir. Bu veriler, yanlış kapasite veya
        rota varsayımıyla hazırlanmış bir <strong>personel servisi fiyatı</strong> yerine gerçek
        ihtiyaca yakın bir ön değerlendirme sağlar.
      </p>
    ),
    items: [
      "Tesis veya işyeri konumu",
      "Personelin yaklaşık ilçe ve bölge dağılımı",
      "Vardiya giriş–çıkış saatleri",
      "Çalışma günleri ve fazla mesai sıklığı",
      "Yaklaşık personel sayısı ve mevcut durak yapısı",
    ],
  },
  faqs: [
    {
      question: "İstanbul personel servisi fiyatları nasıl belirlenir?",
      answer: "Toplam güzergâh mesafesi, durak ve vardiya sayısı, günlük sefer adedi, haftalık çalışma düzeni, araç kapasitesi, köprü/otoyol ve saha koşulları birlikte değerlendirilir.",
    },
    {
      question: "Personel sayısı tek başına fiyat için yeterli mi?",
      answer: "Hayır. Aynı personel sayısı farklı ilçelere dağılmışsa daha fazla hat veya farklı kapasite gerektirebilir. Hat bazındaki yolcu dağılımı toplam sayıdan daha belirleyicidir.",
    },
    {
      question: "Teklif almak için kesin durak listesi gerekir mi?",
      answer: "İlk değerlendirmede yaklaşık ilçe veya mahalle dağılımı kullanılabilir. Kesin teklif ve uygulama öncesinde durakların erişim ve güvenlik koşulları netleştirilir.",
    },
    {
      question: "Gece vardiyası personel servisi fiyatı değişir mi?",
      answer: "Gece vardiyası; ek sefer, farklı durak, bekleme veya araç döngüsü oluşturuyorsa maliyeti etkileyebilir. Değerlendirme gerçek vardiya yapısına göre yapılmalıdır.",
    },
    {
      question: "Mevcut güzergâhlar incelenerek yeni fiyat hazırlanabilir mi?",
      answer: "Evet. Mevcut hat, durak, süre ve yolcu yoğunluğu incelenerek güncel ihtiyaca göre alternatif rota ve kapasite senaryosu oluşturulabilir.",
    },
  ],
  related: [
    { href: "/personel-tasimaciligi", label: "Ana hizmet", title: "İstanbul kurumsal personel taşımacılığı" },
    { href: "/kurumsal-servis-guzergah-planlama", label: "Maliyet girdisi", title: "Servis güzergâh ve durak planlama" },
    { href: "/vardiyali-personel-servisi", label: "Operasyon ritmi", title: "Vardiyalı personel servisi" },
  ],
};

export default function PersonnelServicePricingPage() {
  return <ServiceClusterPage data={data} />;
}
