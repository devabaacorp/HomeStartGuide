import Link from "next/link";
import styles from "./TeamSection.module.css";

const supportTeam = [
  {
    image: "/assets/images/team/tm/01.jpg",
    title: "Viewing Companion Support",
    role: "In-Person Buyer Assistance",
    description:
      "Attend property viewings with practical support, a second pair of experienced eyes, and help spotting visible warning signs before you commit.",
  },
  {
    image: "/assets/images/team/tm/02.jpg",
    title: "Ex-Estate Agent Negotiation",
    role: "Offer & Price Strategy",
    description:
      "Use estate-agency insight to understand pressure tactics, avoid emotional overbidding, challenge inflated pricing, and prepare a sensible offer.",
  },
  {
    image: "/assets/images/team/tm/03.jpg",
    title: "Auction Buyer Guidance",
    role: "Deposit & Bidding Risk Awareness",
    description:
      "Understand auction risks, guide price traps, legal pack concerns, non-refundable deposits, and the practical risks before placing a bid.",
  },
  {
    image: "/assets/images/team/tm/04.jpg",
    title: "AML Preparation Support",
    role: "Proof Of Funds Readiness",
    description:
      "Get practical preparation support for proof of funds, source of funds awareness, AML pre-screening readiness, and document organisation.",
  },
];

export default function TeamSection() {
  return (
    <section className={styles.teamSection} id="team">
      <span className={styles.backgroundText}>Buyer Advocates</span>

      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.preTitle}>Who Supports You</p>

          <h2 className={styles.title}>
            Practical Buyer Advocate Support Before You Make A Costly Decision
          </h2>

          <p className={styles.introText}>
            HomeStartGuide supports first-time buyers and auction buyers before
            viewing, offering, bidding, or committing. Our focus is practical
            buyer protection, visible red flag awareness, negotiation support,
            auction risk guidance, and AML preparation.
          </p>
        </div>

        <div className="row g-4">
          {supportTeam.map((member) => (
            <div
              className="col-xl-3 col-lg-6 col-md-6 col-12"
              key={member.title}
            >
              <div className={styles.teamCard}>
                <div className={styles.imageWrapper}>
                  <img src={member.image} alt={member.title} />
                </div>

                <div className={styles.cardContent}>
                  <span>{member.role}</span>
                  <h3>{member.title}</h3>
                  <p>{member.description}</p>

                  <Link href="/contactus" className={styles.cardButton}>
                    Get Buyer Support
                    <i className="far fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.noticeBox}>
          <div>
            <h3>Ready To View With More Confidence?</h3>
            <p>
              Secure practical buyer protection for a flat £500 one-off fee and
              get support before you view, offer, bid, or commit.
            </p>
          </div>

          <Link href="/contactus" className={styles.noticeButton}>
            Book £500 Viewing Companion
          </Link>
        </div>

        <p className={styles.disclaimer}>
          HomeStartGuide provides non-regulated buyer representation, property
          viewing assistance, negotiation support, and AML pre-screening
          preparation. Formal building surveys, regulated mortgage advice, and
          legal conveyancing are provided by qualified third-party specialists.
        </p>
      </div>
    </section>
  );
}
