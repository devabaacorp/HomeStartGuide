import Link from "next/link";
import styles from "./FAQSection.module.css";

const faqs = [
  {
    question: "What is the £500 Viewing Companion Package?",
    answer:
      "The £500 Viewing Companion Package is a one-off buyer support service where HomeStartGuide helps you before a property decision. The support can include property viewing assistance, visible red flag awareness, practical questions to ask, negotiation preparation, and buyer risk guidance before you view, offer, bid, or commit.",
  },
  {
    question: "Do you attend property viewings in person?",
    answer:
      "Yes. HomeStartGuide can attend property viewings with you as a buyer companion. The aim is to help you stay calm, ask better questions, notice visible warning signs, and avoid pressure-led decisions during the viewing.",
  },
  {
    question: "Do you provide a formal building survey?",
    answer:
      "No. HomeStartGuide does not provide formal building surveys, structural reports, or RICS-level inspections. We help buyers understand visible red flags such as damp signs, poor maintenance, possible hidden cost indicators, and practical concerns. Formal surveys should be carried out by qualified surveyors.",
  },
  {
    question: "Can you help with negotiation?",
    answer:
      "Yes. HomeStartGuide can help buyers prepare for negotiation using ex-estate agent insight. This can include understanding pressure tactics, avoiding emotional overbidding, challenging inflated pricing, and preparing a sensible offer approach.",
  },
  {
    question: "Can you support auction buyers?",
    answer:
      "Yes. We can help auction buyers understand practical risks before bidding, including guide price traps, legal pack concerns, deposit risks, non-refundable commitment issues, and the importance of preparing documents before auction deadlines.",
  },
  {
    question: "What does AML preparation support mean?",
    answer:
      "AML preparation support means helping you understand and organise common proof of funds and source of funds documents before solicitor or agent checks. HomeStartGuide does not carry out regulated AML verification but can help you prepare for the process more clearly.",
  },
  {
    question: "Do you provide mortgage, financial, or legal advice?",
    answer:
      "No. HomeStartGuide provides non-regulated buyer representation, property viewing assistance, negotiation support, and AML pre-screening preparation. Regulated mortgage advice, financial advice, legal advice, and conveyancing should be handled by qualified third-party professionals.",
  },
  {
    question: "When should I contact HomeStartGuide?",
    answer:
      "You should contact HomeStartGuide before attending a viewing, making an offer, bidding at auction, paying a deposit, or committing to a property decision. You can also contact us for a free 15-minute strategy call before deciding whether the £500 package is right for you.",
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

              <h2>Questions Buyers Ask Before Viewing, Offering, Or Bidding</h2>

              <p>
                These answers explain how HomeStartGuide supports first-time
                buyers and auction buyers with practical buyer protection,
                viewing assistance, negotiation preparation, auction risk
                guidance, and AML document readiness.
              </p>

              <div className={styles.ctaBox}>
                <h3>Still have questions?</h3>
                <p>
                  Book a free 15-minute strategy call or secure the £500 Viewing
                  Companion Package before your next property decision.
                </p>

                <Link href="/contactus" className={styles.ctaButton}>
                  Book £500 Viewing Companion
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
              HomeStartGuide provides non-regulated buyer representation,
              property viewing assistance, negotiation support, and AML
              pre-screening preparation. Formal building surveys, regulated
              mortgage advice, financial advice, and legal conveyancing are
              provided by qualified third-party specialists.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
