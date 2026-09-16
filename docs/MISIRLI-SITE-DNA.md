# Mısırlı Turizm — Site DNA

## Proje kimliği

- Domain: `misirliturizm.com`
- Repo: `resulatakulbusiness/misirli-turizm`
- Teknoloji: Next.js 16, App Router, TypeScript
- Yayın: Vercel
- Amaç: kurumsal reklam, SEO/GEO ve B2B müşteri kazanımı
- Ayrı sistem: `panel.misirliturizm.com` operasyon yazılımıdır; bu siteye ait değildir.

## Konumlandırma

Ana hizmet **kurumsal personel taşımacılığıdır**. Mısırlı Turizm yalnızca araç sağlayan bir servis firması gibi anlatılmaz. Marka; personel lokasyonlarını, vardiya saatlerini, güzergâhları ve operasyonun bütününü planlayan B2B çözüm ortağı olarak konumlanır.

Araç veya filo kiralama ayrı bir hizmet değildir ve içerik mimarisine eklenmez.

## Tasarım dili

| Rol | Renk | Kullanım |
| --- | --- | --- |
| Ana antrasit | `#202A34` | Header CTA, başlıklar, koyu yüzeyler |
| Kurumsal mavi | `#1769C2` | Operasyon, teknoloji ve güven vurguları |
| Parlak mavi | `#2D8CFF` | Koyu zeminde ikincil vurgu |
| Marka turuncusu | `#F47A00` | Ana CTA, çizgiler ve kritik aksiyonlar |
| Kırık beyaz | `#F4F6F8` | Sayfa zemini |
| Beyaz | `#FFFFFF` | Kartlar ve temiz kurumsal yüzeyler |

- Yazı ailesi: Manrope; güçlü başlık, rahat okunan gövde.
- Köşeler: kontrollü yuvarlatma; kurumsal görünümü bozacak aşırı yumuşak formlar kullanılmaz.
- Mikro etkileşim: yalnızca anlamlı hover, focus ve yumuşak görsel hareketler.
- Görsel dil: gerçek operasyon, personel servisi ve rota/planlama bağlamı.
- Kullanılmayacak klişeler: piramit, çöl, turistik Mısır ikonografisi.

### Header ve hero standardı

- Ana sayfada hero üzerine yerleşen şeffaf kurumsal header; sayfa kaydırıldığında okunabilir beyaz sabit yüzeye dönüşür.
- Masaüstü menüsü: Ana Sayfa, Hizmetlerimiz, Hizmet Bölgelerimiz, Kurumsal, Bize Ulaşın ve Hızlı Teklif.
- Hizmetlerimiz ve Hizmet Bölgelerimiz açılır menüdür; yalnızca yayında olan sayfa ve doğrulanmış bölüm hedeflerine bağlanır.
- İlk ekran, en fazla üç sahneden oluşan tam ekran slider'dır. Her sahne farklı bir B2B ihtiyeti anlatır; aynı metnin varyasyonu değildir.
- Slider 7 saniyede ilerler; önceki/sonraki, doğrudan sahne seçimi ve duraklatma kontrolleri bulunur.
- `prefers-reduced-motion` tercihi otomatik geçişi ve gereksiz animasyonu durdurur.
- Hero görselleri 16:9, 1920×1080 WebP olarak optimize edilir; başlık okunabilirliği koyu katmanla korunur.

## Logo kullanımı

Resmî geometrik `MISIRLI TURİZM` kelime markası kullanılır. `MISIRLI` koyu antrasit kalır. Turuncu alt çizgi CTA sistemiyle bağ kurar. `TURİZM` sözcüğü resmî turuncu formunda veya kurumsal mavi varyantta kullanılabilir; marka dışı başka renk kullanılmaz.

## İçerik ilkeleri

- Doğal ve profesyonel Türkçe.
- “Araç sağlıyoruz” yerine işletmeye özel planlama ve operasyon sonucu anlatılır.
- Kanıtlanmamış yıl, filo adedi, müşteri sayısı, sertifika ve başarı oranı kullanılmaz.
- Doğrulanmış iletişim bilgisi olmadan telefon veya WhatsApp CTA'sı eklenmez.
- Her sayfanın arama niyeti, özgün kapsamı ve iç link görevi farklı olur.
- İstanbul hedefi içerikte doğal biçimde yer alır; lokasyon sayfaları kopya varyasyonlara dönüştürülmez.

## Ana sayfa sırası

1. Açılır menülü responsive kurumsal header
2. Tam ekran üç sahneli premium hero slider ve operasyon konumlandırması
3. Mobil sabit CTA
4. Hızlı teklif sistemi
5. Hizmet modeli
6. Operasyon adımları
7. Sektör ve kullanım senaryoları
8. Güven / E-E-A-T sinyalleri
9. SSS ve schema
10. Kurumsal footer

## Yayın kontrolü

- Aktif domain ve repo kimliği doğrulanır.
- `panel.misirliturizm.com` ile kapsam karıştırılmaz.
- Lint ve production build başarılı olmalıdır.
- Mobil kırılımlar, odak durumları, yatay taşma ve sabit CTA kontrol edilir.
- Metadata, canonical, görsel boyutları ve alt metinler doğrulanır.
- Gizli anahtarlar ve `.env` dosyaları repoya eklenmez.

## Doğrulanmış iletişim verileri

- Telefon ve WhatsApp: `0537 565 19 35` (`+90 537 565 19 35`)
- Kurumsal e-posta: `info@misirliturizm.com`

Telefon, WhatsApp, e-posta bağlantıları ve Organization/ContactPoint schema verisi tek merkezli `src/lib/site-contact.ts` dosyasından yönetilir. Mobil sabit CTA her sayfada doğrudan arama ve WhatsApp işlemi sunar. E-posta hesabı fiziksel olarak açılana kadar gelen e-postalar teslim alınamayacağı için hesap yayından sonra ayrıca etkinleştirilmelidir.

## Yayın öncesi beklenen diğer veriler

- Hizmet kapsamındaki ilçe ve/veya bölge sınırları
- Kullanım izni bulunan gerçek araç, sürücü ve operasyon fotoğrafları

Doğrulanmamış bilgi yayınlanmaz. Her hizmet ve ilçe sayfası ayrı arama niyeti, özgün metin, metadata, schema ve bağlamsal iç linklerle hazırlanır; kopya lokasyon varyasyonları kullanılmaz.
