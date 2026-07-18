import Link from "next/link";
import styles from "./AboutUsPage.module.css";

export const metadata = {
  title: "About HomeStartGuide | First-Time Buyer Support UK",
  description:
    "Learn about HomeStartGuide and how we help UK first-time buyers understand mortgages, property search, government schemes, offers, legal steps, and completion planning.",
};

const supportAreas = [
  {
    title: "First-Time Buyer Guidance",
    text: "We help buyers understand the full journey before they start making important decisions.",
    icon: "01",
  },
  {
    title: "Mortgage Readiness Support",
    text: "We guide buyers on what to prepare before speaking with qualified mortgage professionals.",
    icon: "02",
  },
  {
    title: "Property Search Direction",
    text: "We help buyers compare locations, property suitability, budget, and practical next steps.",
    icon: "03",
  },
  {
    title: "Offer & Process Awareness",
    text: "We explain the key stages from making an offer to surveys, legal checks, and completion.",
    icon: "04",
  },
];

const roadmap = [
  "Understand your budget and affordability",
  "Prepare your deposit and buying costs",
  "Get mortgage-ready with the right documents",
  "Learn about possible government schemes",
  "Search for properties with clearer criteria",
  "Make informed offers with less confusion",
  "Understand survey and conveyancing steps",
  "Prepare for exchange, completion, and moving in",
];

const values = [
  {
    title: "Clear Guidance",
    text: "We explain the home-buying process in simple, practical language so first-time buyers know what to do next.",
  },
  {
    title: "Buyer-Focused Support",
    text: "Our guidance is designed around the questions, worries, and decisions first-time buyers commonly face.",
  },
  {
    title: "Practical Direction",
    text: "We do not just explain theory. We help buyers think through preparation, timing, documents, and next steps.",
  },
];

const faqs = [
  {
    question: "Is HomeStartGuide an estate agent?",
    answer:
      "HomeStartGuide is a first-time buyer support and guidance platform. We help buyers understand the process and prepare better before taking important steps.",
  },
  {
    question: "Do you provide regulated mortgage advice?",
    answer:
      "We provide general mortgage readiness guidance. Regulated mortgage or financial advice should be taken from qualified and authorised professionals where required.",
  },
  {
    question: "Can you help before I start viewing properties?",
    answer:
      "Yes. In fact, preparing before viewing properties is one of the best ways to avoid confusion, wasted time, and emotional decisions.",
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
                  alt="First-time buyer guidance in the UK"
                />

                <img
                  className={styles.secondaryImage}
                  src="/assets/images/about/main/about-04.jpg"
                  alt="Home buying consultation support"
                />

                <div className={styles.experienceBadge}>
                  <strong>Step-by-Step</strong>
                  <span>First-Time Buyer Support</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className={styles.heroContent}>
                <p className={styles.preTitle}>About HomeStartGuide</p>

                <h2>Helping First-Time Buyers Move With More Confidence</h2>

                <p>
                  HomeStartGuide exists to make the UK home-buying journey
                  easier to understand for first-time buyers. Buying a first
                  home can feel overwhelming because there are many moving
                  parts: budget, deposit, mortgage preparation, property search,
                  offers, surveys, legal steps, and completion.
                </p>

                <p>
                  We help buyers understand what to prepare, what questions to
                  ask, and what steps usually come next. Our goal is to give
                  practical direction so buyers feel less confused and more
                  prepared before making important decisions.
                </p>

                <div className={styles.heroButtons}>
                  <Link href="/contactus" className={styles.primaryButton}>
                    Book a Consultation
                  </Link>

                  <Link
                    href="/#buyer-roadmap"
                    className={styles.secondaryButton}
                  >
                    View Buyer Roadmap
                  </Link>
                </div>

                <div className={styles.notice}>
                  HomeStartGuide provides general education and practical
                  guidance. Regulated mortgage, financial, or legal advice
                  should be taken from qualified professionals where required.
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
            <h2>
              Practical Support For The Key Stages Of Buying Your First Home
            </h2>
            <p>
              We focus on the areas where first-time buyers usually need the
              most clarity before moving forward.
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
                <h2>Making The First Home Journey Easier To Understand</h2>
                <p>
                  Our mission is to help first-time buyers approach the process
                  with better preparation, better questions, and better
                  awareness of the steps ahead.
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
                <p className={styles.preTitle}>Our Guidance Approach</p>
                <h2>A Clear Roadmap From Preparation To Completion</h2>
                <p>
                  We help buyers look at the journey step by step, instead of
                  feeling overwhelmed by the full process at once.
                </p>

                <Link href="/contactus" className={styles.primaryButton}>
                  Start Your Buyer Journey
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
              <p>Ready To Get Started?</p>
              <h2>Buy Your First Home With Better Clarity</h2>
              <span>
                Speak with HomeStartGuide and understand your next practical
                step as a first-time buyer.
              </span>
            </div>

            <Link href="/contactus" className={styles.ctaButton}>
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
