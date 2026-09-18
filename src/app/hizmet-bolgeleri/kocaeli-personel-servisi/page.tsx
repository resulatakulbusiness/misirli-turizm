import type { Metadata } from "next";
import factoryImage from "../../../../public/images/hero-vardiyali-fabrika-servisi.webp";
import personnelImage from "../../../../public/images/misirli-turizm-kurumsal-personel-servisi.webp";
import { RegionLandingPage, type RegionLandingPageData } from "@/components/region-landing-page";

export const metadata: Metadata = {
  title: "Kocaeli Personel Servisi | Kurumsal Taşımacılık",
  description:
    "Kocaeli personel servisi için OSB yoğunluğu, vardiya, durak ve güzergâhı birlikte planlayan kurumsal çözüm. Gebze, Dilovası ve çevresi için hat planlaması.",
  alternates: { canonical: "/hizmet-bolgeleri/kocaeli-personel-servisi" },
  openGraph: {
    title: "Kocaeli Personel Servisi | Mısırlı Turizm",
    description: "Kocaeli işletmeleri için çalışan dağılımı, vardiya ve OSB yönüne göre kurumsal servis planlama.",
    url: "/hizmet-bolgeleri/kocaeli-personel-servisi",
    siteName: "Mısırlı Turizm",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/images/hero-vardiyali-fabrika-servisi.webp", width: 1920, height: 1080, alt: "Kocaeli personel servisi" }],
  },
};

