import Link from "next/link";
import styles from "./FeatureSection.module.css";

const mistakes = [
  "Going to property viewings alone without an experienced second opinion",
  "Trusting estate agent pressure and rushing into inflated offers",
  "Overpaying because of emotional bidding or fear of missing out",
  "Missing visible red flags such as damp, poor maintenance, or hidden cost indicators",
  "Bidding at auction without understanding legal pack and deposit risks",
  "Not preparing proof of funds and AML documents before solicitor checks",
];

export default function FeatureSection() {
  return (
    <section className={styles.featureSection} id="buyer-mistakes">
      <span className={styles.backgroundText}>Buyer Risks</span>

      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-xl-6 col-lg-12">
            <div className={styles.imageCard}>
              <img
                src="/assets/images/feature/01.png"
                alt="Property buyer risks and viewing mistakes"
              />

              <div className={styles.imageBadge}>
                <span>Avoid</span>
                <p>Costly property mistakes before you view, offer, or bid</p>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-12">
            <div className={styles.contentBox}>
              <p className={styles.preTitle}>Common Buyer Risks</p>

              <h2 className={styles.title}>
                Don&apos;t Let Inexperience Cost You Thousands
              </h2>

              <p className={styles.description}>
                First-time buyers and auction buyers often make expensive
                decisions under pressure. A property can look perfect online,
                but the real risks can appear during the viewing, negotiation,
                auction process, or solicitor checks. HomeStartGuide helps you
                move forward with practical buyer protection before you commit.
              </p>

              <div className={styles.mistakeList}>
                {mistakes.map((mistake) => (
                  <div className={styles.mistakeItem} key={mistake}>
                    <i className="fal fa-check"></i>
                    <p>{mistake}</p>
                  </div>
                ))}
              </div>

              <div className={styles.ctaRow}>
                <Link href="/contactus" className={styles.primaryButton}>
                  Book Viewing Companion (£500)
                </Link>

                <Link href="/contactus" className={styles.secondaryButton}>
                  Free 15-Min Strategy Call
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
        </div>
      </div>
    </section>
  );
}
