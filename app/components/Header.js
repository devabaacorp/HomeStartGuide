"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const services = [
  {
    label: "First-Time Buyer Consultation",
    href: "/#services",
  },
  {
    label: "Mortgage Guidance",
    href: "/#mortgage-guidance",
  },
  {
    label: "Government Scheme Guidance",
    href: "/#services",
  },
  {
    label: "Property Search Support",
    href: "/#services",
  },
  {
    label: "Offer & Negotiation Guidance",
    href: "/#services",
  },
  {
    label: "Conveyancing Guidance",
    href: "/#services",
  },
];

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Buyer Roadmap", href: "/#buyer-roadmap" },
  { label: "Mortgage Guidance", href: "/#mortgage-guidance" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contactus" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`${styles.header} header--sticky`}>
        <div className={styles.topBar}>
          <div className={styles.container}>
            <div className={styles.topBarInner}>
              <div className={styles.topLeft}>
                <a href="tel:+447466831291" className={styles.topLink}>
                  <span>☎</span>
                  +44 7466 831291
                </a>

                <span className={styles.topDivider}></span>

                <span className={styles.topText}>
                  <span>📍</span>
                  40 Winsford Terrace, Great Cambridge Road, London N18 1BS
                </span>
              </div>

              <div className={styles.topRight}>
                <Link href="/contactus" className={styles.topLink}>
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.mainBar}>
          <div className={styles.container}>
            <div className={styles.mainBarInner}>
              <Link href="/" className={styles.logo} onClick={closeMenu}>
                <span className={styles.logoIcon}>H</span>
                <span className={styles.logoText}>
                  HomeStart<span>Guide</span>
                </span>
              </Link>

              <nav className={styles.desktopNav} aria-label="Main navigation">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>

                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>

                  <li className={styles.dropdown}>
                    <button type="button" className={styles.dropdownButton}>
                      Services <span>▾</span>
                    </button>

                    <ul className={styles.dropdownMenu}>
                      {services.map((service) => (
                        <li key={service.label}>
                          <Link href={service.href}>{service.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li>
                    <Link href="/#buyer-roadmap">Buyer Roadmap</Link>
                  </li>

                  <li>
                    <Link href="/#mortgage-guidance">Mortgage Guidance</Link>
                  </li>

                  <li>
                    <Link href="/#faq">FAQ</Link>
                  </li>

                  <li>
                    <Link href="/contactus">Contact</Link>
                  </li>
                </ul>
              </nav>

              <div className={styles.actions}>
                <Link href="/contactus" className={styles.cta}>
                  Book Consultation
                </Link>

                <button
                  type="button"
                  className={styles.menuButton}
                  aria-label="Open menu"
                  aria-expanded={isMenuOpen}
                  onClick={() => setIsMenuOpen(true)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <button
        type="button"
        className={`${styles.overlay} ${isMenuOpen ? styles.overlayOpen : ""}`}
        aria-label="Close menu"
        onClick={closeMenu}
      ></button>

      <aside
        className={`${styles.drawer} ${isMenuOpen ? styles.drawerOpen : ""}`}
      >
        <div className={styles.drawerHeader}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logoIcon}>H</span>
            <span className={styles.logoText}>
              HomeStart<span>Guide</span>
            </span>
          </Link>

          <button
            type="button"
            className={styles.closeButton}
            aria-label="Close menu"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>

        <div className={styles.drawerContact}>
          <a href="tel:+447466831291">☎ +44 7466 831291</a>
          <span>
            📍 40 Winsford Terrace, Great Cambridge Road, London N18 1BS
          </span>
        </div>

        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {menuItems.slice(0, 2).map((item) => (
            <Link key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}

          <div className={styles.mobileDropdown}>
            <button
              type="button"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              aria-expanded={isServicesOpen}
            >
              Services <span>{isServicesOpen ? "−" : "+"}</span>
            </button>

            <div
              className={`${styles.mobileSubmenu} ${
                isServicesOpen ? styles.mobileSubmenuOpen : ""
              }`}
            >
              {services.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  onClick={closeMenu}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {menuItems.slice(2).map((item) => (
            <Link key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contactus"
          className={styles.drawerCta}
          onClick={closeMenu}
        >
          Book Consultation
        </Link>
      </aside>
    </>
  );
}
