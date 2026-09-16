import type { Metadata } from "next";
import districtImage from "../../../../public/images/hero-vardiyali-fabrika-servisi.webp";
import { DistrictPage, type DistrictPageData } from "@/components/district-page";

export const metadata: Metadata = {
  title: "Başakşehir Personel Servisi | İkitelli OSB Taşımacılığı",
  description:
    "Başakşehir ve İkitelli OSB için vardiya, personel bölgeleri, durak, güzergâh ve kapasiteyi birlikte planlayan kurumsal personel servisi.",
  alternates: { canonical: "/hizmet-bolgeleri/basaksehir-personel-servisi" },
  openGraph: {
    title: "Başakşehir Personel Servisi | İkitelli OSB Taşımacılığı",
    description:
      "Başakşehir ve İkitelli OSB işletmeleri için vardiya ve tesis yönüne göre planlanan kurumsal personel taşımacılığı.",
    url: "/hizmet-bolgeleri/basaksehir-personel-servisi",
    siteName: "Mısırlı Turizm",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/hero-vardiyali-fabrika-servisi.webp",
        width: 1920,
        height: 1080,
        alt: "Başakşehir ve İkitelli OSB personel servisi",
      },
    ],
  },
};

const data: DistrictPageData = {
  slug: "basaksehir-personel-servisi",
  district: "Başakşehir",
  eyebrow: "Başakşehir · İkitelli OSB · kurumsal ulaşım",
  title: "Başakşehir Personel Servisi",
  accent: "vardiya ve tesis yönüne göre planlanır.",
  summary: (
    <p>
      <strong>Başakşehir personel servisi</strong> planı; ilçenin konut bölgeleri ile
      İkitelli OSB, üretim, depo ve ticaret alanları arasındaki günlük hareketi aynı rota
      tablosunda buluşturmalıdır. Mısırlı Turizm, personel konumlarını ve vardiya saatlerini
      güvenli durak, uygulanabilir güzergâh ve hat bazlı kapasite kararına dönüştürür.
    </p>
  ),
  schemaDescription:
    "Başakşehir ve İkitelli OSB işletmeleri için personel bölgeleri, vardiyalar, güvenli duraklar, güzergâhlar ve araç kapasitesini birlikte ele alan kurumsal personel servisi planlama hizmeti.",
  image: districtImage,
  imageAlt:
    "Başakşehir ve İkitelli OSB vardiyalı personel taşımacılığı için kurumsal servis aracı",
  imageCaption: "İkitelli OSB ve Başakşehir hatlarında kontrollü vardiya akışı",
  keywords: [
    "Başakşehir personel servisi",
    "İkitelli personel servisi",
    "İkitelli OSB personel taşımacılığı",
  ],
  officialContext: {
    sourceHref: "https://iosb.org.tr/hakkimizda/",
    sourceLabel: "İkitelli OSB resmî genel bilgileri",
    title: "İkitelli OSB, sıradan bir varış noktası değildir.",
    text: (
      <p>
        İkitelli OSB’nin yayımladığı genel bilgilere göre bölge yaklaşık 7 milyon metrekarelik
        brüt alana, 200–250 bin çalışan istihdamına ve günlük yaklaşık 300 bin kişilik yolcu
        hareketine sahiptir. Bu ölçek, <strong>İkitelli personel servisi</strong> planında
        vardiya çakışmalarının, kapı yönünün ve OSB içi hareketin ayrı değerlendirilmesini gerektirir.
      </p>
    ),
    metrics: [
      { value: "≈7 milyon m²", label: "İOSB brüt alanı" },
      { value: "200–250 bin", label: "Yayımlanan çalışan aralığı" },
      { value: "≈300 bin", label: "Günlük yolcu hareketi" },
    ],
  },
  localPlanning: {
    kicker: "Yerel operasyon gerçekliği",
    title: "Başakşehir’de doğru hat, ilçe adından değil hareket yönünden çıkar.",
    lead: (
      <p>
        <strong>Başakşehir personel taşımacılığı</strong> talebinde çalışanların yalnızca
        hangi mahallede bulunduğu yeterli değildir. Tesisin İkitelli OSB içinde hangi kapıya
        yakın olduğu, vardiyanın TEM ve bağlantı yollarındaki yoğunlukla çakışıp çakışmadığı
        ve personelin hangi yönden toplandığı birlikte incelenir.
      </p>
    ),
    cards: [
      {
        title: "OSB kapısı ve tesis yönü",
        text: (
          <p>
            Aynı sanayi bölgesindeki iki tesis, farklı giriş kapıları ve iç yol düzeni nedeniyle
            aynı durak sırasıyla verimli çalışmayabilir. Hat, gerçek tesis erişimine göre sonlandırılır.
          </p>
        ),
      },
      {
        title: "Vardiya çakışması",
        text: (
          <p>
            Sabah, akşam ve gece vardiyalarında servis varış toleransı ile çevredeki üretim
            tesislerinin ortak giriş saatleri karşılaştırılır; yalnız harita süresine güvenilmez.
          </p>
        ),
      },
      {
        title: "Yerleşim–sanayi dengesi",
        text: (
          <p>
            Kayaşehir, Başakşehir merkez, Bahçeşehir veya çevre ilçelerden gelen personel aynı
            hatta toplanmadan önce yön, süre, doluluk ve güvenli durak bakımından kümelenir.
          </p>
        ),
      },
    ],
  },
  zones: {
    kicker: "Personel toplama kümeleri",
    title: "Başakşehir’in farklı bölgeleri aynı durak mantığıyla yönetilmez.",
    lead: (
      <p>
        Aşağıdaki bölgeler kesin ve sabit güzergâh vaadi değildir. <strong>Başakşehir personel
        servisi güzergâhı</strong>, çalışanların gerçek dağılımı ve tesis yönü doğrulandıktan sonra
        bu yerel kümeler üzerinden değerlendirilir.
      </p>
    ),
    items: [
      {
        label: "Sanayi ve üretim",
        title: "İkitelli OSB ve Ziya Gökalp",
        text: (
          <p>
            Sanayi sitesi girişleri, OSB içi trafik ve vardiya değişim saatleri rota sonlandırmasını
            etkiler. Tesis kapısı ile personel indirme noktası teklif öncesinde netleştirilir.
          </p>
        ),
        tags: ["İkitelli OSB", "Ziya Gökalp", "Sanayi siteleri"],
      },
      {
        label: "Merkez yerleşim",
        title: "Başakşehir ve Başak mahalleleri",
        text: (
          <p>
            Yerleşim içi duraklarda yürüme mesafesi, ana arter çıkışı ve servis aracının güvenli
            bekleme imkânı dengelenerek gereksiz mahalle içi dolaşım azaltılmaya çalışılır.
          </p>
        ),
        tags: ["Başakşehir", "Başak", "Onurkent"],
      },
      {
        label: "Kuzey aksı",
        title: "Kayabaşı ve Kayaşehir",
        text: (
          <p>
            Genişleyen yerleşim alanlarında personel noktalarının tek tek dolaşılması yerine ana
            çıkış yönlerine yakın, erişilebilir durak kümeleri ve vardiya bazlı hatlar değerlendirilir.
          </p>
        ),
        tags: ["Kayabaşı", "Kayaşehir", "Fenertepe"],
      },
      {
        label: "Batı yerleşimleri",
        title: "Bahçeşehir, Boğazköy ve Hoşdere",
        text: (
          <p>
            TEM bağlantısı ve sabah yön yoğunluğu, İkitelli veya farklı bir tesis aksına giden
            hatlarda kalkış sırasını ve öngörülen zaman tamponunu değiştirebilir.
          </p>
        ),
        tags: ["Bahçeşehir", "Boğazköy", "Hoşdere"],
      },
      {
        label: "Güneybatı bağlantısı",
        title: "Şahintepe, Güvercintepe ve Altınşehir",
        text: (
          <p>
            Yol eğimi, mahalle içi erişim, ana artere çıkış ve komşu ilçelerden gelen personel
            noktaları birlikte ele alınarak güvenli toplama seçenekleri karşılaştırılır.
          </p>
        ),
        tags: ["Şahintepe", "Güvercintepe", "Altınşehir"],
      },
      {
        label: "Çevre ilçe bağlantısı",
        title: "Küçükçekmece, Bağcılar ve Esenler yönü",
        text: (
          <p>
            İlçe sınırı yerine personelin tesis yönündeki gerçek hareketi esas alınır. Komşu
            ilçelerden gelen yoğunluk yeterliyse ayrı hat veya bağlantılı kapasite modeli kurulur.
          </p>
        ),
        tags: ["Küçükçekmece", "Bağcılar", "Esenler"],
      },
    ],
  },
  strategy: {
    kicker: "Hat ve durak stratejisi",
    title: "TEM’e en hızlı çıkan rota, her vardiyada en doğru rota olmayabilir.",
    text: (
      <p>
        <strong>İkitelli OSB personel taşımacılığı</strong> planında ana yol bağlantısı kadar
        servis aracının vardiya öncesi tesise hangi yönden yaklaşacağı da önemlidir. Basın Ekspres,
        TEM bağlantıları ve OSB iç yollarındaki yoğunluk farklı saatlerde yeniden değerlendirilir.
        Amaç, yalnız kilometreyi değil toplam yolculuk süresini ve çalışan beklemesini dengelemektir.
      </p>
    ),
    points: [
      "Personel noktalarını tesis yönüne göre bölgesel kümelere ayırma",
      "Güvenli ve erişilebilir duraklarla mahalle içi dolaşımı dengeleme",
      "Vardiya girişinden önce gerçekçi varış tamponu oluşturma",
      "OSB kapısı, iç yol ve indirme noktasını rota hesabına katma",
      "Hat doluluğunu uygun araç kapasitesiyle eşleştirme",
    ],
  },
  process: {
    kicker: "Başakşehir rota çalışması",
    title: "Personel listesinden uygulanabilir hatta dört adım.",
    lead: (
      <p>
        <strong>Başakşehir kurumsal personel servisi</strong> hazır bir rota kataloğundan
        seçilmez. Her işletmenin çalışan dağılımı, vardiya saati ve tesis kapısı farklı olduğu için
        kararlar aynı veri seti üzerinden birlikte kurulur.
      </p>
    ),
    steps: [
      {
        title: "Tesis ve vardiya verisini netleştirme",
        text: <p>İşyeri konumu, kapı erişimi, çalışma günleri, vardiya giriş–çıkışları ve erken varış ihtiyacı alınır.</p>,
      },
      {
        title: "Personel bölgelerini kümeleme",
        text: <p>Çalışanların genel konumları; Başakşehir içi ve çevre ilçe yönleri bakımından güvenli durak gruplarına ayrılır.</p>,
      },
      {
        title: "Hat, süre ve kapasiteyi karşılaştırma",
        text: <p>Alternatif durak sıraları, trafik penceresi, tahmini yolculuk süresi ve araç doluluğu aynı tabloda incelenir.</p>,
      },
      {
        title: "Saha başlangıcı ve iyileştirme",
        text: <p>Onaylanan plan sahada gözlenir; personel, vardiya veya tesis koşulu değiştiğinde ilgili hat yeniden değerlendirilir.</p>,
      },
    ],
  },
  pricing: {
    kicker: "Ticari değerlendirme",
    title: "Başakşehir personel servisi fiyatı hangi verilere göre değişir?",
    text: (
      <p>
        <strong>Başakşehir personel servisi fiyatları</strong> yalnız araç kapasitesi veya ilçe
        adına göre belirlenmez. Aynı personel sayısı; durakların yönü, vardiya adedi, OSB içi
        bekleme ve çalışma takvimi değiştiğinde farklı bir operasyon ihtiyacı doğurabilir.
      </p>
    ),
    factors: [
      "Toplam hat mesafesi ve tesis yönü",
      "Personel bölgelerinin dağılımı ve durak sayısı",
      "Vardiya, sefer ve çalışma günü adedi",
      "İkitelli OSB içi erişim ve bekleme koşulları",
      "Hat bazında gerekli araç kapasitesi",
      "Köprü, otoyol, fazla mesai veya özel saha ihtiyacı",
    ],
  },
  faqs: [
    {
      question: "Başakşehir personel servisi nasıl planlanır?",
      answer:
        "Önce tesis konumu ve vardiya saatleri alınır. Çalışanların genel ikamet bölgeleri güvenli durak kümelerine ayrılır; alternatif güzergâh, süre ve kapasite seçenekleri karşılaştırıldıktan sonra saha planı oluşturulur.",
    },
    {
      question: "İkitelli OSB için vardiyalı personel servisi kurulabilir mi?",
      answer:
        "Evet. Sabah, akşam, gece veya çoklu vardiya düzenleri için giriş–çıkış saatleri ayrı değerlendirilir. OSB kapısı, iç yol yoğunluğu ve araç döngüsü her vardiyanın planına yansıtılır.",
    },
    {
      question: "Bahçeşehir’den İkitelli OSB’ye personel servisi planlanabilir mi?",
      answer:
        "Personel yoğunluğu, durak erişimi, vardiya saati ve tesis yönü uygun olduğunda Bahçeşehir–İkitelli aksı için hat senaryosu değerlendirilebilir. Kesin güzergâh, çalışan konumları görülmeden belirlenmez.",
    },
    {
      question: "Kayaşehir ve Kayabaşı aynı servis hattında olabilir mi?",
      answer:
        "Noktaların tesis yönündeki sırası ve yolcu yoğunluğu uygunsa aynı hat düşünülebilir. Ancak gereksiz dolaşım veya uzun yolculuk oluşuyorsa ayrı durak kümesi ya da farklı kapasite seçeneği değerlendirilir.",
    },
    {
      question: "Başakşehir personel servisi fiyatı nasıl hesaplanır?",
      answer:
        "Fiyat; toplam mesafe, durak sayısı, vardiya ve sefer adedi, çalışma günleri, araç kapasitesi, bekleme süresi ve tesisin özel erişim koşullarına göre hazırlanır.",
    },
    {
      question: "Mevcut İkitelli servis güzergâhı yeniden düzenlenebilir mi?",
      answer:
        "Mevcut hat; personel noktaları, doluluk, durak sırası, vardiya uyumu ve toplam süre açısından incelenebilir. Gereksiz kesişmeler veya sorunlu duraklar için yeni rota seçenekleri hazırlanabilir.",
    },
    {
      question: "Çevre ilçelerden Başakşehir’deki tesise personel alınabilir mi?",
      answer:
        "Evet. Küçükçekmece, Bağcılar, Esenler veya diğer bölgelerde yeterli personel yoğunluğu varsa ayrı ya da bağlantılı hat seçenekleri tesis yönü ve vardiya saatine göre değerlendirilebilir.",
    },
    {
      question: "Teklif almak için kesin çalışan adresleri gerekir mi?",
      answer:
        "İlk ön değerlendirmede mahalle veya genel bölge düzeyi çoğu zaman yeterlidir. Kesin durak çalışması gerektiğinde ayrıntılar kurumun güvenli veri paylaşım süreci içinde netleştirilir.",
    },
  ],
  related: [
    { href: "/personel-tasimaciligi", label: "Ana hizmet", title: "İstanbul kurumsal personel taşımacılığı" },
    { href: "/vardiyali-personel-servisi", label: "Vardiya", title: "Vardiyalı personel servisi" },
    { href: "/fabrika-personel-tasimaciligi", label: "Üretim", title: "Fabrika personel taşımacılığı" },
    { href: "/kurumsal-servis-guzergah-planlama", label: "Rota", title: "Kurumsal güzergâh planlama" },
  ],
};

export default function BasaksehirPersonnelServicePage() {
  return <DistrictPage data={data} />;
}

