import type { Metadata } from "next";
import officeImage from "../../../public/images/hero-kurumsal-ofis-servisi.webp";
import { ServiceClusterPage, type ServiceClusterData } from "@/components/service-cluster-page";
import clusterStyles from "@/components/service-cluster-page.module.css";

export const metadata: Metadata = {
  title: "Özel VIP Personel Servisi İstanbul | Mısırlı Turizm",
  description:
    "Üst düzey yönetici, misafir ve kritik ekip taşımacılığı için özel VIP personel servisi; deri koltuk, sessiz kabin ve sabit sürücü ile kurumsal konfor standardı.",
  alternates: { canonical: "/vip-personel-servisi" },
  openGraph: {
    title: "Özel VIP Personel Servisi İstanbul | Mısırlı Turizm",
    description:
      "Yönetici ve misafir taşımacılığı için standart servisten ayrışan konfor, gizlilik ve zamanlama disipliniyle kurulan VIP ulaşım hizmeti.",
    url: "/vip-personel-servisi",
    siteName: "Mısırlı Turizm",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/hero-kurumsal-ofis-servisi.webp",
        width: 1920,
        height: 1080,
        alt: "İstanbul özel VIP personel servisi için kurumsal araç",
      },
    ],
  },
};

const data: ServiceClusterData = {
  slug: "vip-personel-servisi",
  breadcrumb: "Özel VIP Personel Servisi",
  eyebrow: "Yönetici · misafir · kritik ekip ulaşımı",
  title: "Özel VIP Personel Servisi",
  accent: "standart servisten farklı bir disiplin ister.",
  summary: (
    <p>
      <strong>Özel VIP personel servisi</strong>, sıradan bir personel taşımacılığı hattı
      değildir. Üst düzey yönetici, iş ortağı, yabancı misafir veya kritik proje ekiplerinin
      taşınmasında konfor, dakiklik, gizlilik ve sürücü disiplini aynı standartta buluşmalıdır.
      Mısırlı Turizm, bu ihtiyacı araç kiralamaktan öte, tekrarlanabilir bir hizmet protokolü
      olarak kurar.
    </p>
  ),
  schemaDescription:
    "Yönetici, misafir ve kritik ekip taşımacılığı için konfor, gizlilik, sabit sürücü ve zamanlama disipliniyle kurulan İstanbul özel VIP personel servisi hizmeti.",
  serviceType: "Özel VIP personel ve yönetici taşımacılığı hizmeti",
  image: officeImage,
  imageAlt: "İstanbul özel VIP personel servisi için hazırlanan kurumsal araç kabini",
  imageCaption: "Yönetici ve misafir transferinde sabit protokol",
  keywords: [
    "Özel VIP personel servisi",
    "VIP yönetici servisi İstanbul",
    "Kurumsal VIP transfer",
  ],
  overview: {
    kicker: "VIP servisi neyi farklı kılar",
    title: "Konfor tek başına VIP servisi tanımlamaz.",
    lead: (
      <p>
        <strong>Özel VIP personel servisi</strong> talebi genellikle üç ihtiyaçtan doğar:
        yönetici veya misafirin gündemine göre esnek saatlerde hareket edebilmek, kabin içi
        görüşme veya çalışma sırasında rahatsız edilmemek ve her seferinde aynı kalitede,
        önceden tanınan bir sürücü-araç düzeniyle çalışmak. Mısırlı Turizm bu üç başlığı aynı
        operasyon planında birleştirir.
      </p>
    ),
    cards: [
      {
        title: "Kabin konforu ve donanım",
        text: (
          <p>
            Deri veya deri görünümlü koltuk, ayarlanabilir klima bölgeleri, USB şarj noktaları
            ve sessizleştirilmiş kabin; toplantı arası veya havalimanı transferinde çalışma
            ya da dinlenme imkânı sağlar.
          </p>
        ),
      },
      {
        title: "Sabit sürücü ve tanışıklık",
        text: (
          <p>
            Aynı yönetici veya misafir grubu için mümkün olduğunca aynı sürücü görevlendirilir.
            Güzergâh, bekleme noktası ve iletişim tercihleri zamanla netleşir; her seferde
            baştan anlatılmaz.
          </p>
        ),
      },
      {
        title: "Zamanlama ve gizlilik disiplini",
        text: (
          <p>
            Uçuş, toplantı veya etkinlik saatine göre geri sayımlı planlama yapılır. Güzergâh
            ve yolcu bilgisi yalnızca operasyonu yürüten ekiple paylaşılır.
          </p>
        ),
      },
    ],
  },
  visual: {
    kicker: "Kullanım alanları",
    title: "VIP servisi tek bir senaryoya sıkışmaz.",
    text: (
      <p>
        <strong>Kurumsal VIP transfer</strong> ihtiyacı, şirketten şirkete farklı biçimlerde
        ortaya çıkar. Bazı kurumlar için bu, yabancı heyetin havalimanından otele transferi;
        bazıları için haftalık yönetici toplantı turu, bazıları içinse kriz veya proje
        döneminde belirli bir ekibin sürekli ve öngörülebilir taşınmasıdır.
      </p>
    ),
    points: [
      "Üst düzey yönetici ve C-level toplantı turları",
      "Yabancı misafir, iş ortağı ve heyet transferleri",
      "Havalimanı karşılama ve uğurlama hizmeti",
      "Kongre, lansman ve kurumsal etkinlik ulaşımı",
      "Kritik proje ekiplerinin sabit güzergâhlı taşınması",
    ],
  },
  process: {
    kicker: "Kurulum adımları",
    title: "VIP servisi kişiye özel kurulur, kataloğa göre seçilmez.",
    lead: (
      <p>
        Her <strong>VIP personel servisi</strong> talebi; yolcu profili, güzergâh hassasiyeti
        ve zamanlama toleransı netleştikten sonra saha planına dönüştürülür.
      </p>
    ),
    steps: [
      {
        title: "Yolcu ve gündem bilgisini alma",
        text: (
          <p>
            Kaç kişinin, hangi sıklıkta, hangi saatlerde ve hangi güzergâhlarda taşınacağı
            netleştirilir; toplantı, uçuş veya etkinlik takvimiyle eşleştirilir.
          </p>
        ),
      },
      {
        title: "Araç ve sürücü eşleştirmesi",
        text: (
          <p>
            Yolcu sayısına ve konfor beklentisine uygun araç sınıfı belirlenir; mümkünse aynı
            sürücü sabitlenir.
          </p>
        ),
      },
      {
        title: "İletişim ve bekleme protokolü",
        text: (
          <p>
            Bekleme noktası, gecikme durumunda izlenecek yol ve iletişim kanalı önceden
            tanımlanır; sürpriz bırakılmaz.
          </p>
        ),
      },
      {
        title: "Sefer sonrası değerlendirme",
        text: (
          <p>
            İlk seferlerden sonra güzergâh, saat toleransı veya araç tercihi gerekirse yeniden
            ayarlanır.
          </p>
        ),
      },
    ],
  },
  decision: {
    kicker: "Doğru seçim rehberi",
    title: "VIP servisi mi, standart personel servisi mi?",
    text: (
      <>
        <p>
          Her kurumsal ulaşım ihtiyacı VIP kapsamına girmez; asıl soru, yolcu profilinin ve
          seferin hassasiyet düzeyinin ne olduğudur. Aşağıdaki karşılaştırma, iki hizmet
          modelinin nerede ayrıştığını gösterir.
        </p>
        <table className={clusterStyles.compareTable}>
          <thead>
            <tr>
              <th scope="col">Kriter</th>
              <th scope="col">Özel VIP personel servisi</th>
              <th scope="col">Standart personel servisi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Yolcu profili</th>
              <td>Yönetici, misafir, heyet, kritik proje ekibi</td>
              <td>Genel çalışan grubu</td>
            </tr>
            <tr>
              <th scope="row">Güzergâh yapısı</th>
              <td>Kişiye veya küçük gruba özel, değişken</td>
              <td>Sabit hat, çoklu durak</td>
            </tr>
            <tr>
              <th scope="row">Sürücü düzeni</th>
              <td>Mümkün olduğunca sabit, tanışık sürücü</td>
              <td>Hat bazlı görevlendirme</td>
            </tr>
            <tr>
              <th scope="row">Zamanlama</th>
              <td>Gündeme göre esnek, dar tolerans</td>
              <td>Vardiya saatine göre sabit</td>
            </tr>
            <tr>
              <th scope="row">Öncelik</th>
              <td>Konfor, gizlilik, dakiklik</td>
              <td>Kapasite, güzergâh verimliliği</td>
            </tr>
          </tbody>
        </table>
        <ul className={clusterStyles.rightWrongGrid}>
          <li className={clusterStyles.rightWrongWrong}>
            <strong>Yaygın yanlış varsayım</strong>
            Yalnızca daha lüks bir araç kiralamak, VIP servisi kurmak için yeterlidir.
          </li>
          <li className={clusterStyles.rightWrongRight}>
            <strong>Doğru yaklaşım</strong>
            Araç kalitesi kadar sabit sürücü, iletişim protokolü ve zamanlama disiplini de
            planın parçası olmalıdır.
          </li>
          <li className={clusterStyles.rightWrongWrong}>
            <strong>Yaygın yanlış varsayım</strong>
            VIP servisi yalnızca yabancı misafir ağırlarken gereklidir.
          </li>
          <li className={clusterStyles.rightWrongRight}>
            <strong>Doğru yaklaşım</strong>
            Düzenli yönetici toplantı turları ve kritik proje ekipleri için de aynı disiplin
            gereklidir.
          </li>
        </ul>
      </>
    ),
    items: [
      "Yolcu sayısı düşük, hassasiyet ve gizlilik yüksekse VIP servisi değerlendirilir",
      "Güzergâh sabitse ve çok sayıda personel aynı hatta taşınıyorsa standart servis daha uygundur",
      "Karma ihtiyaçlarda (örneğin genel personel + yönetici ekibi) iki hizmet modeli birlikte kurgulanabilir",
    ],
  },
  faqs: [
    {
      question: "Özel VIP personel servisi ile şoförlü araç kiralama aynı şey midir?",
      answer:
        "Hayır. VIP personel servisi; araç ve sürücünün yanında güzergâh, zamanlama, iletişim ve gizlilik protokolünü de içeren tekrarlanabilir bir hizmet modelidir. Tek seferlik araç kiralama bu sürekliliği kapsamaz.",
    },
    {
      question: "VIP servisi için sabit sürücü garantisi verilir mi?",
      answer:
        "Operasyonel uygunluk çerçevesinde aynı yolcu grubu için mümkün olduğunca aynı sürücü görevlendirilir. İzin, rotasyon gibi istisnai durumlarda yedek sürücü aynı protokolle bilgilendirilir.",
    },
    {
      question: "Havalimanı transferleri VIP servisi kapsamında mı?",
      answer:
        "Evet. Uçuş saatine göre geri sayımlı planlama, karşılama ve uğurlama süreçleri VIP servisinin yaygın kullanım alanlarından biridir.",
    },
    {
      question: "Kaç kişilik gruplar için VIP servisi kurulabilir?",
      answer:
        "Tekil yönetici transferinden küçük heyet gruplarına kadar farklı ölçekler değerlendirilir. Grup büyüklüğüne göre araç sınıfı ve kapasite ayrıca planlanır.",
    },
    {
      question: "VIP servisi ile 27+1 kapasiteli araç servisi birlikte kullanılabilir mi?",
      answer:
        "Evet. Örneğin bir etkinlikte yönetici ekibi VIP araçla, genel katılımcı grubu ise 27+1 kapasiteli araçla taşınabilir; iki hizmet aynı operasyon takviminde koordine edilir.",
    },
    {
      question: "VIP servisi fiyatı neye göre belirlenir?",
      answer:
        "Araç sınıfı, sefer sıklığı, bekleme süresi, güzergâh mesafesi ve sabit sürücü ihtiyacı fiyatı belirleyen temel değişkenlerdir. Standart bir tarife üzerinden değil, talebe göre hazırlanır.",
    },
  ],
  related: [
    { href: "/27-1-personel-servisi", label: "Kapasite", title: "27+1 personel servisi" },
    { href: "/vardiyali-personel-servisi", label: "Vardiya", title: "Vardiyalı personel servisi" },
    { href: "/personel-servisi-fiyatlari", label: "Fiyat", title: "Personel servisi fiyatları" },
    { href: "/kurumsal-servis-guzergah-planlama", label: "Rota", title: "Kurumsal güzergâh planlama" },
  ],
};

export default function VipPersonnelServicePage() {
  return <ServiceClusterPage data={data} />;
}
