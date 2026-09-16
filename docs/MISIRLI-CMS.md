# Mısırlı Turizm Yönetim Paneli

Yönetim paneli `/yonetim` adresinde çalışır. Bu panel yalnızca Mısırlı Turizm web sitesi içeriğini ve bu repodaki ortam dosyalarını yönetir. `panel.misirliturizm.com` operasyon yazılımıyla ilişkili değildir.

## İçerik akışı

1. Yönetici güvenli parolayla giriş yapar.
2. İçerik; sayfa bilgileri, bölüm blokları, SEO alanları, görseller ve SSS alanlarıyla hazırlanır.
3. Taslak kaydı veya yayınlama işlemi `content/pages` içinde bir JSON dosyasını günceller.
4. Görseller `public/uploads` dizinine eklenir.
5. Her kayıt GitHub `main` dalında ayrı commit oluşturur.
6. Vercel yeni commit'i otomatik olarak derler ve yayınlar.

## Vercel gizli değişkenleri

Aşağıdaki değişkenler yalnızca Vercel proje ayarlarında tanımlanır. Değerleri repoya, dokümana veya istemci koduna yazılmaz.

| Değişken | Amaç |
| --- | --- |
| `CMS_ADMIN_PASSWORD_HASH` | Yönetim parolasının SHA-256 özeti |
| `CMS_SESSION_SECRET` | HTTP-only oturum imzası için uzun ve rastgele gizli değer |
| `CMS_GITHUB_TOKEN` | Yalnız `resulatakulbusiness/misirli-turizm` repo içeriğine okuma/yazma yetkili fine-grained token |
| `CMS_GITHUB_REPOSITORY` | Opsiyonel; varsayılan `resulatakulbusiness/misirli-turizm` |

Token için yalnızca bu private repoya `Contents: Read and write` yetkisi verilmelidir. Administration, Actions, Issues veya diğer repo izinleri gerekli değildir.

## Güvenlik

- Oturum çerezi HTTP-only, Secure ve SameSite Strict olarak ayarlanır.
- Oturum süresi 12 saattir.
- Parolanın kendisi saklanmaz; yalnız SHA-256 özeti karşılaştırılır.
- GitHub anahtarı sadece sunucu tarafındaki API route'larında kullanılır.
- Yönetim sayfası `noindex, nofollow` olarak işaretlenir.
- Dosya yükleme yalnız JPG, PNG, WebP ve AVIF ile sınırlıdır; üst sınır 5 MB'dir.
- İçerik URL'lerinde `api`, `yonetim` ve `_next` kökleri kullanılamaz.

## Yayınlanan sayfalar

Yayın durumundaki CMS içerikleri catch-all Next.js rotasıyla statik olarak oluşturulur. Mevcut sabit hizmet ve bölge sayfaları önceliklidir; CMS bu rotaları geçersiz kılamaz. CMS sayfaları canonical, Open Graph, WebPage, BreadcrumbList ve varsa FAQPage yapılandırılmış verisini otomatik üretir.
