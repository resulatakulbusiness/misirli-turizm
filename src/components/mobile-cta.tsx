import { siteContact } from "@/lib/site-contact";
import styles from "./landing.module.css";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M6.2 3.5 8 7.2 6.5 8.7c1 2 2.8 3.8 4.8 4.8L12.8 12l3.7 1.8-.7 2.4c-.2.7-.9 1.1-1.6 1-6-.8-10.6-5.4-11.4-11.4-.1-.7.3-1.4 1-1.6l2.4-.7Z" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 4.5h12v8H9l-4 3v-3H4v-8Z" />
      <path d="M7 8.5h6" />
    </svg>
  );
}

export function MobileCta() {
  return (
    <nav className={styles.mobileCta} aria-label="Hızlı iletişim">
      <a href={siteContact.phoneHref} aria-label={`Mısırlı Turizm'i ara: ${siteContact.phoneDisplay}`}>
        <PhoneIcon />
        Hemen Ara
      </a>
      <a
        href={siteContact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Mısırlı Turizm'e WhatsApp üzerinden yaz"
      >
        <MessageIcon />
        WhatsApp
      </a>
    </nav>
  );
}
