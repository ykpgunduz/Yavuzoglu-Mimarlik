import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      {/* ===== CTA BÖLÜMÜ ===== */}
      <div className={styles.cta}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaFrame} aria-hidden="true">
            <div className={styles.ctaCornerTL} />
            <div className={styles.ctaCornerBR} />
          </div>
          <p className={styles.ctaLabel}>Bir sonraki projeniz</p>
          <h2 className={styles.ctaTitle}>
            Birlikte tasarlayalım.
          </h2>
          <Link href="/iletisim" className={styles.ctaButton}>
            İletişime Geçin
            <span className={styles.ctaArrow}>→</span>
          </Link>
        </div>
      </div>

      {/* ===== ANA FOOTER ===== */}
      <div className={styles.main}>
        <div className={styles.inner}>
          {/* Üst kısım — 4 sütun */}
          <div className={styles.top}>
            {/* Marka */}
            <div className={styles.brand}>
              <Link href="/" className={styles.logo}>
                <Image
                  src="/images/logo-beyaz.png"
                  alt="Yavuzoğlu Mimarlık"
                  width={36}
                  height={36}
                  className={styles.logoMark}
                />
                <span className={styles.logoText}>
                  YAVUZOĞLU
                  <span className={styles.logoSub}>MİMARLIK</span>
                </span>
              </Link>
              <p className={styles.slogan}>{company.slogan}</p>
              <p className={styles.address}>{company.address.full}</p>
            </div>


            {/* İletişim */}
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>İletişim</h3>
              <ul className={styles.columnList}>
                <li>
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className={styles.footerLink}
                  >
                    {company.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${company.email}`}
                    className={styles.footerLink}
                  >
                    {company.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Çalışma Saatleri */}
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Çalışma Saatleri</h3>
              <ul className={styles.columnList}>
                <li className={styles.hoursItem}>{company.workingHours.weekdays}</li>
                <li className={styles.hoursItem}>{company.workingHours.saturday}</li>
                <li className={styles.hoursItem}>{company.workingHours.sunday}</li>
              </ul>
            </div>
          </div>

          {/* Ayırıcı çizgi */}
          <div className={styles.divider} />

          {/* Alt kısım */}
          <div className={styles.bottom}>
            <p className={styles.copyright}>
              © Telif Hakkı {currentYear} | Tüm Hakları{" "}
              <a
                href="https://harpysocial.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.creditLink}
              >
                Harpy Social
              </a>{" "}
              tarafından saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
