import type { Metadata } from "next";
import factoryImage from "../../../public/images/hero-vardiyali-fabrika-servisi.webp";
import { ServiceClusterPage, type ServiceClusterData } from "@/components/service-cluster-page";
import clusterStyles from "@/components/service-cluster-page.module.css";

export const metadata: Metadata = {
  title: "27+1 Personel Servisi İstanbul | Mısırlı Turizm",
  description:
    "27+1 kapasiteli midibüs ile kurumsal personel servisi; vardiya, durak ve güzergâhı yüksek yolcu sayısına göre planlayan orta ölçekli servis çözümü.",
  alternates: { canonical: "/27-1-personel-servisi" },
  openGraph: {
    title: "27+1 Personel Servisi İstanbul | Mısırlı Turizm",
    description:
      "Orta ve büyük ölçekli vardiya grupları için 27+1 kapasiteli araçla kurulan kurumsal personel taşımacılığı.",
    url: "/27-1-personel-servisi",
    siteName: "Mısırlı Turizm",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/hero-vardiyali-fabrika-servisi.webp",
        width: 1920,
        height: 1080,
        alt: "İstanbul 27+1 kapasiteli personel servisi için kurumsal araç",
      },
    ],
  },
};

const data: ServiceClusterData = {
  slug: "27-1-personel-servisi",
  breadcrumb: "27+1 Personel Servisi",
  eyebrow: "Orta–büyük ölçekli vardiya grupları",
  title: "27+1 Personel Servisi",
  accent: "doluluk ve durak sayısını dengeler.",
  summary: (
    <p>
      <strong>27+1 personel servisi</strong>, tek bir vardiyada veya tek bir hatta çok sayıda
      çalışanı taşıması gereken işletmeler için araç kapasitesi ile durak sayısı arasında denge
      kurar. Mısırlı Turizm, 27+1 kapasiteli aracı yalnızca “daha büyük bir minibüs” olarak değil,
      hattın doluluk ve süre hesabını değiştiren bir planlama değişkeni olarak ele alır.
    </p>
  ),
  schemaDescription:
    "Orta ve büyük ölçekli vardiya gruplarının taşınması için 27+1 kapasiteli araçla kurulan, durak ve güzergâh dengesini gözeten kurumsal personel servisi hizmeti.",
  serviceType: "27+1 kapasiteli araçla kurumsal personel taşımacılığı",
  image: factoryImage,
  imageAlt: "İstanbul'da 27+1 kapasiteli personel servisi aracına binen çalışanlar",
  imageCaption: "Yüksek doluluklu hatlarda dengeli durak sırası",
  keywords: [
    "27+1 personel servisi",
    "27+1 midibüs kiralama",
    "Kapasiteli personel taşımacılığı",
  ],
  overview: {
    kicker: "27+1 kapasitesi ne zaman doğru seçimdir",
    title: "Kapasite kararı, personel sayısından çok hat yapısına bağlıdır.",
    lead: (
      <p>
        <strong>27+1 kapasiteli araç</strong>, çok sayıda çalışanın az sayıda durakta veya tek
        bir ana güzergâhta toplandığı hatlarda küçük araçlara göre daha verimli çalışır. Ancak
        aynı kapasite; dağınık, çok duraklı bir güzergâhta gereksiz bekleme ve uzun tur süresine
        yol açabilir. Doğru karar, personel dağılımı görülmeden verilmez.
      </p>
    ),
    cards: [
      {
        title: "Doluluk ve durak dengesi",
        text: (
          <p>
            27+1 aracın verimli çalışması için durakların birbirine yakın ve güzergâh sırasının
            mantıklı olması gerekir; aksi hâlde araç büyük olsa da tur süresi uzayabilir.
          </p>
        ),
      },
      {
        title: "Vardiya giriş–çıkış yoğunluğu",
        text: (
          <p>
            Tek bir vardiya değişiminde çok sayıda çalışanın aynı zaman diliminde tesise
            girmesi veya çıkması gerekiyorsa, 27+1 kapasitesi araç sayısını azaltarak
            operasyonu sadeleştirebilir.
          </p>
        ),
      },
      {
        title: "Tek hat, çoklu toplama noktası",
        text: (
          <p>
            Bir OSB veya sanayi bölgesinden tek yöne toplu hareket eden gruplarda, 27+1
            kapasiteli araç ile daha az sayıda sefer düzenlenebilir.
          </p>
        ),
      },
    ],
  },
  visual: {
    kicker: "Araç ve operasyon özellikleri",
    title: "Kapasite, konfordan ödün vermeden kurulur.",
    text: (
      <p>
        27+1 kapasiteli araçlarda koltuk düzeni, klima ve havalandırma dağılımı, bagaj alanı ve
        biniş–iniş süresi; küçük araçlara göre farklı bir planlama gerektirir. Mısırlı Turizm bu
        detayları hattın gerçek kullanım biçimine göre değerlendirir.
      </p>
    ),
    points: [
      "Yüksek yolcu kapasitesiyle daha az araçla daha çok çalışan taşıma",
      "Sabit ana güzergâhlarda tur süresini kısaltan durak sıralaması",
      "Vardiya değişim saatlerinde toplu giriş–çıkışı sadeleştirme",
      "Bagaj, ekipman veya kişisel eşya için ayrılmış alan planlaması",
      "Biniş–iniş süresini kısaltan durak ve kapı düzeni değerlendirmesi",
    ],
  },
  process: {
    kicker: "Kapasite planlama adımları",
    title: "27+1 kararı dört adımlı bir değerlendirmeyle verilir.",
    lead: (
      <p>
        <strong>27+1 personel servisi</strong> talebi geldiğinde önce personel dağılımı ve
        vardiya yapısı incelenir; kapasite kararı bu veriye göre şekillenir.
      </p>
    ),
    steps: [
      {
        title: "Personel sayısı ve dağılımını alma",
        text: (
          <p>
            Toplam çalışan sayısı, vardiya başına düşen yolcu sayısı ve genel ikamet bölgeleri
            netleştirilir.
          </p>
        ),
      },
      {
        title: "Durak yoğunluğunu haritalama",
        text: (
          <p>
            Personelin durak noktalarında ne kadar kümelendiği incelenir; dağınıksa küçük
            araçlı çoklu hat, yoğunsa 27+1 tek hat değerlendirilir.
          </p>
        ),
      },
      {
        title: "Süre ve tur senaryosunu karşılaştırma",
        text: (
          <p>
            27+1 kapasiteli tek hat ile daha küçük araçlı çoklu hat senaryoları; toplam süre ve
            doluluk açısından karşılaştırılır.
          </p>
        ),
      },
      {
        title: "Saha başlangıcı ve doluluk takibi",
        text: (
          <p>
            Seçilen kapasite sahada uygulanır; doluluk oranı düşük veya yüksek çıkarsa kapasite
            yeniden değerlendirilir.
          </p>
        ),
      },
    ],
  },
  decision: {
    kicker: "Kapasite karşılaştırması",
    title: "27+1 mi, daha küçük kapasiteli araç mı?",
    text: (
      <>
        <p>
          Kapasite kararı yalnızca çalışan sayısına göre verilmemelidir; durak yapısı ve
          güzergâh şekli en az personel sayısı kadar belirleyicidir.
        </p>
        <table className={clusterStyles.compareTable}>
          <thead>
            <tr>
              <th scope="col">Durum</th>
              <th scope="col">27+1 kapasiteli araç</th>
              <th scope="col">Küçük kapasiteli araç (örn. 14–19 kişilik)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Durak dağılımı</th>
              <td>Az sayıda, birbirine yakın durak</td>
              <td>Dağınık, çok sayıda küçük durak</td>
            </tr>
            <tr>
              <th scope="row">Vardiya yoğunluğu</th>
              <td>Tek vardiyada yüksek yolcu sayısı</td>
              <td>Küçük veya değişken gruplar</td>
            </tr>
            <tr>
              <th scope="row">Güzergâh yapısı</th>
              <td>Tek ana yöne toplu hareket</td>
              <td>Birden fazla farklı yön</td>
            </tr>
            <tr>
              <th scope="row">Araç sayısı ihtiyacı</th>
              <td>Daha az araçla tek sefer</td>
              <td>Aynı yolcu sayısı için daha çok araç</td>
            </tr>
            <tr>
              <th scope="row">Esneklik</th>
              <td>Rota değişikliğinde daha az esnek</td>
              <td>Küçük grup değişikliklerine daha hızlı uyum</td>
            </tr>
          </tbody>
        </table>
        <ul className={clusterStyles.rightWrongGrid}>
          <li className={clusterStyles.rightWrongWrong}>
            <strong>Yaygın yanlış varsayım</strong>
            En yüksek kapasiteli araç her zaman en ekonomik ve verimli seçimdir.
          </li>
          <li className={clusterStyles.rightWrongRight}>
            <strong>Doğru yaklaşım</strong>
            Durak dağınıksa büyük araç boş koltukla dolaşabilir; kapasite, durak yoğunluğuna
            göre seçilmelidir.
          </li>
          <li className={clusterStyles.rightWrongWrong}>
            <strong>Yaygın yanlış varsayım</strong>
            27+1 araç kullanmak, çalışan sayısı ne olursa olsun sefer sayısını otomatik azaltır.
          </li>
          <li className={clusterStyles.rightWrongRight}>
            <strong>Doğru yaklaşım</strong>
            Sefer sayısı; doluluk oranı, güzergâh süresi ve vardiya toleransıyla birlikte
            hesaplanır.
          </li>
        </ul>
      </>
    ),
    items: [
      "Tek yöne yoğun ve az duraklı hatlarda 27+1 kapasitesi değerlendirilir",
      "Dağınık, çok yönlü personel dağılımında küçük kapasiteli çoklu hat daha uygun olabilir",
      "Kesin karar; personel listesi ve durak haritası görülmeden verilmez",
    ],
  },
  faqs: [
    {
      question: "27+1 ifadesi tam olarak neyi anlatır?",
      answer:
        "27+1, aracın 27 yolcu koltuğu ile 1 sürücü koltuğundan oluşan toplam kapasitesini ifade eden yaygın bir midibüs tanımıdır. Gerçek koltuk düzeni ve konfigürasyon araca göre değişebilir.",
    },
    {
      question: "27+1 kapasiteli araç her güzergâhta verimli midir?",
      answer:
        "Hayır. Durak sayısı fazla ve dağınıksa 27+1 araç tur süresini uzatabilir. Verimlilik; durak yoğunluğu, güzergâh yönü ve vardiya saatine göre değerlendirilir.",
    },
    {
      question: "27+1 servisi ile daha küçük araçlar aynı operasyonda birlikte kullanılabilir mi?",
      answer:
        "Evet. Ana toplu güzergâh 27+1 araçla, dağınık küçük gruplar ise daha küçük kapasiteli araçlarla taşınarak karma bir hat yapısı kurulabilir.",
    },
    {
      question: "27+1 personel servisi fiyatı neye göre değişir?",
      answer:
        "Güzergâh mesafesi, durak sayısı, vardiya adedi, sefer sıklığı ve doluluk oranı fiyatı belirleyen ana değişkenlerdir. Standart bir araç tarifesinden değil, hat ihtiyacından hareketle hazırlanır.",
    },
    {
      question: "27+1 servisi hangi işletmeler için uygundur?",
      answer:
        "Tek vardiyada çok sayıda çalışanı aynı yöne taşıyan fabrika, depo, OSB içi tesis veya büyük ofis kampüsleri gibi işletmeler için genellikle uygun bir kapasite seçeneğidir.",
    },
    {
      question: "Kapasite ihtiyacı zamanla değişirse ne olur?",
      answer:
        "Personel sayısı veya durak yapısı değiştiğinde kapasite yeniden değerlendirilir; gerekirse 27+1 yerine farklı bir araç kombinasyonuna geçilebilir.",
    },
  ],
  related: [
    { href: "/vip-personel-servisi", label: "Konfor", title: "Özel VIP personel servisi" },
    { href: "/fabrika-personel-tasimaciligi", label: "Üretim", title: "Fabrika personel taşımacılığı" },
    { href: "/kurumsal-servis-guzergah-planlama", label: "Rota", title: "Kurumsal güzergâh planlama" },
    { href: "/personel-servisi-fiyatlari", label: "Fiyat", title: "Personel servisi fiyatları" },
  ],
};

export default function TwentySevenPlusOnePersonnelServicePage() {
  return <ServiceClusterPage data={data} />;
}
