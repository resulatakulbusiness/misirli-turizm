import type { Metadata } from "next";
import factoryImage from "../../../../public/images/hero-vardiyali-fabrika-servisi.webp";
import personnelImage from "../../../../public/images/hero-personel-tasimaciligi.webp";
import { RegionLandingPage, type RegionLandingPageData } from "@/components/region-landing-page";

export const metadata: Metadata = {
  title: "Avrupa Yakası Personel Servisi | Kurumsal Taşımacılık",
  description: "İstanbul Avrupa Yakası personel servisi için personel bölgeleri, vardiya, durak, TEM ve E-5 yönünü birlikte planlayan kurumsal çözüm.",
  alternates: { canonical: "/hizmet-bolgeleri/istanbul-avrupa-yakasi-personel-servisi" },
  openGraph: {
    title: "Avrupa Yakası Personel Servisi | Mısırlı Turizm",
    description: "Avrupa Yakası işletmeleri için çalışan dağılımı, vardiya ve tesis yönüne göre kurumsal servis planlama.",
    url: "/hizmet-bolgeleri/istanbul-avrupa-yakasi-personel-servisi",
    siteName: "Mısırlı Turizm",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/images/hero-vardiyali-fabrika-servisi.webp", width: 1920, height: 1080, alt: "İstanbul Avrupa Yakası personel servisi" }],
  },
};

