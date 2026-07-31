import Link from "next/link";
import styles from "./BusinessGoalSection.module.css";

const roadmapSteps = [
  {
    number: "01",
    title: "Start With A Free Strategy Call",
    description:
      "Tell us about your property search, viewing plan, auction interest, or offer situation so we can understand where support is needed.",
  },
  {
    number: "02",
    title: "Share The Property Details",
    description:
      "Send the listing, viewing time, location, guide price, auction details, or any concerns you already have about the property.",
  },
  {
    number: "03",
    title: "Book Your Viewing Companion",
    description:
      "Secure hands-on viewing support for a flat £500 one-off fee before you attend, offer, bid, or commit.",
  },
  {
    number: "04",
    title: "Attend The Viewing With Support",
    description:
      "We attend the viewing with you, observe visible red flags, ask practical questions, and help you stay calm under pressure.",
  },
  {
    number: "05",
    title: "Review Red Flags & Buying Risks",
    description:
      "Understand visible issues such as damp signs, poor maintenance, hidden cost indicators, location concerns, and pressure tactics.",
  },
  {
    number: "06",
    title: "Negotiate With Ex-Agent Insight",
    description:
      "Use estate-agency experience to avoid emotional overbidding, challenge inflated pricing, and move forward with a sensible offer strategy.",
  },
  {
    number: "07",
    title: "Prepare For Auction & AML Checks",
    description:
      "Get practical support with auction risk awareness, deposit traps, proof of funds preparation, and AML pre-screening readiness.",
  },
];

export default function BusinessGoalSection() {
  return (
    <section className={styles.roadmapSection} id="buyer-roadmap">
      <div className={styles.sectionInner}>
        <span className={styles.backgroundText}>Buyer Roadmap</span>

        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.preTitle}>Buyer Advocate Roadmap</p>

            <h2 className={styles.title}>
              A Practical Path Before You View, Offer, Bid, Or Commit
            </h2>

            <p className={styles.introText}>
              HomeStartGuide helps first-time buyers and auction buyers move
              forward with confidence through viewing support, visible red flag
              awareness, ex-estate agent negotiation insight, auction guidance,
              and AML preparation support.
            </p>
          </div>

          <div className="row g-5 align-items-start">
            <div className="col-lg-5">
              <div className={styles.imageCard}>
                <img
                  className={styles.mainImage}
                  src="/assets/images/business-goal/01.jpg"
                  alt="Buyer advocate property viewing support"
                />

                <img
                  className={styles.smallImage}
                  src="/assets/images/business-goal/sm-01.jpg"
                  alt="Property viewing companion consultation"
                />

                <div className={styles.imageBadge}>
                  <span>7</span>
                  <p>Practical steps before you view, offer, bid, or commit</p>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className={styles.stepsGrid}>
                {roadmapSteps.map((step) => (
                  <div className={styles.stepCard} key={step.number}>
                    <div className={styles.stepNumber}>{step.number}</div>

                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.ctaBox}>
                <div>
                  <h3>Need support before your next viewing?</h3>
                  <p>
                    Get ex-agent buyer protection, practical viewing support,
                    and negotiation guidance before making a costly property
                    decision.
                  </p>
                </div>

                <div className={styles.buttonGroup}>
                  <Link href="/contactus" className={styles.primaryButton}>
                    Book £500 Viewing Companion
                  </Link>

                  <Link href="/contactus" className={styles.secondaryButton}>
                    Free 15-Min Strategy Call
                  </Link>
                </div>
              </div>

              <p className={styles.disclaimer}>
                HomeStartGuide provides non-regulated buyer representation,
                property viewing assistance, negotiation support, and AML
                pre-screening preparation. Formal building surveys, regulated
                mortgage advice, and legal conveyancing are provided by
                qualified third-party specialists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
