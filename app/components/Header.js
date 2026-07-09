// import Link from "next/link";

// export default function Header() {
//   return (
//     <>
//       <header className="header--sticky header-one  ">
//         <div className="header-top header-top-one bg-1">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-6 d-xl-block d-none">
//                 <div className="left">
//                   <div className="mail">
//                     <Link href="/about-us">
//                       <i className="fal fa-envelope"></i>{" "}
//                       info@homestartguide.com
//                     </Link>
//                   </div>
//                   <div className="working-time">
//                     <p>
//                       <i className="fal fa-clock"></i> Working: 8.00am - 5.00pm
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-6 d-xl-block d-none">
//                 <div className="right">
//                   <ul className="top-nav">
//                     <li>
//                       <Link href="/about-us">About</Link>
//                     </li>
//                     <li>
//                       <Link href="/blog-list">News</Link>
//                     </li>
//                     <li>
//                       <Link href="/contactus">Contact</Link>
//                     </li>
//                   </ul>
//                   <ul className="social-wrapper-one">
//                     <li>
//                       <a href="#">
//                         <i className="fab fa-facebook-f"></i>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#">
//                         <i className="fab fa-twitter"></i>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#">
//                         <i className="fab fa-instagram"></i>
//                       </a>
//                     </li>
//                     <li>
//                       <a className="mr--0" href="#">
//                         <i className="fab fa-linkedin-in"></i>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="header-main-one bg-white">
//           <div className="container">
//             <div className="row">
//               <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-4">
//                 <div className="thumbnail">
//                   <Link href="/">
//                     <img
//                       src="/assets/images/logo/logo-1.svg"
//                       alt="finbiz-logo"
//                     />
//                   </Link>
//                 </div>
//               </div>
//               <div className=" col-xl-9 col-lg-8 col-md-8 col-sm-8 col-8">
//                 <div className="main-header">
//                   <div>
//                     <nav className="nav-main mainmenu-nav d-none d-xl-block">
//                       <ul className="mainmenu">
//                         <li className="has-droupdown">
//                           <a className="nav-link" href="#">
//                             Home
//                           </a>
//                           <ul className="submenu menu-link1">
//                             <li className="menu-item">
//                               <a className="tag" href="#">
//                                 Multi Pages
//                               </a>
//                               <ul>
//                                 <li>
//                                   <Link href="/">Main Home</Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/home-two">Consulting Home</Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/home-three">Corporate Home</Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/home-four">Insurance Home</Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/home-five">Marketing Home</Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/home-six">Home finance</Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/home-seven">
//                                     Human Resources
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/home-eight">IT Solutions</Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/home-nine">Modern Agency</Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/home-ten">Startup Agency</Link>
//                                 </li>
//                               </ul>
//                             </li>
//                             <li className="menu-item">
//                               <a className="tag" href="#">
//                                 One Page
//                               </a>
//                               <ul>
//                                 <li>
//                                   <Link href="/onepage-one">Main Home</Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/onepage-two">
//                                     Consulting Home
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/onepage-three">
//                                     Corporate Home
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/onepage-four">
//                                     Insurance Home
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/onepage-five">
//                                     Marketing Home
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/onepage-six">Home finance</Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/onepage-seven">
//                                     Human Resources
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/onepage-eight">
//                                     IT Solutions
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/onepage-nine">
//                                     Modern Agency
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/onepage-ten">
//                                     Startup Agency
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </li>
//                           </ul>
//                         </li>
//                         <li className="has-droupdown">
//                           <a className="nav-link" href="#">
//                             Services
//                           </a>
//                           <ul className="submenu menu-link3">
//                             <li className="sub-droupdown">
//                               <a className="sub-menu-link" href="#">
//                                 Our Service
//                               </a>
//                               <ul className="submenu third-lvl">
//                                 <li>
//                                   <Link href="/our-service">Service 1</Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/service-2">Service 2</Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/service-3">Service 3</Link>
//                                 </li>
//                               </ul>
//                             </li>
//                             <li>
//                               <Link href="/service-details">
//                                 Service Details
//                               </Link>
//                             </li>
//                           </ul>
//                         </li>
//                         <li className="has-droupdown">
//                           <a className="nav-link" href="#">
//                             Pages
//                           </a>
//                           <ul className="submenu menu-link">
//                             <li className="menu-item">
//                               <a className="tag" href="#">
//                                 Pages
//                               </a>
//                               <ul>
//                                 <li>
//                                   <Link href="/appoinment">Appoinment</Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/about-us">About Us</Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/pricing-plane">Price Plans</Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/our-service">Our Services</Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/testimonial-style-1">
//                                     Testimonial
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/404">404 Page</Link>
//                                 </li>
//                               </ul>
//                             </li>
//                             <li className="menu-item">
//                               <a className="tag" href="#">
//                                 Portfolio
//                               </a>
//                               <ul>
//                                 <li>
//                                   <Link href="/project">Portfolio Style 1</Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/portfolio-style-2">
//                                     Portfolio Style 2
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/portfolio-style-3">
//                                     Portfolio Style 3
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/portfolio-style-4">
//                                     Portfolio Style 4
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/portfolio-style-5">
//                                     Portfolio Style 5
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/project-details">
//                                     Portfolio Details
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </li>
//                             <li className="menu-item">
//                               <a className="tag" href="#">
//                                 Our Teams
//                               </a>
//                               <ul>
//                                 <li>
//                                   <Link href="/team">Team Style 1</Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/team-style-2">Team Style 2</Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/team-style-3">Team Style 3</Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/team-style-4">Team Style 4</Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/team-style-5">Team Style 5</Link>
//                                 </li>
//                                 <li>
//                                   <Link href="/team-details">Team Details</Link>
//                                 </li>
//                               </ul>
//                             </li>
//                           </ul>
//                         </li>
//                         <li className="has-droupdown">
//                           <a className="nav-link" href="#">
//                             Blog
//                           </a>
//                           <ul className="submenu">
//                             <li>
//                               <Link href="/blog-list">Blog List</Link>
//                             </li>
//                             <li>
//                               <Link href="/blog-grid">Blog Grid</Link>
//                             </li>
//                             <li>
//                               <Link href="/blog-details-default">
//                                 Blog Details
//                               </Link>
//                             </li>
//                           </ul>
//                         </li>
//                         <li>
//                           <Link className="nav-item" href="/pricing-plane">
//                             Pricing Plan
//                           </Link>
//                         </li>
//                         <li>
//                           <Link className="nav-item" href="/contactus">
//                             Contact
//                           </Link>
//                         </li>
//                       </ul>
//                     </nav>
//                   </div>
//                   <div className="button-area">
//                     <button id="search" className="rts-btn btn-primary-alta">
//                       <i className="far fa-search"></i>
//                     </button>
//                     <a
//                       className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btn"
//                       href="#"
//                     >
//                       Get Quote
//                     </a>
//                     <button
//                       id="menu-btn"
//                       className="menu rts-btn btn-primary-alta ml--20 ml_sm--5"
//                     >
//                       <img
//                         className="menu-dark"
//                         src="/assets/images/icon/menu.png"
//                         alt="Menu-icon"
//                       />
//                       <img
//                         className="menu-light"
//                         src="/assets/images/icon/menu-light.png"
//                         alt="Menu-icon"
//                       />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const services = [
  {
    label: "First-Time Buyer Consultation",
    href: "/our-service#first-time-buyer-consultation",
  },
  {
    label: "Mortgage Guidance",
    href: "/our-service#mortgage-guidance",
  },
  {
    label: "Government Scheme Guidance",
    href: "/our-service#government-schemes",
  },
  {
    label: "Property Search Support",
    href: "/our-service#property-search-support",
  },
  {
    label: "Offer & Negotiation Guidance",
    href: "/our-service#offer-negotiation",
  },
  {
    label: "Conveyancing Guidance",
    href: "/our-service#conveyancing-guidance",
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
                  40 Winsford Terrace, London 3SD 1BS
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
          <span>📍 40 Winsford Terrace, London 3SD 1BS</span>
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
