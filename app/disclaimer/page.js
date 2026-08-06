import Link from "next/link";
import styles from "../components/legal/LegalPage.module.css";

export const metadata = {
  title: "Disclaimer | HomeStartGuide",
  description:
    "Read the HomeStartGuide website disclaimer about buyer support, property viewing assistance, negotiation guidance, AML preparation, and non-regulated services.",
};

export default function DisclaimerPage() {
  return (
    <main className={styles.legalPage}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <p>HomeStartGuide Legal</p>
            <h1>Disclaimer</h1>
          </div>
        </div>
      </section>

      <section className={styles.contentWrap}>
        <div className="container">
          <div className={styles.contentBox}>
            <p className={styles.updated}>Last updated: 6 August 2026</p>

            <div className={styles.section}>
              <h2>1. General Information Only</h2>
              <p>
                The information on the HomeStartGuide website is provided for
                general information, buyer awareness, and practical education
                only. It should not be treated as legal, financial, mortgage,
                surveying, structural, tax, or regulated professional advice.
              </p>
            </div>

            <div className={styles.section}>
              <h2>2. Our Service Position</h2>
              <p>
                HomeStartGuide provides non-regulated buyer representation,
                property viewing assistance, negotiation support, auction buyer
                guidance, and AML pre-screening preparation.
              </p>
              <p>
                Our aim is to help buyers approach property decisions with
                better preparation, clearer questions, and more practical
                awareness before they view, offer, bid, or commit.
              </p>
            </div>

            <div className={styles.section}>
              <h2>3. No Formal Building Survey</h2>
              <p>
                HomeStartGuide does not provide formal building surveys,
                structural reports, RICS-level inspections, valuation reports,
                or professional defect diagnosis.
              </p>
              <p>
                We may help buyers notice visible red flags such as damp signs,
                poor maintenance, possible hidden cost indicators, or practical
                viewing concerns. Formal property surveys should be carried out
                by qualified surveyors.
              </p>
            </div>

            <div className={styles.section}>
              <h2>4. No Regulated Mortgage Or Financial Advice</h2>
              <p>
                HomeStartGuide does not provide regulated mortgage advice,
                financial advice, investment advice, or credit advice. Any
                mortgage, finance, lending, or affordability decision should be
                discussed with qualified and authorised professionals.
              </p>
            </div>

            <div className={styles.section}>
              <h2>5. No Legal Or Conveyancing Advice</h2>
              <p>
                HomeStartGuide does not provide legal advice or conveyancing
                services. Property contracts, legal packs, title issues, auction
                conditions, completion deadlines, and conveyancing matters
                should be reviewed by qualified legal professionals.
              </p>
            </div>

            <div className={styles.section}>
              <h2>6. AML Preparation Support</h2>
              <p>
                AML preparation support means helping buyers understand and
                organise common proof of funds or source of funds documents
                before solicitor, agent, or platform checks.
              </p>
              <p>
                HomeStartGuide does not carry out regulated AML verification,
                identity verification, compliance approval, or legal source of
                funds assessment.
              </p>
            </div>

            <div className={styles.section}>
              <h2>7. Buyer Responsibility</h2>
              <p>
                Buyers remain responsible for their own decisions, including
                whether to view, offer, bid, negotiate, proceed, withdraw, pay a
                deposit, instruct professionals, or complete a purchase.
              </p>
              <p>
                You should always carry out your own checks and seek qualified
                professional advice before making legally or financially binding
                decisions.
              </p>
            </div>

            <div className={styles.section}>
              <h2>8. Auction Risks</h2>
              <p>
                Auction purchases can involve serious risks, including
                non-refundable deposits, strict deadlines, legal pack concerns,
                guide price differences, and binding commitments. Buyers should
                take independent legal and professional advice before bidding.
              </p>
            </div>

            <div className={styles.section}>
              <h2>9. Third-Party Services</h2>
              <p>
                HomeStartGuide may refer buyers to or interact with third-party
                services such as surveyors, solicitors, conveyancers, mortgage
                advisers, payment providers, booking platforms, or form
                processors. We are not responsible for third-party advice,
                services, terms, decisions, or outcomes.
              </p>
            </div>

            <div className={styles.section}>
              <h2>10. Contact Us</h2>
              <p>
                For questions about this Disclaimer, please contact us at{" "}
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
              This disclaimer is a practical website draft and should be
              reviewed by the business owner or a qualified UK legal
              professional before being treated as final legal wording.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
