"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import officeImage from "../../public/images/hero-kurumsal-ofis-servisi.webp";
import personnelImage from "../../public/images/hero-personel-tasimaciligi.webp";
import factoryImage from "../../public/images/hero-vardiyali-fabrika-servisi.webp";
import styles from "./landing.module.css";

type Slide = {
  image: StaticImageData;
  alt: string;
  position: string;
  eyebrow: string;
  title: string;
  accent: string;
  lead: string;
  primaryLabel: string;
  secondaryLabel: string;
  secondaryHref: string;
};

const slides: Slide[] = [
  {
    image: personnelImage,
    alt: "Mısırlı Turizm logolu kurumsal personel servis aracı",
    position: "center 50%",
    eyebrow: "İstanbul kurumsal ulaşım operasyonu",
    title: "Personel taşımacılığını",
    accent: "planlıyoruz.",
    lead:
      "Mısırlı Turizm; personel lokasyonlarını, vardiya saatlerini ve güzergâhları birlikte değerlendirerek işletmenize uygun bir ulaşım modeli kurar.",
    primaryLabel: "Hızlı teklif hazırlayın",
    secondaryLabel: "Hizmeti inceleyin",
    secondaryHref: "/personel-tasimaciligi",
  },
  {
    image: factoryImage,
    alt: "İstanbul’da fabrika vardiyasına gelen kurumsal personel servisi",
    position: "center 50%",
    eyebrow: "Fabrika ve üretim tesisleri",
    title: "Vardiya saatine çalışan",
    accent: "servis düzeni.",
    lead:
      "Çoklu vardiya, farklı personel bölgeleri ve tesis giriş koşulları aynı plan içinde ele alınır; hat, durak ve kapasite buna göre şekillenir.",
    primaryLabel: "Operasyonunuzu özetleyin",
    secondaryLabel: "Planlama modelini görün",
    secondaryHref: "/personel-tasimaciligi#nasil-planlanir",
  },
  {
    image: officeImage,
    alt: "İstanbul iş merkezinde kurumsal çalışan ulaşımı sağlayan beyaz servis araçları",
    position: "center 50%",
    eyebrow: "Plaza, ofis ve çoklu lokasyon",
    title: "Doğru hat, doğru durak,",
    accent: "doğru kapasite.",
    lead:
      "Dağınık çalışan lokasyonlarını trafik penceresi ve iş başlangıç saatiyle eşleştirerek yönetilebilir, geliştirilebilir bir operasyon kurgularız.",
    primaryLabel: "İlk değerlendirmeyi başlatın",
    secondaryLabel: "Operasyon akışını inceleyin",
    secondaryHref: "/#operasyon-akisi",
  },
];

const trustItems = [
  {
    title: "İşletmeye özel plan",
    text: "Hazır rota yerine çalışma düzeninize göre kurgulanan operasyon.",
  },
  {
    title: "Tek merkezden yönetim",
    text: "Lokasyon, vardiya ve güzergâh kararlarında bütüncül yaklaşım.",
  },
  {
    title: "Ölçülebilir süreç",
    text: "Karar noktaları açık, geliştirilebilir ve sürdürülebilir yapı.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11m-4-4 4 4-4 4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m4 10 4 4 8-9" />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d={direction === "left" ? "m12 4-6 6 6 6" : "m8 4 6 6-6 6"} />
    </svg>
  );
}

function PauseIcon({ paused }: { paused: boolean }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      {paused ? <path d="m7 5 8 5-8 5Z" /> : <path d="M7 5v10M13 5v10" />}
    </svg>
  );
}

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [paused]);

  const slide = slides[activeSlide];

  function changeSlide(index: number) {
    setActiveSlide((index + slides.length) % slides.length);
  }

  return (
    <>
      <section
        className={styles.sliderHero}
        id="personel-tasimaciligi"
        aria-roledescription="carousel"
        aria-label="Mısırlı Turizm hizmetleri"
      >
        <div className={styles.sliderMedia} aria-hidden="true">
          {slides.map((item, index) => (
            <Image
              key={item.alt}
              className={`${styles.sliderImage} ${index === activeSlide ? styles.sliderImageActive : ""}`}
              src={item.image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              style={{ objectPosition: item.position }}
            />
          ))}
        </div>
        <div className={styles.sliderShade} aria-hidden="true" />
        <div className={styles.sliderPattern} aria-hidden="true" />

        <div className={`${styles.container} ${styles.sliderContent}`}>
          <div className={styles.sliderCopy} key={activeSlide}>
            <p className={styles.sliderEyebrow}>
              <span /> {slide.eyebrow}
            </p>
            <h1 id="hero-title" className={styles.sliderTitle}>
              {slide.title} <span>{slide.accent}</span>
            </h1>
            <p className={styles.sliderLead}>{slide.lead}</p>

            <div className={styles.sliderActions}>
              <Link className={styles.sliderPrimary} href="/#hizli-teklif">
                {slide.primaryLabel} <ArrowIcon />
              </Link>
              <Link className={styles.sliderSecondary} href={slide.secondaryHref}>
                {slide.secondaryLabel}
              </Link>
            </div>

            <ul className={styles.sliderChecks} aria-label="Hizmet avantajları">
              <li><CheckIcon /> Lokasyon analizi</li>
              <li><CheckIcon /> Vardiya uyumu</li>
              <li><CheckIcon /> Güzergâh planı</li>
            </ul>
          </div>

          <div className={styles.sliderFooter}>
            <div className={styles.sliderProgress} aria-label="Slider sayfaları">
              {slides.map((item, index) => (
                <button
                  key={item.eyebrow}
                  type="button"
                  className={index === activeSlide ? styles.progressActive : ""}
                  onClick={() => changeSlide(index)}
                  aria-label={`${index + 1}. slayta geç: ${item.eyebrow}`}
                  aria-current={index === activeSlide ? "true" : undefined}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <i />
                </button>
              ))}
            </div>

            <div className={styles.sliderControls}>
              <button type="button" onClick={() => changeSlide(activeSlide - 1)} aria-label="Önceki slayt">
                <ChevronIcon direction="left" />
              </button>
              <button type="button" onClick={() => setPaused((current) => !current)} aria-label={paused ? "Sliderı oynat" : "Sliderı duraklat"}>
                <PauseIcon paused={paused} />
              </button>
              <button type="button" onClick={() => changeSlide(activeSlide + 1)} aria-label="Sonraki slayt">
                <ChevronIcon direction="right" />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.sliderSideLabel} aria-hidden="true">
          <span>Mısırlı Turizm</span>
          <i />
          <strong>{String(activeSlide + 1).padStart(2, "0")}</strong>
        </div>
      </section>

      <section className={styles.trustRail} id="hizmet-yaklasimi" aria-labelledby="approach-title">
        <div className={`${styles.container} ${styles.trustRailGrid}`}>
          <div className={styles.trustIntro}>
            <span>Çözüm yaklaşımı</span>
            <h2 id="approach-title">Aracı değil, operasyonun tamamını planlıyoruz.</h2>
          </div>
          <div className={styles.trustItems} id="operasyon-modeli" aria-label="Operasyon avantajları">
            {trustItems.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
