import Link from "next/link";
import { siteContact } from "@/lib/site-contact";
import { BrandMark } from "./brand-mark";
import styles from "./sections.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerGrid}`}>
        <div className={styles.footerBrand}>
          <span className={styles.footerLogo}>
            <BrandMark />
          </span>
          <p>
            İstanbul’daki işletmeler için personel lokasyonu, vardiya ve güzergâhı birlikte
            planlayan kurumsal ulaşım çözüm ortağı.
          </p>
        </div>
        <nav aria-label="Alt menü">
          <strong>Site haritası</strong>
          <Link href="/">Ana Sayfa</Link>
          <Link href="/personel-tasimaciligi">Personel Taşımacılığı</Link>
          <Link href="/vardiyali-personel-servisi">Vardiyalı Personel Servisi</Link>
          <Link href="/fabrika-personel-tasimaciligi">Fabrika Personel Servisi</Link>
          <Link href="/personel-servisi-fiyatlari">Personel Servisi Fiyatları</Link>
          <Link href="/hizmet-bolgeleri">Hizmet Bölgeleri</Link>
          <Link href="/iletisim">Bize Ulaşın</Link>
        </nav>
        <div className={styles.footerAction}>
          <strong>Doğrudan iletişim</strong>
          <p>Personel sayısı, vardiya yapısı ve hizmet bölgenizi paylaşarak ilk değerlendirmeyi başlatın.</p>
          <div className={styles.footerContacts}>
            <a href={siteContact.phoneHref}>Ara: {siteContact.phoneDisplay}</a>
            <a href={siteContact.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp&apos;tan yazın</a>
            <a href={siteContact.emailHref}>{siteContact.email}</a>
          </div>
          <Link href="/#hizli-teklif">Hızlı teklif formu</Link>
        </div>
      </div>
      <div className={`${styles.container} ${styles.footerBottom}`}>
        <span>© {new Date().getFullYear()} Mısırlı Turizm</span>
        <span>Kurumsal personel taşımacılığı · İstanbul</span>
      </div>
    </footer>
  );
}
