import type { StaticImageData } from "next/image";
import logisticsImage from "../../public/images/sektor-lojistik-depo-personel-servisi.webp";
import healthImage from "../../public/images/sektor-saglik-hastane-personel-servisi.webp";
import officeImage from "../../public/images/sektor-ofis-plaza-personel-servisi.webp";
import retailImage from "../../public/images/sektor-avm-perakende-personel-servisi.webp";

type ContentCard = { title: string; text: string };
type DecisionCard = { label: string; title: string; text: string };
type ScenarioCard = { label: string; title: string; text: string };
type RelatedCard = { href: string; label: string; title: string; text: string; image: StaticImageData };

export type SectorPageData = {
  slug: string;
  isHub?: boolean;
  theme: "logistics" | "health" | "office" | "retail";
  breadcrumb: string;
  eyebrow: string;
  title: string;
  accent: string;
  primaryKeyword: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  schemaDescription: string;
  serviceType: string;
  audience: string;
  image: StaticImageData;
  imageAlt: string;
  imageCaption: string;
  hero: { beforeKeyword: string; afterKeyword: string; tags: string[] };
  intro: { kicker: string; title: string; paragraphs: string[] };
  signals: ContentCard[];
  operations: { kicker: string; title: string; paragraphs: string[]; steps: ContentCard[] };
  decision: { kicker: string; title: string; paragraphs: string[]; items: DecisionCard[] };
  scenarios: { kicker: string; title: string; paragraphs: string[]; items: ScenarioCard[] };
  procurement: { kicker: string; title: string; paragraphs: string[]; checks: string[] };
  closing: { title: string; beforeKeyword: string; afterKeyword: string };
  faqs: Array<{ question: string; answer: string }>;
  related: RelatedCard[];
};

const sectorsHub: SectorPageData = {
  slug: "sektorler",
  isHub: true,
  theme: "logistics",
  breadcrumb: "Sektörel Çözümler",
  eyebrow: "İşletme modeline göre personel ulaşımı",
  title: "Sektörel Personel Servisi",
  accent: "aynı kalıpla planlanmaz.",
  primaryKeyword: "sektörel personel servisi çözümleri",
  seoTitle: "Sektörel Personel Servisi Çözümleri | Mısırlı Turizm",
  seoDescription: "Lojistik, sağlık, ofis ve perakende işletmeleri için vardiya, çalışan lokasyonu, durak ve güzergâh odaklı sektörel personel servisi planlaması.",
  seoKeywords: ["sektörel personel servisi", "kurumsal personel taşımacılığı", "lojistik personel servisi", "hastane personel servisi", "ofis personel servisi", "AVM personel servisi"],
  schemaDescription: "İstanbul'da lojistik, sağlık, ofis, plaza, AVM ve perakende işletmeleri için sektöre özel personel servisi planlama çözümleri.",
  serviceType: "Sektörel personel servisi planlaması",
  audience: "İnsan kaynakları, idari işler, operasyon ve satın alma ekipleri",
  image: logisticsImage,
  imageAlt: "İstanbul'da lojistik tesisi çalışanları için planlanan personel servisi",
  imageCaption: "Sektörün çalışma saatini, çalışan dağılımını ve tesis erişimini aynı plan üzerinde buluşturuyoruz.",
  hero: {
    beforeKeyword: "Mısırlı Turizm'in ",
    afterKeyword: "; hazır bir araç listesinden değil, kurumun çalışma biçiminden başlar. Lojistik merkezinin vardiyası, hastanenin kesintisiz hizmeti, plazanın pik giriş saati ve AVM'nin kapanış düzeni aynı operasyon gibi ele alınmaz.",
    tags: ["Sektörel analiz", "Vardiya eşleştirme", "Güvenli durak", "Güzergâh senaryosu"],
  },
  intro: {
    kicker: "Neden sektör bazlı yaklaşım?",
    title: "Çalışan hareketi her iş kolunda farklı bir ritim taşır.",
    paragraphs: [
      "Personel taşımacılığında sık yapılan hata, çalışan sayısını araç kapasitesine bölerek operasyonun çözüldüğünü düşünmektir. Oysa aynı sayıda çalışanı bulunan iki işletmenin servis ihtiyacı bütünüyle farklı olabilir. Bir dağıtım merkezinde gece vardiyası ve ağır vasıta trafiği belirleyiciyken, bir plazada tek yönlü sabah yoğunluğu, ziyaretçi trafiği ve farklı mesai bitişleri öne çıkar. Hastane kampüsünde devir teslim saatleri ve güvenli gece ulaşımı kritik olur; AVM'de mağaza kapanışları ile teknik ekiplerin mesaisi aynı anda bitmeyebilir.",
      "Bu nedenle işe sektörün operasyon takvimini okuyarak başlarız. Personel lokasyonları yalnız harita üzerindeki noktalar değildir; hangi vardiyaya bağlı oldukları, hangi kapıya ulaşmaları gerektiği, durağa hangi saat aralığında güvenle erişebildikleri ve işverenin kabul ettiği yolculuk süresiyle birlikte değerlendirilir. Bu veriler olmadan hazırlanan güzergâh, kâğıt üzerinde kısa görünse bile sahada gecikme, gereksiz aktarma veya düşük doluluk üretebilir.",
      "Sektörel sayfalarımız, insan kaynakları ve idari işler ekiplerinin ihtiyaç duyduğu karar çerçevesini ayrı ayrı açıklar. Buradaki amaç farklı sektör isimlerini aynı metne yerleştirmek değildir. Her sayfa; o iş kolunun vardiya yapısını, tesis erişimini, çalışan kümelerini, değişim sıklığını ve satın alma sorularını kendi bağlamında ele alır. Böylece genel personel taşımacılığı yaklaşımı, gerçek bir uygulama senaryosuna dönüşür.",
    ],
  },
  signals: [
    { title: "Çalışma takvimi", text: "Sabit mesai, ikili veya üçlü vardiya, gece çıkışı, hafta sonu ve dönemsel yoğunluklar ayrı sefer pencereleri olarak değerlendirilir." },
    { title: "Tesis erişimi", text: "Ana giriş, personel kapısı, yükleme alanı, kampüs içi dolaşım ve güvenlik kontrolü rota süresinin gerçek parçası kabul edilir." },
    { title: "Çalışan dağılımı", text: "Adresler ilçe adına göre değil; birbirine erişebilen güvenli durak kümeleri ve tesis yönü üzerinden gruplandırılır." },
    { title: "Değişim temposu", text: "Yeni işe alım, sezon, mağaza veya depo açılışı ve vardiya değişikliği gibi hareketler planın güncellenme sıklığını belirler." },
  ],
  operations: {
    kicker: "Ortak metodoloji",
    title: "Sektör değişir; veriyle planlama disiplini değişmez.",
    paragraphs: [
      "Her projede önce mevcut durumu görünür kılan bir veri seti kurulur. Tesis adresi, giriş kapısı, vardiya başlangıç ve bitişleri, personelin yaklaşık bölgeleri, çalışma günleri ve hedef başlangıç tarihi aynı dosyada toplanır. Kişisel veri paylaşımı gerektirmeyen ilk aşamada mahalle veya durak düzeyindeki bilgilerle alternatif hat mantığı kurulabilir; kesin uygulama için gerekli ayrıntılar kurumun onayladığı güvenli süreçte netleştirilir.",
      "Ardından tek bir kesin rota dayatmak yerine seçenekler karşılaştırılır. Daha az duraklı hızlı hat, daha geniş kapsamalı toplama hattı veya aktarmasız bölgesel çözüm; süre, doluluk ve çalışan erişimi bakımından ayrı sonuçlar üretir. Mısırlı Turizm bu seçenekleri kurumun önceliğine göre değerlendirir. Amaç en kısa çizgiyi bulmak değil, çalışanı zamanında ve uygulanabilir bir düzende tesise ulaştıran operasyonu kurmaktır.",
    ],
    steps: [
      { title: "Operasyon brifingi", text: "Sektör, tesis, çalışma günleri, vardiya pencereleri, çalışan bölgeleri ve karar verecek ekipler netleştirilir. Belirsiz alanlar tekliften önce soru listesine dönüştürülür." },
      { title: "Lokasyon kümeleri", text: "Personel noktaları ana ulaşım aksları, güvenli yürüme mesafeleri, trafik yönü ve tesis yaklaşımıyla birlikte gruplandırılır; yalnız ilçe isimlerine göre hat kurulmaz." },
      { title: "Rota ve kapasite senaryosu", text: "Alternatif durak dizileri, tahmini süreler, sefer çakışmaları ve uygun kapasite aralıkları karşılaştırılır. Vardiyalar birbirini etkiliyorsa araç döngüsü ayrıca değerlendirilir." },
      { title: "Başlangıç hazırlığı", text: "Onaylanan planın durak listesi, iletişim akışı, saha kontrol noktaları ve değişiklik bildirimi netleştirilir. İlk gün yalnız hareket saati değil, biniş düzeni de izlenir." },
      { title: "İyileştirme döngüsü", text: "Personel hareketi, yeni işe alım ve vardiya değişiklikleri belirli aralıklarla kontrol edilir. Gereksiz kilometre, uzun bekleme veya dengesiz doluluk oluşursa plan yeniden ele alınır." },
    ],
  },
  decision: {
    kicker: "Kurumsal karar çerçevesi",
    title: "Teklifin ötesinde cevaplanması gereken sorular var.",
    paragraphs: [
      "Kurumsal satın alma yalnız toplam aylık bedeli karşılaştırdığında, operasyonun gerçek risklerini görünmez bırakabilir. Aynı fiyat düzeyindeki iki plan; yolculuk süresi, durak sayısı, değişiklik yönetimi ve vardiya devamlılığı bakımından farklı sonuç verir. Bu nedenle değerlendirme tablosunda ticari koşullarla birlikte hizmetin nasıl kurulacağı da yer almalıdır.",
      "Mısırlı Turizm ayrı bir filo veya araç kiralama ürünü sunmaz. Değer önerimiz; işletmenin personel hareketini anlamak, ihtiyaca uygun servis operasyonunu tasarlamak ve karar sürecini ölçülebilir başlıklara ayırmaktır. Araç kapasitesi bu planın bir girdisidir; hizmetin tamamı değildir.",
    ],
    items: [
      { label: "Operasyon", title: "Vardiya ile rota gerçekten uyumlu mu?", text: "Hat süresi yalnız normal trafik koşuluna göre değil, personelin tesiste olması gereken gerçek zaman penceresine göre değerlendirilmelidir. Devir teslim veya mağaza açılışı gibi kritik dakikalar plana yazılmalıdır." },
      { label: "İnsan deneyimi", title: "Duraklar çalışan için uygulanabilir mi?", text: "Haritada uygun görünen nokta gece aydınlatması, yaya erişimi, karşıdan karşıya geçiş veya yağış koşullarında güvenli olmayabilir. Durak kalitesi çalışan deneyiminin temel parçasıdır." },
      { label: "Ticari", title: "Fiyat hangi varsayımlara dayanıyor?", text: "Sefer sayısı, çalışma günü, köprü veya otoyol kullanımı, bekleme süresi ve vardiya dönüşleri açıkça belirtilmelidir. Değişikliklerin fiyata nasıl yansıyacağı baştan konuşulmalıdır." },
      { label: "Süreklilik", title: "Değişiklik kim tarafından yönetilecek?", text: "Adres, personel sayısı veya vardiya değiştiğinde bilginin kimden alınacağı, ne kadar sürede değerlendirileceği ve yeni planın nasıl duyurulacağı belirlenmelidir." },
      { label: "İletişim", title: "Saha ile kurum arasında tek akış var mı?", text: "Çalışan bildirimi, kurum yetkilisi ve operasyon tarafı farklı kanallardan ilerlerse bilgi kaybı oluşur. Yetki ve bildirim zinciri teklif aşamasında tanımlanmalıdır." },
    ],
  },
  scenarios: {
    kicker: "İlk sektör kümesi",
    title: "Dört iş kolu, dört farklı operasyon problemi.",
    paragraphs: [
      "İlk sektörel içerik kümesini İstanbul'da personel hareketinin yoğun, vardiya veya erişim kararlarının belirleyici olduğu dört alanda kurduk. Üretim ve fabrika operasyonu mevcut ayrı sayfada ele alındığı için burada aynı içeriği çoğaltmıyoruz. Bunun yerine depo ve dağıtım, sağlık, kurumsal ofis ile perakende işletmelerinin kendine özgü kararlarını ayrıştırıyoruz.",
      "Her sektör sayfası, genel vaatler yerine saha sorularına odaklanır. Hangi çalışan grubunun hangi saatte hareket ettiği, kapı ve kampüs erişiminin rotaya ne kattığı, geç veya değişken çıkışların nasıl yönetileceği ve satın alma ekibinin hangi verileri istemesi gerektiği açık biçimde anlatılır.",
    ],
    items: [
      { label: "Lojistik", title: "Depo ve dağıtım merkezleri", text: "Gece-gündüz vardiyaları, ağır vasıta trafiği, güvenlik kapısı ve çevre ilçelere dağılmış çalışan kümeleri birlikte planlanır." },
      { label: "Sağlık", title: "Hastane ve sağlık kampüsleri", text: "Kesintisiz hizmet, devir teslim saatleri, nöbet çıkışları ve gece çalışanlarının güvenli erişimi operasyonun merkezindedir." },
      { label: "Kurumsal ofis", title: "Ofis ve plaza ekipleri", text: "Pik saat trafiği, hibrit çalışma, farklı mesai bitişleri ve merkezi iş alanlarının durak kısıtları ayrı senaryolarla değerlendirilir." },
      { label: "Perakende", title: "AVM ve mağaza çalışanları", text: "Mağaza kapanışı, teknik ekip, güvenlik ve yemek alanı çalışanlarının farklı çıkış saatleri ortak bir plan içinde dengelenir." },
    ],
  },
  procurement: {
    kicker: "Teklif öncesi hazırlık",
    title: "Doğru veri, daha gerçekçi bir değerlendirme üretir.",
    paragraphs: [
      "İlk görüşmenin verimli geçmesi için kusursuz bir adres listesine ihtiyaç yoktur. Tesis konumu, yaklaşık personel sayısı, vardiya saatleri ve çalışanların yoğunlaştığı ilçeler başlangıç için yeterlidir. Ancak fiyat ve uygulama planı kesinleşirken durak düzeyindeki dağılım, çalışma günleri ve tesis giriş prosedürü ayrıntılandırılmalıdır.",
      "Bu yaklaşım, erken aşamada gerçek dışı kesinlik vermeyi önler. Henüz lokasyon verisi görülmeden söylenen tek rakam, operasyonun önemli değişkenlerini saklar. Ön analiz; kurumun hangi bilgiye sahip olduğunu, hangi noktaların sahada doğrulanacağını ve hangi kararın satın alma sürecinde verilmesi gerektiğini görünür hale getirir.",
    ],
    checks: ["Tesis ve kullanılacak personel girişinin açık adresi", "Vardiya başlangıç–bitiş saatleri ve toleranslar", "Yaklaşık personel sayısı ile yoğun ilçeler", "Hafta içi, hafta sonu ve resmi tatil çalışma düzeni", "Hedef başlangıç tarihi ve karar takvimi", "Mevcutsa yaşanan gecikme, uzun yolculuk veya düşük doluluk sorunları"],
  },
  closing: {
    title: "Sektörünüzü değil, operasyonunuzun gerçek akışını konuşalım.",
    beforeKeyword: "İlk görüşmede ",
    afterKeyword: " için hazır bir paket sunmak yerine, tesisinizin çalışma düzenini ve çalışan dağılımını birlikte netleştiririz. Böylece sonraki adımın hangi veriyle ilerleyeceği açık olur.",
  },
  faqs: [
    { question: "Sektörel planlama standart personel servisinden nasıl ayrılır?", answer: "Standart yaklaşım genellikle personel sayısı ve araç kapasitesine odaklanır. Sektörel planlama ise vardiya, tesis girişi, çalışma takvimi, güvenli durak, yoğun trafik penceresi ve değişim sıklığını aynı operasyon modelinde değerlendirir." },
    { question: "Mısırlı Turizm filo veya araç kiralama hizmeti sunuyor mu?", answer: "Hayır. Mısırlı Turizm ayrı bir filo ya da araç kiralama ürünü sunmaz. Hizmet; kurumun personel ulaşım ihtiyacını analiz etmek, uygun servis operasyonunu planlamak ve uygulama akışını yönetmek üzerine kuruludur." },
    { question: "Henüz personel adresleri kesin değilse çalışma başlatılabilir mi?", answer: "Evet. İlk değerlendirme mahalle, ilçe veya mevcut durak bilgileriyle başlayabilir. Uygulama ve kesin teklif aşamasında çalışan lokasyonlarının kurumun onayladığı güvenli yöntemle ayrıntılandırılması gerekir." },
    { question: "Birden fazla vardiya aynı projede planlanabilir mi?", answer: "Evet. Her vardiya ayrı zaman penceresi olarak ele alınır; ardından araç döngüsü, çakışma, bekleme ve tesis giriş kuralları birlikte değerlendirilir. Aynı rotanın bütün vardiyalara zorla uygulanması tercih edilmez." },
    { question: "İstanbul'un iki yakasındaki çalışanlar aynı operasyona dahil edilebilir mi?", answer: "Tesis yönü, vardiya saati ve yolculuk süresi uygulanabilir olduğunda farklı yakalardaki çalışan kümeleri aynı proje içinde değerlendirilebilir. Ancak her hat trafik ve geçiş koşulları bakımından ayrı senaryoya ihtiyaç duyabilir." },
    { question: "Teklif için hangi bilgiler gereklidir?", answer: "Tesis adresi, personel giriş noktası, yaklaşık çalışan sayısı, vardiya saatleri, çalışma günleri, personelin yoğunlaştığı bölgeler ve hedef başlangıç tarihi ilk analiz için temel bilgilerdir." },
    { question: "Mevcut servis düzeni iyileştirilebilir mi?", answer: "Evet. Mevcut duraklar, hat süreleri, doluluk, gecikme noktaları ve çalışan geri bildirimleri incelenerek alternatif rota ve durak senaryoları oluşturulabilir." },
  ],
  related: [
    { href: "/sektorler/lojistik-depo-personel-servisi", label: "Lojistik ve depo", title: "Vardiyayı dağıtım akışıyla birlikte planlayın.", text: "Depo, dağıtım merkezi ve lojistik kampüslerinde çalışan ulaşımının kritik kararlarını inceleyin.", image: logisticsImage },
    { href: "/sektorler/saglik-hastane-personel-servisi", label: "Sağlık", title: "Kesintisiz hizmete uygun personel ulaşımı.", text: "Hastane ve sağlık kampüslerinde nöbet, devir teslim ve güvenli gece erişimi odağını görün.", image: healthImage },
    { href: "/sektorler/ofis-plaza-personel-servisi", label: "Ofis ve plaza", title: "Pik saat ve hibrit çalışma dengesini kurun.", text: "Kurumsal ofis ekipleri için durak, saat ve çalışan deneyimi yaklaşımını değerlendirin.", image: officeImage },
  ],
};

