import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug, getAllSlugs } from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Proje Bulunamadı" };

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Önceki ve sonraki proje
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className={styles.pageHeader}>
        <div className="container">
          <Link href="/projeler" className={styles.backLink}>
            ← Tüm Projeler
          </Link>

          <div className={styles.headerContent}>
            <div className={styles.headerMeta}>
              <span className={styles.category}>{project.category}</span>
              <span className={styles.dot}>·</span>
              <span className={styles.year}>{project.year}</span>
              <span className={styles.dot}>·</span>
              <span className={styles.status}>{project.status}</span>
            </div>

            <h1 className={styles.projectTitle}>{project.title}</h1>
            <p className={styles.projectLocation}>{project.location}</p>
          </div>
        </div>
      </section>

      {/* ===== HERO GÖRSEL ===== */}
      <section className={styles.heroImage}>
        <div className={styles.heroPlaceholder}>
          <Image
            src={project.images.banner}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className={styles.heroImg}
          />
        </div>
      </section>

      {/* ===== İÇERİK ===== */}
      <section className={`section ${styles.content}`}>
        <div className="container">
          <div className={styles.contentGrid}>
            {/* Sol: Proje bilgileri */}
            <ScrollReveal>
              <div className={styles.sidebar}>
                <div className={styles.infoBlock}>
                  <h4 className={styles.infoLabel}>Konum</h4>
                  <p className={styles.infoValue}>{project.location}</p>
                </div>
                <div className={styles.infoBlock}>
                  <h4 className={styles.infoLabel}>Yıl</h4>
                  <p className={styles.infoValue}>{project.year}</p>
                </div>
                <div className={styles.infoBlock}>
                  <h4 className={styles.infoLabel}>Alan</h4>
                  <p className={styles.infoValue}>{project.area}</p>
                </div>
                <div className={styles.infoBlock}>
                  <h4 className={styles.infoLabel}>Kategori</h4>
                  <p className={styles.infoValue}>{project.category}</p>
                </div>
                <div className={styles.infoBlock}>
                  <h4 className={styles.infoLabel}>Durum</h4>
                  <p className={styles.infoValue}>{project.status}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Sağ: Proje açıklaması */}
            <ScrollReveal delay={1}>
              <div className={styles.description}>
                {project.description.split("\n\n").map((paragraph, i) => (
                  <p key={i} className={styles.descText}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== GALERİ ===== */}
      <section className={styles.gallery}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.galleryGrid}>
              {project.images.gallery.map((imgSrc, i) => (
                <div
                  key={i}
                  className={styles.galleryItem}
                >
                  <Image
                    src={imgSrc}
                    alt={`${project.title} - Görsel ${i + 1}`}
                    fill
                    className={styles.galleryImg}
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== NAVİGASYON ===== */}
      <section className={styles.projectNav}>
        <div className="container">
          <div className={styles.navGrid}>
            {prevProject ? (
              <Link
                href={`/projeler/${prevProject.slug}`}
                className={styles.navItem}
              >
                <span className={styles.navDirection}>← Önceki Proje</span>
                <span className={styles.navTitle}>{prevProject.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link
                href={`/projeler/${nextProject.slug}`}
                className={`${styles.navItem} ${styles.navItemRight}`}
              >
                <span className={styles.navDirection}>Sonraki Proje →</span>
                <span className={styles.navTitle}>{nextProject.title}</span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function getProjectColor(index: number): string {
  const colors = [
    "#c8d5df",
    "#b8c9d4",
    "#d4dde5",
    "#afc4d0",
    "#c2cfd8",
    "#bdd0db",
  ];
  return colors[index % colors.length];
}

function getGalleryColor(projectIndex: number, imageIndex: number): string {
  const base = [200, 210, 220];
  const offset = (projectIndex * 15 + imageIndex * 10) % 30;
  return `rgb(${base[0] - offset}, ${base[1] - offset + 5}, ${base[2] - offset + 10})`;
}
