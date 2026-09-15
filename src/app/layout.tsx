import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://misirliturizm.com"),
  title: "Mısırlı Turizm | Planlı Kurumsal Personel Ulaşımı",
  description:
    "İstanbul’da personel lokasyonu, vardiya ve güzergâh planlamasını birlikte yöneten Mısırlı Turizm ile kurumsal ulaşım operasyonunuzu planlayın.",
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
      <body>{children}</body>
    </html>
  );
}
