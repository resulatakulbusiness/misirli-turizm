import Image from "next/image";
import heroImage from "../../public/images/misirli-turizm-kurumsal-personel-servisi.webp";
import styles from "./landing.module.css";

const operationSteps = [
  { number: "01", title: "Lokasyon", text: "Personel noktaları" },
  { number: "02", title: "Vardiya", text: "Çalışma saatleri" },
  { number: "03", title: "Güzergâh", text: "Verimli rota modeli" },
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

export function Hero() {
  return (
    <>
      <section
        className={styles.hero}
        id="personel-tasimaciligi"
        aria-labelledby="hero-title"
      >
        <div className={styles.routeGrid} aria-hidden="true" />
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>
              <span />
              İstanbul kurumsal personel taşımacılığı
            </p>

            <h1 id="hero-title">
              Vardiyadan güzergâha,
              <span> ulaşım operasyonunuz planlı.</span>
            </h1>

            <p className={styles.heroLead}>
              Mısırlı Turizm, yalnızca servis aracı sağlamaz. Personel
              lokasyonlarını, vardiya saatlerini ve güzergâhları birlikte
              değerlendirerek işletmenize uygun bir ulaşım modeli kurar.
            </p>

            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#operasyon-modeli">
                Operasyon Modelini İncele
                <ArrowIcon />
              </a>
              <a className={styles.secondaryButton} href="#hizmet-yaklasimi">
                Hizmet Yaklaşımımız
              </a>
            </div>

            <ul className={styles.heroChecks} aria-label="Hizmet avantajları">
              <li>
                <CheckIcon /> Vardiya uyumlu planlama
              </li>
              <li>
                <CheckIcon /> Güzergâh optimizasyonu
              </li>
              <li>
                <CheckIcon /> B2B operasyon odağı
              </li>
            </ul>
          </div>

          <div className={styles.heroVisual}>
            <span className={styles.visualGlow} aria-hidden="true" />
            <div className={styles.imageFrame}>
              <Image
                src={heroImage}
                alt="Mısırlı Turizm logolu beyaz kurumsal personel servis aracı"
                priority
                sizes="(max-width: 900px) 92vw, 48vw"
              />
              <div className={styles.imageShade} aria-hidden="true" />
              <div className={styles.imageCaption}>
                <span>Kurumsal Ulaşım</span>
                <strong>Sahadan yönetime tek operasyon</strong>
              </div>
            </div>

            <aside className={styles.operationCard} aria-label="Operasyon modeli">
              <div className={styles.operationCardHeader}>
                <div>
                  <span>Operasyon akışı</span>
                  <strong>Planlama merkezi</strong>
                </div>
                <span className={styles.livePill}>
                  <i /> Aktif
                </span>
              </div>
              <div className={styles.operationSteps}>
                {operationSteps.map((step) => (
                  <div key={step.number}>
                    <span>{step.number}</span>
                    <p>
                      <strong>{step.title}</strong>
                      <small>{step.text}</small>
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section
        className={styles.trustRail}
        id="hizmet-yaklasimi"
        aria-labelledby="approach-title"
      >
        <div className={`${styles.container} ${styles.trustRailGrid}`}>
          <div className={styles.trustIntro}>
            <span>Çözüm yaklaşımı</span>
            <h2 id="approach-title">
              Aracı değil, operasyonun tamamını planlıyoruz.
            </h2>
          </div>
          <div
            className={styles.trustItems}
            id="operasyon-modeli"
            aria-label="Operasyon avantajları"
          >
            {trustItems.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
        <span id="kurumsal-sinyaller" className={styles.anchorTarget} />
      </section>
    </>
  );
}
