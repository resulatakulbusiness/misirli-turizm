import Link from "next/link";
import { BrandMark } from "./brand-mark";
import styles from "./landing.module.css";

const navigation = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Personel Taşımacılığı", href: "/personel-tasimaciligi" },
  { label: "Hizmet Modeli", href: "/#hizmet-modeli" },
  { label: "Operasyon", href: "/#operasyon-akisi" },
  { label: "Sektörler", href: "/#sektorler" },
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
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className={styles.headerCta} href="/#hizli-teklif">
          Hızlı Teklif
          <ArrowIcon />
        </Link>

        <details className={styles.mobileMenu}>
          <summary aria-label="Menüyü aç">
            <MenuIcon />
          </summary>
          <nav aria-label="Mobil menü">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className={styles.mobileMenuCta} href="/#hizli-teklif">
              Hızlı Teklif
              <ArrowIcon />
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
