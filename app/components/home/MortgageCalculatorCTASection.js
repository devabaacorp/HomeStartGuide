import Link from "next/link";
import styles from "./MortgageCalculatorCTASection.module.css";

const readinessPoints = [
  {
    number: "01",
    title: "Claim Your Free 15-Min Strategy Call",
    text: "Tell us where you are in the buying process and get a quick direction on whether you need viewing support, negotiation help, auction guidance, or document preparation.",
  },
  {
    number: "02",
    title: "Book The £500 Viewing Companion Package",
    text: "We attend the property viewing with you, help spot visible red flags, assess pressure tactics, and prepare you before making a serious offer.",
  },
  {
    number: "03",
    title: "Move Forward With Buyer Protection",
    text: "Get practical guidance before you risk paying for surveys, legal work, auction deposits, or inflated offers caused by pressure and lack of experience.",
  },
];

export default function MortgageCalculatorCTASection() {
  return (
    <section className={styles.mortgageSection} id="mortgage-guidance">
      <span className={styles.backgroundText}>Buyer Protection</span>

      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className={styles.leftContent}>
              <p className={styles.preTitle}>Free Strategy Call</p>

              <h2>Unsure Before A Viewing, Offer, Or Auction Bid?</h2>

              <p>
                Before you walk into a property viewing or auction decision
                alone, speak with HomeStartGuide. We help first-time buyers and
                auction buyers understand visible property risks, estate agent
                pressure, negotiation options, AML preparation, and the next
                safest step.
              </p>

              <div className={styles.buttonGroup}>
                <Link href="/contactus" className={styles.primaryButton}>
                  Claim Your Free 15-Min Strategy Call
                </Link>

                <Link href="/contactus" className={styles.secondaryButton}>
                  Book Your Viewing Companion (£500)
                </Link>
              </div>

              <p className={styles.disclaimer}>
                HomeStartGuide provides non-regulated buyer representation,
                property viewing assistance, negotiation support, and AML
                pre-screening preparation. Regulated mortgage advice, formal
                building surveys, and legal conveyancing are provided by
                qualified third-party specialists.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className={styles.calculatorCard}>
              <div className={styles.cardHeader}>
                <span>Buyer Protection Check</span>

                <h3>Before You View, Offer, Or Bid</h3>

                <p>
                  A property can look attractive online, but the real risk often
                  appears during the viewing, negotiation, auction pack review,
                  or solicitor checks. Get support before committing.
                </p>
              </div>

              <div className={styles.mockCalculator}>
                <div className={styles.mockRow}>
                  <span>Property Viewing</span>
                  <strong>Do Not Go Alone</strong>
                </div>

                <div className={styles.mockRow}>
                  <span>Agent Pressure</span>
                  <strong>Stay Protected</strong>
                </div>

                <div className={styles.mockRow}>
                  <span>Auction Risk</span>
                  <strong>Check Before Bidding</strong>
                </div>

                <div className={styles.mockResult}>
                  <span>Next Step</span>
                  <strong>Get Ex-Agent Support Before You Commit</strong>
                </div>
              </div>

              <div className={styles.pointsList}>
                {readinessPoints.map((item) => (
                  <div className={styles.pointItem} key={item.title}>
                    <span>{item.number}</span>

                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
