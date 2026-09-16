import type { Metadata } from "next";
import factoryImage from "../../../public/images/hero-vardiyali-fabrika-servisi.webp";
import personnelImage from "../../../public/images/hero-personel-tasimaciligi.webp";
import { OverviewPage, type OverviewPageData } from "@/components/overview-page";

export const metadata: Metadata = {
  title: "Personel Taşımacılığı Hizmetleri | Mısırlı Turizm",
  description: "Kurumsal personel taşımacılığı, vardiyalı ve fabrika servisi, güzergâh planlama ve fiyatlandırma hizmetlerini inceleyin.",
  alternates: { canonical: "/hizmetlerimiz" },
  openGraph: {
    title: "Personel Taşımacılığı Hizmetleri | Mısırlı Turizm",
    description: "İstanbul işletmeleri için personel, vardiya, durak, güzergâh ve kapasite odaklı kurumsal servis hizmetleri.",
    url: "/hizmetlerimiz",
    siteName: "Mısırlı Turizm",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/images/hero-personel-tasimaciligi.webp", width: 1920, height: 1080, alt: "Mısırlı Turizm personel taşımacılığı hizmetleri" }],
  },
};

const data: OverviewPageData = {
  slug: "hizmetlerimiz",
  schemaType: "CollectionPage",
  breadcrumb: "Hizmetlerimiz",
  eyebrow: "Kurumsal personel ulaşımı hizmet merkezi",
  title: "Personel Taşımacılığı Hizmetleri",
  accent: "tek operasyon mantığında birleşir.",
  summary: <p><strong>Kurumsal personel taşımacılığı</strong>, yalnızca uygun kapasiteli bir servis aracı seçmek değildir. Çalışan konumları, vardiya saatleri, güvenli duraklar, tesis yönü ve günlük saha kontrolü birlikte yönetilmelidir. Mısırlı Turizm’in tüm hizmet sayfaları bu farklı arama ve karar ihtiyaçlarını ayrı ayrı karşılar.</p>,
  image: personnelImage,
  imageAlt: "Mısırlı Turizm kurumsal personel taşımacılığı hizmeti",
  secondaryImage: factoryImage,
  secondaryImageAlt: "Vardiyalı fabrika personel servisi operasyonu",
  keywords: ["personel taşımacılığı", "personel servisi", "kurumsal servis hizmetleri"],
  schemaDescription: "İstanbul işletmeleri için kurumsal personel taşımacılığı, vardiyalı ve fabrika personel servisi, güzergâh planlama ve fiyat değerlendirme hizmetleri.",
  intro: {
    kicker: "Hizmet yaklaşımı",
    title: "Araçtan önce operasyon ihtiyacını tanımlarız.",
    text: <p>Bir <strong>personel servisi</strong> çalışmasının başarısı, kaç kişilik araç kullanılacağından önce hangi çalışanın hangi vardiyada, hangi güvenli duraktan ve hangi tesis girişine ulaşacağını doğru tanımlamaya bağlıdır. Bu nedenle ana hizmet, vardiya, fabrika, güzergâh ve fiyat sayfalarını birbirinin kopyası olarak değil; kurumun karar sürecindeki farklı soruların cevabı olarak tasarladık. Böylece insan kaynakları, idari işler ve satın alma ekipleri ihtiyaç duyduğu bilgiye ayrı URL üzerinden ulaşabilir.</p>,
    notes: ["Personel bölgelerini tesis yönüyle birlikte değerlendirme", "Vardiya giriş–çıkışlarını ayrı operasyon pencereleri olarak ele alma", "Güvenli durak, rota süresi ve kapasiteyi aynı tabloda karşılaştırma", "Teklif sonrasında saha başlangıcı ve değişim kontrolü"],
  },
  items: {
    kicker: "Ayrı SEO hizmet sayfaları",
    title: "Her hizmet ayrı kullanıcı niyetine cevap verir.",
    lead: <p>Aşağıdaki sayfalar yalnız menü bağlantısı değildir. Her biri özgün başlık, içerik, SSS, yapılandırılmış veri ve bağlamsal iç linklerle hazırlanmış bağımsız bir <strong>personel taşımacılığı hizmeti</strong> sayfasıdır.</p>,
    cards: [
      { label: "Ana hizmet", title: "Kurumsal Personel Taşımacılığı", text: <p>İstanbul’daki işletmeler için çalışan lokasyonu, vardiya, durak, güzergâh ve kapasite kararlarını tek operasyon modelinde açıklar.</p>, href: "/personel-tasimaciligi" },
      { label: "Vardiya", title: "Vardiyalı Personel Servisi", text: <p>Sabah, akşam, gece ve değişken vardiyalarda araç döngüsü, varış toleransı ve saha sürekliliğine odaklanır.</p>, href: "/vardiyali-personel-servisi" },
      { label: "Üretim", title: "Fabrika Personel Taşımacılığı", text: <p>OSB, üretim, depo ve lojistik tesislerinde kapı yönü, vardiya trafiği ve yoğun çalışan kümelerini ele alır.</p>, href: "/fabrika-personel-tasimaciligi" },
      { label: "Rota", title: "Güzergâh ve Durak Planlama", text: <p>Personel listesini güvenli durak, uygulanabilir rota, gerçekçi süre ve hat bazlı kapasite kararına dönüştürür.</p>, href: "/kurumsal-servis-guzergah-planlama" },
      { label: "Ticari değerlendirme", title: "Personel Servisi Fiyatları", text: <p>Mesafe, vardiya, sefer, durak, çalışma günü ve araç kapasitesinin teklif üzerindeki etkisini şeffaflaştırır.</p>, href: "/personel-servisi-fiyatlari" },
      { label: "Yerel SEO", title: "İstanbul Hizmet Bölgeleri", text: <p>Avrupa ve Anadolu Yakası operasyonlarını ayrı sayfalara, ilçeleri ise özgün yerel bağlamla alt kümelere ayırır.</p>, href: "/hizmet-bolgeleri" },
    ],
  },
  process: {
    kicker: "Birleşik hizmet süreci",
    title: "Bilgiden sahaya uzanan kontrollü çalışma modeli.",
    text: <p>Mısırlı Turizm hizmetleri aynı veri akışında buluşur. <strong>Personel servis taşımacılığı</strong> talebi, eksik bilgiyle hazır fiyat veya rota vaadine dönüştürülmez.</p>,
    steps: [
      { label: "Veri", title: "İhtiyacı tanımlama", text: <p>Tesis, personel, vardiya, çalışma günü ve hedef başlangıç bilgileri alınır.</p> },
      { label: "Analiz", title: "Bölge ve durak kümeleri", text: <p>Çalışan noktaları tesis yönü ve güvenli erişim bakımından gruplandırılır.</p> },
      { label: "Plan", title: "Hat ve kapasite seçenekleri", text: <p>Alternatif rotalar, süreler, doluluk ve araç ihtiyacı karşılaştırılır.</p> },
      { label: "Saha", title: "Başlangıç ve kontrol", text: <p>Onaylanan plan uygulanır; değişen personel veya vardiya verisiyle iyileştirilir.</p> },
    ],
  },
  focus: {
    kicker: "Kurumsal ayrışma",
    title: "Yalnız araç sağlayan firma değil, planlama çözüm ortağı.",
    text: <p>Hizmet mimarisinin ortak noktası budur: Mısırlı Turizm ayrı bir araç veya filo kiralama hizmeti sunmaz. <strong>Kurumsal servis çözümü</strong>; işletmenin personel hareketini doğru okumak, uygulanabilir hatları kurmak ve günlük akışı kontrol etmektir.</p>,
    points: ["B2B kurum ihtiyacına özel planlama", "Vardiya ve tesis yönü odaklı güzergâh kararı", "İç linklerle birbirini destekleyen hizmet sayfaları", "Doğrulanmış telefon, e-posta ve Pendik adresi", "Mobil uyumlu teklif ve iletişim akışı"],
  },
  faqs: [
    { question: "Mısırlı Turizm hangi hizmetleri sunuyor?", answer: "Ana hizmet kurumsal personel taşımacılığıdır. Bunun altında vardiyalı personel servisi, fabrika personel taşımacılığı, güzergâh–durak planlama, fiyat değerlendirme ve İstanbul hizmet bölgeleri ayrı bilgi kümeleri olarak sunulur." },
    { question: "Araç veya filo kiralama ayrı bir hizmet mi?", answer: "Hayır. Mısırlı Turizm’in konumlandırması yalnız araç sağlamak değil; personel lokasyonu, vardiya, durak, güzergâh ve operasyonu birlikte planlayan B2B çözüm ortağı olmaktır." },
    { question: "Hangi hizmet sayfasından başlamalıyım?", answer: "Genel kurumsal ihtiyaç için personel taşımacılığı; çoklu çalışma saatleri için vardiyalı servis; üretim ve OSB operasyonu için fabrika personel taşımacılığı sayfasından başlayabilirsiniz." },
    { question: "Güzergâh hazır değilse teklif alınabilir mi?", answer: "Evet. Personelin genel bölgeleri, tesis konumu ve vardiya saatleri paylaşıldığında ilk durak ve rota senaryoları planlama sürecinde oluşturulur." },
    { question: "İstanbul’un iki yakası için hizmet sayfaları ayrı mı?", answer: "Evet. Avrupa Yakası ve Anadolu Yakası farklı trafik, sanayi ve yerleşim yapıları nedeniyle ayrı SEO sayfalarında ele alınır; ilçeler ilgili yakanın alt kümesine bağlanır." },
    { question: "İletişim için hangi kanallar kullanılabilir?", answer: "0537 565 19 35 numarası üzerinden arama veya WhatsApp; info@misirliturizm.com adresi üzerinden yazılı kurumsal iletişim kurulabilir." },
  ],
};

export default function ServicesPage() { return <OverviewPage data={data} />; }
