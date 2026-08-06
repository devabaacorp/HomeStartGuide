import Link from "next/link";
import styles from "../components/legal/LegalPage.module.css";

export const metadata = {
  title: "Cookie Policy | HomeStartGuide",
  description:
    "Read the HomeStartGuide Cookie Policy and learn how cookies and similar technologies may be used on our website.",
};

export default function CookiePolicyPage() {
  return (
    <main className={styles.legalPage}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <p>HomeStartGuide Legal</p>
            <h1>Cookie Policy</h1>
          </div>
        </div>
      </section>

      <section className={styles.contentWrap}>
        <div className="container">
          <div className={styles.contentBox}>
            <p className={styles.updated}>Last updated: 6 August 2026</p>

            <div className={styles.section}>
              <h2>1. Introduction</h2>
              <p>
                This Cookie Policy explains how HomeStartGuide may use cookies
                and similar technologies when you visit our website.
              </p>
              <p>
                Cookies are small text files that may be stored on your device
                when you visit a website. They can help a website work properly,
                remember basic preferences, improve performance, or understand
                how visitors use the website.
              </p>
            </div>

            <div className={styles.section}>
              <h2>2. Types Of Cookies We May Use</h2>

              <h3>Essential Cookies</h3>
              <p>
                These cookies may be required for the website to work correctly.
                They help with basic website functions such as page loading,
                navigation, security, and form handling.
              </p>

              <h3>Performance Or Analytics Cookies</h3>
              <p>
                These cookies may help us understand how visitors use the
                website, such as which pages are visited and how the website
                performs. At present, HomeStartGuide may not use advanced
                analytics tools unless they are added in the future.
              </p>

              <h3>Third-Party Cookies</h3>
              <p>
                Some third-party services, such as form processing, maps,
                booking tools, payment links, or embedded services, may use
                their own cookies or tracking technologies.
              </p>
            </div>

            <div className={styles.section}>
              <h2>3. Current Website Use</h2>
              <p>
                HomeStartGuide currently uses a static website structure. Some
                third-party services may be used for form submissions, hosting,
                maps, or future booking and payment integrations.
              </p>
              <p>
                If additional tools such as Google Analytics, Meta Pixel,
                Calendly, Stripe, PayPal, live chat, CRM systems, or advertising
                platforms are added later, this Cookie Policy should be updated.
              </p>
            </div>

            <div className={styles.section}>
              <h2>4. Managing Cookies</h2>
              <p>
                You can usually manage or block cookies through your browser
                settings. Most browsers allow you to delete existing cookies,
                block new cookies, or receive warnings before cookies are
                stored.
              </p>
              <p>
                Blocking some cookies may affect how certain parts of the
                website work.
              </p>
            </div>

            <div className={styles.section}>
              <h2>5. Third-Party Services</h2>
              <p>
                Third-party platforms may have their own cookie and privacy
                policies. HomeStartGuide is not responsible for the cookie
                practices of third-party websites or platforms.
              </p>
            </div>

            <div className={styles.section}>
              <h2>6. Updates To This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time, especially
                when new website tools, analytics, booking systems, payment
                systems, or marketing platforms are added.
              </p>
            </div>

            <div className={styles.section}>
              <h2>7. Contact Us</h2>
              <p>
                For questions about this Cookie Policy, please contact us at{" "}
                <a
                  className={styles.link}
                  href="mailto:info@homestartguide.com"
                >
                  info@homestartguide.com
                </a>
                .
              </p>
              <p>
                You can also contact us through our{" "}
                <Link className={styles.link} href="/contactus">
                  contact page
                </Link>
                .
              </p>
            </div>

            <div className={styles.notice}>
              This Cookie Policy is a practical website draft. It should be
              updated if HomeStartGuide adds analytics, advertising pixels,
              booking widgets, payment tools, or cookie consent software.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
