import Link from "next/link";
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
        </nav>
        <div className={styles.footerAction}>
          <strong>Teklif hazırlığı</strong>
          <p>Personel sayısı ve vardiya yapınızı paylaşarak ilk değerlendirmeyi oluşturun.</p>
          <Link href="/#hizli-teklif">Hızlı teklif sistemi</Link>
        </div>
      </div>
      <div className={`${styles.container} ${styles.footerBottom}`}>
        <span>© {new Date().getFullYear()} Mısırlı Turizm</span>
        <span>Kurumsal personel taşımacılığı · İstanbul</span>
      </div>
    </footer>
  );
}
