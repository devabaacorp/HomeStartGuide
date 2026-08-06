import Link from "next/link";
import styles from "../components/legal/LegalPage.module.css";

export const metadata = {
  title: "Terms & Conditions | HomeStartGuide",
  description:
    "Read the HomeStartGuide Terms and Conditions for using our website and buyer support services.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className={styles.legalPage}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <p>HomeStartGuide Legal</p>
            <h1>Terms & Conditions</h1>
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
                These Terms & Conditions explain how you may use the
                HomeStartGuide website and how our buyer support services are
                presented. By using this website or submitting an enquiry, you
                agree to use the website responsibly and in accordance with
                these terms.
              </p>
              <p>
                HomeStartGuide provides non-regulated buyer representation,
                property viewing assistance, negotiation support, auction buyer
                guidance, and AML pre-screening preparation.
              </p>
            </div>

            <div className={styles.section}>
              <h2>2. About HomeStartGuide</h2>
              <p>
                HomeStartGuide supports first-time buyers and auction buyers
                before they view, offer, bid, or commit to a property decision.
                Our services are designed to provide practical buyer support,
                visible red flag awareness, negotiation preparation, and general
                property-buying guidance.
              </p>
            </div>

            <div className={styles.section}>
              <h2>3. Our Services</h2>
              <p>Our services may include:</p>
              <ul>
                <li>Property viewing companion support</li>
                <li>Buyer preparation before viewings</li>
                <li>Visible property red flag awareness</li>
                <li>Estate agent negotiation preparation</li>
                <li>Auction buyer risk guidance</li>
                <li>Proof of funds and AML preparation support</li>
                <li>General buyer education and practical support</li>
              </ul>
              <p>
                The exact support provided may depend on the buyer’s situation,
                the property, location, availability, and the agreed service
                arrangement.
              </p>
            </div>

            <div className={styles.section}>
              <h2>4. £500 Viewing Companion Package</h2>
              <p>
                The £500 Viewing Companion Package is presented as a one-off
                buyer support service. It is intended to help buyers approach a
                viewing or property decision with more practical awareness and
                preparation.
              </p>
              <p>
                The package may include viewing support, questions to ask,
                visible red flag awareness, negotiation preparation, and buyer
                risk guidance. It does not include formal surveys, legal advice,
                regulated mortgage advice, or financial advice.
              </p>
            </div>

            <div className={styles.section}>
              <h2>5. No Regulated Advice</h2>
              <p>
                HomeStartGuide does not provide regulated mortgage advice,
                financial advice, legal advice, conveyancing services, formal
                building surveys, structural reports, or RICS-level inspections.
              </p>
              <p>
                Where regulated advice or formal professional work is required,
                you should consult qualified third-party professionals such as
                mortgage advisers, solicitors, conveyancers, surveyors, or other
                regulated specialists.
              </p>
            </div>

            <div className={styles.section}>
              <h2>6. Website Information</h2>
              <p>
                The information on this website is provided for general
                information and buyer education only. While we aim to keep the
                website accurate and useful, we do not guarantee that all
                information will always be complete, current, or suitable for
                every buyer’s individual circumstances.
              </p>
            </div>

            <div className={styles.section}>
              <h2>7. User Responsibility</h2>
              <p>
                You remain responsible for your own property decisions,
                including whether to view, offer, bid, proceed, withdraw, pay a
                deposit, instruct professionals, or complete a purchase.
              </p>
              <p>
                You should carry out your own checks and obtain appropriate
                professional advice before making legally or financially binding
                decisions.
              </p>
            </div>

            <div className={styles.section}>
              <h2>8. Bookings, Payments, And Availability</h2>
              <p>
                Any booking, viewing support, consultation, or paid service is
                subject to availability and confirmation. Where payment links or
                booking systems are used, additional payment provider or booking
                platform terms may apply.
              </p>
              <p>
                Service dates, times, locations, and scope should be confirmed
                before any paid support is considered final.
              </p>
            </div>

            <div className={styles.section}>
              <h2>9. Cancellations And Changes</h2>
              <p>
                Cancellation, rescheduling, or refund arrangements should be
                confirmed at the time of booking or payment. HomeStartGuide may
                need to reschedule or refuse a service where the request is not
                practical, safe, available, or suitable.
              </p>
            </div>

            <div className={styles.section}>
              <h2>10. Third-Party Services</h2>
              <p>
                This website may refer to or use third-party services such as
                hosting, forms, payment links, booking systems, email, maps, or
                professional service providers. We are not responsible for the
                content, availability, terms, or policies of third-party
                websites or platforms.
              </p>
            </div>

            <div className={styles.section}>
              <h2>11. Limitation Of Liability</h2>
              <p>
                To the fullest extent permitted by law, HomeStartGuide is not
                responsible for losses arising from decisions made solely based
                on website content or general guidance. Our support is intended
                to assist buyer awareness and preparation, not to replace formal
                professional advice.
              </p>
            </div>

            <div className={styles.section}>
              <h2>12. Changes To These Terms</h2>
              <p>
                We may update these Terms & Conditions from time to time. The
                updated version will be posted on this page with a revised “Last
                updated” date.
              </p>
            </div>

            <div className={styles.section}>
              <h2>13. Contact Us</h2>
              <p>
                For questions about these Terms & Conditions, please contact us
                at{" "}
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
              These Terms & Conditions are a practical website draft and should
              be reviewed by the business owner or a qualified UK legal
              professional before being treated as final legal terms.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