const logisticsPage: SectorPageData = {
  slug: "sektorler/lojistik-depo-personel-servisi",
  theme: "logistics",
  breadcrumb: "Lojistik ve Depo Personel Servisi",
  eyebrow: "Dağıtım merkezleri ve depo operasyonları",
  title: "Lojistik ve Depo Personel Servisi",
  accent: "vardiyanın ritmine göre kurulur.",
  primaryKeyword: "lojistik ve depo personel servisi",
  seoTitle: "Lojistik ve Depo Personel Servisi | Mısırlı Turizm",
  seoDescription: "İstanbul'da depo, dağıtım merkezi ve lojistik tesisleri için vardiya, durak, güzergâh ve çalışan lokasyonu odaklı personel servisi planlaması.",
  seoKeywords: ["lojistik personel servisi", "depo personel servisi", "dağıtım merkezi personel taşımacılığı", "vardiyalı depo servisi", "İstanbul lojistik çalışan servisi"],
  schemaDescription: "İstanbul'daki depo, lojistik ve dağıtım merkezi işletmeleri için vardiya ve güzergâh odaklı kurumsal personel servisi planlaması.",
  serviceType: "Lojistik ve depo çalışanları için personel servisi planlaması",
  audience: "Lojistik, depo, dağıtım ve e-ticaret operasyonları",
  image: logisticsImage,
  imageAlt: "Dağıtım merkezi çalışanlarının servis aracına yöneldiği lojistik personel ulaşımı",
  imageCaption: "Vardiya değişimini, güvenlik kapısını ve çalışan bölgelerini aynı hat planında ele alıyoruz.",
  hero: {
    beforeKeyword: "İstanbul'da ",
    afterKeyword: "; yalnız çalışanı depoya ulaştırmak değil, vardiya başlangıcını yükleme trafiği, güvenlik girişi ve çevre ilçe dağılımıyla birlikte yönetmektir. Planı araçtan önce operasyon verisiyle kurarız.",
    tags: ["Gece vardiyası", "Depo kapısı", "Bölgesel durak", "Sefer döngüsü"],
  },
  intro: {
    kicker: "Lojistik operasyonunun gerçeği",
    title: "Depo kapısına zamanında varmak, üretkenliğin ilk adımıdır.",
    paragraphs: [
      "Lojistik tesislerinde personel hareketi, klasik dokuz-altı ofis düzeninden farklıdır. Mal kabul, sevkiyat hazırlığı, ayıklama, paketleme, güvenlik ve saha ekipleri aynı anda başlayıp bitmeyebilir. E-ticaret kampanyası, ay sonu sevkiyatı, sezon veya gece dağıtımı personel yoğunluğunu kısa sürede değiştirebilir. Bu nedenle tek bir sabit rota listesini aylarca değiştirmeden kullanmak; bazı hatlarda gereksiz kapasite, bazı hatlarda uzun bekleme ve vardiyaya geç kalma riski doğurur.",
      "Tesisin konumu kadar yaklaşım biçimi de önemlidir. Büyük depolar çoğu zaman ana yerleşim alanlarının dışında, sanayi yolları veya otoyol bağlantıları üzerinde bulunur. Haritada kısa görünen son kilometre; ağır vasıta kuyruğu, güvenlik kontrolü, kampüs içi hız sınırı ve personel kapısına erişim nedeniyle uzayabilir. Vardiya başlama saati rota bitiş saati değildir; çalışanın tesise giriş, hazırlık ve işbaşı süresi de plan penceresine dahil edilmelidir.",
      "Çalışan lokasyonları genellikle birden çok ilçe ve ulaşım aksına yayılır. Aynı ilçede görünen iki mahalle farklı ana yollara bağlanabildiği için tek hatta birleştirmek her zaman verimli olmaz. Buna karşılık komşu ilçelerdeki iki durak, tesis yönünde aynı aksı kullandığında daha dengeli bir rota oluşturabilir. Analiz, idari sınırlardan çok gerçek yol ağı ve güvenli erişim üzerinden yapılır.",
    ],
  },
  signals: [
    { title: "Vardiya keskinliği", text: "Depo işbaşı saati kaçırıldığında yalnız bir çalışan değil, hazırlık ve sevkiyat zinciri etkilenebilir. Varış toleransı açık biçimde tanımlanır." },
    { title: "Ağır vasıta trafiği", text: "Tır girişleri, yükleme pencereleri ve sanayi yolu yoğunluğu özellikle son kilometrede ayrı süre payı gerektirebilir." },
    { title: "Gece erişimi", text: "Gece ve sabah erken saatlerde kullanılacak durakların aydınlatma, yaya erişimi ve bekleme güvenliği gündüzden farklı değerlendirilir." },
    { title: "Sezon hareketi", text: "Kampanya, sayım, yoğun sipariş veya dönemsel işe alım gibi değişiklikler hat kapasitesi ve sefer sayısını geçici olarak etkileyebilir." },
  ],
  operations: {
    kicker: "Hat kurulum modeli",
    title: "Personel listesini vardiya bazlı hareket haritasına dönüştürürüz.",
    paragraphs: [
      "İlk aşamada personel lokasyonları vardiya bilgisiyle eşleştirilir. Aynı bölgede yaşayan fakat farklı saatte işe başlayan çalışanlar ayrı operasyon kümelerinde değerlendirilir. Tesisin kaç personel girişine sahip olduğu, servis araçlarının hangi kapıyı kullanabildiği ve güvenlik kontrolünün ortalama ne kadar sürdüğü kurumdan alınan bilgilerle planın parçası yapılır. Böylece rota bitiş noktası yalnız tesis adresi değil, gerçek personel kabul noktası olur.",
      "Alternatif hatlar süre, kapsama ve kapasite açısından karşılaştırılır. Çok sayıda küçük durak çalışan için yakınlık sağlarken yolculuğu uzatabilir; az sayıda ana durak ise yürüme mesafesini artırabilir. Karar, yalnız kilometreye göre değil, gece güvenliği, toplu taşıma bağlantısı, yaya geçişi ve vardiya saatine göre verilir. Gerektiğinde aynı bölge için farklı vardiyalarda farklı durak dizisi kurulabilir.",
    ],
    steps: [
      { title: "Tesis ve kapı analizi", text: "Depo adresi, personel girişi, güvenlik kontrolü, kampüs içi dolaşım ve ağır vasıta yoğunluğu öğrenilir. Hedef varış saati işbaşı hazırlığıyla birlikte belirlenir." },
      { title: "Vardiya–lokasyon eşleştirmesi", text: "Her çalışanın yaklaşık bölgesi ilgili vardiyayla eşleştirilir. Gece ve gündüz grupları aynı adres listesinden ayrı hat mantıklarıyla çıkarılır." },
      { title: "Durak ve rota seçenekleri", text: "Ana ulaşım aksları, güvenli bekleme noktaları, tesis yönü ve yolculuk süresi karşılaştırılır. Fazla sapma oluşturan duraklar alternatif kümeye alınır." },
      { title: "Sefer döngüsü kontrolü", text: "Ardışık vardiya giriş ve çıkışlarının birbirini etkileyip etkilemediği incelenir. Bekleme, boş kilometre ve çakışma oluşturan döngüler görünür hale getirilir." },
      { title: "Saha başlangıcı ve revizyon", text: "İlk uygulamada biniş süreleri, kapı geçişi ve gerçek varış zamanı izlenir. Sezon veya personel değişimi olduğunda aynı veri modeli üzerinden revizyon yapılır." },
    ],
  },
  decision: {
    kicker: "Operasyon kararları",
    title: "Depo servisini yalnız mesafe üzerinden satın almayın.",
    paragraphs: [
      "Lojistik personel taşımacılığında toplam kilometre önemli olsa da tek başına yeterli değildir. Aynı uzunluktaki iki hat; durak sayısı, otoyol kullanımı, güvenlik kapısında bekleme ve vardiya saati nedeniyle farklı süre ve maliyet üretir. Teklifin hangi varsayımla hazırlandığı görülmeden yapılan karşılaştırma, uygulama başladıktan sonra ek sefer veya rota değişikliği ihtiyacını gizleyebilir.",
      "Kurumsal değerlendirme; insan kaynakları, depo operasyonu, idari işler ve satın alma ekiplerinin ortak sorularını içermelidir. İşe alım planı kapasiteyi, vardiya planı sefer saatini, tesis güvenliği kapı süresini, satın alma ise ticari çerçeveyi belirler. Bu bilgiler tek masada buluştuğunda rota daha gerçekçi kurulur.",
    ],
    items: [
      { label: "Zaman", title: "İşbaşı saati ile tesis varışı arasındaki pay", text: "Servisin kapıya varması, çalışanın işbaşı yaptığı anlamına gelmez. Güvenlik kontrolü, soyunma alanı veya kampüs içi yürüme varsa hedef varış daha erken kurulmalıdır." },
      { label: "Durak", title: "Gece kullanılabilir bekleme noktaları", text: "Gündüz yoğun ve güvenli görünen bir durak gece kapalı, karanlık veya erişimi zor olabilir. Vardiya bazında durak doğrulaması yapılmalıdır." },
      { label: "Kapasite", title: "Yoğun sezon ve normal dönem farkı", text: "Geçici çalışan artışı kalıcı kapasite kararı gibi ele alınmamalıdır. Dönemsel senaryo ile temel operasyon birbirinden ayrılmalıdır." },
      { label: "Saha", title: "Tır trafiği ve kapı kuyruğu", text: "Dağıtım yoğunluğu, personel servisinin tesise son yaklaşımını etkiler. Kapı kullanım saatleri ve alternatif girişler kurumla birlikte netleştirilmelidir." },
      { label: "Değişim", title: "Yeni işe alımın hatta etkisi", text: "Yeni çalışanlar mevcut rotaya tek tek eklenirse hat giderek uzayabilir. Belirli eşiklerde tüm lokasyon kümesi yeniden değerlendirilmelidir." },
    ],
  },
  scenarios: {
    kicker: "Uygulama senaryoları",
    title: "Her lojistik tesisi aynı vardiya modelini kullanmaz.",
    paragraphs: [
      "Bir e-ticaret dağıtım merkezi, sipariş yoğunluğuna göre akşam ve gece ekiplerini büyütebilir. Soğuk zincir deposunda teslimat pencereleri daha keskin olabilir. Bölgesel aktarma merkezinde ise farklı şehirlerden gelen yük akışı personel başlangıç saatini etkileyebilir. Bu yüzden sektör adı ortak olsa da hat planı tesisin günlük operasyonuna göre şekillenir.",
      "Senaryoları ayırmak, gereksiz genellemeyi önler. Kurum yalnız ihtiyacına uyan başlıkları planlamaya dahil eder; örneğin hafta sonu çalışmayan bir depo için tatil senaryosu öne çıkarılmaz. Böylece içerik ve teklif, gerçek çalışma koşuluna bağlı kalır.",
    ],
    items: [
      { label: "E-ticaret", title: "Kampanya ve pik sipariş dönemi", text: "Kısa sürede büyüyen ekipler için geçici vardiya, ek durak ve kapasite senaryosu temel plandan ayrı hazırlanabilir." },
      { label: "Dağıtım", title: "Sabah sevkiyatına hazırlık", text: "Toplama ve yükleme ekiplerinin dağıtım araçlarından önce hazır olması gerekiyorsa varış toleransı operasyon zincirine göre belirlenir." },
      { label: "Depo", title: "Sabit ikili veya üçlü vardiya", text: "Giriş ve çıkışların birbirine yakın olduğu düzenlerde araç döngüsü, bekleme ve karşılıklı sefer olasılığı birlikte değerlendirilir." },
      { label: "Merkez", title: "Çok kapılı lojistik kampüs", text: "Personel girişinin yükleme kapısından farklı olduğu kampüslerde son kilometre ve iç dolaşım rotanın görünmeyen parçasıdır." },
    ],
  },
  procurement: {
    kicker: "İK ve satın alma notları",
    title: "Teklif dosyasını operasyon verisiyle güçlendirin.",
    paragraphs: [
      "Lojistik tesisleri için teklif istenirken yalnız toplam personel sayısı verilmesi, vardiya bazındaki ihtiyacı gizler. Personel sayısının vardiyalara ve yaklaşık bölgelere dağılımı, tesis kapısının konumu, çalışma günleri ve hedef işbaşı zamanı birlikte paylaşılmalıdır. Bu bilgiler ilk rota seçeneklerini ve uygun kapasite aralığını doğrudan etkiler.",
      "Mevcut bir servis düzeni varsa geçmiş gecikmeler, uzun yolculuk şikâyetleri ve düşük doluluk görülen hatlar da ön analize eklenmelidir. Amaç yalnız yeni fiyat almak değil, hangi operasyon varsayımının değişmesi gerektiğini anlamaktır. İyi hazırlanmış veri, daha karşılaştırılabilir teklifler ve daha az sürpriz revizyon üretir.",
    ],
    checks: ["Vardiya bazında çalışan sayıları", "Personel kapısı ve güvenlik giriş süresi", "Yoğun çalışan ilçeleri veya mevcut duraklar", "Hafta sonu ve dönemsel yoğunluk düzeni", "Tır trafiğinin yükseldiği saat aralıkları", "Hedef işbaşı zamanı ve kabul edilen varış toleransı", "Mevcut hatlarda gecikme veya düşük doluluk notları"],
  },
  closing: {
    title: "Deponun vardiya tablosunu uygulanabilir hatlara dönüştürelim.",
    beforeKeyword: "İlk değerlendirmede ",
    afterKeyword: " ihtiyacınızı tesis girişi, vardiya saatleri ve çalışan bölgeleriyle birlikte ele alırız. Hazır fiyat yerine hangi verinin rotayı değiştirdiğini açıkça gösteren bir planlama görüşmesiyle başlarız.",
  },
  faqs: [
    { question: "Depo personel servisi için ilk olarak hangi bilgiler gerekir?", answer: "Tesisin açık adresi ve personel girişi, vardiya başlangıç–bitiş saatleri, vardiya bazındaki yaklaşık çalışan sayıları, yoğun çalışan bölgeleri, çalışma günleri ve hedef başlangıç tarihi ilk değerlendirme için gereklidir." },
    { question: "Gece vardiyası durakları nasıl belirlenir?", answer: "Duraklar ana yol bağlantısı kadar aydınlatma, yaya erişimi, bekleme güvenliği ve çalışanın durağa ulaşabileceği saat üzerinden değerlendirilir. Gündüz kullanılan her noktanın gece için uygun olduğu varsayılmaz." },
    { question: "Sezonluk personel artışı için hat değiştirilebilir mi?", answer: "Evet. Dönemsel çalışan artışı temel operasyondan ayrı senaryo olarak ele alınabilir. Geçici durak, ek sefer veya kapasite ihtiyacı dönemin süresiyle birlikte değerlendirilir." },
    { question: "Tesis kapısındaki bekleme rota süresine dahil edilir mi?", answer: "Evet. Güvenlik kontrolü ve kampüs içi ilerleme gerçek varış süresinin parçasıdır. İşbaşı hedefi belirlenirken bu süreler kurumun saha bilgisiyle hesaba katılır." },
    { question: "Birden fazla depo aynı projede planlanabilir mi?", answer: "Tesislerin konumu, vardiya saatleri ve çalışan dağılımı uygunsa aynı proje içinde alternatif senaryolar kurulabilir. Ancak her tesisin kapı ve zaman koşulu ayrı değerlendirilir." },
    { question: "Mevcut depo servis hatları optimize edilebilir mi?", answer: "Mevcut duraklar, biniş sayıları, gerçek yolculuk süreleri, gecikme noktaları ve vardiya uyumu incelenerek alternatif kümeler ve rota seçenekleri hazırlanabilir." },
    { question: "Filo veya araç kiralama hizmeti sunuluyor mu?", answer: "Hayır. Mısırlı Turizm ayrı filo veya araç kiralama hizmeti sunmaz; lojistik işletmenin personel ulaşım operasyonunu analiz eder, güzergâh ve uygulama modelini planlar." },
  ],
  related: [
    { href: "/vardiyali-personel-servisi", label: "Vardiya planlama", title: "Çoklu çalışma saatleri için servis modeli", text: "Gece, sabah ve değişken vardiyalarda sefer döngüsü ile varış toleransını daha ayrıntılı inceleyin.", image: logisticsImage },
    { href: "/fabrika-personel-tasimaciligi", label: "Üretim", title: "Fabrika personel taşımacılığı", text: "OSB ve üretim tesislerinde kapı, vardiya ve çalışan kümeleri için hazırlanan ana hizmet içeriğine geçin.", image: officeImage },
    { href: "/kurumsal-servis-guzergah-planlama", label: "Güzergâh", title: "Durak ve rota planlama yaklaşımı", text: "Personel listesinin güvenli durak ve uygulanabilir hat seçeneklerine nasıl dönüştüğünü görün.", image: healthImage },
  ],
};

