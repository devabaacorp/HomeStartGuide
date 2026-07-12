import Link from "next/link";
import styles from "./MortgageCalculatorCTASection.module.css";

const readinessPoints = [
  {
    number: "01",
    title: "Check Your Budget",
    text: "Understand your income, monthly expenses, savings, and the amount you may comfortably afford before starting your property search.",
  },
  {
    number: "02",
    title: "Prepare Your Deposit",
    text: "Plan your deposit, legal costs, survey costs, moving costs, and other possible expenses before making a serious offer.",
  },
  {
    number: "03",
    title: "Speak To The Right Professionals",
    text: "Get general preparation guidance first, then speak with qualified mortgage, financial, or legal professionals where regulated advice is required.",
  },
];

export default function MortgageCalculatorCTASection() {
  return (
    <section className={styles.mortgageSection} id="mortgage-guidance">
      <span className={styles.backgroundText}>Mortgage Readiness</span>

      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className={styles.leftContent}>
              <p className={styles.preTitle}>Mortgage Calculator Support</p>

              <h2>Understand Your Affordability Before You Start Searching</h2>

              <p>
                Before viewing properties, first-time buyers should understand
                their likely affordability, deposit position, monthly budget,
                and the extra costs involved in buying a home.
              </p>

              <div className={styles.buttonGroup}>
                <Link href="/contactus" className={styles.primaryButton}>
                  Book Mortgage Guidance
                </Link>

                <Link href="/#buyer-roadmap" className={styles.secondaryButton}>
                  View Buyer Roadmap
                </Link>
              </div>

              <p className={styles.disclaimer}>
                HomeStartGuide provides general mortgage readiness education and
                practical guidance. Regulated mortgage or financial advice
                should be taken from qualified professionals where required.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className={styles.calculatorCard}>
              <div className={styles.cardHeader}>
                <span>Quick Readiness Check</span>
                <h3>Before Using A Mortgage Calculator</h3>
                <p>
                  A calculator can be helpful, but your real position depends on
                  income, deposit, credit profile, expenses, lender criteria,
                  and professional assessment.
                </p>
              </div>

              <div className={styles.mockCalculator}>
                <div className={styles.mockRow}>
                  <span>Estimated Deposit</span>
                  <strong>Plan Early</strong>
                </div>

                <div className={styles.mockRow}>
                  <span>Monthly Budget</span>
                  <strong>Check Comfortably</strong>
                </div>

                <div className={styles.mockRow}>
                  <span>Extra Buying Costs</span>
                  <strong>Do Not Ignore</strong>
                </div>

                <div className={styles.mockResult}>
                  <span>Next Step</span>
                  <strong>Get Prepared Before Property Search</strong>
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
