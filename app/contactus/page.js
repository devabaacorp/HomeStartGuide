import Link from "next/link";
import styles from "./ContactPage.module.css";

export const metadata = {
  title: "Contact HomeStartGuide | First-Time Buyer Support UK",
  description:
    "Contact HomeStartGuide for UK first-time buyer guidance, mortgage readiness support, property search direction, and home-buying consultation.",
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
  "First-time buyer consultation",
  "Mortgage readiness guidance",
  "Property search support",
  "Offer and negotiation preparation",
  "Government scheme awareness",
  "Survey, legal process, and completion guidance",
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
            <p className={styles.preTitle}>Get In Touch</p>

            <h2>Start Your First Home-Buying Journey With Better Guidance</h2>

            <p>
              Contact HomeStartGuide for practical support with first-time buyer
              preparation, mortgage readiness, property search, offers, legal
              process awareness, and the next step in your buying journey.
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
                <p className={styles.preTitle}>Book A Consultation</p>

                <h2>Tell Us Where You Are In The Buying Process</h2>

                <p>
                  Whether you are just starting, preparing for a mortgage,
                  searching for properties, or thinking about making an offer,
                  we can help you understand the next practical step.
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
                  HomeStartGuide provides general education and practical
                  guidance. Regulated mortgage, financial, or legal advice
                  should be taken from qualified professionals where required.
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className={styles.formPanel}>
                <div className={styles.formHeader}>
                  <p className={styles.preTitle}>Send Your Enquiry</p>
                  <h2>How Can We Help?</h2>
                  <p>
                    This form opens your email app for now. A direct website
                    form handler can be connected later.
                  </p>
                </div>

                <form
                  className={styles.contactForm}
                  action="mailto:info@homestartguide.com"
                  method="post"
                  encType="text/plain"
                >
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
                      defaultValue="First-Time Buyer Consultation"
                    >
                      <option value="First-Time Buyer Consultation">
                        First-Time Buyer Consultation
                      </option>
                      <option value="Mortgage Readiness Guidance">
                        Mortgage Readiness Guidance
                      </option>
                      <option value="Property Search Support">
                        Property Search Support
                      </option>
                      <option value="Offer & Negotiation Guidance">
                        Offer & Negotiation Guidance
                      </option>
                      <option value="Legal Process Awareness">
                        Legal Process Awareness
                      </option>
                    </select>
                  </div>

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    defaultValue="HomeStartGuide Consultation Enquiry"
                  />

                  <textarea
                    name="message"
                    placeholder="Tell us what stage you are at and what help you need."
                    required
                  ></textarea>

                  <button type="submit" className={styles.submitButton}>
                    Send Message
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
              <p>Ready To Begin?</p>
              <h2>Buy Your First Home With More Clarity</h2>
              <span>
                Speak with HomeStartGuide and understand your next step before
                moving forward.
              </span>
            </div>

            <Link href="/#buyer-roadmap" className={styles.ctaButton}>
              View Buyer Roadmap
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
