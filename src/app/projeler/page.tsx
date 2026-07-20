import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "Yavuzoğlu Mimarlık tarafından tasarlanan konut, ticari ve kültürel mimari projeleri keşfedin.",
};

export default function ProjelerPage() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className={styles.pageHeader}>
        <Image
          src="/images/headers/projeler-desktop.jpg"
          alt="Projeler"
          fill
          priority
          className={styles.headerBgImage}
          sizes="100vw"
          quality={80}
        />
        <div className={styles.headerOverlay} />
        <div className="container">
          <div className={styles.headerContent}>
            <p className={styles.pageLabel}>Projeler</p>
            <h1 className={styles.pageTitle}>
              Her proje, bir sorudan
              <br />
              <span className={styles.titleAccent}>doğar.</span>
            </h1>
            <p className={styles.pageDescription}>
              Konut, ticari ve kültürel alanlarda gerçekleştirdiğimiz projeleri
              keşfedin. Her çalışma, kendine özgü bağlamıyla şekillenir.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PROJELER GRID ===== */}
      <section className={`section ${styles.projectsSection}`}>
        <div className="container">
          <div className={styles.projectsGrid}>
            {projects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <ProjectCard project={project} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className={styles.stats}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>20+</span>
                <span className={styles.statLabel}>Tamamlanan Proje</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNumber}>8</span>
                <span className={styles.statLabel}>Yıllık Deneyim</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNumber}>3</span>
                <span className={styles.statLabel}>Devam Eden Proje</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNumber}>İstanbul</span>
                <span className={styles.statLabel}>Merkezli</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
