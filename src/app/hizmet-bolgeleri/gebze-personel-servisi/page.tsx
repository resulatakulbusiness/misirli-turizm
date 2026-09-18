import type { Metadata } from "next";
import districtImage from "../../../../public/images/misirli-turizm-kurumsal-personel-servisi.webp";
import { DistrictPage, type DistrictPageData } from "@/components/district-page";

export const metadata: Metadata = {
  title: "Gebze Personel Servisi | GOSB Taşımacılığı",
  description:
    "Gebze ve GOSB için vardiya, personel bölgeleri, durak, güzergâh ve kapasiteyi birlikte planlayan kurumsal personel servisi.",
  alternates: { canonical: "/hizmet-bolgeleri/gebze-personel-servisi" },
  openGraph: {
    title: "Gebze Personel Servisi | GOSB Taşımacılığı",
    description: "Gebze işletmeleri için vardiya ve tesis yönüne göre planlanan kurumsal personel taşımacılığı.",
    url: "/hizmet-bolgeleri/gebze-personel-servisi",
    siteName: "Mısırlı Turizm",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/images/misirli-turizm-kurumsal-personel-servisi.webp", width: 1920, height: 1080, alt: "Gebze ve GOSB personel servisi" }],
  },
};

const data: DistrictPageData = {
  slug: "gebze-personel-servisi",
  district: "Gebze",
  province: "Kocaeli",
  parentRegion: { name: "Kocaeli", href: "/hizmet-bolgeleri/kocaeli-personel-servisi" },
  eyebrow: "Gebze · GOSB · sanayi ve lojistik aksı",
  title: "Gebze Personel Servisi",
  accent: "vardiya ve tesis yönüne göre planlanır.",
  summary: (
    <p>
      <strong>Gebze personel servisi</strong> planı; ilçenin geniş sanayi ve lojistik yapısı ile
      çalışanların İstanbul ve Kocaeli yönlü ikamet bölgeleri arasındaki günlük hareketi aynı
      rota tablosunda buluşturmalıdır. Mısırlı Turizm, personel konumlarını ve vardiya saatlerini
      güvenli durak, uygulanabilir güzergâh ve hat bazlı kapasite kararına dönüştürür.
    </p>
  ),
  schemaDescription:
    "Gebze ve GOSB işletmeleri için personel bölgeleri, vardiyalar, güvenli duraklar, güzergâhlar ve araç kapasitesini birlikte ele alan kurumsal personel servisi planlama hizmeti.",
  image: districtImage,
  imageAlt: "Gebze GOSB için vardiyalı personel taşımacılığı servis aracı",
  imageCaption: "GOSB hatlarında kontrollü vardiya akışı",
  keywords: ["Gebze personel servisi", "GOSB personel servisi", "Gebze personel taşımacılığı"],
  officialContext: {
    sourceHref: "https://www.kobitek.com/gebze_organize_sanayi_bolgesi",
    sourceLabel: "Gebze Organize Sanayi Bölgesi hakkında yayımlanan bilgiler",
    title: "GOSB, İstanbul–Kocaeli aksının en büyük sanayi kümelerinden biridir.",
    text: (
      <p>
        Yayımlanan bilgilere göre 1985 yılında kurulan GOSB, 10.370.000 m²’lik toplam alanda
        230 parsel üzerine kurulu olup bugün 88’in üzerinde firmayı barındırmaktadır. Bölgede
        yaklaşık 9.500 kişi istihdam edilmekte, tam doluluğa ulaşıldığında bu rakamın 45 bin
        kişiye çıkması hedeflenmektedir. Bu ölçek, <strong>GOSB personel taşımacılığı</strong>
        planında vardiya çakışmalarının, parsel yönünün ve giriş kapısının ayrı
        değerlendirilmesini gerektirir.
      </p>
    ),
    metrics: [
      { value: "10.370.000 m²", label: "GOSB toplam alanı" },
      { value: "88+", label: "Faal sanayi firması" },
      { value: "≈9.500", label: "Mevcut istihdam (hedef 45.000)" },
    ],
  },
  localPlanning: {
    kicker: "Yerel operasyon gerçekliği",
    title: "Gebze’de doğru hat, sanayi bölgesinin iç yapısından çıkar.",
    lead: (
      <p>
        <strong>Gebze personel taşımacılığı</strong> talebinde tesisin GOSB içindeki hangi
        parselde, hangi kapıya yakın olduğu ve vardiyanın TEM otoyolu ile bağlantı yollarındaki
        yoğunlukla çakışıp çakışmadığı birlikte incelenir.
      </p>
    ),
    cards: [
      {
        title: "GOSB kapısı ve parsel yönü",
        text: (
          <p>
            Aynı sanayi bölgesindeki iki tesis, farklı giriş kapıları ve iç yol düzeni nedeniyle
            aynı durak sırasıyla verimli çalışmayabilir. Hat, gerçek tesis erişimine göre
            sonlandırılır.
          </p>
        ),
      },
      {
        title: "Sanayi ve lojistik vardiya yoğunluğu",
        text: (
          <p>
            Üretim ve lojistik tesislerinde çok vardiyalı çalışma yaygındır; servis varış
            toleransı ile vardiya değişim saati birlikte hesaplanır.
          </p>
        ),
      },
      {
        title: "İstanbul–Kocaeli sınırı hareketi",
        text: (
          <p>
            Tuzla, Pendik ve Çayırova’dan gelen personel; TEM otoyolu ve sahil yolu bağlantısına
            göre ayrı ya da bağlantılı hatlarda değerlendirilir.
          </p>
        ),
      },
    ],
  },
  zones: {
    kicker: "Personel toplama kümeleri",
    title: "Gebze’nin farklı bölgeleri aynı durak mantığıyla yönetilmez.",
    lead: (
      <p>
        Aşağıdaki bölgeler kesin ve sabit güzergâh vaadi değildir. <strong>Gebze personel
        servisi güzergâhı</strong>, çalışanların gerçek dağılımı ve tesis yönü doğrulandıktan
        sonra bu yerel kümeler üzerinden değerlendirilir.
      </p>
    ),
    items: [
      {
        label: "Sanayi merkezi",
        title: "GOSB ve Çayırova OSB",
        text: (
          <p>
            Sanayi sitesi girişleri, iç yol yoğunluğu ve vardiya değişim saatleri rota
            sonlandırmasını doğrudan etkiler.
          </p>
        ),
        tags: ["GOSB", "Çayırova OSB", "TOSB"],
      },
      {
        label: "Merkez yerleşim",
        title: "Gebze merkez ve Osmangazi Mahallesi",
        text: (
          <p>
            Yerleşim içi duraklarda yürüme mesafesi, ana arter çıkışı ve güvenli bekleme
            imkânı dengelenerek gereksiz mahalle içi dolaşım azaltılmaya çalışılır.
          </p>
        ),
        tags: ["Gebze merkez", "Osmangazi", "Güzeller"],
      },
      {
        label: "TEM aksı",
        title: "TEM otoyolu ve bağlantı yolları",
        text: (
          <p>
            Ağır tonajlı taşımacılıkla paylaşılan TEM bağlantı yollarında personel servis
            saatleri, yoğun trafik penceresine göre ayrıca planlanır.
          </p>
        ),
        tags: ["TEM otoyolu", "D-100 bağlantısı", "Gebze çıkışı"],
      },
      {
        label: "Kocaeli bağlantısı",
        title: "Dilovası ve Çayırova yönü",
        text: (
          <p>
            Gebze’ye komşu ilçelerden gelen personel yoğunluğu yeterliyse ayrı veya bağlantılı
            hat seçenekleri değerlendirilir.
          </p>
        ),
        tags: ["Dilovası", "Çayırova", "Kocaeli aksı"],
      },
      {
        label: "İstanbul bağlantısı",
        title: "Tuzla ve Pendik yönü",
        text: (
          <p>
            İstanbul Anadolu Yakası’ndan Gebze’deki tesislere çalışan getiren işletmeler için
            il sınırını aşan hat senaryoları ayrıca değerlendirilir.
          </p>
        ),
        tags: ["Tuzla", "Pendik", "İl sınırı hattı"],
      },
    ],
  },
  strategy: {
    kicker: "Hat ve durak stratejisi",
    title: "TEM’e en yakın rota, her vardiyada en doğru rota olmayabilir.",
    text: (
      <p>
        <strong>GOSB personel taşımacılığı</strong> planında TEM otoyolu bağlantısı kadar
        servis aracının vardiya öncesi tesise hangi yönden yaklaşacağı da önemlidir. Ağır
        vasıta trafiği ve OSB iç yollarındaki yoğunluk farklı saatlerde yeniden
        değerlendirilir.
      </p>
    ),
    points: [
      "Personel noktalarını tesis yönüne göre bölgesel kümelere ayırma",
      "Güvenli ve erişilebilir duraklarla mahalle içi dolaşımı dengeleme",
      "Vardiya öncesinde gerçekçi varış tamponu oluşturma",
      "GOSB kapısı, iç yol ve indirme noktasını rota hesabına katma",
      "Hat doluluğunu uygun araç kapasitesiyle eşleştirme",
    ],
  },
  process: {
    kicker: "Gebze rota çalışması",
    title: "Personel listesinden uygulanabilir hatta dört adım.",
    lead: (
      <p>
        <strong>Gebze kurumsal personel servisi</strong> hazır bir rota kataloğundan seçilmez.
        Her işletmenin çalışan dağılımı, vardiya saati ve tesis kapısı farklı olduğu için
        kararlar aynı veri seti üzerinden birlikte kurulur.
      </p>
    ),
    steps: [
      { title: "Tesis ve vardiya verisini netleştirme", text: <p>İşyeri konumu, kapı erişimi, çalışma günleri, vardiya giriş–çıkışları ve erken varış ihtiyacı alınır.</p> },
      { title: "Personel bölgelerini kümeleme", text: <p>Çalışanların genel konumları; Gebze içi ve çevre ilçe yönleri bakımından güvenli durak gruplarına ayrılır.</p> },
      { title: "Hat, süre ve kapasiteyi karşılaştırma", text: <p>Alternatif durak sıraları, trafik penceresi, tahmini yolculuk süresi ve araç doluluğu aynı tabloda incelenir.</p> },
      { title: "Saha başlangıcı ve iyileştirme", text: <p>Onaylanan plan sahada gözlenir; personel, vardiya veya tesis koşulu değiştiğinde ilgili hat yeniden değerlendirilir.</p> },
    ],
  },
  pricing: {
    kicker: "Ticari değerlendirme",
    title: "Gebze personel servisi fiyatı hangi verilere göre değişir?",
    text: (
      <p>
        <strong>Gebze personel servisi fiyatları</strong> yalnız araç kapasitesi veya ilçe
        adına göre belirlenmez. Aynı personel sayısı; durakların yönü, vardiya adedi, GOSB içi
        bekleme ve çalışma takvimi değiştiğinde farklı bir operasyon ihtiyacı doğurabilir.
      </p>
    ),
    factors: [
      "Toplam hat mesafesi ve tesis yönü",
      "Personel bölgelerinin dağılımı ve durak sayısı",
      "Vardiya, sefer ve çalışma günü adedi",
      "GOSB içi erişim ve bekleme koşulları",
      "Hat bazında gerekli araç kapasitesi",
      "TEM otoyolu, ağır vasıta yoğunluğu veya özel saha ihtiyacı",
    ],
  },
  faqs: [
    { question: "Gebze personel servisi nasıl planlanır?", answer: "Önce tesis konumu ve vardiya saatleri alınır. Çalışanların genel ikamet bölgeleri güvenli durak kümelerine ayrılır; alternatif güzergâh, süre ve kapasite seçenekleri karşılaştırıldıktan sonra saha planı oluşturulur." },
    { question: "GOSB için vardiyalı personel servisi kurulabilir mi?", answer: "Evet. Sanayi ve lojistik tesislerinde yaygın olan çok vardiyalı düzenler için sabah, akşam ve gece giriş–çıkış saatleri ayrı değerlendirilir." },
    { question: "Dilovası’ndan Gebze’deki tesise personel servisi planlanabilir mi?", answer: "Personel yoğunluğu, durak erişimi, vardiya saati ve tesis yönü uygun olduğunda Dilovası–Gebze aksı için hat senaryosu değerlendirilebilir." },
    { question: "İstanbul’dan Gebze’ye personel taşınabilir mi?", answer: "Tuzla ve Pendik gibi komşu bölgelerden yeterli personel yoğunluğu varsa il sınırını aşan hat seçenekleri değerlendirilebilir; kesin güzergâh çalışan konumları görülmeden belirlenmez." },
    { question: "Gebze personel servisi fiyatı nasıl hesaplanır?", answer: "Fiyat; toplam mesafe, durak sayısı, vardiya ve sefer adedi, çalışma günleri, araç kapasitesi, bekleme süresi ve GOSB’ye özel erişim koşullarına göre hazırlanır." },
    { question: "Mevcut GOSB servis güzergâhı yeniden düzenlenebilir mi?", answer: "Mevcut hat; personel noktaları, doluluk, durak sırası, vardiya uyumu ve toplam süre açısından incelenebilir. Gereksiz kesişmeler veya sorunlu duraklar için yeni rota seçenekleri hazırlanabilir." },
    { question: "Teklif almak için kesin çalışan adresleri gerekir mi?", answer: "İlk ön değerlendirmede mahalle veya genel bölge düzeyi çoğu zaman yeterlidir. Kesin durak çalışması gerektiğinde ayrıntılar kurumun güvenli veri paylaşım süreci içinde netleştirilir." },
  ],
  related: [
    { href: "/hizmet-bolgeleri/kocaeli-personel-servisi", label: "Üst bölge", title: "Kocaeli personel servisi" },
    { href: "/hizmet-bolgeleri/dilovasi-personel-servisi", label: "Komşu ilçe", title: "Dilovası personel servisi" },
    { href: "/27-1-personel-servisi", label: "Kapasite", title: "27+1 personel servisi" },
    { href: "/vardiyali-personel-servisi", label: "Vardiya", title: "Vardiyalı personel servisi" },
  ],
};

export default function GebzePersonnelServicePage() {
  return <DistrictPage data={data} />;
}
