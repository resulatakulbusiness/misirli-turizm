import type { Metadata } from "next";
import officeImage from "../../../../public/images/hero-kurumsal-ofis-servisi.webp";
import personnelImage from "../../../../public/images/misirli-turizm-kurumsal-personel-servisi.webp";
import { RegionLandingPage, type RegionLandingPageData } from "@/components/region-landing-page";

export const metadata: Metadata = {
  title: "Anadolu Yakası Personel Servisi | Kurumsal Taşımacılık",
  description: "İstanbul Anadolu Yakası personel servisi için Tuzla, Pendik, Ümraniye ve iş merkezi akslarında vardiya ve güzergâh planlama.",
  alternates: { canonical: "/hizmet-bolgeleri/istanbul-anadolu-yakasi-personel-servisi" },
  openGraph: {
    title: "Anadolu Yakası Personel Servisi | Mısırlı Turizm",
    description: "Anadolu Yakası işletmeleri için çalışan bölgeleri, tesis yönü ve vardiyaya göre kurumsal servis planlama.",
    url: "/hizmet-bolgeleri/istanbul-anadolu-yakasi-personel-servisi",
    siteName: "Mısırlı Turizm",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/images/hero-kurumsal-ofis-servisi.webp", width: 1920, height: 1080, alt: "İstanbul Anadolu Yakası personel servisi" }],
  },
};

