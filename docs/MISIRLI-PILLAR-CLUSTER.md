# Mısırlı Turizm — Pillar / Cluster Mimarisi

## Mimari hedef

Kurumsal personel taşımacılığı aramasını tek bir güçlü ana hizmet sayfasında karşılamak;
vardiya, fabrika, güzergâh ve fiyat araştırmalarını ise birbirini tekrar etmeyen destek
sayfalarıyla derinleştirmek. İlçe sayfaları yalnızca gerçekten farklı kullanıcı niyeti ve
özgün saha bağlamı üretilebildiğinde açılır.

## Yayın sırası

| Rol | URL | Birincil niyet | İç link görevi |
| --- | --- | --- | --- |
| Ana sayfa | `/` | Marka + B2B çözüm ortağı | Tüm ana kümeleri tanıtır |
| Pillar | `/personel-tasimaciligi` | İstanbul’da kurumsal personel servisi araştırması | Konunun ana otorite sayfasıdır |
| Cluster | `/vardiyali-personel-servisi/` | Çoklu/değişken vardiya operasyonu | Pillar ve teklif sistemine bağlanır |
| Cluster | `/fabrika-personel-tasimaciligi/` | Sanayi ve üretim tesisi ihtiyacı | Pillar ve vardiya sayfasına bağlanır |
| Cluster | `/kurumsal-servis-guzergah-planlama/` | Rota, durak ve süre optimizasyonu | Pillar ve fiyat sayfasına bağlanır |
| Cluster | `/personel-servisi-fiyatlari/` | Fiyatı belirleyen değişkenleri anlama | Pillar ve teklif sistemine bağlanır |
| Lokasyon | `/hizmet-bolgeleri/basaksehir-personel-servisi/` | Başakşehir ve İkitelli OSB personel servisi araştırması | Hub, pillar, vardiya, fabrika ve rota kümelerine bağlanır |
| Kurumsal | `/kurumsal/` | Firma yaklaşımı ve güven değerlendirmesi | Hizmet sayfalarına güven sinyali verir |
| Dönüşüm | `/iletisim/` | Doğrulanmış kanaldan görüşme başlatma | Tüm ticari sayfalardan bağlantı alır |

## 15 Eylül 2026 SERP önceliklendirmesi

Hacim aracı erişimi olmadan kesin aylık arama sayısı yazılmaz. Aşağıdaki sıra; canlı SERP'te
tekrar eden başlıklar, ayrı sayfa üreten rakipler ve ticari arama niyetinin gücüne göre
belirlenmiştir. Google Keyword Planner ve Search Console bağlandığında gerçek gösterim/tıklama
verisiyle yeniden sıralanacaktır.

| Öncelik | Ana sorgu | Long-tail destekleri | Sayfa |
| --- | --- | --- | --- |
| 1 | **personel taşımacılığı**, **personel servisi** | İstanbul kurumsal personel taşımacılığı, personel taşımacılığı firmaları | `/personel-tasimaciligi` |
| 2 | **personel servisi fiyatları** | personel taşımacılığı fiyatları, personel servisi fiyat teklifi | `/personel-servisi-fiyatlari` |
| 3 | **fabrika personel servisi** | fabrika personel taşımacılığı, OSB personel servisi, işçi servisi | `/fabrika-personel-tasimaciligi` |
| 4 | **vardiyalı personel servisi** | gece vardiyası personel servisi, çoklu vardiya servis planlama | `/vardiyali-personel-servisi` |
| 5 | **servis güzergâh planlama** | personel servis rotası, durak planlama, rota optimizasyonu | `/kurumsal-servis-guzergah-planlama` |
| 6 | **İstanbul personel servisi hizmet bölgeleri** | Avrupa Yakası personel servisi, Anadolu Yakası personel servisi | `/hizmet-bolgeleri` |
| 7 | **Başakşehir personel servisi**, **İkitelli personel servisi** | İkitelli OSB personel taşımacılığı, Başakşehir vardiyalı personel servisi | `/hizmet-bolgeleri/basaksehir-personel-servisi` |

## İlçe sayfası URL modeli

İlçe sayfaları aşamalı olarak `/hizmet-bolgeleri/{ilce}-personel-servisi` yapısında açılır.
Her sayfa bölgenin iş/sanayi yapısı, ana ulaşım aksları, vardiya senaryosu, komşu ilçe
bağlantıları ve hizmet sayfalarına özgün iç linkler içermelidir. İlçe adı değiştirilmiş kopya
metin yayınlanmaz.

İlk lokasyon sayfası 16 Eylül 2026 tarihli canlı SERP ve resmî İkitelli OSB bölge verileri
temel alınarak Başakşehir–İkitelli için yayıma hazırlanmıştır.

## İç link kuralları

1. Pillar sayfa tüm yayınlanmış cluster sayfalara bağlanır; yayınlanmamış URL’ye link verilmez.
2. Her cluster, doğal bağlam içinde pillar sayfaya ve en fazla iki ilgili cluster’a bağlanır.
3. Ana sayfa, hizmeti özetler; ayrıntılı sorguyu pillar sayfaya yönlendirir.
4. Teklif niyetli paragraflar `/#hizli-teklif` akışına bağlanır.
5. Aynı anchor metni her yerde tekrarlanmaz; bağlantı metni cümlenin amacına göre yazılır.
6. Ana anahtar kelime H1, giriş ve en az bir doğal gövde cümlesinde güçlü vurgu (`strong`) alır;
   tekrar ve anahtar kelime doldurma yapılmaz.

## Cannibalization sınırı

- Pillar sayfanın ana konusu “İstanbul kurumsal personel taşımacılığı”dır.
- Vardiya sayfası operasyon ritmine, fabrika sayfası tesis senaryosuna, güzergâh sayfası rota
  metoduna, fiyat sayfası maliyet değişkenlerine odaklanır.
- “İstanbul personel servisi” adıyla pillar sayfayla aynı niyeti hedefleyen ikinci bir sayfa
  açılmaz.
- Lokasyon sayfaları, ilçe adı değiştirilmiş kopyalar olarak üretilmez.

## Schema dağılımı

- Ana sayfa: `Organization`, genel `Service`, `FAQPage`
- Pillar: `BreadcrumbList`, ayrıntılı `Service`, sayfaya özel `FAQPage`
- Cluster: konuya özel `Service` veya `Article`; yalnız görünür sorular varsa `FAQPage`
- Lokasyon: `BreadcrumbList`, yerel `areaServed` içeren `Service` ve görünür sorular için `FAQPage`
- Kurumsal: doğrulanmış bilgilerle `AboutPage` ve `Organization`

## Yayın öncesi kapı

- Arama niyeti ve H1 benzersiz mi?
- Title, description ve canonical başka sayfayla çakışıyor mu?
- Ana sayfadan ve ilgili sayfalardan en az bir iç link var mı?
- CTA doğrulanmış akışa mı gidiyor?
- Kanıtlanmamış metrik, sertifika, adres veya iletişim bilgisi var mı?
- Mobil taşma, görsel boyutu, focus durumu ve schema geçerli mi?
