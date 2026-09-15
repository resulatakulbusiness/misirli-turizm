import { BrandMark } from "./brand-mark";
import styles from "./landing.module.css";

const navigation = [
  { label: "Ana Sayfa", href: "#personel-tasimaciligi" },
  { label: "Hizmet Modeli", href: "#hizmet-modeli" },
  { label: "Operasyon", href: "#operasyon-akisi" },
  { label: "Sektörler", href: "#sektorler" },
  { label: "Sık Sorulanlar", href: "#sikca-sorulan-sorular" },
];

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11m-4-4 4 4-4 4" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className={styles.siteHeader}>
      <div className={`${styles.container} ${styles.headerInner}`}>
        <BrandMark />

        <nav className={styles.desktopNav} aria-label="Ana menü">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className={styles.headerCta} href="#hizli-teklif">
          Hızlı Teklif
          <ArrowIcon />
        </a>

        <details className={styles.mobileMenu}>
          <summary aria-label="Menüyü aç">
            <MenuIcon />
          </summary>
          <nav aria-label="Mobil menü">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a className={styles.mobileMenuCta} href="#hizli-teklif">
              Hızlı Teklif
              <ArrowIcon />
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
