"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import Image from "next/image";
import { company } from "@/data/company";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./page.module.css";

/**
 * Telefon numarasını otomatik boşluklu formata çevirir
 * Örnek: 05331234567 → 0533 123 45 67
 * Maks 11 rakam (boşluklar hariç)
 */
function formatPhoneNumber(value: string): string {
  // Sadece rakamları al
  const digits = value.replace(/\D/g, "");

  // Maksimum 11 rakam
  const limited = digits.slice(0, 11);

  // Boşluklu formata çevir: 0533 123 45 67
  if (limited.length <= 4) return limited;
  if (limited.length <= 7)
    return `${limited.slice(0, 4)} ${limited.slice(4)}`;
  if (limited.length <= 9)
    return `${limited.slice(0, 4)} ${limited.slice(4, 7)} ${limited.slice(7)}`;
  return `${limited.slice(0, 4)} ${limited.slice(4, 7)} ${limited.slice(7, 9)} ${limited.slice(9)}`;
}

export default function IletisimPage() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Bir hata oluştu.");
      }

      setFormStatus("success");
    } catch (err) {
      setFormStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin."
      );
    }
  };

  const handleReset = () => {
    setFormStatus("idle");
    setErrorMessage("");
    setPhone("");
  };

  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className={styles.pageHeader}>
        <Image
          src="/images/headers/iletisim-desktop.jpg"
          alt="İletişim"
          fill
          priority
          className={styles.headerBgImage}
          sizes="100vw"
          quality={80}
        />
        <div className={styles.headerOverlay} />
        <div className="container">
          <div className={styles.headerContent}>
            <p className={styles.pageLabel}>İletişim</p>
            <h1 className={styles.pageTitle}>
              Bir projeniz mi var?
              <br />
              <span className={styles.titleAccent}>Konuşalım.</span>
            </h1>
            <p className={styles.pageDescription}>
              Projeleriniz hakkında görüşmek, iş birliği fırsatlarını
              değerlendirmek veya ofisimizi ziyaret etmek için bizimle iletişime
              geçin.
            </p>
          </div>
        </div>
      </section>

      {/* ===== İÇERİK ===== */}
      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Sol: İletişim Bilgileri */}
            <ScrollReveal>
              <div className={styles.contactInfo}>
                <div className={styles.infoGroup}>
                  <h3 className={styles.infoTitle}>Adres</h3>
                  <p className={styles.infoText}>{company.address.full}</p>
                </div>

                <div className={styles.infoGroup}>
                  <h3 className={styles.infoTitle}>Telefon</h3>
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className={styles.infoLink}
                  >
                    {company.phone}
                  </a>
                </div>

                <div className={styles.infoGroup}>
                  <h3 className={styles.infoTitle}>E-posta</h3>
                  <a
                    href={`mailto:${company.email}`}
                    className={styles.infoLink}
                  >
                    {company.email}
                  </a>
                </div>

                <div className={styles.infoGroup}>
                  <h3 className={styles.infoTitle}>Çalışma Saatleri</h3>
                  <p className={styles.infoText}>
                    {company.workingHours.weekdays}
                  </p>
                  <p className={styles.infoText}>
                    {company.workingHours.saturday}
                  </p>
                  <p className={styles.infoText}>
                    {company.workingHours.sunday}
                  </p>
                </div>


              </div>
            </ScrollReveal>

            {/* Sağ: İletişim Formu */}
            <ScrollReveal delay={1}>
              <div className={styles.formWrapper}>
                {formStatus === "success" ? (
                  <div className={styles.successMessage}>
                    <div className={styles.successIcon}>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className={styles.successTitle}>
                      Mesajınız iletildi.
                    </h3>
                    <p className={styles.successText}>
                      En kısa sürede sizinle iletişime geçeceğiz.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className={styles.successBtn}
                    >
                      Yeni Mesaj Gönder
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className={styles.form}
                    id="contact-form"
                  >
                    {formStatus === "error" && (
                      <div className={styles.errorMessage}>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="15" y1="9" x2="9" y2="15" />
                          <line x1="9" y1="9" x2="15" y2="15" />
                        </svg>
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>
                          Ad Soyad
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className={styles.input}
                          required
                          autoComplete="name"
                          disabled={formStatus === "loading"}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>
                          E-posta
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className={styles.input}
                          required
                          autoComplete="email"
                          disabled={formStatus === "loading"}
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone" className={styles.label}>
                        Telefon
                        <span className={styles.optional}>(İsteğe bağlı)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className={styles.input}
                        autoComplete="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="0533 361 63 44"
                        maxLength={14}
                        disabled={formStatus === "loading"}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="subject" className={styles.label}>
                        Konu
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className={styles.input}
                        required
                        defaultValue=""
                        disabled={formStatus === "loading"}
                      >
                        <option value="" disabled>
                          Seçiniz
                        </option>
                        <option value="konut">Konut Projesi</option>
                        <option value="ticari">Ticari Proje</option>
                        <option value="renovasyon">Renovasyon</option>
                        <option value="danismanlik">Danışmanlık</option>
                        <option value="diger">Diğer</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message" className={styles.label}>
                        Mesajınız
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className={`${styles.input} ${styles.textarea}`}
                        required
                        disabled={formStatus === "loading"}
                      />
                    </div>

                    <button
                      type="submit"
                      className={`btn btn--primary ${formStatus === "loading" ? styles.btnLoading : ""}`}
                      disabled={formStatus === "loading"}
                    >
                      {formStatus === "loading" ? (
                        <>
                          <span className={styles.spinner} />
                          Gönderiliyor...
                        </>
                      ) : (
                        "Mesajı Gönder"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== HARİTA ===== */}
      <section className={styles.mapSection}>
        <div className={styles.mapPlaceholder}>
          <Image
            src="/images/headers/besiktas-manzara.png"
            alt="Beşiktaş, İstanbul manzarası"
            fill
            sizes="100vw"
            loading="eager"
            priority
            className={styles.mapBg}
          />
          <div className={styles.mapOverlay} />
          <div className={styles.mapContent}>
            <div className={styles.mapPin}>
              <svg
                width="32"
                height="42"
                viewBox="0 0 32 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M16 0C7.163 0 0 7.163 0 16C0 28 16 42 16 42S32 28 32 16C32 7.163 24.837 0 16 0Z"
                  fill="white"
                />
                <circle cx="16" cy="16" r="6" fill="var(--color-accent)" />
              </svg>
            </div>
            <p className={styles.mapAddress}>
              {company.address.district}, {company.address.city}
            </p>
            <p className={styles.mapAddressFull}>{company.address.full}</p>
          </div>
        </div>
      </section>
    </>
  );
}
