"use client";

import { useEffect, useState } from "react";
import { siteContact } from "@/lib/site-contact";
import { BrandMark } from "./brand-mark";
import { SiteLink as Link } from "./site-link";
import styles from "./landing.module.css";

type NavItem = { label: string; href: string; indent?: boolean };

const serviceLinks: NavItem[] = [
  { label: "Tüm Hizmetlerimiz", href: "/hizmetlerimiz" },
  { label: "Sektörel Çözümler", href: "/sektorler" },
  { label: "Kurumsal Personel Taşımacılığı", href: "/personel-tasimaciligi" },
  { label: "Vardiyalı Personel Servisi", href: "/vardiyali-personel-servisi" },
  { label: "Fabrika Personel Taşımacılığı", href: "/fabrika-personel-tasimaciligi" },
  { label: "Güzergâh ve Durak Planlama", href: "/kurumsal-servis-guzergah-planlama" },
  { label: "Personel Servisi Fiyatları", href: "/personel-servisi-fiyatlari" },
];

const regionLinks: NavItem[] = [
  { label: "İstanbul Hizmet Bölgeleri", href: "/hizmet-bolgeleri" },
  { label: "İstanbul Avrupa Yakası", href: "/hizmet-bolgeleri/istanbul-avrupa-yakasi-personel-servisi" },
  { label: "Başakşehir ve İkitelli", href: "/hizmet-bolgeleri/basaksehir-personel-servisi", indent: true },
  { label: "İstanbul Anadolu Yakası", href: "/hizmet-bolgeleri/istanbul-anadolu-yakasi-personel-servisi" },
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

function DesktopDropdown({ label, overviewHref, links }: { label: string; overviewHref: string; links: NavItem[] }) {
  return (
    <details className={styles.navDropdown}>
      <summary aria-label={`${label} alt menüsünü aç`}>
        <Link href={overviewHref} onClick={(event) => event.stopPropagation()}>{label}</Link>
        <ChevronIcon />
      </summary>
      <div className={styles.dropdownPanel}>
        <span>{label}</span>
        {links.map((item) => (
          <Link className={item.indent ? styles.dropdownChild : undefined} key={item.href} href={item.href}>
            {item.label}<ArrowIcon />
          </Link>
        ))}
      </div>
    </details>
  );
}

function MobileDropdown({ label, overviewHref, links }: { label: string; overviewHref: string; links: NavItem[] }) {
  return (
    <details className={styles.mobileSubmenu}>
      <summary aria-label={`${label} alt menüsünü aç`}>
        <Link href={overviewHref} onClick={(event) => event.stopPropagation()}>{label}</Link>
        <ChevronIcon />
      </summary>
      <div>
        {links.map((item) => <Link className={item.indent ? styles.mobileDropdownChild : undefined} key={item.href} href={item.href}>{item.label}</Link>)}
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
          <DesktopDropdown label="Hizmetlerimiz" overviewHref="/hizmetlerimiz" links={serviceLinks} />
          <DesktopDropdown label="Hizmet Bölgelerimiz" overviewHref="/hizmet-bolgeleri" links={regionLinks} />
          <Link className={styles.navLink} href="/kurumsal">Kurumsal</Link>
          <Link className={styles.navLink} href="/iletisim">Bize Ulaşın</Link>
        </nav>

        <a className={styles.headerCta} href={siteContact.phoneHref}>
          Hemen Ara <ArrowIcon />
        </a>

        <details className={styles.mobileMenu}>
          <summary aria-label="Menüyü aç"><MenuIcon /></summary>
          <nav aria-label="Mobil menü">
            <Link className={styles.mobileTopLink} href="/">Ana Sayfa</Link>
            <MobileDropdown label="Hizmetlerimiz" overviewHref="/hizmetlerimiz" links={serviceLinks} />
            <MobileDropdown label="Hizmet Bölgelerimiz" overviewHref="/hizmet-bolgeleri" links={regionLinks} />
            <Link className={styles.mobileTopLink} href="/kurumsal">Kurumsal</Link>
            <Link className={styles.mobileTopLink} href="/iletisim">Bize Ulaşın</Link>
            <a className={styles.mobileContactLink} href={siteContact.phoneHref}>
              Hemen Ara · {siteContact.phoneDisplay}
            </a>
            <a
              className={styles.mobileMenuCta}
              href={siteContact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp&apos;tan yazın <ArrowIcon />
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
