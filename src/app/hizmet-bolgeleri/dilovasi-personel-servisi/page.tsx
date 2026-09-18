import type { Metadata } from "next";
import districtImage from "../../../../public/images/hero-vardiyali-fabrika-servisi.webp";
import { DistrictPage, type DistrictPageData } from "@/components/district-page";

export const metadata: Metadata = {
  title: "Dilovası Personel Servisi | DOSB Taşımacılığı",
  description:
    "Dilovası ve DOSB için vardiya, personel bölgeleri, durak, güzergâh ve kapasiteyi birlikte planlayan kurumsal personel servisi.",
  alternates: { canonical: "/hizmet-bolgeleri/dilovasi-personel-servisi" },
  openGraph: {
    title: "Dilovası Personel Servisi | DOSB Taşımacılığı",
    description: "Dilovası ve DOSB işletmeleri için vardiya ve tesis yönüne göre planlanan kurumsal personel taşımacılığı.",
    url: "/hizmet-bolgeleri/dilovasi-personel-servisi",
    siteName: "Mısırlı Turizm",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/images/hero-vardiyali-fabrika-servisi.webp", width: 1920, height: 1080, alt: "Dilovası ve DOSB personel servisi" }],
  },
};

const data: DistrictPageData = {
  slug: "dilovasi-personel-servisi",
  district: "Dilovası",
  province: "Kocaeli",
  parentRegion: { name: "Kocaeli", href: "/hizmet-bolgeleri/kocaeli-personel-servisi" },
  eyebrow: "Dilovası · DOSB · metal ve kimya sanayi",
  title: "Dilovası Personel Servisi",
  accent: "vardiya ve tesis yönüne göre planlanır.",
  summary: (
    <p>
      <strong>Dilovası personel servisi</strong> planı; ilçenin yoğun metal ve kimya sanayi
      yapısı ile çalışanların ikamet bölgeleri arasındaki günlük hareketi aynı rota tablosunda
      buluşturmalıdır. Mısırlı Turizm, personel konumlarını ve vardiya saatlerini güvenli
      durak, uygulanabilir güzergâh ve hat bazlı kapasite kararına dönüştürür.
    </p>
  ),
  schemaDescription:
    "Dilovası ve DOSB işletmeleri için personel bölgeleri, vardiyalar, güvenli duraklar, güzergâhlar ve araç kapasitesini birlikte ele alan kurumsal personel servisi planlama hizmeti.",
  image: districtImage,
  imageAlt: "Dilovası DOSB için vardiyalı personel taşımacılığı servis aracı",
  imageCaption: "DOSB hatlarında kontrollü vardiya akışı",
  keywords: ["Dilovası personel servisi", "DOSB personel servisi", "Dilovası personel taşımacılığı"],
  officialContext: {
    sourceHref: "https://turkishtimedergi.com/ortak-akil/dilovasi-organize-sanayi-bolgesi/",
    sourceLabel: "Dilovası Organize Sanayi Bölgesi hakkında yayımlanan bilgiler",
    title: "DOSB, standart bir sanayi sitesi değildir.",
    text: (
      <p>
        Yayımlanan bilgilere göre 2002 yılında kurulan DOSB yaklaşık 900 hektarlık (≈8,5
        milyon m²) bir alanda faaliyet göstermekte, 240’ın üzerinde sanayi kuruluşunu
        barındırmakta ve yaklaşık 15 bin kişiye istihdam sağlamaktadır. Bölgede metal ve kimya
        sektöründeki firmalar ağırlıktadır; Türkiye’nin en büyük 500 sanayi kuruluşundan
        13’ünün burada faaliyet gösterdiği belirtilmektedir. Bu ölçek, <strong>DOSB personel
        taşımacılığı</strong> planında vardiya çakışmalarının ve kapı yönünün ayrı
        değerlendirilmesini gerektirir.
      </p>
    ),
    metrics: [
      { value: "≈900 hektar", label: "DOSB toplam alanı" },
      { value: "240+", label: "Faal sanayi kuruluşu" },
      { value: "≈15 bin", label: "Yayımlanan istihdam rakamı" },
    ],
  },
  localPlanning: {
    kicker: "Yerel operasyon gerçekliği",
    title: "Dilovası’nda doğru hat, sanayi bölgesinin iç yapısından çıkar.",
    lead: (
      <p>
        <strong>Dilovası personel taşımacılığı</strong> talebinde tesisin DOSB içindeki hangi
        parselde, hangi kapıya yakın olduğu ve vardiyanın sahil yolu ile bağlantı yollarındaki
        yoğunlukla çakışıp çakışmadığı birlikte incelenir.
      </p>
    ),
    cards: [
      {
        title: "DOSB kapısı ve parsel yönü",
        text: (
          <p>
            Aynı sanayi bölgesindeki iki tesis, farklı giriş kapıları ve iç yol düzeni nedeniyle
            aynı durak sırasıyla verimli çalışmayabilir. Hat, gerçek tesis erişimine göre
            sonlandırılır.
          </p>
        ),
      },
      {
        title: "Metal–kimya vardiya yoğunluğu",
        text: (
          <p>
            Sürekli üretim yapan metal ve kimya tesislerinde gece vardiyası yaygındır; servis
            varış toleransı ile vardiya değişim saati birlikte hesaplanır.
          </p>
        ),
      },
      {
        title: "İstanbul–Kocaeli sınırı hareketi",
        text: (
          <p>
            Çayırova, Gebze ve İstanbul Anadolu Yakası’ndan gelen personel; sahil yolu ve TEM
            bağlantısına göre ayrı ya da bağlantılı hatlarda değerlendirilir.
          </p>
        ),
      },
    ],
  },
  zones: {
    kicker: "Personel toplama kümeleri",
    title: "Dilovası’nın farklı bölgeleri aynı durak mantığıyla yönetilmez.",
    lead: (
      <p>
        Aşağıdaki bölgeler kesin ve sabit güzergâh vaadi değildir. <strong>Dilovası personel
        servisi güzergâhı</strong>, çalışanların gerçek dağılımı ve tesis yönü doğrulandıktan
        sonra bu yerel kümeler üzerinden değerlendirilir.
      </p>
    ),
    items: [
      {
        label: "Sanayi merkezi",
        title: "DOSB ve İMES",
        text: (
          <p>
            Sanayi sitesi girişleri, iç yol yoğunluğu ve vardiya değişim saatleri rota
            sonlandırmasını doğrudan etkiler.
          </p>
        ),
        tags: ["DOSB", "İMES", "Tavşancıl OSB"],
      },
      {
        label: "Merkez yerleşim",
        title: "Dilovası ve Diliskelesi",
        text: (
          <p>
            Yerleşim içi duraklarda yürüme mesafesi, ana arter çıkışı ve güvenli bekleme
            imkânı dengelenerek gereksiz mahalle içi dolaşım azaltılmaya çalışılır.
          </p>
        ),
        tags: ["Dilovası merkez", "Diliskelesi", "Tavşancıl"],
      },
      {
        label: "Sahil aksı",
        title: "Sahil yolu ve liman çevresi",
        text: (
          <p>
            Ağır tonajlı taşımacılıkla paylaşılan sahil yolunda personel servis saatleri, yoğun
            trafik penceresine göre ayrıca planlanır.
          </p>
        ),
        tags: ["Sahil yolu", "Liman çevresi", "D-100 bağlantısı"],
      },
      {
        label: "Kocaeli bağlantısı",
        title: "Gebze ve Çayırova yönü",
        text: (
          <p>
            Dilovası’na komşu ilçelerden gelen personel yoğunluğu yeterliyse ayrı veya
            bağlantılı hat seçenekleri değerlendirilir.
          </p>
        ),
        tags: ["Gebze", "Çayırova", "Kocaeli aksı"],
      },
      {
        label: "İstanbul bağlantısı",
        title: "Tuzla ve Pendik yönü",
        text: (
          <p>
            İstanbul Anadolu Yakası’ndan Dilovası’ndaki tesislere çalışan getiren işletmeler
            için il sınırını aşan hat senaryoları ayrıca değerlendirilir.
          </p>
        ),
        tags: ["Tuzla", "Pendik", "İl sınırı hattı"],
      },
    ],
  },
  strategy: {
    kicker: "Hat ve durak stratejisi",
    title: "Sahil yoluna en yakın rota, her vardiyada en doğru rota olmayabilir.",
    text: (
      <p>
        <strong>DOSB personel taşımacılığı</strong> planında sahil yolu bağlantısı kadar
        servis aracının vardiya öncesi tesise hangi yönden yaklaşacağı da önemlidir. Ağır
        vasıta trafiği ve OSB iç yollarındaki yoğunluk farklı saatlerde yeniden
        değerlendirilir.
      </p>
    ),
    points: [
      "Personel noktalarını tesis yönüne göre bölgesel kümelere ayırma",
      "Güvenli ve erişilebilir duraklarla mahalle içi dolaşımı dengeleme",
      "Gece vardiyası öncesinde gerçekçi varış tamponu oluşturma",
      "DOSB kapısı, iç yol ve indirme noktasını rota hesabına katma",
      "Hat doluluğunu uygun araç kapasitesiyle eşleştirme",
    ],
  },
  process: {
    kicker: "Dilovası rota çalışması",
    title: "Personel listesinden uygulanabilir hatta dört adım.",
    lead: (
      <p>
        <strong>Dilovası kurumsal personel servisi</strong> hazır bir rota kataloğundan
        seçilmez. Her işletmenin çalışan dağılımı, vardiya saati ve tesis kapısı farklı olduğu
        için kararlar aynı veri seti üzerinden birlikte kurulur.
      </p>
    ),
    steps: [
      { title: "Tesis ve vardiya verisini netleştirme", text: <p>İşyeri konumu, kapı erişimi, çalışma günleri, vardiya giriş–çıkışları ve erken varış ihtiyacı alınır.</p> },
      { title: "Personel bölgelerini kümeleme", text: <p>Çalışanların genel konumları; Dilovası içi ve çevre ilçe yönleri bakımından güvenli durak gruplarına ayrılır.</p> },
      { title: "Hat, süre ve kapasiteyi karşılaştırma", text: <p>Alternatif durak sıraları, trafik penceresi, tahmini yolculuk süresi ve araç doluluğu aynı tabloda incelenir.</p> },
      { title: "Saha başlangıcı ve iyileştirme", text: <p>Onaylanan plan sahada gözlenir; personel, vardiya veya tesis koşulu değiştiğinde ilgili hat yeniden değerlendirilir.</p> },
    ],
  },
  pricing: {
    kicker: "Ticari değerlendirme",
    title: "Dilovası personel servisi fiyatı hangi verilere göre değişir?",
    text: (
      <p>
        <strong>Dilovası personel servisi fiyatları</strong> yalnız araç kapasitesi veya ilçe
        adına göre belirlenmez. Aynı personel sayısı; durakların yönü, vardiya adedi, DOSB içi
        bekleme ve çalışma takvimi değiştiğinde farklı bir operasyon ihtiyacı doğurabilir.
      </p>
    ),
    factors: [
      "Toplam hat mesafesi ve tesis yönü",
      "Personel bölgelerinin dağılımı ve durak sayısı",
      "Vardiya, sefer ve çalışma günü adedi",
      "DOSB içi erişim ve bekleme koşulları",
      "Hat bazında gerekli araç kapasitesi",
      "Sahil yolu, ağır vasıta yoğunluğu veya özel saha ihtiyacı",
    ],
  },
  faqs: [
    { question: "Dilovası personel servisi nasıl planlanır?", answer: "Önce tesis konumu ve vardiya saatleri alınır. Çalışanların genel ikamet bölgeleri güvenli durak kümelerine ayrılır; alternatif güzergâh, süre ve kapasite seçenekleri karşılaştırıldıktan sonra saha planı oluşturulur." },
    { question: "DOSB için vardiyalı personel servisi kurulabilir mi?", answer: "Evet. Metal ve kimya sektöründe yaygın olan gece vardiyası dâhil, sabah, akşam ve çoklu vardiya düzenleri için giriş–çıkış saatleri ayrı değerlendirilir." },
    { question: "Gebze’den Dilovası’ndaki tesise personel servisi planlanabilir mi?", answer: "Personel yoğunluğu, durak erişimi, vardiya saati ve tesis yönü uygun olduğunda Gebze–Dilovası aksı için hat senaryosu değerlendirilebilir." },
    { question: "İstanbul’dan Dilovası’na personel taşınabilir mi?", answer: "Tuzla ve Pendik gibi komşu bölgelerden yeterli personel yoğunluğu varsa il sınırını aşan hat seçenekleri değerlendirilebilir; kesin güzergâh çalışan konumları görülmeden belirlenmez." },
    { question: "Dilovası personel servisi fiyatı nasıl hesaplanır?", answer: "Fiyat; toplam mesafe, durak sayısı, vardiya ve sefer adedi, çalışma günleri, araç kapasitesi, bekleme süresi ve DOSB’ye özel erişim koşullarına göre hazırlanır." },
    { question: "Mevcut DOSB servis güzergâhı yeniden düzenlenebilir mi?", answer: "Mevcut hat; personel noktaları, doluluk, durak sırası, vardiya uyumu ve toplam süre açısından incelenebilir. Gereksiz kesişmeler veya sorunlu duraklar için yeni rota seçenekleri hazırlanabilir." },
    { question: "Teklif almak için kesin çalışan adresleri gerekir mi?", answer: "İlk ön değerlendirmede mahalle veya genel bölge düzeyi çoğu zaman yeterlidir. Kesin durak çalışması gerektiğinde ayrıntılar kurumun güvenli veri paylaşım süreci içinde netleştirilir." },
  ],
  related: [
    { href: "/hizmet-bolgeleri/kocaeli-personel-servisi", label: "Üst bölge", title: "Kocaeli personel servisi" },
    { href: "/hizmet-bolgeleri/gebze-personel-servisi", label: "Komşu ilçe", title: "Gebze personel servisi" },
    { href: "/27-1-personel-servisi", label: "Kapasite", title: "27+1 personel servisi" },
    { href: "/vardiyali-personel-servisi", label: "Vardiya", title: "Vardiyalı personel servisi" },
  ],
};

export default function DilovasiPersonnelServicePage() {
  return <DistrictPage data={data} />;
}
