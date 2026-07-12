import Link from "next/link";
import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/our-service" },
  { label: "Buyer Roadmap", href: "/#buyer-roadmap" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contactus" },
];

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

const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter/X", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <>
      <footer className={styles.footer} id="f-contact">
        <div className={styles.ctaArea}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <div>
                <p className={styles.ctaSmall}>Ready To Get Started?</p>
                <h3>Buy Your First Home With Confidence</h3>
                <p className={styles.ctaText}>
                  Get clear guidance, practical support, and a step-by-step
                  roadmap for your first home-buying journey in the UK.
                </p>
              </div>

              <Link href="/contactus" className={styles.ctaButton}>
                Book Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.footerMain}>
          <div className={styles.container}>
            <div className={styles.footerGrid}>
              <div className={styles.footerColumn}>
                <Link href="/" className={styles.logo}>
                  <span className={styles.logoIcon}>H</span>
                  <span className={styles.logoText}>
                    HomeStart<span>Guide</span>
                  </span>
                </Link>

                <p className={styles.aboutText}>
                  HomeStartGuide helps first-time buyers understand the UK
                  property-buying process with clear guidance, practical
                  support, and confidence at every step.
                </p>

                <div className={styles.socialLinks}>
                  {socialLinks.map((item) => (
                    <a key={item.label} href={item.href}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className={styles.footerColumn}>
                <h5 className={styles.footerTitle}>Quick Links</h5>

                <ul className={styles.linkList}>
                  {quickLinks.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.footerColumn}>
                <h5 className={styles.footerTitle}>Our Services</h5>

                <ul className={styles.linkList}>
                  {services.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.footerColumn}>
                <h5 className={styles.footerTitle}>Contact Us</h5>

                <ul className={styles.contactList}>
                  <li>
                    <span>Phone</span>
                    <a href="tel:+447466831291">+44 7466 831291</a>
                  </li>

                  <li>
                    <span>Email</span>
                    <a href="mailto:info@homestartguide.com">
                      info@homestartguide.com
                    </a>
                  </li>

                  <li>
                    <span>Address</span>
                    <p>
                      40 Winsford Terrace, Great Cambridge Road, London N18 1BS
                    </p>
                  </li>
                </ul>

                <Link href="/contactus" className={styles.contactButton}>
                  Contact Us
                </Link>
              </div>
            </div>

            <div className={styles.disclaimer}>
              <strong>Important:</strong> HomeStartGuide provides general
              guidance and educational support for first-time buyers. We do not
              provide regulated mortgage, financial, or legal advice. Where
              required, we can connect you with qualified professionals.
            </div>

            <div className={styles.copyrightArea}>
              <p>© 2026 HomeStartGuide. All rights reserved.</p>

              <div className={styles.legalLinks}>
                {legalLinks.map((item) => (
                  <Link key={item.label} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "307.919",
            }}
          ></path>
        </svg>
      </div>

      <div className="rts-switcher"></div>
    </>
  );
}