const data: RegionLandingPageData = {
  slug: "istanbul-anadolu-yakasi-personel-servisi",
  side: "İstanbul Anadolu Yakası",
  eyebrow: "Anadolu Yakası · kurumsal personel ulaşımı",
  title: "İstanbul Anadolu Yakası Personel Servisi",
  accent: "sanayi ve iş merkezi yönüyle planlanır.",
  summary: <p><strong>Anadolu Yakası personel servisi</strong> planı; Tuzla–Pendik üretim ve lojistik aksını, Dudullu çevresindeki sanayi hareketini, Ataşehir–Ümraniye ofis yoğunluğunu ve çalışanların yerleşim dağılımını aynı operasyon tablosunda değerlendirmelidir. Mısırlı Turizm, vardiya ve güzergâh kararlarını kurumun gerçek verisine göre kurar.</p>,
  image: officeImage,
  imageAlt: "İstanbul Anadolu Yakası kurumsal ofis personel servisi",
  secondaryImage: personnelImage,
  secondaryImageAlt: "Pendik ve Tuzla yönünde kurumsal personel servis aracı",
  keywords: ["Anadolu Yakası personel servisi", "Anadolu Yakası personel taşımacılığı", "Pendik personel servisi"],
  schemaDescription: "İstanbul Anadolu Yakası işletmeleri için çalışan bölgeleri, vardiya saatleri, güvenli duraklar, güzergâhlar ve araç kapasitesini birlikte planlayan kurumsal personel servisi hizmeti.",
  overview: {
    kicker: "Yakaya özel planlama",
    title: "Sahil, TEM ve sanayi aksları aynı rota mantığıyla çalışmaz.",
    text: <p><strong>İstanbul Anadolu Yakası personel taşımacılığı</strong> talebinde Tuzla ve Pendik yönündeki sanayi–lojistik trafiği; Ataşehir, Kozyatağı ve Ümraniye iş merkezlerinin mesai ritminden ayrılır. Kartal–Maltepe sahil hattı ile Sancaktepe–Sultanbeyli üst bölge bağlantılarında durak erişimi ve tesise yaklaşma yönü değişir. Bu nedenle personel noktaları ilçe sınırına göre değil, gerçek hareket yönü ve vardiya penceresine göre kümelenir.</p>,
    notes: ["D-100, TEM ve bağlantı yollarını vardiya saatine göre karşılaştırma", "Tuzla–Pendik sanayi girişleri ile tesis kapısını rota hesabına katma", "Sahil ve üst bölge duraklarını yolculuk süresine göre dengeleme", "Köprü geçişli uzun hatları ayrı kapasite senaryolarıyla değerlendirme"],
  },
  corridors: {
    kicker: "Anadolu Yakası alt bölgeleri",
    title: "Üretim, ofis ve yerleşim aksları ayrı kümelerle okunur.",
    lead: <p><strong>Anadolu Yakası servis güzergâhı</strong> için aşağıdaki bölgeler başlangıç çerçevesidir. Kesin hat, çalışan noktaları ile işyeri giriş yönü doğrulandıktan sonra oluşturulur.</p>,
    items: [
      { eyebrow: "Merkez ve saha konumu", title: "Pendik, Kaynarca ve Kurtköy", text: <p>Mısırlı Turizm’in doğrulanmış Pendik konumu; D-100, sahil, TEM ve Sabiha Gökçen çevresindeki işletme akslarına erişim bakımından yerel operasyon bağlamı sağlar.</p>, tags: ["Pendik", "Kaynarca", "Kurtköy"] },
      { eyebrow: "Sanayi ve tersane", title: "Tuzla, Orhanlı ve Aydınlı", text: <p>OSB, tersane, üretim ve depo girişlerinde vardiya değişim trafiği ile tesis kapısı servis varış süresinin temel bileşenidir.</p>, tags: ["Tuzla", "Orhanlı", "Aydınlı"] },
      { eyebrow: "Sahil–üst bölge", title: "Kartal, Maltepe ve Yakacık", text: <p>Sahil yönü ile üst mahallelerden D-100’e iniş aynı hatta birleşmeden önce durak sırası ve yolculuk süresi bakımından test edilir.</p>, tags: ["Kartal", "Maltepe", "Yakacık"] },
      { eyebrow: "Doğu yerleşimleri", title: "Sancaktepe, Sultanbeyli ve Samandıra", text: <p>Dağınık yerleşim dokusu, bağlantı yolları ve yoğun saat yönü; güvenli durak kümelerinin ana arterlere yakın kurulmasını gerektirebilir.</p>, tags: ["Sancaktepe", "Sultanbeyli", "Samandıra"] },
      { eyebrow: "Sanayi–ofis kesişimi", title: "Ümraniye, Dudullu ve Çakmak", text: <p>Dudullu sanayi alanları ile Ümraniye iş merkezleri farklı vardiya ve mesai pencerelerinde çalıştığı için hatlar ihtiyaca göre ayrıştırılır.</p>, tags: ["Ümraniye", "Dudullu", "Çakmak"] },
      { eyebrow: "Finans ve ofis aksı", title: "Ataşehir, Kozyatağı ve Çekmeköy", text: <p>Plaza giriş saatleri, TEM bağlantısı ve çalışanların farklı yönlere yayılması; servis kalkış sırasını ve kapasite kararını etkiler.</p>, tags: ["Ataşehir", "Kozyatağı", "Çekmeköy"] },
    ],
  },
  route: {
    kicker: "İnteraktif rota mantığı",
    title: "Durak sayısından önce yön ve zaman penceresi belirlenir.",
    text: <p><strong>Anadolu Yakası kurumsal personel servisi</strong> için kısa mesafe her zaman kısa yolculuk anlamına gelmez. Kavşak yönü, D-100 veya TEM’e katılım, tesis giriş trafiği ve vardiya toleransı birlikte ele alınır. Amaç çalışan beklemesini, gereksiz mahalle dolaşımını ve hatların birbirini kesmesini azaltan uygulanabilir bir servis düzenidir.</p>,
    nodes: ["Personel bölgelerini yönlerine göre ayırma", "Erişilebilir ve güvenli durakları belirleme", "D-100–TEM seçeneklerini vardiyayla test etme", "Tesis girişi ve araç kapasitesini eşleştirme"],
  },
  planning: {
    kicker: "Kurumsal çalışma modeli",
    title: "Veriyi rota, durak ve saha kontrolüne dönüştüren süreç.",
    lead: <p><strong>Anadolu Yakası personel servisi</strong> planında işletme tipi ve vardiya düzeni; aynı personel sayısında bile farklı hat ve araç ihtiyacı doğurabilir.</p>,
    steps: [
      { title: "Tesis ve çalışma düzeni", text: <p>İşyeri adresi, giriş kapısı, çalışma günleri, vardiyalar ve hedef başlangıç tarihi ilk veri setini oluşturur.</p> },
      { title: "Çalışan dağılımı", text: <p>Personelin genel bölgeleri; sahil, üst bölge, sanayi ve komşu ilçe yönleri bakımından kümelenir.</p> },
      { title: "Hat ve kapasite modeli", text: <p>Durak sırası, tahmini süre, trafik penceresi ve araç doluluğu alternatif planlarda karşılaştırılır.</p> },
      { title: "Operasyon takibi", text: <p>Sahadaki süre ve durak davranışı izlenir; vardiya veya personel değişiminde ilgili hat güncellenir.</p> },
    ],
  },
  useCases: {
    kicker: "İşletme senaryoları",
    title: "Pendik merkezli yerel bağlam, İstanbul geneli planlama disiplini.",
    text: <p>Doğrulanmış Kaynarca–Pendik adresi, Mısırlı Turizm’in Anadolu Yakası’ndaki kurumsal varlığını destekler; ancak hizmet planı yalnız yakın çevreyle sınırlandırılmaz. <strong>Anadolu Yakası personel taşıma firması</strong> arayan işletmeler için rota uygunluğu saha verisi üzerinden değerlendirilir.</p>,
    items: ["Tuzla OSB, tersane ve üretim tesisleri", "Pendik, Kurtköy ve havaalanı çevresi operasyonları", "Ataşehir–Ümraniye plaza ve ofis servisleri", "Dudullu sanayi ve depo çalışanı hatları", "Çoklu vardiya ve iki yakaya yayılan çalışan senaryoları"],
  },
  faqs: [
    { question: "Anadolu Yakası personel servisi hangi ilçelerde planlanabilir?", answer: "Pendik, Tuzla, Kartal, Maltepe, Ataşehir, Ümraniye, Sancaktepe, Sultanbeyli, Çekmeköy ve diğer Anadolu Yakası ilçeleri saha uygunluğu ile birlikte değerlendirilebilir." },
    { question: "Mısırlı Turizm’in Anadolu Yakası konumu nerede?", answer: "Doğrulanmış iletişim adresi Kaynarca Mahallesi, Deniz Caddesi No:83, Kapı No:32, Pendik/İstanbul’dur. Ziyaret veya operasyon görüşmesi öncesinde telefonla iletişim kurulması önerilir." },
    { question: "Tuzla OSB için vardiyalı personel servisi planlanabilir mi?", answer: "Evet. Tesis kapısı, vardiya saatleri, çalışan bölgeleri ve OSB giriş trafiği alınarak Tuzla yönü için ayrı veya bağlantılı hat seçenekleri hazırlanabilir." },
    { question: "Pendik ve Kartal aynı hatta birleştirilebilir mi?", answer: "Personel yoğunluğu, durakların tesis yönündeki sırası ve vardiya saati uygunsa değerlendirilebilir. Uzun yolculuk veya gereksiz kesişme oluşursa ayrı hat önerilir." },
    { question: "İki yaka arasında personel servisi kurulabilir mi?", answer: "Köprü geçişi, trafik yönü, vardiya toleransı ve çalışan yoğunluğu uygun olduğunda seçenek oluşturulabilir; çoğu durumda süre riskini azaltmak için ayrı hatlar da karşılaştırılır." },
    { question: "Anadolu Yakası personel servisi fiyatını neler etkiler?", answer: "Hat mesafesi, durak sayısı, vardiya ve sefer adedi, araç kapasitesi, çalışma günleri, köprü–otoyol kullanımı ve saha bekleme koşulları fiyat değerlendirmesine girer." },
  ],
  related: [
    { href: "/personel-tasimaciligi", label: "Ana hizmet", title: "Kurumsal personel taşımacılığı" },
    { href: "/vardiyali-personel-servisi", label: "Vardiya", title: "Vardiyalı personel servisi" },
    { href: "/kurumsal-servis-guzergah-planlama", label: "Rota", title: "Güzergâh ve durak planlama" },
    { href: "/iletisim", label: "Pendik", title: "İletişim ve doğrulanmış konum" },
  ],
};

export default function AsiaRegionPage() { return <RegionLandingPage data={data} />; }
