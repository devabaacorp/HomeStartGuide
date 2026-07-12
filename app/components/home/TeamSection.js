import Link from "next/link";
import styles from "./TeamSection.module.css";

const supportTeam = [
  {
    image: "/assets/images/team/tm/01.jpg",
    title: "Mortgage Preparation Support",
    role: "Affordability & Readiness",
    description:
      "Helping first-time buyers understand deposit planning, affordability basics, Agreement in Principle, and mortgage preparation steps.",
  },
  {
    image: "/assets/images/team/tm/02.jpg",
    title: "Property Search Guidance",
    role: "Location & Home Comparison",
    description:
      "Supporting buyers with property search, location comparison, viewing preparation, transport links, local value, and hidden risks.",
  },
  {
    image: "/assets/images/team/tm/03.jpg",
    title: "Buyer Roadmap Support",
    role: "Step-By-Step Buying Journey",
    description:
      "Guiding first-time buyers through the major stages from early planning to offer, legal process, completion, and moving in.",
  },
  {
    image: "/assets/images/team/tm/04.jpg",
    title: "Legal Process Awareness",
    role: "Survey, Solicitor & Completion",
    description:
      "Helping buyers understand surveys, searches, solicitor communication, contracts, exchange, completion, and key buying documents.",
  },
];

export default function TeamSection() {
  return (
    <section className={styles.teamSection} id="team">
      <span className={styles.backgroundText}>Support Team</span>

      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.preTitle}>HomeStartGuide Team</p>

          <h2 className={styles.title}>
            Guidance From People Who Understand The First-Time Buyer Journey
          </h2>

          <p className={styles.introText}>
            Our support is focused on helping UK first-time buyers understand
            the process clearly, ask better questions, avoid common mistakes,
            and move forward with more confidence.
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
                    Get Support
                    <i className="far fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.noticeBox}>
          <p>
            HomeStartGuide provides general education and practical guidance.
            Regulated mortgage, financial, or legal advice should be taken from
            qualified professionals where required.
          </p>

          <Link href="/contactus" className={styles.noticeButton}>
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
