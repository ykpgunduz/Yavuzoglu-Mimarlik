"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/projeler", label: "Projeler" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      document.body.style.overflow = menuOpen ? "hidden" : "";
    });
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isProjectDetail = pathname.startsWith("/projeler/") && pathname !== "/projeler";
  const isDarkHero = pathname !== "/" && !isProjectDetail;

  // Scrolled durumda her zaman siyah, scrolled değilken darkHero ise beyaz
  const useWhiteLogo = isDarkHero && !scrolled;

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
        isDarkHero ? styles.darkHero : ""
      }`}
      role="banner"
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Ana sayfaya dön">
          <Image
            src={useWhiteLogo ? "/images/logo-beyaz.png" : "/images/logo-siyah.png"}
            alt="Yavuzoğlu Mimarlık"
            width={36}
            height={36}
            className={styles.logoMark}
            priority
          />
          <span className={styles.logoText}>
            YAVUZOĞLU
            <span className={styles.logoSub}>MİMARLIK</span>
          </span>
        </Link>

        <nav className={styles.nav} role="navigation" aria-label="Ana navigasyon">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${
                    pathname === link.href ? styles.active : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </div>

      {/* Mobil Menü */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobil navigasyon menüsü"
      >
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className={styles.mobileNavItem}
                style={{ transitionDelay: menuOpen ? `${i * 0.08}s` : "0s" }}
              >
                <Link
                  href={link.href}
                  className={`${styles.mobileNavLink} ${
                    pathname === link.href ? styles.active : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
