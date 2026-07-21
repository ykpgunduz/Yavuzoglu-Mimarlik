import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <Link
      href={`/projeler/${project.slug}`}
      className={styles.card}
      style={{ "--card-delay": `${index * 0.1}s` } as React.CSSProperties}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={project.images.main}
          alt={project.title}
          fill
          quality={75}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 400px"
          className={styles.image}
        />
        <div className={styles.overlay}>
          <span className={styles.viewLabel}>Projeyi İncele</span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.category}>{project.category}</span>
          <span className={styles.separator}>·</span>
          <span className={styles.year}>{project.year}</span>
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.location}>{project.location}</p>
      </div>
    </Link>
  );
}
