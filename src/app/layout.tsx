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
  title: "Kurumsal Personel Taşımacılığı | Mısırlı Turizm",
  description:
    "Mısırlı Turizm; personel lokasyonu, vardiya ve güzergâh planlamasını birlikte yöneten kurumsal personel taşımacılığı çözüm ortağıdır.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kurumsal Personel Taşımacılığı | Mısırlı Turizm",
    description:
      "Personel lokasyonu, vardiya ve güzergâh planlamasını tek operasyon modelinde buluşturan B2B ulaşım çözümü.",
    url: "/",
    siteName: "Mısırlı Turizm",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/misirli-turizm-kurumsal-personel-servisi.webp",
        width: 1200,
        height: 900,
        alt: "Mısırlı Turizm kurumsal personel servis aracı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kurumsal Personel Taşımacılığı | Mısırlı Turizm",
    description:
      "Vardiya, personel lokasyonu ve güzergâhı birlikte planlayan kurumsal ulaşım çözüm ortağı.",
    images: ["/images/misirli-turizm-kurumsal-personel-servisi.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${manrope.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
