"use client";

import { FormEvent, useState } from "react";
import styles from "./sections.module.css";

type QuoteData = {
  company: string;
  contact: string;
  email: string;
  phone: string;
  staffRange: string;
  shiftModel: string;
  serviceArea: string;
  priority: string;
  note: string;
};

const initialQuote: QuoteData = {
  company: "",
  contact: "",
  email: "",
  phone: "",
  staffRange: "",
  shiftModel: "",
  serviceArea: "",
  priority: "",
  note: "",
};

const staffOptions = ["1–25", "26–75", "76–150", "151–300", "300+"];
const shiftOptions = ["Tek vardiya", "İki vardiya", "Üç vardiya", "Değişken vardiya"];

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

export function QuotePlanner() {
  const [step, setStep] = useState(1);
  const [quote, setQuote] = useState<QuoteData>(initialQuote);
  const [isPrepared, setIsPrepared] = useState(false);

  const updateQuote = (field: keyof QuoteData, value: string) => {
    setQuote((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (step < 3) {
      setStep((current) => current + 1);
      return;
    }

    setIsPrepared(true);
  };

  const restart = () => {
    setIsPrepared(false);
    setStep(1);
  };

  if (isPrepared) {
    return (
      <div className={styles.quoteResult} aria-live="polite">
        <span className={styles.resultIcon}>
          <CheckIcon />
        </span>
        <p className={styles.resultEyebrow}>Ön değerlendirme hazır</p>
        <h3>{quote.company} için operasyon özeti</h3>
        <dl>
          <div>
            <dt>Personel</dt>
            <dd>{quote.staffRange} kişi</dd>
          </div>
          <div>
            <dt>Vardiya</dt>
            <dd>{quote.shiftModel}</dd>
          </div>
          <div>
            <dt>Hizmet bölgesi</dt>
            <dd>{quote.serviceArea}</dd>
          </div>
          <div>
            <dt>Öncelik</dt>
            <dd>{quote.priority}</dd>
          </div>
        </dl>
        <p className={styles.resultNote}>
          Bu özet tarayıcınızda oluşturuldu. Doğrulanmış iletişim kanalı bağlanana kadar
          kişisel bilgileriniz hiçbir yere gönderilmez.
        </p>
        <button type="button" className={styles.outlineButton} onClick={restart}>
          Bilgileri düzenle
        </button>
      </div>
    );
  }

  return (
    <form className={styles.quoteForm} onSubmit={handleSubmit}>
      <div className={styles.formProgress} aria-label={`Teklif formu: ${step}. adım / 3`}>
        {[1, 2, 3].map((number) => (
          <span key={number} className={number <= step ? styles.progressActive : ""}>
            <i>{number}</i>
            {number === 1 ? "Firma" : number === 2 ? "Operasyon" : "Öncelik"}
          </span>
        ))}
      </div>

      {step === 1 && (
        <fieldset>
          <legend>Firmanızı ve yetkili kişiyi tanıyalım.</legend>
          <p>Geri dönüş görüşmesinin doğru kişi ve ihtiyaç üzerinden ilerlemesini sağlar.</p>
          <div className={styles.formGrid}>
            <label>
              Firma adı
              <input
                name="company"
                value={quote.company}
                onChange={(event) => updateQuote("company", event.target.value)}
                autoComplete="organization"
                placeholder="Örn. ABC Üretim"
                required
              />
            </label>
            <label>
              Yetkili kişi
              <input
                name="contact"
                value={quote.contact}
                onChange={(event) => updateQuote("contact", event.target.value)}
                autoComplete="name"
                placeholder="Ad Soyad"
                required
              />
            </label>
            <label>
              İş e-postası
              <input
                type="email"
                name="email"
                value={quote.email}
                onChange={(event) => updateQuote("email", event.target.value)}
                autoComplete="email"
                inputMode="email"
                placeholder="ornek@firma.com"
                required
              />
            </label>
            <label>
              Telefon
              <input
                type="tel"
                name="phone"
                value={quote.phone}
                onChange={(event) => updateQuote("phone", event.target.value)}
                autoComplete="tel"
                inputMode="tel"
                placeholder="05xx xxx xx xx"
                required
              />
            </label>
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset>
          <legend>Operasyon yapınızı kısaca tanımlayın.</legend>
          <p>İlk görüşmede personel dağılımı, vardiya ve rota ihtiyacına odaklanalım.</p>
          <div className={styles.choiceGroup}>
            <span>Tahmini personel sayısı</span>
            <div className={styles.choiceGrid}>
              {staffOptions.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name="staffRange"
                    value={option}
                    checked={quote.staffRange === option}
                    onChange={(event) => updateQuote("staffRange", event.target.value)}
                    required
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
          <div className={styles.formGrid}>
            <label>
              Vardiya düzeni
              <select
                name="shiftModel"
                value={quote.shiftModel}
                onChange={(event) => updateQuote("shiftModel", event.target.value)}
                required
              >
                <option value="">Seçiniz</option>
                {shiftOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label>
              Tesis / hizmet bölgesi
              <input
                name="serviceArea"
                value={quote.serviceArea}
                onChange={(event) => updateQuote("serviceArea", event.target.value)}
                autoComplete="address-level2"
                placeholder="Örn. İkitelli OSB"
                required
              />
            </label>
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset>
          <legend>Önceliğinizi netleştirelim.</legend>
          <p>Operasyon modelinin hangi sonucu önce çözmesi gerektiğini belirtin.</p>
          <div className={styles.priorityGrid}>
            {["Zamanında ulaşım", "Rota verimliliği", "Vardiya uyumu", "Operasyon kontrolü"].map(
              (option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name="priority"
                    value={option}
                    checked={quote.priority === option}
                    onChange={(event) => updateQuote("priority", event.target.value)}
                    required
                  />
                  <span>
                    <CheckIcon /> {option}
                  </span>
                </label>
              ),
            )}
          </div>
          <label className={styles.noteField}>
            Ek bilgi <small>(isteğe bağlı)</small>
            <textarea
              name="note"
              value={quote.note}
              onChange={(event) => updateQuote("note", event.target.value)}
              rows={3}
              placeholder="Mevcut hatlarınız, durak yapınız veya hedef başlangıç tarihiniz..."
            />
          </label>
        </fieldset>
      )}

      <div className={styles.formActions}>
        {step > 1 && (
          <button type="button" className={styles.backButton} onClick={() => setStep(step - 1)}>
            Geri
          </button>
        )}
        <button type="submit" className={styles.nextButton}>
          {step === 3 ? "Ön değerlendirmeyi hazırla" : "Devam et"}
          <ArrowIcon />
        </button>
      </div>
    </form>
  );
}
