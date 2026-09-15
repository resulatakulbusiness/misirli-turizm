import styles from "./landing.module.css";

function RouteIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="5" cy="14" r="2" />
      <circle cx="15" cy="6" r="2" />
      <path d="M7 13c3-1 2-5 6-6" />
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

export function MobileCta() {
  return (
    <nav className={styles.mobileCta} aria-label="Hızlı işlemler">
      <a href="#hizmet-modeli">
        <RouteIcon />
        Hizmet Modeli
      </a>
      <a href="#hizli-teklif">
        Hızlı Teklif
        <ArrowIcon />
      </a>
    </nav>
  );
}
