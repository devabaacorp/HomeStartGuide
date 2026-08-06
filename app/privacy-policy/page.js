import Link from "next/link";
import styles from "../components/legal/LegalPage.module.css";

export const metadata = {
  title: "Privacy Policy | HomeStartGuide",
  description:
    "Read the HomeStartGuide Privacy Policy and learn how we collect, use, store, and protect personal information submitted through our website.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.legalPage}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <p>HomeStartGuide Legal</p>
            <h1>Privacy Policy</h1>
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
                This Privacy Policy explains how HomeStartGuide collects, uses,
                stores, and protects personal information when you visit our
                website, submit an enquiry, or contact us about buyer support,
                property viewing assistance, negotiation support, auction buyer
                guidance, or AML preparation support.
              </p>
            </div>

            <div className={styles.section}>
              <h2>2. Information We May Collect</h2>
              <p>
                We may collect the following information when you contact us:
              </p>
              <ul>
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your phone number</li>
                <li>Your enquiry topic</li>
                <li>Your message and property-related enquiry details</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Respond to your enquiry</li>
                <li>Provide buyer support information</li>
                <li>Arrange viewing support or strategy calls</li>
                <li>Understand your property-related request</li>
                <li>Keep basic records of enquiries and communications</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>4. Sharing Your Information</h2>
              <p>
                We do not sell your personal information. We may share
                information only where necessary with trusted service providers,
                such as website hosting, email, form processing, booking,
                payment, or professional service providers.
              </p>
            </div>

            <div className={styles.section}>
              <h2>5. Form Processing</h2>
              <p>
                Our website forms may use a third-party form processing service
                to send enquiries to us by email. When you submit a form, the
                details you provide may be processed by that service for the
                purpose of delivering your enquiry.
              </p>
            </div>

            <div className={styles.section}>
              <h2>6. How Long We Keep Information</h2>
              <p>
                We keep enquiry and communication records only for as long as
                reasonably necessary for business, service, accounting, legal,
                or administrative purposes.
              </p>
            </div>

            <div className={styles.section}>
              <h2>7. Your Rights</h2>
              <p>
                You may have rights to access, correct, delete, restrict, or
                object to the use of your personal information, depending on the
                circumstances.
              </p>
            </div>

            <div className={styles.section}>
              <h2>8. Contact Us</h2>
              <p>
                For privacy questions, please contact us at{" "}
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
              This privacy policy is a practical website draft. It should be
              reviewed and updated if HomeStartGuide adds analytics, advertising
              pixels, payment systems, booking tools, CRM systems, or other
              third-party integrations.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
