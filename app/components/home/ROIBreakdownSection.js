import Link from "next/link";
import styles from "./ROIBreakdownSection.module.css";

const roiPoints = [
  {
    title: "Save £800+ on wasted surveyor & conveyancing fees",
    text: "Avoid spending money on professional reports and legal work for properties that show early visible warning signs during the viewing stage.",
  },
  {
    title: "Avoid £5,000–£15,000 overpayment pressure",
    text: "Get negotiation support before aggressive bidding, emotional offers, or estate agent pressure pushes you above a fair price.",
  },
  {
    title: "Avoid non-refundable auction deposit traps",
    text: "Understand key auction risks before bidding, especially where deposits, legal packs, or contract terms may create serious financial exposure.",
  },
  {
    title: "Prepare deposit funds before solicitor checks",
    text: "Organise proof of funds and deposit trail documents early so avoidable AML confusion does not delay or block your transaction.",
  },
];

export default function ROIBreakdownSection() {
  return (
    <section className={styles.roiSection} id="roi-breakdown">
      <span className={styles.backgroundText}>£500 ROI</span>

      <div className="container">
        <div className={styles.roiBox}>
          <div className={styles.header}>
            <p>Buyer Advocate Package</p>
            <h2>How A £500 Investment Saves You Thousands</h2>
            <span>
              One supported viewing can help you avoid costly mistakes before
              you pay for surveys, legal work, auction deposits, or inflated
              offers.
            </span>
          </div>

          <div className={styles.pointsGrid}>
            {roiPoints.map((point, index) => (
              <div className={styles.pointCard} key={point.title}>
                <div className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.ctaStrip}>
            <div>
              <h3>Secure Your Buyer Advocate Now</h3>
              <p>
                Book hands-on property viewing support before you risk
                overpaying, missing visible red flags, or entering a poor
                property deal.
              </p>
            </div>

            <Link href="/contactus" className={styles.ctaButton}>
              Secure Your Buyer Advocate Now
            </Link>
          </div>

          <p className={styles.disclaimer}>
            HomeStartGuide provides non-regulated buyer representation, property
            viewing assistance, negotiation support, and AML pre-screening
            preparation. We do not provide formal building surveys, regulated
            mortgage advice, or legal conveyancing.
          </p>
        </div>
      </div>
    </section>
  );
}