const data: RegionLandingPageData = {
  slug: "istanbul-avrupa-yakasi-personel-servisi",
  side: "İstanbul Avrupa Yakası",
  eyebrow: "Avrupa Yakası · kurumsal personel ulaşımı",
  title: "İstanbul Avrupa Yakası Personel Servisi",
  accent: "hatları gerçek hareket yönüyle kurulur.",
  summary: <p><strong>Avrupa Yakası personel servisi</strong> planı; çalışanların konut bölgelerini, tesisin sanayi veya iş merkezi yönünü, vardiya saatini ve ana arterlerdeki yoğunluk penceresini aynı modelde buluşturmalıdır. Mısırlı Turizm, hazır rota satmak yerine kuruma özgü durak, hat ve kapasite seçenekleri oluşturur.</p>,
  image: factoryImage,
  imageAlt: "İstanbul Avrupa Yakası vardiyalı fabrika personel servisi",
  secondaryImage: personnelImage,
  secondaryImageAlt: "Avrupa Yakası kurumsal personel taşımacılığı servis aracı",
  keywords: ["Avrupa Yakası personel servisi", "Avrupa Yakası personel taşımacılığı", "İstanbul kurumsal servis"],
  schemaDescription: "İstanbul Avrupa Yakası işletmeleri için çalışan bölgeleri, vardiya saatleri, güvenli duraklar, güzergâhlar ve araç kapasitesini birlikte planlayan kurumsal personel servisi hizmeti.",
  overview: {
    kicker: "Yakaya özel planlama",
    title: "Avrupa Yakası tek bir trafik ve servis koridoru değildir.",
    text: <p><strong>İstanbul Avrupa Yakası personel taşımacılığı</strong> ihtiyacında İkitelli OSB, Hadımköy, Kıraç, Haramidere ve Ambarlı gibi üretim–lojistik merkezleri; Levent, Maslak ve Basın Ekspres gibi ofis akslarından farklı bir operasyon ritmi oluşturur. Personel noktaları yalnız ilçe adına göre birleştirilmez. Tesisin yönü, TEM veya E-5 bağlantısı, vardiya giriş toleransı ve güvenli durak erişimi karşılaştırılarak hatların birbirini kesmeden çalışması hedeflenir.</p>,
    notes: ["TEM, E-5 ve Basın Ekspres yönünü vardiya saatine göre karşılaştırma", "Sanayi bölgesi kapısı ile personel indirme noktasını hesaba katma", "Metrobüs ve ana toplu taşıma düğümlerini güvenli durak alternatifi olarak değerlendirme", "Uzun tek hat yerine süre ve doluluğa göre dengeli hat kümeleri kurma"],
  },
  corridors: {
    kicker: "Avrupa Yakası alt bölgeleri",
    title: "Her koridor kendi ilçe ve sanayi dinamiğiyle planlanır.",
    lead: <p>Aşağıdaki kümeler sabit güzergâh vaadi değildir. <strong>Avrupa Yakası servis güzergâhı</strong>, işletmenin gerçek çalışan dağılımı görüldükten sonra bu bağlantılar üzerinden şekillendirilir.</p>,
    items: [
      { eyebrow: "Yayınlanan ilçe sayfası", title: "Başakşehir ve İkitelli OSB", text: <p>İkitelli OSB kapıları, Başakşehir yerleşimleri, Mahmutbey ve çevre ilçe bağlantıları vardiya giriş yönüyle birlikte değerlendirilir.</p>, tags: ["Başakşehir", "İkitelli OSB", "Mahmutbey"], href: "/hizmet-bolgeleri/basaksehir-personel-servisi" },
      { eyebrow: "Batı sanayi aksı", title: "Esenyurt, Kıraç ve Haramidere", text: <p>Yoğun çalışan dağılımı, sanayi giriş trafiği ve TEM–E-5 geçişleri farklı vardiyalar için ayrı hat senaryoları gerektirebilir.</p>, tags: ["Esenyurt", "Kıraç", "Haramidere"] },
      { eyebrow: "Sahil ve E-5 aksı", title: "Beylikdüzü, Avcılar ve Ambarlı", text: <p>Sahil–kuzey yönü, metrobüs durakları ve liman çevresi hareketi; durak sırası ile tesise yaklaşma yönünü doğrudan etkiler.</p>, tags: ["Beylikdüzü", "Avcılar", "Ambarlı"] },
      { eyebrow: "Merkez bağlantısı", title: "Küçükçekmece, Halkalı ve Sefaköy", text: <p>Yoğun yerleşim dokusu ile Basın Ekspres ve İkitelli yönü arasındaki hareket, kısa görünen rotalarda dahi zaman tamponu gerektirir.</p>, tags: ["Küçükçekmece", "Halkalı", "Sefaköy"] },
      { eyebrow: "Kuzeybatı üretim", title: "Hadımköy, Arnavutköy ve Büyükçekmece", text: <p>Tesislerin dağınık konumu, otoyol bağlantıları ve uzun mesafe; araç kapasitesi ile durak sayısının birlikte dengelenmesini gerektirir.</p>, tags: ["Hadımköy", "Arnavutköy", "Büyükçekmece"] },
      { eyebrow: "Geniş hizmet çevresi", title: "Silivri, Çatalca ve Selimpaşa", text: <p>Geniş coğrafyada her noktayı tek araçta toplamak yerine çalışan yoğunluğu, ana arter erişimi ve yolculuk süresi temel alınır.</p>, tags: ["Silivri", "Çatalca", "Selimpaşa"] },
    ],
  },
  route: {
    kicker: "İnteraktif rota mantığı",
    title: "Personel listesinden tesise uzanan karar zinciri.",
    text: <p><strong>Avrupa Yakası kurumsal personel servisi</strong> için her durak aynı öncelikte değildir. Güvenli erişim, araca biniş süresi, ana artere çıkış ve vardiyadan önce tesise ulaşma toleransı birlikte hesaplanır. Böylece yalnız kilometreyi kısaltan değil, günlük operasyonda uygulanabilir olan rota seçilir.</p>,
    nodes: ["Personel bölgelerini haritalama", "Güvenli durak kümelerini oluşturma", "TEM–E-5 alternatiflerini karşılaştırma", "Tesis kapısı ve vardiya varışını doğrulama"],
  },
  planning: {
    kicker: "Kurumsal çalışma modeli",
    title: "Tekliften saha başlangıcına dört kontrollü aşama.",
    lead: <p>Her <strong>Avrupa Yakası personel servisi</strong> çalışması kurumun gerçek verisiyle başlar. Personel sayısı tek başına araç veya hat kararını belirlemez.</p>,
    steps: [
      { title: "İhtiyaç ve vardiya verisi", text: <p>Tesis konumu, çalışma günleri, giriş–çıkış saatleri, personel sayısı ve operasyon toleransı netleştirilir.</p> },
      { title: "Bölge ve durak kümeleri", text: <p>Çalışanların genel konumları, tesis yönü ve güvenli erişim bakımından birbirine yakın kümelere ayrılır.</p> },
      { title: "Rota ve kapasite senaryosu", text: <p>Hat uzunluğu, tahmini süre, doluluk ve araç kapasitesi alternatifleri aynı plan üzerinde karşılaştırılır.</p> },
      { title: "Saha kontrolü ve iyileştirme", text: <p>Onaylanan plan izlenir; vardiya, personel veya tesis koşulu değiştiğinde ilgili hat yeniden ele alınır.</p> },
    ],
  },
  useCases: {
    kicker: "İşletme senaryoları",
    title: "Ofis, fabrika, depo ve çoklu vardiya aynı plan değildir.",
    text: <p>Mısırlı Turizm, <strong>Avrupa Yakası personel taşıma firmaları</strong> araştırması yapan işletmelere yalnız araç kapasitesiyle yaklaşmaz. İşletme tipinin giriş disiplini, tesis çevresindeki trafik ve çalışan dağılımı hizmet modelinin ana parçasıdır.</p>,
    items: ["İkitelli, Hadımköy ve Kıraç üretim tesisleri", "Basın Ekspres, Levent ve Maslak ofis operasyonları", "Haramidere, Ambarlı ve çevresindeki depo–lojistik noktaları", "Sabah, akşam, gece ve değişken vardiya düzenleri", "Birden fazla lokasyona yayılan kurumsal operasyonlar"],
  },
  faqs: [
    { question: "Avrupa Yakası personel servisi hangi ilçelerde planlanabilir?", answer: "Başakşehir, Küçükçekmece, Esenyurt, Avcılar, Beylikdüzü, Büyükçekmece, Arnavutköy, Silivri, Çatalca ve diğer Avrupa Yakası ilçeleri; çalışan dağılımı, tesis yönü ve saha uygunluğuna göre değerlendirilir." },
    { question: "İkitelli OSB için ayrı servis hattı kurulabilir mi?", answer: "Evet. Tesis kapısı, vardiya saati, çalışan yoğunluğu ve OSB içi hareket doğrulandıktan sonra İkitelli OSB için ayrı veya bağlantılı hat seçenekleri hazırlanabilir." },
    { question: "TEM ve E-5 rotalarından hangisi tercih edilir?", answer: "Tek bir yol her vardiyada doğru değildir. Trafik penceresi, durakların yönü, tesis girişi ve toplam yolculuk süresi karşılaştırılarak uygun alternatif seçilir." },
    { question: "Avrupa Yakası vardiyalı personel servisi kurulabilir mi?", answer: "Sabah, akşam, gece veya çoklu vardiya giriş–çıkışları ayrı ayrı planlanabilir. Araç döngüsü ile çalışan bekleme süresi aynı modelde değerlendirilir." },
    { question: "Personel servisi fiyatı neye göre belirlenir?", answer: "Toplam mesafe, durak sayısı, vardiya ve sefer adedi, çalışma günleri, araç kapasitesi, bekleme koşulları ve özel saha ihtiyaçları fiyatı etkiler." },
    { question: "Teklif için çalışanların açık adresi gerekir mi?", answer: "İlk değerlendirme için mahalle veya genel bölge bilgisi çoğu zaman yeterlidir. Kesin durak planında ayrıntılar kurumun güvenli veri paylaşım süreciyle netleştirilir." },
  ],
  related: [
    { href: "/personel-tasimaciligi", label: "Ana hizmet", title: "Kurumsal personel taşımacılığı" },
    { href: "/vardiyali-personel-servisi", label: "Vardiya", title: "Vardiyalı personel servisi" },
    { href: "/fabrika-personel-tasimaciligi", label: "Üretim", title: "Fabrika personel taşımacılığı" },
    { href: "/personel-servisi-fiyatlari", label: "Ticari niyet", title: "Personel servisi fiyatları" },
  ],
};

export default function EuropeRegionPage() { return <RegionLandingPage data={data} />; }
