import { Hero } from "@/components/hero";
import { MobileCta } from "@/components/mobile-cta";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
      </main>
      <MobileCta />
    </>
  );
}