const healthPage: SectorPageData = {
  slug: "sektorler/saglik-hastane-personel-servisi",
  theme: "health",
  breadcrumb: "Sağlık ve Hastane Personel Servisi",
  eyebrow: "Kesintisiz sağlık operasyonu için çalışan ulaşımı",
  title: "Sağlık ve Hastane Personel Servisi",
  accent: "devir teslim saatini korur.",
  primaryKeyword: "sağlık ve hastane personel servisi",
  seoTitle: "Sağlık ve Hastane Personel Servisi | Mısırlı Turizm",
  seoDescription: "İstanbul'da hastane ve sağlık tesisleri için nöbet, vardiya, güvenli gece durağı ve kampüs erişimi odaklı personel servisi planlaması.",
  seoKeywords: ["hastane personel servisi", "sağlık çalışanı servisi", "nöbetçi personel taşımacılığı", "özel hastane personel ulaşımı", "gece vardiyası sağlık servisi"],
  schemaDescription: "İstanbul'daki hastane, tıp merkezi ve sağlık kampüsleri için nöbet ve vardiya düzenine özel personel servisi planlaması.",
  serviceType: "Hastane ve sağlık çalışanları için personel servisi planlaması",
  audience: "Hastaneler, tıp merkezleri ve sağlık kampüsleri",
  image: healthImage,
  imageAlt: "Hastane çalışanlarının vardiya servis aracına yöneldiği sağlık personeli ulaşımı",
  imageCaption: "Nöbet çıkışını, devir teslimi ve gece durağı güvenliğini aynı operasyon çerçevesinde planlıyoruz.",
  hero: {
    beforeKeyword: "İstanbul'da ",
    afterKeyword: "; klinik hizmetin devamlılığını, çalışan güvenliğini ve kampüs giriş süresini birlikte düşünmelidir. Doktor, hemşire, teknik ve destek ekiplerinin farklı çalışma pencerelerini tek kalıba sıkıştırmayız.",
    tags: ["Nöbet çıkışı", "Devir teslim", "Gece güvenliği", "Kampüs erişimi"],
  },
  intro: {
    kicker: "Sağlık tesisinin çalışma ritmi",
    title: "Servis gecikmesi yalnız ulaşımı değil, vardiya devrini etkiler.",
    paragraphs: [
      "Hastaneler ve sağlık kampüsleri kesintisiz çalışır. Poliklinik ekipleri ağırlıklı olarak gündüz mesaisine bağlıyken acil, yoğun bakım, laboratuvar, görüntüleme, güvenlik, temizlik ve teknik hizmetler farklı vardiya döngülerine sahip olabilir. Aynı kurum içinde tam zamanlı mesai, nöbet, çağrı üzerine çalışma ve uzayan klinik süreçler birlikte bulunabilir. Bu yapı personel ulaşımını basit bir sabah-akşam hattından daha karmaşık hale getirir.",
      "Devir teslim zamanı sağlık operasyonunda kritik bir eşiktir. Yeni vardiyanın tesiste hazır bulunması, çıkan ekibin güvenle ayrılması ve klinik bilginin aktarılması için servis saatinin işbaşı dakikasından geriye doğru planlanması gerekir. Hastanenin ana adresine varmak yeterli değildir; personel giriş kapısı, kart kontrolü, soyunma alanı ve kampüs içi yürüme süresi hedef varış penceresine dahil edilmelidir.",
      "Gece çıkan sağlık çalışanları için durak seçimi ayrıca hassastır. Toplu taşıma yoğunluğunun azaldığı saatlerde ana aksa yakınlık, aydınlatma, yaya erişimi ve bekleme süresi daha önemli hale gelir. En kısa rota her zaman en güvenli rota değildir. Personel bölgeleri, nöbet saatleri ve güvenli indirme noktaları birlikte değerlendirildiğinde hem çalışan deneyimi hem operasyon devamlılığı güçlenir.",
    ],
  },
  signals: [
    { title: "Devir teslim", text: "Servis varışı klinik işbaşı saatine değil, personelin hazırlanıp biriminde bulunması gereken zamana göre geriye doğru planlanır." },
    { title: "Nöbet sapması", text: "Acil veya klinik süreç nedeniyle çıkışı uzayabilen ekipler için bekleme sınırı ve alternatif iletişim akışı baştan konuşulur." },
    { title: "Gece güvenliği", text: "Duraklar gece aydınlatması, yaya yolu, çevre hareketi ve çalışanın evine erişimi açısından vardiya özelinde değerlendirilir." },
    { title: "Kampüs yapısı", text: "Ana bina, ek blok, personel kapısı veya ayrı teknik birim gibi noktalar son yaklaşım süresini ve iniş düzenini etkiler." },
  ],
  operations: {
    kicker: "Nöbet ve vardiya modeli",
    title: "Çalışan gruplarını klinik zaman pencereleriyle eşleştiririz.",
    paragraphs: [
      "Planlama, hastanenin birimlerini ve çalışma saatlerini tek bir tabloya yerleştirerek başlar. Aynı saatte görünen iki vardiyanın hazırlık ihtiyacı farklı olabilir; ameliyathane ekibinin erken hazır bulunması gerekirken idari ekip doğrudan mesai başlangıcına yaklaşabilir. Bu nedenle kurumun hangi ekip için hangi varış toleransını kabul ettiği belirlenir. Adres kümeleri daha sonra bu zaman pencereleriyle eşleştirilir.",
      "Çıkış seferlerinde nöbetin uzama olasılığı ve personelin bekleme süresi dikkate alınır. Her gecikme için aracı bekletmek diğer çalışanların yolculuğunu bozabilir; hiç bekleme payı tanımamak ise sağlık hizmetinin doğal sapmalarını görmezden gelir. Kurumla birlikte uygulanabilir sınır, bildirim kanalı ve istisna yönetimi netleştirilir. Böylece karar anlık kişilere değil önceden tanımlı kurala dayanır.",
    ],
    steps: [
      { title: "Birim ve saat haritası", text: "Poliklinik, klinik, acil, laboratuvar, teknik ve destek ekiplerinin çalışma pencereleri çıkarılır. Benzer saatler ortak, farklı toleranslar ayrı gruplarda değerlendirilir." },
      { title: "Personel lokasyon kümeleri", text: "Çalışan bölgeleri vardiya bilgisiyle eşleştirilir. Gece çıkan personel için gündüz rotasından farklı güvenli indirme ve yürüme koşulları incelenir." },
      { title: "Kampüs yaklaşımı", text: "Servisin kullanacağı giriş, güvenlik noktası, personel indirme alanı ve bina içi hazırlık süresi belirlenir. Hedef varış buna göre kurulur." },
      { title: "Sapma ve iletişim kuralı", text: "Nöbet uzaması, acil durum veya birim kaynaklı gecikmede kimin bilgi vereceği, ne kadar beklenebileceği ve diğer yolcuların nasıl bilgilendirileceği tanımlanır." },
      { title: "İlk dönem kontrolü", text: "Gerçek biniş ve varış süreleri, devir teslim uyumu ve gece durak geri bildirimleri izlenir. Gereken küçük saat veya durak revizyonları planlı biçimde yapılır." },
    ],
  },
  decision: {
    kicker: "Sağlık yönetimi için karar alanları",
    title: "Güvenlik, dakiklik ve çalışan iyilik hâli birlikte düşünülmeli.",
    paragraphs: [
      "Sağlık çalışanı için servis, vardiya sonrasındaki yorgunluk ve gece ulaşım belirsizliğini azaltan önemli bir kurum desteğidir. Çok uzun rota veya sık durak, çalışanın dinlenme süresinden alabilir. Aşırı merkezileştirilmiş durak ise özellikle gece saatinde güvenli erişim sorununa dönüşebilir. Plan bu iki uç arasında ölçülü bir denge kurmalıdır.",
      "Satın alma değerlendirmesinde yalnız sefer bedeli değil, varış toleransı, durak güvenliği, nöbet sapması, iletişim zinciri ve kampüs içi süre açıkça yer almalıdır. Hizmetin nasıl yönetileceği tanımlanmadığında, sorunlar vardiya amiri veya sürücünün anlık kararına kalır. Kurumsal prosedür operasyonun devamlılığını güçlendirir.",
    ],
    items: [
      { label: "Klinik", title: "Devir teslim penceresi", text: "Yeni ekip yalnız kapıya değil, birimine zamanında ulaşmalıdır. Hazırlık ve bina içi yürüme payı rota hedefinden önce tanımlanır." },
      { label: "Güvenlik", title: "Gece indirme noktası", text: "Çalışanın durağa veya ev yönüne güvenli devam edebilmesi, birkaç dakikalık rota kazancından daha değerli olabilir. Nokta seçimi vardiya özelinde yapılır." },
      { label: "İstisna", title: "Uzayan nöbet yönetimi", text: "Bekleme süresi, bildirim sorumlusu ve alternatif uygulama belirlenirse tek bir gecikme bütün hattın belirsizleşmesine yol açmaz." },
      { label: "Kampüs", title: "Birden fazla bina ve kapı", text: "Farklı bloklara dağılmış ekiplerin tek noktada mı yoksa belirli duraklarda mı alınacağı kampüs içi trafik ve yürüme süresiyle değerlendirilir." },
      { label: "İnsan", title: "Yorgunluk ve yolculuk süresi", text: "Özellikle uzun nöbet sonrasında gereksiz dolaşan hatlar çalışan deneyimini zayıflatır. Durak yakınlığı ile toplam yolculuk süresi dengelenir." },
    ],
  },
  scenarios: {
    kicker: "Sağlık tesisi senaryoları",
    title: "Aynı hastanede bile birden fazla ulaşım modeli gerekebilir.",
    paragraphs: [
      "Büyük bir hastane kampüsü, sabit gündüz mesaisi, üçlü vardiya ve nöbetçi ekipleri aynı anda barındırabilir. Küçük tıp merkezi daha sınırlı saatlerde çalışırken, laboratuvar veya görüntüleme birimi erken başlayabilir. Sağlık hizmeti ortak başlık olsa da çalışan hareketi tesisin uzmanlık alanına, büyüklüğüne ve hizmet saatine göre değişir.",
      "Bu farkları başlangıçta ayırmak, gereksiz sefer üretmeden kritik ekiplerin ulaşımını güvence altına alır. Her çalışan grubunun ayrı araçla taşınması gerekmez; ancak aynı hatta birleştirmenin varış ve yolculuk süresine etkisi açıkça görülmelidir.",
    ],
    items: [
      { label: "Hastane", title: "Üç vardiyalı klinik yapı", text: "Sabah, akşam ve gece ekiplerinde giriş–çıkış dengesi, devir teslim payı ve karşılıklı sefer olasılığı birlikte değerlendirilir." },
      { label: "Tıp merkezi", title: "Uzun gündüz mesaisi", text: "Farklı poliklinik kapanışları varsa tek çıkış saatinin çalışan beklemesine veya ek mesaiye etkisi incelenir." },
      { label: "Laboratuvar", title: "Erken başlangıçlı ekip", text: "Numune ve sonuç süreçleri nedeniyle erken başlayan ekipler için toplu taşıma öncesi saatlerde güvenli durak modeli önem kazanır." },
      { label: "Destek ekipleri", title: "Teknik, güvenlik ve temizlik", text: "Klinik personelden farklı saatlerde çalışan destek ekipleri kapasite ve rota planında görünmez bırakılmaz." },
    ],
  },
  procurement: {
    kicker: "İdari işler ve satın alma",
    title: "Şartnameye gerçek sağlık operasyonunu yazın.",
    paragraphs: [
      "Teklif dosyasında toplam personel sayısıyla birlikte birim veya vardiya bazındaki dağılım belirtilmelidir. Personel kapısı, kabul edilen erken varış aralığı, nöbet uzamasında uygulanacak kural ve gece durak yaklaşımı yazılı olduğunda teklifler daha sağlıklı karşılaştırılır. Aksi hâlde firmalar farklı varsayımlarla fiyat verir ve rakamlar aynı hizmeti temsil etmez.",
      "Mevcut düzen değerlendiriliyorsa özellikle geç varış, uzun bekleme, gece durağı şikâyeti ve birimler arası saat uyumsuzluğu kaydedilmelidir. Bu sorunlar yalnız daha fazla araçla değil, doğru vardiya gruplaması veya durak dizisiyle de çözülebilir. Ön analiz hangi müdahalenin gerekli olduğunu ayırır.",
      "Çalışan iletişimi de şartnamenin operasyon bölümünde tanımlanmalıdır. Durak veya hareket saati değiştiğinde bilginin hangi kurum yetkilisi tarafından, hangi kanalla ve ne kadar önce paylaşılacağı belli olmalıdır. Sağlık hizmetinde beklenmedik nöbet uzaması yaşanabilir; ancak istisna ile günlük uygulamanın birbirine karışması önlenmelidir. Düzenli tekrar eden değişiklikler geçici bildirimle yönetilmek yerine yeni bir vardiya senaryosu olarak ele alınır. Böylece saha ekibi, çalışan ve idari işler aynı güncel plana bakar.",
    ],
    checks: ["Birim ve vardiya bazında yaklaşık çalışan sayısı", "Devir teslim için gerekli erken varış süresi", "Personel kapısı ve kampüs içi hazırlık payı", "Nöbet uzamasında bildirim ve bekleme kuralı", "Gece vardiyası çalışanlarının yoğun bölgeleri", "Hafta sonu ve resmi tatil çalışma düzeni", "Mevcut gecikme ve güvenli durak geri bildirimleri"],
  },
  closing: {
    title: "Çalışan ulaşımını sağlık hizmetinin devamlılığıyla birlikte planlayalım.",
    beforeKeyword: "Kurumsal ",
    afterKeyword: " değerlendirmesinde nöbet saatlerini, personel bölgelerini ve kampüs girişini birlikte ele alırız. İlk görüşme, doğru soruları ve gerekli veri setini netleştirmekle başlar.",
  },
  faqs: [
    { question: "Hastane personel servisinde devir teslim süresi nasıl hesaplanır?", answer: "Kurumun belirlediği birimde hazır bulunma saati temel alınır; güvenlik girişi, soyunma veya hazırlık ve kampüs içi yürüme süreleri geriye doğru eklenerek hedef servis varışı belirlenir." },
    { question: "Nöbet uzadığında servis bekler mi?", answer: "Bekleme süresi ve istisna kuralı kurumla birlikte önceden tanımlanmalıdır. Amaç bir çalışanı mağdur etmeden bütün hattı belirsiz gecikmeye sokmayacak uygulanabilir bir prosedür kurmaktır." },
    { question: "Gece vardiyası için farklı duraklar kullanılabilir mi?", answer: "Evet. Gündüz uygun olan bir nokta gece güvenli veya erişilebilir olmayabilir. Aydınlatma, yaya yolu, çevre hareketi ve çalışanın son erişimi dikkate alınarak farklı durak dizisi kurulabilir." },
    { question: "Klinik ve destek personeli aynı hatta olabilir mi?", answer: "Saat, bölge ve varış toleransı uyuyorsa aynı hatta değerlendirilebilir. Ancak farklı çalışma pencereleri veya kampüs girişleri varsa ayrı senaryo daha uygulanabilir olabilir." },
    { question: "Hafta sonu ve resmi tatil seferleri planlanabilir mi?", answer: "Evet. Sağlık tesisinin gerçek çalışma düzeni ve vardiya sayıları paylaşıldığında hafta sonu ile resmi tatil günleri normal hafta içinden ayrı operasyon pencereleri olarak değerlendirilebilir." },
    { question: "Mevcut hastane servis düzeni analiz edilebilir mi?", answer: "Mevcut durak, süre, vardiya uyumu, gecikme ve çalışan geri bildirimleri üzerinden alternatif rota ve saat senaryoları hazırlanabilir." },
    { question: "Mısırlı Turizm ambulans veya hasta transferi yapıyor mu?", answer: "Bu sayfanın konusu hasta veya ambulans taşımacılığı değildir. Hizmet yalnız hastane ve sağlık tesislerinde çalışan personelin kurumsal servis operasyonunun planlanmasına odaklanır." },
  ],
  related: [
    { href: "/vardiyali-personel-servisi", label: "Vardiya", title: "Gece ve değişken vardiya planlaması", text: "Çoklu çalışma saatlerinde servis döngüsü ve saha sürekliliği yaklaşımını inceleyin.", image: healthImage },
    { href: "/sektorler/ofis-plaza-personel-servisi", label: "Kurumsal ekipler", title: "Ofis ve plaza personel servisi", text: "Gündüz çalışan idari ekiplerde pik saat, hibrit çalışma ve merkezi durak kararlarını görün.", image: officeImage },
    { href: "/kurumsal-servis-guzergah-planlama", label: "Güzergâh", title: "Güvenli durak ve rota planlaması", text: "Personel konumlarını güvenli ve uygulanabilir durak kümelerine dönüştüren yaklaşımı inceleyin.", image: logisticsImage },
  ],
};

