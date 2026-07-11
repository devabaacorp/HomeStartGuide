import Link from "next/link";
import styles from "./FAQSection.module.css";

const faqs = [
  {
    question: "What does HomeStartGuide help first-time buyers with?",
    answer:
      "HomeStartGuide helps first-time buyers understand the home-buying process in a clearer way, including mortgage preparation, deposit planning, property search, government scheme awareness, offer preparation, survey steps, legal process awareness, and completion planning.",
  },
  {
    question: "Do you provide mortgage advice?",
    answer:
      "HomeStartGuide provides general mortgage readiness guidance and helps buyers understand what to prepare before speaking with qualified mortgage professionals. Regulated mortgage or financial advice should be taken from authorised professionals where required.",
  },
  {
    question: "Can you help me understand government schemes?",
    answer:
      "Yes. We can help explain the general idea of available first-time buyer schemes and what points you may need to consider. Scheme availability and eligibility can change, so official sources or qualified professionals should be checked before making decisions.",
  },
  {
    question: "Can you help me search for the right property?",
    answer:
      "Yes. We can guide you on how to compare properties, locations, transport links, local facilities, affordability, hidden costs, and long-term suitability before shortlisting homes.",
  },
  {
    question: "When should I contact HomeStartGuide?",
    answer:
      "You can contact us before you start searching, while preparing for a mortgage, before making an offer, or when you feel confused about the next step in the buying process.",
  },
  {
    question: "Do you handle the legal or conveyancing process?",
    answer:
      "We provide general awareness of the conveyancing and legal process so buyers understand the steps involved. Actual legal advice and conveyancing work should be handled by qualified legal professionals.",
  },
];

export default function FAQSection() {
  return (
    <section className={styles.faqSection} id="faq">
      <span className={styles.backgroundText}>FAQ</span>

      <div className="container">
        <div className="row align-items-start g-5">
          <div className="col-lg-5">
            <div className={styles.leftContent}>
              <p className={styles.preTitle}>Frequently Asked Questions</p>

              <h2>Questions First-Time Buyers Often Ask</h2>

              <p>
                Buying your first home can feel confusing. These answers explain
                how HomeStartGuide supports buyers with practical guidance,
                preparation, and step-by-step clarity.
              </p>

              <div className={styles.ctaBox}>
                <h3>Still have questions?</h3>
                <p>
                  Speak with HomeStartGuide and understand your next practical
                  step.
                </p>

                <Link href="/contactus" className={styles.ctaButton}>
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <details className={styles.faqItem} key={faq.question}>
                  <summary>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {faq.question}
                  </summary>

                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>

            <p className={styles.disclaimer}>
              HomeStartGuide provides general education and practical guidance.
              Regulated mortgage, financial, or legal advice should be taken
              from qualified professionals where required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
