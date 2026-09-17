import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ScrollToTop } from "@/components/scroll-to-top";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mısırlı Turizm | Planlı Kurumsal Personel Ulaşımı",
  description:
    "İstanbul’da personel lokasyonu, vardiya ve güzergâh planlamasını birlikte yöneten Mısırlı Turizm ile kurumsal ulaşım operasyonunuzu planlayın.",
  applicationName: "Mısırlı Turizm",
  authors: [{ name: "Mısırlı Turizm", url: siteUrl }],
  creator: "Mısırlı Turizm",
  publisher: "Mısırlı Turizm",
  keywords: [
    "kurumsal personel taşımacılığı",
    "İstanbul personel servisi",
    "vardiyalı personel servisi",
    "fabrika personel taşımacılığı",
    "servis güzergâh planlama",
    "Mısırlı Turizm",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mısırlı Turizm | Planlı Kurumsal Personel Ulaşımı",
    description:
      "Personel lokasyonu, vardiya ve güzergâh planlamasını tek operasyon modelinde buluşturan B2B ulaşım çözümü.",
    url: "/",
    siteName: "Mısırlı Turizm",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/hero-personel-tasimaciligi.webp",
        width: 1920,
        height: 1080,
        alt: "Mısırlı Turizm kurumsal personel servis aracı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mısırlı Turizm | Planlı Kurumsal Personel Ulaşımı",
    description:
      "Vardiya, personel lokasyonu ve güzergâhı birlikte planlayan kurumsal ulaşım çözüm ortağı.",
    images: ["/images/hero-personel-tasimaciligi.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${manrope.variable} antialiased`}>
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
