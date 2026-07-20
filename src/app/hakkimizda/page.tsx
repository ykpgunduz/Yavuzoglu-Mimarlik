import type { Metadata } from "next";
import Image from "next/image";
import { company } from "@/data/company";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Yavuzoğlu Mimarlık hakkında. İstanbul Beşiktaş'ta bağlama duyarlı, yaşanabilir mekanlar tasarlayan mimarlık ofisimizin hikayesi, felsefesi ve çalışma prensipleri.",
  openGraph: {
    title: "Hakkımızda | Yavuzoğlu Mimarlık",
    description:
      "İstanbul Beşiktaş'ta bağlama duyarlı, yaşanabilir mekanlar tasarlayan mimarlık ofisimizin hikayesi ve felsefesi.",
    images: ["/images/headers/hakkimizda-desktop.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hakkımızda | Yavuzoğlu Mimarlık",
    description:
      "İstanbul Beşiktaş'ta bağlama duyarlı, yaşanabilir mekanlar tasarlayan mimarlık ofisimizin hikayesi ve felsefesi.",
    images: ["/images/headers/hakkimizda-desktop.jpg"],
  },
  alternates: {
    canonical: "https://yavuzoglumimarlik.com/hakkimizda",
  },
};

export default function HakkimizdaPage() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className={styles.pageHeader}>
        <Image
          src="/images/headers/hakkimizda-desktop.jpg"
          alt="Hakkımızda"
          fill
          priority
          className={styles.headerBgImage}
          sizes="100vw"
          quality={80}
        />
        <div className={styles.headerOverlay} />
        <div className="container">
          <div className={styles.headerContent}>
            <p className={styles.pageLabel}>Hakkımızda</p>
            <h1 className={styles.pageTitle}>
              Tasarımın kendisi de
              <br />
              <span className={styles.titleAccent}>bir sorumluluktur.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ===== HİKAYE ===== */}
      <section className={`section ${styles.story}`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <ScrollReveal>
              <div className={styles.storyLeft}>
                <div className={styles.sectionLabel}>
                  <span className="arch-line" />
                  <span className={styles.labelText}>Hikayemiz</span>
                </div>
                <h2 className={styles.storyTitle}>
                  İstanbul'un kalbinde, mekanı anlamaya adanmış bir ofis.
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className={styles.storyRight}>
                {company.about.story.split("\n\n").map((paragraph, i) => (
                  <p key={i} className={styles.storyText}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== KURUCU ===== */}
      <section className={styles.founder}>
        <div className="container">
          <div className={styles.founderGrid}>
            <ScrollReveal>
              <div className={styles.founderImage}>
                <Image
                  src="/images/about/kerem-yavuzoglu.jpg"
                  alt={company.founder}
                  fill
                  className={styles.founderPhoto}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className={styles.founderContent}>
                <div className={styles.sectionLabel}>
                  <span className="arch-line" />
                  <span className={styles.labelText}>Kurucu</span>
                </div>
                <h2 className={styles.founderName}>{company.founder}</h2>
                <p className={styles.founderRole}>Kurucu Mimar</p>
                <p className={styles.founderBio}>{company.founderBio}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== PRENSİPLER ===== */}
      <section className={`section ${styles.principlesSection}`}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionLabel}>
                <span className="arch-line" />
                <span className={styles.labelText}>Çalışma Prensiplerimiz</span>
              </div>
              <h2 className={styles.sectionTitle}>
                Her projeye aynı titizlikle yaklaşıyoruz.
              </h2>
            </div>
          </ScrollReveal>

          <div className={styles.principlesGrid}>
            {company.about.principles.map((principle, i) => (
              <ScrollReveal key={principle.title} delay={(i + 1) as 1 | 2 | 3}>
                <div className={styles.principleCard}>
                  <span className={styles.principleNumber}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={styles.principleTitle}>{principle.title}</h3>
                  <p className={styles.principleDescription}>
                    {principle.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
