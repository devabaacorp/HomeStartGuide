import styles from "./TrustedClientsSection.module.css";

const guidanceAreas = [
  {
    title: "In-Person Viewing Support",
    description:
      "We attend property viewings with you and help you stay focused before making an emotional or pressured decision.",
  },
  {
    title: "Visible Red Flag Awareness",
    description:
      "We help you notice visible warning signs such as damp indicators, poor maintenance, hidden cost signals, and practical property concerns.",
  },
  {
    title: "Ex-Estate Agent Negotiation",
    description:
      "Use estate-agency experience to understand pressure tactics, challenge inflated pricing, and prepare a sensible offer approach.",
  },
  {
    title: "Auction Risk Guidance",
    description:
      "Understand auction risks, guide price traps, legal pack concerns, and non-refundable deposit issues before you bid.",
  },
  {
    title: "AML & Proof Of Funds Preparation",
    description:
      "Get practical preparation support for proof of funds, source of funds awareness, and AML pre-screening readiness.",
  },
  {
    title: "Flat £500 Buyer Package",
    description:
      "Simple one-off support designed to protect buyers before viewing, offering, bidding, or committing to a property decision.",
  },
];

export default function TrustedClientsSection() {
  return (
    <section className={styles.trustedSection}>
      <span className={styles.backgroundText}>Buyer Trust</span>

      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.preTitle}>Why Buyers Trust Our Process</p>

          <h2 className={styles.title}>
            Practical Support That Helps You Avoid Costly Property Mistakes
          </h2>

          <p className={styles.introText}>
            HomeStartGuide focuses on the moments where buyers are most exposed
            to risk — property viewings, offer decisions, estate agent pressure,
            auction bidding, deposit commitment, and AML preparation.
          </p>
        </div>

        <div className={styles.guidanceGrid}>
          {guidanceAreas.map((item, index) => (
            <div className={styles.guidanceCard} key={item.title}>
              <div className={styles.numberBox}>
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.noteBox}>
          HomeStartGuide provides non-regulated buyer representation, property
          viewing assistance, negotiation support, and AML pre-screening
          preparation. Formal building surveys, regulated mortgage advice, and
          legal conveyancing are provided by qualified third-party specialists.
        </div>
      </div>
    </section>
  );
}
