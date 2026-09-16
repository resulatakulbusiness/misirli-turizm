import Image from "next/image";
import logo from "../../public/brand/misirli-turizm-logo.png";
import { SiteLink as Link } from "./site-link";
import styles from "./landing.module.css";

export function BrandMark() {
  return (
    <Link className={styles.brand} href="/" aria-label="Mısırlı Turizm ana sayfa">
      <Image
        src={logo}
        alt="Mısırlı Turizm"
        priority
        sizes="(max-width: 680px) 158px, 190px"
      />
    </Link>
  );
}