const officePage: SectorPageData = {
  slug: "sektorler/ofis-plaza-personel-servisi",
  theme: "office",
  breadcrumb: "Ofis ve Plaza Personel Servisi",
  eyebrow: "Kurumsal ofis ekipleri için planlı ulaşım",
  title: "Ofis ve Plaza Personel Servisi",
  accent: "pik saati çalışan deneyimine dönüştürür.",
  primaryKeyword: "ofis ve plaza personel servisi",
  seoTitle: "Ofis ve Plaza Personel Servisi | Mısırlı Turizm",
  seoDescription: "İstanbul'daki ofis ve plaza çalışanları için pik saat, hibrit çalışma, güvenli durak ve güzergâh odaklı kurumsal personel servisi planlaması.",
  seoKeywords: ["ofis personel servisi", "plaza personel servisi", "kurumsal çalışan servisi", "İstanbul ofis ulaşımı", "hibrit çalışma servis planı"],
  schemaDescription: "İstanbul'daki ofis, plaza ve kurumsal merkez çalışanları için pik saat ve hibrit çalışma düzenine özel personel servisi planlaması.",
  serviceType: "Ofis ve plaza çalışanları için personel servisi planlaması",
  audience: "Kurumsal ofisler, genel müdürlükler ve plaza ekipleri",
  image: officeImage,
  imageAlt: "İstanbul iş merkezinde servis aracına yönelen ofis çalışanları",
  imageCaption: "Pik saat trafiğini, çalışan konforunu ve değişken ofis günlerini aynı plan içinde dengeliyoruz.",
  hero: {
    beforeKeyword: "Kurumsal ",
    afterKeyword: "; sabah yoğunluğunda zamanında varışı sağlarken hibrit çalışma, farklı mesai bitişleri ve merkezi iş alanlarının durak kısıtlarını da hesaba katmalıdır. Plan, çalışan deneyimi ile operasyon verimliliğini birlikte gözetir.",
    tags: ["Pik saat", "Hibrit çalışma", "Merkezi durak", "Çalışan deneyimi"],
  },
  intro: {
    kicker: "Kurumsal ofis dinamiği",
    title: "Aynı binada çalışan ekiplerin ulaşım ihtiyacı bile değişebilir.",
    paragraphs: [
      "Ofis ve plaza çalışanları çoğu zaman benzer mesai saatlerine sahip görünür. Ancak departman toplantıları, müşteri ziyaretleri, vardiyalı destek ekipleri, esnek giriş uygulaması ve hibrit çalışma günleri personel hareketini çeşitlendirir. Pazartesi ile cuma arasındaki doluluk aynı olmayabilir; ay sonu, proje teslimi veya etkinlik günlerinde çıkış saatleri değişebilir. Sabit planın bu hareketi görmezden gelmesi düşük doluluk veya uzun çalışan beklemesi üretir.",
      "İstanbul'un merkezi iş bölgelerinde rota yalnız trafikle sınırlı değildir. Plaza önündeki kısa süreli duruş kuralları, servis cepleri, güvenlik bariyeri, tek yönlü yollar ve yoğun taksi trafiği indirme-bindirme düzenini etkiler. Çalışanın binaya ulaşma süresi ile aracın güvenli biçimde yanaşabileceği nokta birlikte değerlendirilmelidir. Kapıya en yakın yer her zaman en güvenli veya operasyonel nokta olmayabilir.",
      "Çalışan deneyimi ofis servisinde güçlü bir işveren markası unsurudur. Gereksiz uzun yolculuk, sık değişen durak veya belirsiz hareket saati işe geliş stresini artırır. Buna karşılık makul yürüme mesafesinde, anlaşılır ve istikrarlı bir durak ağı; zaman yönetimini kolaylaştırır. Planlama, yalnız şirketin maliyetini değil çalışanın günlük yolculuk kalitesini de görünür bir karar başlığı yapar.",
    ],
  },
  signals: [
    { title: "Pik saat trafiği", text: "Sabah ve akşam iş bölgesi yoğunluğu aynı güzergâhı farklı sürelere taşıyabilir. Gidiş ve dönüş ayrı zaman gerçekleriyle planlanır." },
    { title: "Hibrit doluluk", text: "Ofise geliş günleri departmanlara göre değişiyorsa haftanın her günü aynı kapasite varsayımıyla değerlendirilmez." },
    { title: "Plaza erişimi", text: "Servis cebi, güvenlik bariyeri ve binaya yürüme süresi indirme noktasının seçiminde birlikte ele alınır." },
    { title: "Farklı çıkışlar", text: "Mesai, fazla çalışma, toplantı ve destek ekibi saatleri dönüş hattında bekleme veya ek sefer ihtiyacını etkileyebilir." },
  ],
  operations: {
    kicker: "Kurumsal ulaşım modeli",
    title: "Ofis günlerini, çalışan bölgelerini ve pik saatleri aynı tabloda toplarız.",
    paragraphs: [
      "İlk analizde çalışanların hangi günlerde ofise geldiği ve hangi saat pencerelerinde hareket ettiği anlaşılır. Hibrit çalışma varsa yalnız toplam kadro sayısı yerine gün bazındaki beklenen doluluk kullanılır. Departmanların ofis günleri sürekli değişiyorsa kurumun sağlayabileceği rezervasyon veya bildirim düzeni de değerlendirmeye alınır. Amaç her gün aynı kapasiteyi varsaymak değil, öngörülebilir değişimi plana dönüştürmektir.",
      "Lokasyon kümeleri ana ulaşım aksları ve iş bölgesine yaklaşım yönü üzerinden oluşturulur. Sabah ofise gelişte verimli olan bir durak dizisi, akşam tek yön veya trafik düzeni nedeniyle aynı sonucu vermeyebilir. Gidiş ve dönüş ayrı ayrı incelenir; gerektiğinde durak sırası veya ana aks tercihi değiştirilir. Çalışan için anlaşılır, kurum için yönetilebilir bir yapı hedeflenir.",
    ],
    steps: [
      { title: "Ofis takvimi analizi", text: "Sabit mesai, esnek giriş, hibrit günler, destek ekipleri ve dönemsel toplantı yoğunluğu çıkarılır. Gün bazındaki gerçek çalışan hareketi görünür hale getirilir." },
      { title: "Çalışan bölge kümeleri", text: "Adresler merkezi durak erişimi, ana toplu taşıma bağlantıları ve iş bölgesine yaklaşım yönüyle gruplandırılır. İlçe sınırı tek karar ölçütü olmaz." },
      { title: "Gidiş–dönüş senaryosu", text: "Sabah ve akşam trafiğinin farklılığı dikkate alınarak iki yön ayrı sürelerle değerlendirilir. Mesai dışı ekipler için alternatif dönüş penceresi gerekebilir." },
      { title: "Plaza iniş düzeni", text: "Güvenli duruş noktası, bina girişine yürüme ve güvenlik kontrolü planlanır. Servis aracının bina önünde oluşturacağı trafik riski önlenir." },
      { title: "Doluluk ve güncelleme", text: "Hibrit katılım veya ekip değişimi belirli aralıklarla kontrol edilir. Sürekli düşük doluluk ya da uzun sapma üreten hatlar yeniden kümelenir." },
    ],
  },
  decision: {
    kicker: "İK, idari işler ve satın alma",
    title: "Çalışan yan hakkını ölçülebilir bir operasyona dönüştürün.",
    paragraphs: [
      "Servis hizmeti ofis çalışanı için yalnız ulaşım değil, güne başlama ve günü bitirme deneyimidir. Çok erken alınmak, uzun rota nedeniyle eve geç ulaşmak veya durağın sık değişmesi memnuniyeti azaltır. Kurum açısından ise düşük doluluk ve gereksiz kilometre maliyet yaratır. Doğru plan bu iki bakışı karşı karşıya getirmez; ortak veride dengeler.",
      "Teklif karşılaştırmasında haftanın günlerine göre kapasite, beklenen yolculuk süresi, durak değişim prosedürü ve fazla mesai yaklaşımı görülmelidir. Yalnız araç kapasitesi veya aylık toplam üzerinden karar vermek, hizmet deneyimini belirleyen ayrıntıları saklar. Hangi varsayımın fiyata ve rotaya etki ettiği açıkça konuşulmalıdır.",
    ],
    items: [
      { label: "Deneyim", title: "Toplam yolculuk süresi", text: "Yakın durak uğruna çok sayıda sapma yapılması diğer çalışanların yolculuğunu uzatabilir. Yürüme mesafesi ile araç içi süre dengelenir." },
      { label: "Hibrit", title: "Gün bazında değişen doluluk", text: "Çalışanların ofis günleri biliniyorsa kapasite değerlendirmesi haftalık ortalama yerine gün bazında yapılabilir. Veri yoksa varsayım açıkça belirtilir." },
      { label: "Plaza", title: "Güvenli indirme ve biniş", text: "Yoğun iş bölgesinde aracın çift sıra veya uygunsuz noktada durması risk yaratır. Bina yönetimi ve saha koşulu planın parçasıdır." },
      { label: "Mesai", title: "Geç çıkış ve toplantı günleri", text: "Düzenli geç çıkan ekipler ile istisnai fazla mesai aynı yöntemle yönetilmemelidir. Hangi durumun plana dahil olduğu tanımlanır." },
      { label: "İletişim", title: "Durak ve saat değişiklikleri", text: "Çalışanın farklı kanallardan çelişkili bilgi almaması için kurum, operasyon ve yolcu arasındaki bildirim sorumluluğu belirlenir." },
    ],
  },
  scenarios: {
    kicker: "Ofis kullanım senaryoları",
    title: "Kurumsal çalışma modeli rota tasarımını doğrudan değiştirir.",
    paragraphs: [
      "Tam zamanlı ofis, haftanın belirli günlerinde hibrit çalışma, farklı vardiyalarda teknik destek veya birden fazla binaya dağılmış ekipler aynı çözümü gerektirmez. Kurumun çalışma modeli netleşmeden çizilen rota, ya gereğinden büyük kapasiteye ya da belirli günlerde yetersiz hizmete dönüşebilir.",
      "Senaryoları ayrı görmek, hangi gün ve ekip için hangi hizmet seviyesinin gerekli olduğunu açıklar. Böylece çalışanlar da servisin hangi gün ve saatte nasıl işleyeceğini daha anlaşılır biçimde takip eder.",
    ],
    items: [
      { label: "Tam zamanlı", title: "Beş gün sabit ofis düzeni", text: "Kararlı dolulukta ana odak pik saat süresi, durak dengesi ve plaza girişidir. Düzenli ölçümle küçük rota iyileştirmeleri yapılabilir." },
      { label: "Hibrit", title: "Departman bazlı ofis günleri", text: "Pazartesi ve perşembe gibi yoğun günler diğer günlerden ayrı değerlendirilir; değişimin nasıl bildirileceği kurumsal sürece bağlanır." },
      { label: "Destek", title: "Erken veya geç çalışan ekip", text: "Bilgi işlem, güvenlik veya operasyon desteği ana mesai dışında kalıyorsa ortak hatta zorlamak yerine ayrı zaman penceresi incelenir." },
      { label: "Kampüs", title: "Birden fazla ofis binası", text: "Yakın binalar için tek indirme noktası ile bina bazlı dağıtımın süre ve erişim etkisi karşılaştırılır." },
    ],
  },
  procurement: {
    kicker: "Kurumsal teklif hazırlığı",
    title: "Kadro sayısını değil, gerçek ofis katılımını paylaşın.",
    paragraphs: [
      "Hibrit çalışan bir kurum için toplam çalışan sayısı servis ihtiyacını olduğundan büyük gösterebilir. Gün bazındaki ofis katılımı, departmanların giriş saatleri ve çalışan bölgeleri daha gerçekçi bir değerlendirme sağlar. Henüz kesin veri yoksa beklenen oranlar ve belirsizlik açıkça belirtilerek senaryo aralığı hazırlanabilir.",
      "Mevcut düzen incelenirken çalışan memnuniyeti verisi de önemlidir. En uzun yolculuk süresi, çok erken alınan bölgeler, sık geç kalan hatlar ve düşük doluluk günleri kaydedildiğinde iyileştirme alanı görünür olur. Ticari teklif, yalnız yeni bir fiyat değil, bu sorunlara hangi planlama yaklaşımının cevap vereceğini de göstermelidir.",
      "Kurumsal taşınma, yeni ofis günü veya departman birleşmesi gibi değişiklikler için geçiş takvimi ayrıca yazılmalıdır. Çalışanların eski durağı ne zamana kadar kullanacağı, yeni listenin kim tarafından onaylanacağı ve ilk hafta geri bildirimlerinin nasıl toplanacağı önceden belirlenirse servis değişikliği iş deneyimini bozmaz. Özellikle hibrit yapıda güncel katılım bilgisinin tek bir sorumlu kanaldan gelmesi, gereksiz sefer ile kapasite yetersizliği arasında daha dengeli karar kurulmasını sağlar.",
    ],
    checks: ["Gün bazında beklenen ofis katılımı", "Departman veya ekip bazında giriş–çıkış saatleri", "Çalışanların yoğunlaştığı bölgeler", "Plaza servis cebi ve güvenlik giriş bilgisi", "Fazla mesai veya düzenli geç çıkış modeli", "Mevcut en uzun yolculuk ve gecikme sorunları", "Durak değişikliklerini yönetecek kurum sorumlusu"],
  },
  closing: {
    title: "Ofise geliş deneyimini trafik belirsizliğinden çıkaralım.",
    beforeKeyword: "Mısırlı Turizm, ",
    afterKeyword: " ihtiyacını çalışan lokasyonu, ofis günü, pik saat ve plaza erişimiyle birlikte değerlendirir. İlk görüşmede sabit kabuller yerine kurumunuzun gerçek çalışma modelini netleştiririz.",
  },
  faqs: [
    { question: "Hibrit çalışan ofislerde servis nasıl planlanır?", answer: "Toplam kadro yerine gün bazındaki beklenen ofis katılımı, departman günleri ve çalışan bölgeleri değerlendirilir. Değişkenlik yüksekse bildirim veya rezervasyon düzeninin nasıl işleyeceği kurumla birlikte belirlenir." },
    { question: "Plaza önüne servis giremiyorsa ne yapılır?", answer: "Yakındaki güvenli ve yasal duruş noktaları, bina girişine yürüme süresi ve çalışan erişimi karşılaştırılır. Kapıya en yakın nokta yerine güvenli ve uygulanabilir indirme alanı tercih edilir." },
    { question: "Sabah ve akşam aynı güzergâh mı kullanılır?", answer: "Her zaman değil. Tek yönler, pik saat trafik yönü ve plaza çevresindeki kısıtlar nedeniyle gidiş ile dönüş farklı durak sırası veya ana aks gerektirebilir." },
    { question: "Fazla mesai yapan çalışanlar için çözüm oluşturulabilir mi?", answer: "Düzenli tekrar eden geç çıkışlar ayrı zaman penceresi olarak değerlendirilebilir. İstisnai fazla mesai içinse bildirim ve uygulama kuralı kurumla birlikte tanımlanmalıdır." },
    { question: "Ofis servisi çalışan memnuniyetine göre iyileştirilebilir mi?", answer: "Evet. Yolculuk süresi, durağa erişim, gecikme ve gün bazında doluluk verileri çalışan geri bildirimiyle birlikte incelenerek rota seçenekleri geliştirilebilir." },
    { question: "Birden fazla plaza aynı hatta olabilir mi?", answer: "Konumlar, mesai saatleri ve bina erişimi uygunsa değerlendirilebilir. Ancak ikinci tesis durağının ilk ekip için varış süresini bozup bozmadığı mutlaka karşılaştırılır." },
    { question: "Mısırlı Turizm makam aracı veya filo kiralar mı?", answer: "Hayır. Bu hizmet makam aracı ya da filo kiralama değildir; kurumsal çalışanların düzenli personel servisi operasyonunun planlanmasına odaklanır." },
  ],
  related: [
    { href: "/personel-tasimaciligi", label: "Ana hizmet", title: "Kurumsal personel taşımacılığı", text: "Lokasyon, vardiya, durak ve kapasite kararlarını bir araya getiren ana hizmet yaklaşımını inceleyin.", image: officeImage },
    { href: "/sektorler/avm-perakende-personel-servisi", label: "Perakende", title: "AVM ve perakende personel servisi", text: "Farklı kapanış saatleri ve vardiyalı mağaza ekipleri için oluşturulan sektör planını görün.", image: retailImage },
    { href: "/personel-servisi-fiyatlari", label: "Ticari değerlendirme", title: "Personel servisi fiyatını etkileyen unsurlar", text: "Mesafe, gün, sefer, durak ve kapasitenin teklif üzerindeki etkisini ayrıntılı inceleyin.", image: logisticsImage },
  ],
};

