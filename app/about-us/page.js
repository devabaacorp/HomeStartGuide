import Link from "next/link";
import styles from "./AboutUsPage.module.css";

export const metadata = {
  title: "About HomeStartGuide | Buyer Advocate & Viewing Companion UK",
  description:
    "Learn about HomeStartGuide and how we support UK buyers with property viewing assistance, ex-estate agent negotiation insight, auction buyer guidance, AML preparation support, and the £500 Viewing Companion Package.",
};

const supportAreas = [
  {
    title: "Viewing Companion Support",
    text: "We attend property viewings with buyers and help them notice visible risks before making rushed decisions.",
    icon: "01",
  },
  {
    title: "Visible Red Flag Awareness",
    text: "We help buyers think clearly about damp signs, poor maintenance, hidden cost indicators, and practical property concerns.",
    icon: "02",
  },
  {
    title: "Ex-Agent Negotiation Insight",
    text: "We help buyers prepare for negotiation, avoid emotional overbidding, and respond better to estate agent pressure.",
    icon: "03",
  },
  {
    title: "Auction & AML Preparation",
    text: "We support buyers with auction risk awareness, deposit traps, proof of funds preparation, and AML readiness.",
    icon: "04",
  },
];

const roadmap = [
  "Book a free 15-minute strategy call",
  "Share the property, viewing, offer, or auction details",
  "Secure the £500 Viewing Companion Package",
  "Attend the viewing with practical buyer support",
  "Review visible red flags and buying risks",
  "Prepare a sensible negotiation or offer approach",
  "Understand auction, deposit, and AML preparation points",
];

const values = [
  {
    title: "Buyer Protection First",
    text: "We focus on helping buyers avoid costly property mistakes before they view, offer, bid, or commit.",
  },
  {
    title: "Practical Ex-Agent Insight",
    text: "Our support is shaped around estate agent pressure, negotiation behaviour-Agent Insight",
    text: "Our support is shaped around estate agent pressure, negotiation behaviour, viewing risks, and buyer decision-making.",
  },
  {
    title: "Clear Non-Regulated Support",
    text: "We provide practical buyer representation and preparation support while regulated advice remains with qualified specialists.",
  },
];

const faqs = [
  {
    question: "Is HomeStartGuide an estate agent?",
    answer:
      "No. HomeStartGuide is a buyer support and viewing companion service. We work from the buyer’s side to help with viewing preparation, visible red flag awareness, negotiation support, auction risk guidance, and AML preparation.",
  },
  {
    question: "Do you provide formal building surveys?",
    answer:
      "No. HomeStartGuide does not provide formal building surveys, structural reports, or RICS-level inspections. We help buyers notice visible warning signs and practical concerns. Formal surveys should be handled by qualified surveyors.",
  },
  {
    question: "What is included in the £500 Viewing Companion Package?",
    answer:
      "The £500 package is a one-off buyer support service designed to help before a property decision. It can include viewing assistance, practical questions to ask, visible red flag awareness, negotiation preparation, and buyer risk guidance.",
  },
  {
    question: "Do you provide mortgage, financial, or legal advice?",
    answer:
      "No. HomeStartGuide provides non-regulated buyer representation, property viewing assistance, negotiation support, and AML pre-screening preparation. Regulated mortgage advice, financial advice, legal advice, and conveyancing should be handled by qualified third-party professionals.",
  },
];

