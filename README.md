# Mısırlı Turizm Kurumsal Web Sitesi

`misirliturizm.com` için geliştirilen kurumsal reklam, SEO/GEO ve B2B müşteri kazanım sitesi.

> `panel.misirliturizm.com` ayrı bir operasyon yazılımıdır ve bu projenin kapsamında değildir.

## Konumlandırma

Mısırlı Turizm'in ana hizmeti kurumsal personel taşımacılığıdır. Marka; yalnız araç sağlayan bir servis firması değil, personel lokasyonu, vardiya, güzergâh ve ulaşım operasyonunu birlikte planlayan B2B çözüm ortağı olarak konumlanır. Araç veya filo kiralama ayrı bir hizmet değildir.

## Teknoloji

- Next.js 16 App Router
- React 19
- TypeScript
- CSS Modules + Tailwind CSS 4
- `next/image` ve `next/font`
- Vercel

## Yerel geliştirme

```bash
npm ci
npm run dev
```

Site `http://localhost:3000` adresinde açılır.

## Kalite kontrolleri

```bash
npm run lint
npm run build
```

## Proje notları

- [Site DNA](docs/MISIRLI-SITE-DNA.md)
- [Üretim akışı](docs/MISIRLI-FLOWCHART.md)
- [Rakip ve SERP DNA özeti](docs/MISIRLI-RAKIP-DNA.md)
- [Pillar / cluster içerik mimarisi](docs/MISIRLI-PILLAR-CLUSTER.md)

## Yayın

GitHub'daki `main` branch Vercel projesine bağlıdır. Anlamlı değişiklikler doğrulandıktan sonra commit edilir ve push sonrası preview/production deployment sonucu kontrol edilir.

Gizli bilgiler, `.env` dosyaları, parolalar ve API anahtarları repoya eklenmez.
