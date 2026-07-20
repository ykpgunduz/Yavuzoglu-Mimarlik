import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { featuredProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          {/* Mimari Çerçeve — İmza Unsuru */}
          <div className={styles.archFrame} aria-hidden="true">
            <div className={styles.archCornerTL} />
            <div className={styles.archCornerBR} />
          </div>

          <div className={styles.heroText}>
            <p className={styles.heroLabel}>Mimarlık Ofisi — İstanbul</p>
            <h1 className={styles.heroTitle}>
              Mekanı
              <br />
              <span className={styles.heroTitleAccent}>Anlamak</span>,
              <br />
              Yaşamı
              <br />
              Tasarlamak.
            </h1>
            <p className={styles.heroDescription}>
              İstanbul'un köklü semtlerinden Beşiktaş'ta, bağlama duyarlı ve
              yaşanabilir mekanlar tasarlıyoruz.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/projeler" className="btn btn--primary">
                Projelerimiz
              </Link>
              <Link href="/iletisim" className="btn btn--outline">
                İletişime Geçin
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/headers/hero-main.png"
                alt="Modern mimari beton cephe detayı"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>

        {/* Scroll İndikatör */}
        <div className={styles.scrollIndicator} aria-hidden="true">
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ===== SEÇİLMİŞ PROJELER ===== */}
      <section className={`section ${styles.featured}`}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionLabel}>
                <span className="arch-line" />
                <span className={styles.labelText}>Seçilmiş Projeler</span>
              </div>
              <h2 className={styles.sectionTitle}>
                Son dönem çalışmalarımızdan öne çıkanlar
              </h2>
            </div>
          </ScrollReveal>

          <div className={styles.featuredGrid}>
            {featuredProjects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={(i + 1) as 1 | 2 | 3}>
                <ProjectCard project={project} index={i} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className={styles.featuredCta}>
              <Link href="/projeler" className="btn btn--outline">
                Tüm Projeleri Görüntüle
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FELSEFE ===== */}
      <section className={styles.philosophy}>
        <div className="container">
          <div className={styles.philosophyGrid}>
            <ScrollReveal>
              <div className={styles.philosophyLeft}>
                <div className={styles.sectionLabel}>
                  <span className="arch-line" />
                  <span className={styles.labelText}>Yaklaşımımız</span>
                </div>
                <h2 className={styles.philosophyTitle}>
                  Mimariyi, yapı ile yaşam arasındaki diyaloğun somut biçimi olarak
                  görüyoruz.
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className={styles.philosophyRight}>
                <p className={styles.philosophyText}>
                  {company.about.philosophy}
                </p>
                <div className={styles.principles}>
                  {company.about.principles.map((p) => (
                    <div key={p.title} className={styles.principle}>
                      <h4 className={styles.principleTitle}>{p.title}</h4>
                      <p className={styles.principleDesc}>{p.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </>
  );
}