const data: RegionLandingPageData = {
  slug: "kocaeli-personel-servisi",
  side: "Kocaeli",
  province: "Kocaeli",
  eyebrow: "Kocaeli · OSB yoğunluklu kurumsal ulaşım",
  title: "Kocaeli Personel Servisi",
  accent: "sanayi yoğunluğuna göre kurulur.",
  summary: (
    <p>
      <strong>Kocaeli personel servisi</strong> planı, Türkiye’nin en yoğun sanayi
      illerinden birinde çalışan on binlerce personelin vardiya saatine, tesis yönüne ve
      organize sanayi bölgesi (OSB) giriş düzenine göre kurulmalıdır. Mısırlı Turizm, hazır
      bir güzergâh satmak yerine kuruma özgü durak, hat ve kapasite senaryoları oluşturur.
    </p>
  ),
  image: factoryImage,
  imageAlt: "Kocaeli OSB bölgesinde vardiyalı personel servisi operasyonu",
  secondaryImage: personnelImage,
  secondaryImageAlt: "Kocaeli kurumsal personel taşımacılığı servis aracı",
  keywords: ["Kocaeli personel servisi", "Kocaeli personel taşımacılığı", "Kocaeli OSB servisi"],
  schemaDescription:
    "Kocaeli işletmeleri için çalışan bölgeleri, vardiya saatleri, güvenli duraklar, güzergâhlar ve araç kapasitesini birlikte planlayan kurumsal personel servisi hizmeti.",
  overview: {
    kicker: "İlin sanayi ölçeğine göre planlama",
    title: "Kocaeli tek bir OSB veya tek bir trafik koridoru değildir.",
    text: (
      <p>
        Kocaeli Valiliği’nin yayımladığı bilgilere göre il genelinde 14 organize sanayi
        bölgesinde 150 binden fazla personel istihdam edilmektedir; Kocaeli Sanayi Odası
        verilerine göre ise odaya kayıtlı yaklaşık 3.950 firma bulunmakta ve sanayi, il
        GSYH’sinin yaklaşık %41,1’ini oluşturmaktadır. Bu ölçek, <strong>Kocaeli personel
        taşımacılığı</strong> planında tek bir “ilçe” veya “OSB” yaklaşımının yeterli
        olmadığını gösterir. Gebze, Dilovası, Çayırova, Darıca, Körfez ve İzmit’teki tesisler
        farklı vardiya ritimlerine, farklı D-100/TEM bağlantılarına ve farklı OSB giriş
        kurallarına sahiptir.
      </p>
    ),
    notes: [
      "D-100, TEM ve bağlantı yollarındaki yoğunluğu vardiya saatine göre karşılaştırma",
      "OSB kapısı ile personel indirme noktasını hesaba katma",
      "Metal, kimya ve otomotiv ağırlıklı tesislerde vardiya çakışmalarını ayrı değerlendirme",
      "Tek uzun hat yerine ilçe bazlı, yönetilebilir hat kümeleri kurma",
    ],
  },
  corridors: {
    kicker: "Kocaeli alt bölgeleri",
    title: "Her ilçe kendi sanayi ve trafik dinamiğiyle planlanır.",
    lead: (
      <p>
        Aşağıdaki kümeler sabit güzergâh vaadi değildir. <strong>Kocaeli servis güzergâhı</strong>,
        işletmenin gerçek çalışan dağılımı görüldükten sonra bu bağlantılar üzerinden şekillendirilir.
      </p>
    ),
    items: [
      {
        eyebrow: "Yayımlanan ilçe sayfası",
        title: "Dilovası ve DOSB",
        text: (
          <p>
            Metal ve kimya ağırlıklı DOSB’de yoğun vardiya trafiği; İstanbul yönünden gelen
            personelle birlikte değerlendirilir.
          </p>
        ),
        tags: ["Dilovası", "DOSB", "İMES"],
        href: "/hizmet-bolgeleri/dilovasi-personel-servisi",
      },
      {
        eyebrow: "Yayımlanan ilçe sayfası",
        title: "Gebze ve GOSB",
        text: (
          <p>
            GOSB, TOSB ve Çayırova aksındaki tesislerde vardiya giriş yoğunluğu ile TEM
            bağlantısı birlikte planlanır.
          </p>
        ),
        tags: ["Gebze", "GOSB", "TOSB"],
        href: "/hizmet-bolgeleri/gebze-personel-servisi",
      },
      {
        eyebrow: "Sahil sanayi aksı",
        title: "Körfez ve Derince",
        text: (
          <p>
            Liman, rafineri ve ağır sanayi tesislerinde vardiya değişim trafiği ile sahil
            yolu yoğunluğu birlikte değerlendirilir.
          </p>
        ),
        tags: ["Körfez", "Derince", "Yarımca"],
      },
      {
        eyebrow: "Merkez ve karma yerleşim",
        title: "İzmit ve Başiskele",
        text: (
          <p>
            İl merkezi ve çevresindeki karma sanayi–konut dokusu, durak erişimi ile ana arter
            yönünün birlikte kurulmasını gerektirir.
          </p>
        ),
        tags: ["İzmit", "Başiskele", "Yahyakaptan"],
      },
      {
        eyebrow: "İstanbul bağlantısı",
        title: "Çayırova ve Darıca",
        text: (
          <p>
            İstanbul Anadolu Yakası’na yakınlığı nedeniyle bu bölgede çalışan personel dağılımı
            genellikle iki il arasında değerlendirilir.
          </p>
        ),
        tags: ["Çayırova", "Darıca", "Tavşancıl"],
      },
      {
        eyebrow: "Genişleyen sanayi ekseni",
        title: "Gebze–Dilovası koridoru",
        text: (
          <p>
            İki ilçe arasındaki yoğun sanayi hattında personel toplama noktaları, tesislerin
            OSB içindeki konumuna göre ayrıca kümelenir.
          </p>
        ),
        tags: ["Gebze", "Dilovası", "OSB koridoru"],
      },
    ],
  },
  route: {
    kicker: "İnteraktif rota mantığı",
    title: "Personel listesinden OSB kapısına uzanan karar zinciri.",
    text: (
      <p>
        <strong>Kocaeli kurumsal personel servisi</strong> için her durak aynı öncelikte
        değildir. Güvenli erişim, OSB iç yol yoğunluğu, TEM–D-100 alternatifleri ve vardiyadan
        önce tesise ulaşma toleransı birlikte hesaplanır.
      </p>
    ),
    nodes: ["Personel bölgelerini haritalama", "Güvenli durak kümelerini oluşturma", "TEM–D-100 alternatiflerini karşılaştırma", "OSB kapısı ve vardiya varışını doğrulama"],
  },
  planning: {
    kicker: "Kurumsal çalışma modeli",
    title: "Tekliften saha başlangıcına dört kontrollü aşama.",
    lead: (
      <p>
        Her <strong>Kocaeli personel servisi</strong> çalışması kurumun gerçek verisiyle
        başlar. Personel sayısı tek başına araç veya hat kararını belirlemez.
      </p>
    ),
    steps: [
      { title: "İhtiyaç ve vardiya verisi", text: <p>Tesis konumu, OSB kapısı, çalışma günleri, giriş–çıkış saatleri ve personel sayısı netleştirilir.</p> },
      { title: "Bölge ve durak kümeleri", text: <p>Çalışanların genel konumları, tesis yönü ve güvenli erişim bakımından birbirine yakın kümelere ayrılır.</p> },
      { title: "Rota ve kapasite senaryosu", text: <p>Hat uzunluğu, tahmini süre, doluluk ve araç kapasitesi alternatifleri karşılaştırılır.</p> },
      { title: "Saha kontrolü ve iyileştirme", text: <p>Onaylanan plan izlenir; vardiya, personel veya tesis koşulu değiştiğinde ilgili hat yeniden ele alınır.</p> },
    ],
  },
  useCases: {
    kicker: "İşletme senaryoları",
    title: "Metal, kimya, otomotiv ve lojistik aynı plan değildir.",
    text: (
      <p>
        Mısırlı Turizm, <strong>Kocaeli personel taşıma firmaları</strong> araştırması yapan
        işletmelere yalnız araç kapasitesiyle yaklaşmaz. Sektörün vardiya disiplini ve OSB
        içindeki trafik yoğunluğu hizmet modelinin ana parçasıdır.
      </p>
    ),
    items: [
      "GOSB, DOSB ve TOSB’daki üretim tesisleri",
      "Körfez ve Derince’deki liman–rafineri çevresi operasyonlar",
      "Otomotiv ve yan sanayi tedarikçilerinin çoklu vardiya düzeni",
      "İzmit ve Başiskele’deki karma sanayi–hizmet işletmeleri",
      "Birden fazla OSB’ye yayılan kurumsal operasyonlar",
    ],
  },
  faqs: [
    { question: "Kocaeli personel servisi hangi ilçelerde planlanabilir?", answer: "Gebze, Dilovası, Çayırova, Darıca, Körfez, Derince, İzmit ve Başiskele başta olmak üzere; çalışan dağılımı, tesis yönü ve saha uygunluğuna göre değerlendirilir." },
    { question: "İstanbul ile Kocaeli arasında personel taşınabilir mi?", answer: "Evet, özellikle Çayırova ve Darıca bölgesinde İstanbul Anadolu Yakası ile Kocaeli arasındaki personel yoğunluğu birlikte değerlendirilebilir." },
    { question: "GOSB ve DOSB için ayrı servis hattı kurulabilir mi?", answer: "Evet. Her OSB’nin kendi kapı ve iç yol düzeni olduğu için tesis kapısı, vardiya saati ve çalışan yoğunluğu doğrulandıktan sonra ayrı veya bağlantılı hat seçenekleri hazırlanabilir." },
    { question: "Kocaeli’de vardiyalı personel servisi kurulabilir mi?", answer: "Sabah, akşam, gece veya çoklu vardiya giriş–çıkışları ayrı ayrı planlanabilir; araç döngüsü ile çalışan bekleme süresi aynı modelde değerlendirilir." },
    { question: "Kocaeli personel servisi fiyatı nasıl belirlenir?", answer: "Toplam hat mesafesi, durak sayısı, vardiya ve sefer adedi, OSB içi bekleme koşulları ve gerekli araç kapasitesine göre hazırlanır." },
    { question: "27+1 kapasiteli araç Kocaeli’deki yoğun hatlarda kullanılabilir mi?", answer: "Evet. Tek yöne yoğun personel akışı olan OSB hatlarında 27+1 kapasiteli araç değerlendirilebilir; durak dağılımı uygunsa sefer sayısını azaltabilir." },
  ],
  related: [
    { href: "/hizmet-bolgeleri", label: "Genel bakış", title: "Hizmet bölgeleri" },
    { href: "/fabrika-personel-tasimaciligi", label: "Üretim", title: "Fabrika personel taşımacılığı" },
    { href: "/vardiyali-personel-servisi", label: "Vardiya", title: "Vardiyalı personel servisi" },
    { href: "/27-1-personel-servisi", label: "Kapasite", title: "27+1 personel servisi" },
  ],
};

export default function KocaeliPersonnelServicePage() {
  return <RegionLandingPage data={data} />;
}
