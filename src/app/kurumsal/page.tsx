import type { Metadata } from "next";
import officeImage from "../../../public/images/hero-kurumsal-ofis-servisi.webp";
import personnelImage from "../../../public/images/misirli-turizm-kurumsal-personel-servisi.webp";
import { OverviewPage, type OverviewPageData } from "@/components/overview-page";

export const metadata: Metadata = {
  title: "Kurumsal | Mısırlı Turizm Personel Taşımacılığı",
  description: "Mısırlı Turizm’in personel lokasyonu, vardiya, güzergâh ve saha kontrolünü birleştiren kurumsal hizmet yaklaşımını inceleyin.",
  alternates: { canonical: "/kurumsal" },
  openGraph: {
    title: "Kurumsal | Mısırlı Turizm",
    description: "İstanbul işletmeleri için veriyle başlayan, sahada kontrol edilen kurumsal personel ulaşımı yaklaşımı.",
    url: "/kurumsal",
    siteName: "Mısırlı Turizm",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/images/hero-kurumsal-ofis-servisi.webp", width: 1920, height: 1080, alt: "Mısırlı Turizm kurumsal personel ulaşımı" }],
  },
};

const data: OverviewPageData = {
  slug: "kurumsal",
  schemaType: "AboutPage",
  breadcrumb: "Kurumsal",
  eyebrow: "Mısırlı Turizm · kurumsal yaklaşım",
  title: "Kurumsal Personel Ulaşımı",
  accent: "araçtan önce doğru planla başlar.",
  summary: <p>Mısırlı Turizm, İstanbul’daki işletmeler için yalnız servis aracı sağlayan bir firma gibi konumlanmaz. <strong>Kurumsal personel taşımacılığı</strong> ihtiyacını; çalışanların konumları, vardiya düzeni, güvenli duraklar, tesis yönü ve günlük operasyon kontrolüyle birlikte ele alan B2B çözüm ortağıdır.</p>,
  image: officeImage,
  imageAlt: "Mısırlı Turizm kurumsal ofis personel servisi",
  secondaryImage: personnelImage,
  secondaryImageAlt: "Mısırlı Turizm markalı kurumsal personel servis aracı",
  keywords: ["Mısırlı Turizm", "kurumsal personel taşımacılığı", "B2B servis çözümü"],
  schemaDescription: "Mısırlı Turizm’in İstanbul işletmeleri için personel lokasyonu, vardiya, durak, güzergâh ve saha kontrolünü birleştiren kurumsal personel ulaşımı yaklaşımı.",
  intro: {
    kicker: "Kurumsal konumlandırma",
    title: "Taşıma işini işletmenin günlük operasyonunun parçası olarak görürüz.",
    text: <p>Çalışanların mesaiye zamanında ulaşması, bir aracın belirli saatte hareket etmesinden daha geniş bir konudur. Personel dağılımı değişebilir, vardiyalar çakışabilir, güvenli olmayan duraklar saha sorununa dönüşebilir ve tesis girişindeki yoğunluk planlanan süreyi etkileyebilir. Mısırlı Turizm bu değişkenleri tek tek görünür hâle getirerek <strong>kurumsal servis operasyonunu</strong> ölçülü, uygulanabilir ve güncellenebilir bir modele dönüştürmeyi amaçlar.</p>,
    notes: ["İnsan kaynakları, idari işler ve satın alma ekipleriyle ortak veri dili", "Personel gizliliğini gözeten bölgesel ön değerlendirme", "Vardiya ve tesis kapısını rota kararının merkezine alma", "Kanıtlanmamış performans, filo veya deneyim rakamı kullanmama"],
  },
  items: {
    kicker: "Çalışma ilkeleri",
    title: "Kurumsal güven, görünür kontrol noktalarıyla kurulur.",
    lead: <p>Mısırlı Turizm’in kurumsal dili soyut vaatlerden değil, teklif ve operasyon sürecinde doğrulanabilen karar noktalarından oluşur.</p>,
    cards: [
      { label: "Planlama", title: "Veriye dayalı başlangıç", text: <p>Tesis, vardiya, personel bölgesi, çalışma günü ve hedef tarih alınmadan hazır rota veya kesin kapasite varsayımı yapılmaz.</p> },
      { label: "Uygulanabilirlik", title: "Saha gerçekliği", text: <p>Harita süresi tek başına yeterli kabul edilmez; durak erişimi, ana artere çıkış ve tesis kapısındaki yoğunluk hesaba katılır.</p> },
      { label: "Şeffaflık", title: "Karar değişkenleri", text: <p>Fiyatı ve operasyonu etkileyen mesafe, durak, vardiya, sefer ve kapasite değişkenleri kurumla açık biçimde paylaşılır.</p> },
      { label: "Süreklilik", title: "Değişime uyum", text: <p>Personel veya vardiya düzeni değiştiğinde eski planın otomatik olarak doğru kaldığı varsayılmaz; ilgili hat yeniden değerlendirilir.</p> },
      { label: "İletişim", title: "Doğrudan kurumsal kanal", text: <p>Telefon, WhatsApp ve e-posta üzerinden teklif öncesi gerekli veriler paylaşılır; görüşme gerçek operasyon ihtiyacı üzerinden ilerler.</p>, href: "/iletisim" },
      { label: "Yerel bağlam", title: "Pendik merkezli İstanbul yaklaşımı", text: <p>Doğrulanmış Kaynarca–Pendik adresi kurumsal varlığı destekler; hizmet planı Avrupa ve Anadolu Yakası için ayrı sayfalarda ele alınır.</p>, href: "/hizmet-bolgeleri" },
    ],
  },
  process: {
    kicker: "Kurumsal iş akışı",
    title: "Her adımın bir girdisi ve kontrol noktası vardır.",
    text: <p><strong>Mısırlı Turizm personel taşımacılığı</strong> yaklaşımı; satış vaadinden değil, kurumun paylaşabildiği doğru veri ve sahada uygulanabilir karar zincirinden ilerler.</p>,
    steps: [
      { label: "Keşif", title: "İhtiyaç görüşmesi", text: <p>İşletme tipi, tesis, personel, vardiya ve mevcut sorunlar anlaşılır.</p> },
      { label: "Model", title: "Planlama çalışması", text: <p>Bölgeler, duraklar, rota seçenekleri, süre ve kapasite birlikte değerlendirilir.</p> },
      { label: "Karar", title: "Teklif ve kapsam", text: <p>Hizmet kapsamı ve fiyatı etkileyen değişkenler net bir çerçevede sunulur.</p> },
      { label: "Operasyon", title: "Saha başlangıcı", text: <p>Onaylanan plan uygulamaya alınır ve başlangıçtaki saha davranışı kontrol edilir.</p> },
      { label: "Gelişim", title: "Değişim yönetimi", text: <p>Personel, vardiya veya tesis koşulu değiştiğinde planın ilgili bölümü güncellenir.</p> },
    ],
  },
  focus: {
    kicker: "B2B çözüm ortağı",
    title: "Kurumsallık; tasarım, içerik ve operasyonda aynı dili konuşur.",
    text: <p>Web sitesindeki ayrı hizmet ve bölge sayfaları da bu yaklaşımın dijital karşılığıdır. Her sayfa farklı kullanıcı niyetine cevap verir; anahtar kelime değiştirerek çoğaltılmış içerik kullanılmaz. <strong>Mısırlı Turizm kurumsal</strong> yapısı, doğrulanmış iletişim verileri ve şeffaf süreç anlatımıyla desteklenir.</p>,
    points: ["Doğrulanmış telefon ve WhatsApp: 0537 565 19 35", "Kurumsal e-posta: info@misirliturizm.com", "Doğrulanmış konum: Kaynarca, Pendik/İstanbul", "Avrupa ve Anadolu Yakası için ayrı SEO mimarisi", "Mobil uyumlu, hızlı ve erişilebilir iletişim akışı"],
  },
  faqs: [
    { question: "Mısırlı Turizm ne iş yapar?", answer: "İstanbul’daki işletmeler için personel lokasyonu, vardiya, güvenli durak, güzergâh ve operasyonu birlikte ele alan kurumsal personel taşımacılığı hizmeti sunar." },
    { question: "Araç kiralama hizmeti sunuyor musunuz?", answer: "Araç veya filo kiralama ayrı bir hizmet değildir. Ana hizmet, kurumun personel ulaşım ihtiyacını planlamak ve kurumsal servis operasyonunu yönetmektir." },
    { question: "Mısırlı Turizm’in adresi nedir?", answer: "Doğrulanmış adres Kaynarca Mahallesi, Deniz Caddesi No:83, Kapı No:32, Pendik/İstanbul’dur. Ziyaret öncesinde telefonla iletişim kurulması önerilir." },
    { question: "Hangi işletmeler için personel servisi planlanabilir?", answer: "Ofis, fabrika, üretim tesisi, depo, lojistik merkezi ve vardiyalı işletmeler için çalışan dağılımı ve saha uygunluğuna göre planlama yapılabilir." },
    { question: "Teklif süreci nasıl başlar?", answer: "Tesis konumu, yaklaşık personel sayısı, vardiya saatleri, çalışma günleri ve çalışanların genel bölgeleri paylaşılır; ilk rota ve kapasite değerlendirmesi bu verilerle yapılır." },
    { question: "Kişisel çalışan adreslerini hemen paylaşmak gerekir mi?", answer: "Hayır. İlk değerlendirmede mahalle veya genel bölge seviyesi çoğu zaman yeterlidir. Kesin durak çalışmasında veri paylaşımı kurumun güvenli sürecine göre ilerler." },
  ],
};

export default function CorporatePage() { return <OverviewPage data={data} />; }