const retailPage: SectorPageData = {
  slug: "sektorler/avm-perakende-personel-servisi",
  theme: "retail",
  breadcrumb: "AVM ve Perakende Personel Servisi",
  eyebrow: "Mağaza, güvenlik ve destek ekipleri için ulaşım",
  title: "AVM ve Perakende Personel Servisi",
  accent: "açılış ve kapanış saatine uyum sağlar.",
  primaryKeyword: "AVM ve perakende personel servisi",
  seoTitle: "AVM ve Perakende Personel Servisi | Mısırlı Turizm",
  seoDescription: "İstanbul'da AVM, mağaza ve perakende ekipleri için açılış-kapanış, vardiya, güvenli gece durağı ve güzergâh odaklı personel servisi planlaması.",
  seoKeywords: ["AVM personel servisi", "perakende çalışan servisi", "mağaza personel taşımacılığı", "AVM kapanış servisi", "İstanbul perakende personel ulaşımı"],
  schemaDescription: "İstanbul'daki AVM, mağaza ve perakende işletmeleri için açılış, kapanış ve vardiya düzenine özel personel servisi planlaması.",
  serviceType: "AVM ve perakende çalışanları için personel servisi planlaması",
  audience: "AVM yönetimleri, mağazalar ve perakende operasyonları",
  image: retailImage,
  imageAlt: "AVM çalışanlarının vardiya servis aracına yöneldiği perakende personel ulaşımı",
  imageCaption: "Mağaza kapanışını, destek ekiplerini ve gece güvenliğini ortak bir ulaşım planında buluşturuyoruz.",
  hero: {
    beforeKeyword: "Planlı ",
    afterKeyword: "; mağaza çalışanı, güvenlik, temizlik, teknik ekip ve yeme-içme personelinin farklı saatlerini tek bir kapanış varsayımına sıkıştırmaz. Ulaşımı AVM'nin gerçek açılış, yoğunluk ve kapanış akışıyla birlikte kurar.",
    tags: ["Mağaza kapanışı", "Gece durağı", "Destek ekipleri", "Hafta sonu yoğunluğu"],
  },
  intro: {
    kicker: "Perakende operasyonunun gerçeği",
    title: "AVM kapanır; çalışan hareketi aynı anda bitmez.",
    paragraphs: [
      "Alışveriş merkezi ve perakende operasyonlarında görünen çalışma saati ile personelin gerçek çıkış saati farklı olabilir. Mağaza kapandıktan sonra kasa, sayım, ürün toplama ve kapanış kontrolleri devam eder. Yeme-içme alanları, sinema, güvenlik, temizlik ve teknik ekipler farklı zamanlarda ayrılabilir. Tek bir hareket saatinin bütün çalışanlara uygulanması ya uzun bekleme ya da servisi kaçırma riski üretir.",
      "Hafta sonu, kampanya dönemi, özel gün ve sezon indirimleri personel yoğunluğunu artırabilir. Bazı mağazalar daha geç kapanırken bazı ekipler normal düzende çalışır. Değişkenliğin sık olduğu yapılarda temel operasyon ile dönemsel senaryo ayrılmalıdır. Böylece geçici yoğunluk kalıcı maliyet yaratmaz, normal gün planı da yoğun günlerde yetersiz kalmaz.",
      "Gece çıkışlarında çalışanların güvenli duraklara ulaşması kritik hale gelir. AVM personel çıkışı çoğu zaman müşteri girişinden farklıdır; servis aracının yanaşacağı alan, güvenlik kontrolü ve saha içi dolaşım ayrıca planlanır. İndirme noktaları da gece toplu taşıma imkânı, aydınlatma ve yaya erişimiyle birlikte değerlendirilir. En kısa rota, çalışan için güvenli bir son yolculuk üretmelidir.",
    ],
  },
  signals: [
    { title: "Kapanış sapması", text: "Mağaza kapanışı ile çalışanın hazır olduğu saat arasındaki kasa, sayım ve güvenlik süreçleri hareket penceresine eklenir." },
    { title: "Ekip çeşitliliği", text: "Mağaza, yemek alanı, güvenlik, temizlik ve teknik ekiplerin farklı saatleri kapasite ve sefer kararında ayrı görülür." },
    { title: "Hafta sonu yoğunluğu", text: "Ziyaretçi trafiği ve çalışan sayısı hafta içine göre değişiyorsa gün bazında farklı operasyon senaryosu hazırlanır." },
    { title: "Gece durağı", text: "Kapanış sonrası indirme noktaları aydınlatma, yaya erişimi ve çalışanın ev yönüne güvenli devamı bakımından değerlendirilir." },
  ],
  operations: {
    kicker: "Açılış–kapanış modeli",
    title: "Çalışan gruplarını hazır olma saatine göre planlarız.",
    paragraphs: [
      "İlk çalışma AVM veya mağaza operasyonundaki ekipleri ve gerçek hareket saatlerini ayırır. Resmî kapanış saati tek başına kullanılmaz; personelin sayım, kasa teslimi, soyunma ve güvenlik çıkışı sonrasında servis noktasına ne zaman ulaşabildiği belirlenir. Sabah tarafında da mağaza açılışı, hazırlık ve stok çalışması gibi süreçler işbaşı hedefini etkiler.",
      "Birden fazla mağazanın ortak servis ihtiyacı değerlendiriliyorsa personel sayıları, işveren sorumluları ve değişiklik bildirimleri ortak bir akışta toplanmalıdır. AVM yönetimi, mağaza yöneticisi ve operasyon tarafı ayrı saatler paylaştığında saha belirsizleşir. Yetkili bilgi kaynağı ve son bildirim zamanı baştan tanımlanır.",
    ],
    steps: [
      { title: "Ekip ve saat ayrımı", text: "Mağaza, yeme-içme, güvenlik, temizlik ve teknik ekiplerin işbaşı ile hazır olma saatleri çıkarılır. Aynı hareket penceresine uyan gruplar birleştirilir." },
      { title: "Personel çıkış noktası", text: "Servis aracının kullanacağı saha, güvenlik geçişi ve personelin mağazadan bu noktaya ulaşma süresi belirlenir. Müşteri trafiğiyle çakışma azaltılır." },
      { title: "Durak ve gece güvenliği", text: "Çalışan bölgeleri ana ulaşım akslarında kümelenir; kapanış seferlerinde aydınlatma ve son yaya erişimi gündüz rotasından ayrı incelenir." },
      { title: "Hafta içi–hafta sonu dengesi", text: "Çalışan sayısı ve trafik koşulu değişiyorsa gün grupları farklı kapasite veya saat senaryosuyla değerlendirilir." },
      { title: "Yoğun dönem revizyonu", text: "Kampanya, sezon veya özel günlerde beklenen artış ayrı planlanır. Dönem bittiğinde temel düzene kontrollü dönüş yapılır." },
    ],
  },
  decision: {
    kicker: "Perakende yönetimi için kararlar",
    title: "Tek kapanış saati, tek servis ihtiyacı anlamına gelmez.",
    paragraphs: [
      "Perakende çalışanı için servis özellikle geç saatlerde güçlü bir güvenlik ve bağlılık unsurudur. Ancak farklı ekipleri tek saate zorlamak, erken bitiren çalışanı uzun süre bekletebilir; geç bitiren çalışan ise servise yetişme baskısı yaşayabilir. Operasyon, bu farkların sıklığına ve personel sayısına göre dengelenmelidir.",
      "Ticari değerlendirmede sefer sayısı kadar hangi ekibin hangi saate dahil olduğu görülmelidir. Hafta sonu, resmî tatil ve kampanya dönemlerinin normal fiyata nasıl yansıyacağı, geç kapanışın hangi koşulda ayrı sefer sayılacağı ve çalışan değişikliklerinin kim tarafından bildirileceği açık olmalıdır.",
    ],
    items: [
      { label: "Kapanış", title: "Hazır olma saati", text: "Mağazanın kapıyı kapattığı dakika ile personelin servis noktasına geldiği dakika aynı değildir. Sayım ve güvenlik payı gerçek veriden çıkarılır." },
      { label: "Ekip", title: "Farklı operasyon grupları", text: "Yemek alanı, sinema veya teknik hizmetler mağazalardan farklı saat kullanabilir. Her grubun ortak hatta etkisi görünür hale getirilir." },
      { label: "Güvenlik", title: "Gece son erişim", text: "İndirme durağından eve yürüyüş, aydınlatma ve çevre hareketi özellikle kadın çalışanlar ve geç saatler açısından değerlendirilir." },
      { label: "Yoğunluk", title: "Hafta sonu ve kampanya", text: "Yoğun dönemin çalışan sayısı, trafik ve kapanış uzamasına etkisi temel operasyondan ayrı senaryo olarak tanımlanır." },
      { label: "Yönetim", title: "Çok mağazalı bilgi akışı", text: "Her mağazanın ayrı değişiklik bildirmesi yerine yetkili kanal ve son bildirim zamanı belirlenirse saha karışıklığı azalır." },
    ],
  },
  scenarios: {
    kicker: "Perakende senaryoları",
    title: "AVM'nin büyüklüğü kadar içindeki işletme karması da önemlidir.",
    paragraphs: [
      "Mahalle ölçeğindeki alışveriş merkezi ile sinema, restoran ve eğlence alanı bulunan büyük bir kompleks aynı kapanış düzenine sahip değildir. Tek marka mağaza zinciri daha standart bir takvim kullanabilirken çok mağazalı yapı ortak koordinasyona ihtiyaç duyar. Servis planı işletmenin gerçek ekip bileşimine göre şekillenir.",
      "Sabit ve dönemsel ihtiyaçları ayırmak, hem maliyet hem çalışan deneyimi için daha sağlıklıdır. Her yoğun günü kalıcı plana dönüştürmek yerine hangi tarihlerde ek senaryo gerektiği belirlenebilir.",
    ],
    items: [
      { label: "AVM", title: "Çok mağazalı ortak servis", text: "Farklı işverenlerden gelen personel sayıları ve saat değişiklikleri tek yetkili akışta birleştirilerek durak ve kapasite planlanır." },
      { label: "Mağaza zinciri", title: "Birden fazla şube veya nokta", text: "Şubelerin mesai ve çalışan bölgeleri uygunsa ortak hat olasılığı incelenir; mağazalar arası sapmanın yolculuğu uzatmasına izin verilmez." },
      { label: "Yeme-içme", title: "Geç kapanan operasyon", text: "Mutfak ve salon kapanışı müşteri çıkışından sonra devam ediyorsa hazır olma saati ayrı hareket penceresine yerleştirilir." },
      { label: "Teknik ekip", title: "Açılış öncesi ve kapanış sonrası", text: "Bakım, güvenlik ve temizlik ekipleri müşteri saatlerinden bağımsız çalışıyorsa ana mağaza hattına zorla dahil edilmez." },
    ],
  },
  procurement: {
    kicker: "AVM yönetimi ve satın alma",
    title: "Teklifte ekip dağılımını ve gün farkını görünür kılın.",
    paragraphs: [
      "Toplam çalışan sayısı, perakende servis ihtiyacını tek başına açıklamaz. Açılış ve kapanış ekipleri, hafta içi ile hafta sonu farkı, mağaza veya departman bazındaki hazır olma saatleri ve personel çıkış noktası ayrı bilgiler olarak paylaşılmalıdır. Böylece teklif veren taraflar aynı operasyon kapsamını fiyatlandırır.",
      "Mevcut düzen iyileştirilecekse servisi bekleyen ekipler, sık kaçırılan kapanış seferleri, gece durağı şikâyetleri ve yoğun dönemlerdeki kapasite sorunları kaydedilmelidir. Bu veriler ek araç ihtiyacı ile saat veya durak düzenlemesi arasındaki farkı anlamayı sağlar.",
      "Çok mağazalı yapılarda teklif kapsamı kadar sorumluluk matrisi de önemlidir. AVM yönetimi, mağaza müdürü, insan kaynakları ve saha operasyonu arasında kimin personel sayısını kesinleştireceği; geç kapanışı kimin bildireceği ve son değişiklik saatinin ne olacağı yazılı hale getirilmelidir. Aksi durumda aynı vardiya için birden fazla liste oluşabilir ve servis noktasında bekleme yaşanabilir. Ortak formatta güncellenen tek liste, hem çalışan iletişimini hem kapasite kontrolünü kolaylaştırır.",
      "Dönemsel yoğunluklarda yalnız çalışan sayısına bakmak yeterli değildir. Kampanya kapanışının uzaması, müşteri otoparkındaki çıkış trafiği, servis alanına erişim ve güvenlik kontrolü hareket saatini birlikte etkileyebilir. Özel gün planı; tarih aralığı, ekip bazında beklenen katılım, ek sefer eşiği ve normal düzene dönüş günüyle tanımlanmalıdır. Böylece kısa süreli satış hareketi kalıcı bir maliyete dönüşmez, yoğun akşamda çalışan güvenliği de son dakika kararına bırakılmaz.",
    ],
    checks: ["Ekip veya mağaza bazında giriş–çıkış saatleri", "Resmî kapanış sonrası hazırlık süresi", "Hafta içi ve hafta sonu personel sayıları", "Personel servis çıkış noktası ve güvenlik süreci", "Gece çalışanlarının yoğunlaştığı bölgeler", "Kampanya ve özel gün yoğunluk takvimi", "Değişiklik bildirecek AVM veya mağaza yetkilisi"],
  },
  closing: {
    title: "Kapanış saatini güvenli ve öngörülebilir bir yolculuğa bağlayalım.",
    beforeKeyword: "Mısırlı Turizm, ",
    afterKeyword: " planını mağaza saatleri, ekip dağılımı, personel çıkış noktası ve gece durak güvenliğiyle birlikte kurar. İlk görüşmede gerçek hareket pencerelerini ve veri sorumlularını netleştiririz.",
  },
  faqs: [
    { question: "AVM kapanış servisi mağaza kapanır kapanmaz mı hareket eder?", answer: "Hayır, hareket saati personelin kasa, sayım, hazırlık ve güvenlik çıkışı sonrasında servis noktasında hazır olabileceği gerçek zamana göre belirlenmelidir." },
    { question: "Farklı mağaza çalışanları aynı servisi kullanabilir mi?", answer: "Saat, lokasyon ve yetkili bilgi akışı uyuyorsa değerlendirilebilir. Ancak farklı işverenlerin değişiklik bildirimlerini tek koordinasyon kanalında toplaması gerekir." },
    { question: "Hafta sonu için farklı servis planı yapılabilir mi?", answer: "Evet. Personel sayısı, trafik ve kapanış düzeni hafta içine göre değişiyorsa hafta sonu ayrı kapasite, saat veya durak senaryosuyla planlanabilir." },
    { question: "Gece geç saatte güvenli durak nasıl seçilir?", answer: "Aydınlatma, ana yol bağlantısı, yaya erişimi, çevredeki hareket ve çalışanın ev yönüne devamı birlikte değerlendirilir. En kısa rota tek başına karar ölçütü değildir." },
    { question: "Kampanya döneminde ek sefer planlanabilir mi?", answer: "Beklenen çalışan artışı ve yoğunluk süresi biliniyorsa dönemsel senaryo hazırlanabilir. Geçici ihtiyaç temel operasyonun kalıcı maliyetine dönüştürülmez." },
    { question: "Teknik ve güvenlik ekipleri mağaza hattına dahil edilir mi?", answer: "Çalışma saatleri ve çalışan bölgeleri uyuyorsa mümkün olabilir. Farklı açılış veya kapanış saatlerinde ayrı zaman penceresi daha uygun olabilir." },
    { question: "Bu hizmet müşteriler için AVM ring servisi midir?", answer: "Hayır. Sayfa yalnız AVM, mağaza ve destek ekiplerinde çalışan personelin kurumsal ulaşım operasyonuna odaklanır; müşteri ringi veya araç kiralama hizmeti değildir." },
  ],
  related: [
    { href: "/vardiyali-personel-servisi", label: "Vardiya", title: "Değişken saatlerde personel servisi", text: "Gece ve çoklu vardiya düzeninde sefer döngüsü ile iletişim yaklaşımını ayrıntılı inceleyin.", image: retailImage },
    { href: "/sektorler/ofis-plaza-personel-servisi", label: "Kurumsal ofis", title: "Ofis ve plaza personel servisi", text: "Sabit ve hibrit ofis ekiplerinde pik saat, durak ve çalışan deneyimi yaklaşımına geçin.", image: officeImage },
    { href: "/hizmet-bolgeleri", label: "İstanbul", title: "Hizmet bölgeleri", text: "Avrupa ve Anadolu Yakası'nın farklı trafik ve çalışma kümeleri için hazırlanan bölge sayfalarını inceleyin.", image: logisticsImage },
  ],
};

export const sectorPages = [logisticsPage, healthPage, officePage, retailPage];

export function getSectorPage(slug: string) {
  return sectorPages.find((page) => page.slug === `sektorler/${slug}`);
}

export { sectorsHub };
