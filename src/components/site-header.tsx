"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandMark } from "./brand-mark";
import styles from "./landing.module.css";

const serviceLinks = [
  { label: "Kurumsal Personel Taşımacılığı", href: "/personel-tasimaciligi" },
  { label: "Vardiyalı Servis Planlama", href: "/personel-tasimaciligi#nasil-planlanir" },
  { label: "Fabrika ve Üretim Ulaşımı", href: "/personel-tasimaciligi#kullanim-senaryolari" },
  { label: "Güzergâh ve Durak Planlama", href: "/personel-tasimaciligi#hizmet-kapsami" },
];

const regionLinks = [
  { label: "İstanbul Operasyon Yaklaşımı", href: "/personel-tasimaciligi#istanbul-title" },
  { label: "Avrupa Yakası Hat Kurgusu", href: "/personel-tasimaciligi#avrupa-yakasi" },
  { label: "Anadolu Yakası Hat Kurgusu", href: "/personel-tasimaciligi#anadolu-yakasi" },
  { label: "İki Yakalı Operasyon", href: "/personel-tasimaciligi#iki-yakali-operasyon" },
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

function ChevronIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="m4 6 4 4 4-4" />
    </svg>
  );
}

function DesktopDropdown({ label, links }: { label: string; links: typeof serviceLinks }) {
  return (
    <details className={styles.navDropdown}>
      <summary>{label}<ChevronIcon /></summary>
      <div className={styles.dropdownPanel}>
        <span>{label}</span>
        {links.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}<ArrowIcon />
          </Link>
        ))}
      </div>
    </details>
  );
}

function MobileDropdown({ label, links }: { label: string; links: typeof serviceLinks }) {
  return (
    <details className={styles.mobileSubmenu}>
      <summary>{label}<ChevronIcon /></summary>
      <div>
        {links.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </div>
    </details>
  );
}

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!overlay) return;

    const updateHeader = () => setScrolled(window.scrollY > 28);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, [overlay]);

  const headerClassName = [
    styles.siteHeader,
    overlay ? styles.siteHeaderOverlay : "",
    scrolled ? styles.siteHeaderScrolled : "",
  ].filter(Boolean).join(" ");

  return (
    <header className={headerClassName}>
      <div className={`${styles.container} ${styles.headerInner}`}>
        <BrandMark />

        <nav className={styles.desktopNav} aria-label="Ana menü">
          <Link className={styles.navLink} href="/">Ana Sayfa</Link>
          <DesktopDropdown label="Hizmetlerimiz" links={serviceLinks} />
          <DesktopDropdown label="Hizmet Bölgelerimiz" links={regionLinks} />
          <Link className={styles.navLink} href="/#kurumsal-sinyaller">Kurumsal</Link>
          <Link className={styles.navLink} href="/#hizli-teklif">Bize Ulaşın</Link>
        </nav>

        <Link className={styles.headerCta} href="/#hizli-teklif">
          Hızlı Teklif <ArrowIcon />
        </Link>

        <details className={styles.mobileMenu}>
          <summary aria-label="Menüyü aç"><MenuIcon /></summary>
          <nav aria-label="Mobil menü">
            <Link className={styles.mobileTopLink} href="/">Ana Sayfa</Link>
            <MobileDropdown label="Hizmetlerimiz" links={serviceLinks} />
            <MobileDropdown label="Hizmet Bölgelerimiz" links={regionLinks} />
            <Link className={styles.mobileTopLink} href="/#kurumsal-sinyaller">Kurumsal</Link>
            <Link className={styles.mobileTopLink} href="/#hizli-teklif">Bize Ulaşın</Link>
            <Link className={styles.mobileMenuCta} href="/#hizli-teklif">
              Hızlı Teklif <ArrowIcon />
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
