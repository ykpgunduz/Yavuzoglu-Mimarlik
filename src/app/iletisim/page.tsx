"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { company } from "@/data/company";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./page.module.css";

export default function IletisimPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
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
                {formSubmitted ? (
                  <div className={styles.successMessage}>
                    <div className={styles.successIcon}>✓</div>
                    <h3 className={styles.successTitle}>
                      Mesajınız iletildi.
                    </h3>
                    <p className={styles.successText}>
                      En kısa sürede sizinle iletişime geçeceğiz.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className={styles.form}
                    id="contact-form"
                  >
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
                      />
                    </div>

                    <button type="submit" className="btn btn--primary">
                      Mesajı Gönder
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
