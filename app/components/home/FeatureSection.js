import Link from "next/link";
import styles from "./FeatureSection.module.css";

const mistakes = [
  "Searching for homes before checking affordability",
  "Not preparing deposit and extra buying costs early",
  "Ignoring credit score and mortgage readiness",
  "Not comparing locations, transport links, and future value",
  "Making emotional offers without proper research",
  "Not understanding survey, solicitor, and legal steps",
];

export default function FeatureSection() {
  return (
    <section className={styles.featureSection} id="buyer-mistakes">
      <span className={styles.backgroundText}>Buyer Mistakes</span>

      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-xl-6 col-lg-12">
            <div className={styles.imageCard}>
              <img
                src="/assets/images/feature/01.png"
                alt="Common first-time buyer mistakes"
              />

              <div className={styles.imageBadge}>
                <span>Avoid</span>
                <p>Costly mistakes before buying your first home</p>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-12">
            <div className={styles.contentBox}>
              <p className={styles.preTitle}>Common Buyer Mistakes</p>

              <h2 className={styles.title}>
                Avoid The Mistakes Many First-Time Buyers Make
              </h2>

              <p className={styles.description}>
                Buying your first home is exciting, but it can also be
                confusing. Many buyers start searching too early, underestimate
                costs, or move forward without understanding mortgage readiness,
                legal steps, and property risks. HomeStartGuide helps you plan
                with more clarity.
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
                  Get First-Time Buyer Guidance
                </Link>

                <Link href="/#buyer-roadmap" className={styles.secondaryButton}>
                  View Buyer Roadmap
                </Link>
              </div>

              <p className={styles.disclaimer}>
                This section provides general education and practical guidance.
                Mortgage, financial, and legal advice should be taken from
                qualified professionals where required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
