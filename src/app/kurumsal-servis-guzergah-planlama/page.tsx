import type { Metadata } from "next";
import officeImage from "../../../public/images/hero-kurumsal-ofis-servisi.webp";
import { ServiceClusterPage, type ServiceClusterData } from "@/components/service-cluster-page";

export const metadata: Metadata = {
  title: "Servis Güzergâh Planlama İstanbul | Mısırlı Turizm",
  description:
    "Personel konumlarını, güvenli durakları, vardiya saatlerini ve tesis yönünü birlikte değerlendiren kurumsal servis güzergâh planlama hizmeti.",
  alternates: { canonical: "/kurumsal-servis-guzergah-planlama" },
  openGraph: {
    title: "Servis Güzergâh Planlama İstanbul | Mısırlı Turizm",
    description: "Kurumsal personel servisi için uygulanabilir durak ve rota planlama yaklaşımı.",
    url: "/kurumsal-servis-guzergah-planlama",
    images: [{
      url: "/images/hero-kurumsal-ofis-servisi.webp",
      width: 1920,
      height: 1080,
      alt: "İstanbul kurumsal servis güzergâh planlama",
    }],
  },
};

const data: ServiceClusterData = {
  slug: "kurumsal-servis-guzergah-planlama",
  breadcrumb: "Servis Güzergâh Planlama",
  eyebrow: "Konum · durak · rota · süre",
  title: "Kurumsal Servis Güzergâh Planlama",
  accent: "haritadan daha fazlasıdır.",
  summary: (
    <p>
      <strong>Servis güzergâh planlama</strong>; en kısa çizgiyi seçmek değil, personelin
      erişebileceği güvenli durakları vardiya saati ve tesis yönüyle eşleştirmektir. Mısırlı
      Turizm, rota kararını saha uygulanabilirliği ve günlük operasyon bütünlüğüyle ele alır.
    </p>
  ),
  schemaDescription:
    "İstanbul’daki işletmeler için personel konumları, güvenli duraklar, vardiya saatleri, trafik yönü ve araç kapasitesine dayalı kurumsal servis güzergâh planlama hizmeti.",
  serviceType: "Kurumsal personel servisi güzergâh ve durak planlama",
  image: officeImage,
  imageAlt: "İstanbul iş merkezine doğru planlanan kurumsal personel servis araçları",
  imageCaption: "Personel noktalarından tesise uygulanabilir hat tasarımı",
  keywords: [
    "servis güzergâh planlama",
    "personel servis rotası",
    "durak planlama",
  ],
  overview: {
    kicker: "Rota kararının temeli",
    title: "İyi güzergâh, personel ve tesis verisini aynı anda dengeler.",
    lead: (
      <p>
        Bir <strong>personel servis güzergâhı</strong>; yalnız kilometre hesabıyla kurulursa
        uzun beklemeler, gereksiz sapmalar veya vardiyaya geç varış riski doğurabilir. Amaç,
        erişilebilir duraklarla yönetilebilir yol süresini aynı planda buluşturmaktır.
      </p>
    ),
    cards: [
      {
        title: "Personel yoğunluğu",
        text: <p>Tek tek adreslerden önce birbirine yakın çalışan bölgeleri görülür; durak kümeleri bu yoğunluk üzerinden değerlendirilir.</p>,
      },
      {
        title: "Durak uygulanabilirliği",
        text: <p><strong>Durak planlama</strong> aşamasında yaya erişimi, araç yanaşması, güvenlik ve bekleme süresi birlikte düşünülür.</p>,
      },
      {
        title: "Tesis yönü ve saat",
        text: <p>Aynı bölgedeki çalışanlar, farklı vardiya veya tesis yönleri nedeniyle ayrı servis hatlarında daha verimli taşınabilir.</p>,
      },
    ],
  },
  visual: {
    kicker: "Uygulanabilir rota",
    title: "En kısa mesafe her zaman en kısa süre değildir.",
    text: (
      <p>
        İstanbul’da dönüş yasakları, bağlantı yolları, köprü geçişleri ve pik saat yönü aynı
        mesafenin süresini değiştirebilir. <strong>Personel servis rotası</strong>, vardiya
        saatinde gerçekten çalışacak alternatifler karşılaştırılarak oluşturulur.
      </p>
    ),
    points: [
      "Personel bölgelerinin yoğunluk kümelerine ayrılması",
      "Güvenli ve araç erişimine uygun durakların belirlenmesi",
      "Trafik yönü ile vardiya varış penceresinin birlikte okunması",
      "Gereksiz hat kesişmeleri ve uzun sapmaların azaltılması",
    ],
  },
  process: {
    kicker: "Güzergâh tasarım süreci",
    title: "Dağınık konumlardan yönetilebilir servis hatlarına.",
    lead: (
      <p>
        <strong>Kurumsal servis güzergâh planlama</strong> çalışması, çalışan verisini saha
        kararına dönüştüren dört kontrollü adımdan oluşur.
      </p>
    ),
    steps: [
      {
        title: "Konum verisini temizleme",
        text: <p>Personel bölgeleri, tesis adresi, vardiya bilgisi ve çalışma günleri aynı değerlendirme tablosunda toplanır.</p>,
      },
      {
        title: "Durak kümelerini oluşturma",
        text: <p>Birbirine yakın konumlar, yaya erişimi ve araç yanaşma koşulları dikkate alınarak ortak durak seçeneklerine dönüştürülür.</p>,
      },
      {
        title: "Rota senaryolarını karşılaştırma",
        text: <p>Hat yönü, tahmini süre, yolcu sayısı ve kapasite ihtiyacı üzerinden alternatif güzergâhlar birlikte değerlendirilir.</p>,
      },
      {
        title: "Sahada doğrulama ve iyileştirme",
        text: <p>Planın trafik, durak kullanımı ve vardiya uyumu izlenir; sürdürülebilir olmayan noktalar gerektiğinde güncellenir.</p>,
      },
    ],
  },
  decision: {
    kicker: "Kalite kontrol listesi",
    title: "Bir güzergâh planının cevaplaması gereken beş soru.",
    text: (
      <p>
        Rota yalnız haritada iyi görünmemeli; çalışan, sürücü ve tesis açısından uygulanabilir
        olmalıdır. <strong>Servis rota optimizasyonu</strong> kararını bu sorular üzerinden
        kontrol etmek gerekir.
      </p>
    ),
    items: [
      "Duraklar çalışanlar için güvenli ve erişilebilir mi?",
      "Hat, vardiya varış toleransını karşılıyor mu?",
      "Gereksiz geri dönüş veya hat kesişmesi bulunuyor mu?",
      "Yolcu sayısı ile araç kapasitesi dengeli mi?",
      "Trafik veya personel değişiminde güncelleme yöntemi belli mi?",
    ],
  },
  faqs: [
    {
      question: "Personel servis güzergâhı nasıl belirlenir?",
      answer: "Çalışanların genel konumları, vardiya saatleri ve tesis yönü birlikte değerlendirilir. Yakın personel noktaları güvenli duraklarda kümelenir; alternatif hatlar süre ve kapasite açısından karşılaştırılır.",
    },
    {
      question: "En kısa rota neden her zaman tercih edilmez?",
      answer: "Kısa mesafe; yoğun kavşaklar, uygunsuz duraklar veya tesis yönüne ters trafik nedeniyle daha uzun sürebilir. Uygulanabilir rota, mesafe ile gerçek yol süresini birlikte değerlendirir.",
    },
    {
      question: "Personel adreslerinin tamamı gerekli mi?",
      answer: "İlk analizde ilçe, mahalle veya yaklaşık bölge düzeyi çoğu zaman yeterlidir. Kesin durak çalışmasında gerekli ayrıntılar kurumun güvenli veri paylaşım yaklaşımıyla netleştirilir.",
    },
    {
      question: "Mevcut servis güzergâhları yeniden düzenlenebilir mi?",
      answer: "Evet. Mevcut duraklar, yolcu sayıları, süreler ve vardiya performansı incelenerek gereksiz sapmalar veya kapasite uyumsuzlukları için yeni senaryolar hazırlanabilir.",
    },
    {
      question: "Güzergâh değişikliği personel servisi fiyatını etkiler mi?",
      answer: "Mesafe, durak sayısı, toplam sefer süresi, köprü veya otoyol kullanımı ve gerekli araç kapasitesi değişiyorsa teklif de etkilenebilir.",
    },
  ],
  related: [
    { href: "/personel-tasimaciligi", label: "Ana hizmet", title: "İstanbul kurumsal personel taşımacılığı" },
    { href: "/personel-servisi-fiyatlari", label: "Teklif", title: "Personel servisi fiyatını belirleyenler" },
    { href: "/hizmet-bolgeleri", label: "Lokasyon", title: "İstanbul hizmet bölgeleri" },
  ],
};

export default function RoutePlanningPage() {
  return <ServiceClusterPage data={data} />;
}
