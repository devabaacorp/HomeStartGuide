import Link from "next/link";
import styles from "./BusinessGoalSection.module.css";

const roadmapSteps = [
  {
    number: "01",
    title: "Check Your Affordability",
    description:
      "Understand your income, expenses, deposit target, credit position, and realistic buying budget.",
  },
  {
    number: "02",
    title: "Prepare Your Deposit",
    description:
      "Plan your savings, understand deposit requirements, and prepare the documents usually needed.",
  },
  {
    number: "03",
    title: "Get Mortgage Ready",
    description:
      "Learn about Agreement in Principle, lender expectations, and affordability checks.",
  },
  {
    number: "04",
    title: "Understand Government Schemes",
    description:
      "Explore available first-time buyer schemes and understand basic eligibility points.",
  },
  {
    number: "05",
    title: "Search The Right Property",
    description:
      "Compare locations, property types, transport links, local value, and long-term suitability.",
  },
  {
    number: "06",
    title: "Make A Sensible Offer",
    description:
      "Understand market value, negotiation basics, and how to avoid rushed decisions.",
  },
  {
    number: "07",
    title: "Survey & Legal Process",
    description:
      "Understand surveys, searches, solicitor communication, contracts, and mortgage offer.",
  },
  {
    number: "08",
    title: "Complete & Move In",
    description:
      "Prepare for exchange, completion day, moving arrangements, and final checks.",
  },
];

export default function BusinessGoalSection() {
  return (
    <section className={styles.roadmapSection} id="buyer-roadmap">
      <div className={styles.sectionInner}>
        <span className={styles.backgroundText}>Buyer Roadmap</span>

        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.preTitle}>First-Time Buyer Roadmap</p>

            <h2 className={styles.title}>
              A Clear Step-By-Step Path To Buying Your First Home
            </h2>

            <p className={styles.introText}>
              HomeStartGuide helps you understand the full buying journey before
              you commit — from affordability and mortgage preparation to
              property search, legal steps, completion, and moving in.
            </p>
          </div>

          <div className="row g-5 align-items-start">
            <div className="col-lg-5">
              <div className={styles.imageCard}>
                <img
                  className={styles.mainImage}
                  src="/assets/images/business-goal/01.jpg"
                  alt="UK first-time buyer guidance"
                />

                <img
                  className={styles.smallImage}
                  src="/assets/images/business-goal/sm-01.jpg"
                  alt="Home buying consultation"
                />

                <div className={styles.imageBadge}>
                  <span>8</span>
                  <p>Simple steps from planning to completion</p>
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
                  <h3>Need help understanding where to start?</h3>
                  <p>
                    Speak with HomeStartGuide and get practical direction for
                    your first home-buying journey.
                  </p>
                </div>

                <div className={styles.buttonGroup}>
                  <Link href="/contactus" className={styles.primaryButton}>
                    Book a Consultation
                  </Link>

                  <Link href="/#service" className={styles.secondaryButton}>
                    View Our Services
                  </Link>
                </div>
              </div>

              <p className={styles.disclaimer}>
                This roadmap is for general education and practical guidance.
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