export default function Page() {
  return (
    <>
      <section className={styles.breadcrumb}>
        <div className="container">
          <div className={styles.breadcrumbInner}>
            <div>
              <p>HomeStartGuide</p>
              <h1>About Us</h1>
            </div>

            <div className={styles.breadLinks}>
              <Link href="/">Home</Link>
              <span>/</span>
              <span>About Us</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutHero}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className={styles.imageGrid}>
                <img
                  className={styles.mainImage}
                  src="/assets/images/about/main/about-03.jpg"
                  alt="Buyer advocate property viewing support in the UK"
                />

                <img
                  className={styles.secondaryImage}
                  src="/assets/images/about/main/about-04.jpg"
                  alt="HomeStartGuide buyer consultation support"
                />

                <div className={styles.experienceBadge}>
                  <strong>£500</strong>
                  <span>Viewing Companion Package</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className={styles.heroContent}>
                <p className={styles.preTitle}>About HomeStartGuide</p>

                <h2>
                  Buyer Advocate Support Before You Make A Costly Decision
                </h2>

                <p>
                  HomeStartGuide supports first-time buyers and auction buyers
                  before they view, offer, bid, or commit. Property decisions
                  can become expensive very quickly when buyers feel pressured,
                  miss visible red flags, overbid emotionally, or fail to
                  prepare documents before solicitor or agent checks.
                </p>

                <p>
                  Our focus is practical buyer protection. We help buyers attend
                  viewings with more confidence, understand visible property
                  concerns, prepare for negotiation, think clearly about auction
                  risks, and organise proof of funds or AML preparation points.
                </p>

                <div className={styles.heroButtons}>
                  <Link href="/contactus" className={styles.primaryButton}>
                    Book £500 Viewing Companion
                  </Link>

                  <Link
                    href="/#buyer-roadmap"
                    className={styles.secondaryButton}
                  >
                    View Buyer Roadmap
                  </Link>
                </div>

                <div className={styles.notice}>
                  HomeStartGuide provides non-regulated buyer representation,
                  property viewing assistance, negotiation support, and AML
                  pre-screening preparation. Formal building surveys, regulated
                  mortgage advice, financial advice, and legal conveyancing are
                  provided by qualified third-party specialists.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.supportSection}>
        <span className={styles.backgroundText}>What We Do</span>

        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.preTitle}>What We Help With</p>
            <h2>Practical Protection For Buyers Before They Commit</h2>
            <p>
              We focus on the points where buyers are most exposed to risk:
              viewings, red flags, estate agent pressure, offers, auctions,
              deposit decisions, and AML preparation.
            </p>
          </div>

          <div className="row g-4">
            {supportAreas.map((item) => (
              <div className="col-lg-3 col-md-6 col-12" key={item.title}>
                <div className={styles.supportCard}>
                  <span>{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.missionSection}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className={styles.missionBox}>
                <p className={styles.preTitle}>Our Mission</p>
                <h2>Helping Buyers Avoid Expensive Property Mistakes</h2>
                <p>
                  Our mission is to give buyers practical support before they
                  make important property decisions. We help buyers slow down,
                  ask better questions, recognise visible risks, and move
                  forward with a clearer plan.
                </p>
              </div>
            </div>

            <div className="col-lg-7">
              <div className={styles.valuesGrid}>
                {values.map((item) => (
                  <div className={styles.valueCard} key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.roadmapSection}>
        <div className="container">
          <div className="row align-items-start g-5">
            <div className="col-lg-5">
              <div className={styles.roadmapIntro}>
                <p className={styles.preTitle}>Our Support Approach</p>
                <h2>A Clear Process Before You View, Offer, Bid, Or Commit</h2>
                <p>
                  Our process is designed to help buyers understand the next
                  practical step before they risk money, time, or a binding
                  property decision.
                </p>

                <Link href="/contactus" className={styles.primaryButton}>
                  Start With A Strategy Call
                </Link>
              </div>
            </div>

            <div className="col-lg-7">
              <div className={styles.roadmapList}>
                {roadmap.map((step, index) => (
                  <div className={styles.roadmapItem} key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.preTitle}>Quick Answers</p>
            <h2>Important Things To Know About HomeStartGuide</h2>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <details className={styles.faqItem} key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div>
              <p>Ready To View With Confidence?</p>
              <h2>Secure Your £500 Viewing Companion Package</h2>
              <span>
                Get practical buyer protection before you view, offer, bid, or
                commit to a property decision.
              </span>
            </div>

            <Link href="/contactus" className={styles.ctaButton}>
              Book £500 Viewing Companion
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
