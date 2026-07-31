import Link from "next/link";
import styles from "./ContactPage.module.css";

export const metadata = {
  title: "Contact HomeStartGuide | Viewing Companion & Buyer Advocate UK",
  description:
    "Contact HomeStartGuide for property viewing assistance, ex-estate agent negotiation support, auction buyer guidance, AML preparation support, and the £500 Viewing Companion Package.",
};

const address = "40 Winsford Terrace, Great Cambridge Road, London N18 1BS";
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  address,
)}&output=embed`;

const contactCards = [
  {
    title: "Call Us",
    label: "Speak with HomeStartGuide",
    value: "+44 7466 831291",
    href: "tel:+447466831291",
    icon: "fas fa-phone-alt",
  },
  {
    title: "Email Us",
    label: "Send your enquiry",
    value: "info@homestartguide.com",
    href: "mailto:info@homestartguide.com",
    icon: "fas fa-envelope",
  },
  {
    title: "Address",
    label: "Postal / contact address",
    value: address,
    href: "#map",
    icon: "fas fa-map-marker-alt",
  },
];

const enquiryTopics = [
  "Viewing Companion Package (£500)",
  "Free 15-Min Strategy Call",
  "Property Viewing Support",
  "Negotiation Support",
  "Auction Buyer Guidance",
  "AML Preparation Support",
];

export default function Page() {
  return (
    <main className={styles.contactPage}>
      <section className={styles.breadcrumb}>
        <div className="container">
          <div className={styles.breadcrumbInner}>
            <div>
              <p>HomeStartGuide</p>
              <h1>Contact Us</h1>
            </div>

            <div className={styles.breadLinks}>
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Contact Us</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contactIntro}>
        <span className={styles.backgroundText}>Contact</span>

        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.preTitle}>Get Buyer Protection</p>

            <h2>Book Viewing Support Before You Offer, Bid, Or Commit</h2>

            <p>
              Contact HomeStartGuide for hands-on property viewing assistance,
              ex-estate agent negotiation support, auction buyer guidance, AML
              preparation support, or a free 15-minute strategy call.
            </p>
          </div>

          <div className="row g-4">
            {contactCards.map((card) => (
              <div className="col-lg-4 col-md-6 col-12" key={card.title}>
                <a className={styles.contactCard} href={card.href}>
                  <div className={styles.cardIcon}>
                    <i className={card.icon}></i>
                  </div>

                  <div>
                    <span>{card.label}</span>
                    <h3>{card.title}</h3>
                    <p>{card.value}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className="container">
          <div className="row align-items-stretch g-0">
            <div className="col-lg-5">
              <div className={styles.leftPanel}>
                <p className={styles.preTitle}>Book Buyer Support</p>

                <h2>Tell Us What Property Decision You Are Facing</h2>

                <p>
                  Whether you are preparing for a viewing, dealing with estate
                  agent pressure, considering an auction bid, or organising AML
                  documents, HomeStartGuide can help you move forward with more
                  control.
                </p>

                <div className={styles.topicList}>
                  {enquiryTopics.map((topic) => (
                    <div className={styles.topicItem} key={topic}>
                      <span>✓</span>
                      <p>{topic}</p>
                    </div>
                  ))}
                </div>

                <div className={styles.noticeBox}>
                  HomeStartGuide provides non-regulated buyer representation,
                  property viewing assistance, negotiation support, and AML
                  pre-screening preparation. Regulated mortgage advice and
                  formal legal conveyancing are provided by qualified
                  third-party specialists.
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className={styles.formPanel}>
                <div className={styles.formHeader}>
                  <p className={styles.preTitle}>Send Your Enquiry</p>
                  <h2>How Can We Help?</h2>
                  <p>
                    Complete the enquiry form and your request will be sent to
                    HomeStartGuide for buyer support, property viewing
                    assistance, or a free 15-minute strategy call.
                  </p>
                </div>

                <form
                  className={styles.contactForm}
                  action="https://formsubmit.co/info@homestartguide.com"
                  method="POST"
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="New HomeStartGuide Buyer Support Enquiry"
                  />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://homestartguide.com/contactus/"
                  />

                  <div className={styles.twoColumn}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  <div className={styles.twoColumn}>
                    <input type="tel" name="phone" placeholder="Phone Number" />

                    <select
                      name="topic"
                      defaultValue="Viewing Companion Package (£500)"
                      required
                    >
                      <option value="Viewing Companion Package (£500)">
                        Viewing Companion Package (£500)
                      </option>
                      <option value="Free 15-Min Strategy Call">
                        Free 15-Min Strategy Call
                      </option>
                      <option value="Property Viewing Support">
                        Property Viewing Support
                      </option>
                      <option value="Negotiation Support">
                        Negotiation Support
                      </option>
                      <option value="Auction Buyer Guidance">
                        Auction Buyer Guidance
                      </option>
                      <option value="AML Preparation Support">
                        AML Preparation Support
                      </option>
                    </select>
                  </div>

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    defaultValue="HomeStartGuide Buyer Support Enquiry"
                  />

                  <textarea
                    name="message"
                    placeholder="Tell us about the property, viewing, offer, auction, or document issue you need help with."
                    required
                  ></textarea>

                  <button type="submit" className={styles.submitButton}>
                    Send Buyer Support Enquiry
                  </button>
                </form>

                <div className={styles.directContact}>
                  <p>Prefer direct contact?</p>

                  <div>
                    <a href="tel:+447466831291">Call +44 7466 831291</a>
                    <a href="mailto:info@homestartguide.com">
                      Email info@homestartguide.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mapSection} id="map">
        <div className="container-fluid p-0">
          <div className={styles.mapHeader}>
            <p className={styles.preTitle}>Our Location</p>
            <h2>Find HomeStartGuide</h2>
            <p>{address}</p>
          </div>

          <div className={styles.mapWrapper}>
            <iframe
              src={mapSrc}
              title="HomeStartGuide Location Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div>
              <p>Ready To View With Confidence?</p>
              <h2>Secure Your £500 Viewing Companion Package</h2>
              <span>
                Get ex-agent buyer protection before you view, offer, bid, or
                commit to a property decision.
              </span>
            </div>

            <Link href="/contactus" className={styles.ctaButton}>
              Secure Your £500 Package Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
