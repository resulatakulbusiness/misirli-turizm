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
| Kurumsal | `/kurumsal/` | Firma yaklaşımı ve güven değerlendirmesi | Hizmet sayfalarına güven sinyali verir |
| Dönüşüm | `/iletisim/` | Doğrulanmış kanaldan görüşme başlatma | Tüm ticari sayfalardan bağlantı alır |

## İç link kuralları

1. Pillar sayfa tüm yayınlanmış cluster sayfalara bağlanır; yayınlanmamış URL’ye link verilmez.
2. Her cluster, doğal bağlam içinde pillar sayfaya ve en fazla iki ilgili cluster’a bağlanır.
3. Ana sayfa, hizmeti özetler; ayrıntılı sorguyu pillar sayfaya yönlendirir.
4. Teklif niyetli paragraflar `/#hizli-teklif` akışına bağlanır.
5. Aynı anchor metni her yerde tekrarlanmaz; bağlantı metni cümlenin amacına göre yazılır.

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
- Kurumsal: doğrulanmış bilgilerle `AboutPage` ve `Organization`

## Yayın öncesi kapı

- Arama niyeti ve H1 benzersiz mi?
- Title, description ve canonical başka sayfayla çakışıyor mu?
- Ana sayfadan ve ilgili sayfalardan en az bir iç link var mı?
- CTA doğrulanmış akışa mı gidiyor?
- Kanıtlanmamış metrik, sertifika, adres veya iletişim bilgisi var mı?
- Mobil taşma, görsel boyutu, focus durumu ve schema geçerli mi?
