import styles from "./ContactSection.module.css";

const contactDetails = [
  {
    icon: "fas fa-phone-alt",
    title: "Call Us",
    text: "+44 7466 831291",
    href: "tel:+447466831291",
  },
  {
    icon: "fas fa-envelope",
    title: "Email Us",
    text: "info@homestartguide.com",
    href: "mailto:info@homestartguide.com",
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "Postal Address",
    text: "40 Winsford Terrace, Great Cambridge Road, London N18 1BS",
    href: "#map",
  },
];

export default function ContactSection() {
  return (
    <section className={styles.contactSection} id="contact">
      <span className={styles.backgroundText}>Contact Us</span>

      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.preTitle}>Book Buyer Support</p>

          <h2 className={styles.title}>
            Get Practical Protection Before You View, Offer, Bid, Or Commit
          </h2>

          <p className={styles.introText}>
            Have a property viewing coming up, dealing with estate agent
            pressure, preparing an auction bid, or unsure about AML documents?
            Contact HomeStartGuide for buyer support, viewing assistance, or a
            free 15-minute strategy call.
          </p>
        </div>

        <div className="row g-0 align-items-stretch">
          <div className="col-lg-4 col-md-12">
            <div className={styles.imagePanel}>
              <img
                src="/assets/images/contact/01.jpg"
                alt="Contact HomeStartGuide for buyer support"
              />

              <div className={styles.imageOverlay}>
                <h3>Ready to view with confidence?</h3>
                <p>
                  Secure your £500 Viewing Companion package and get practical
                  support before making a costly property decision.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-12">
            <div className={styles.formPanel}>
              <div className={styles.contactInfoGrid}>
                {contactDetails.map((item) => (
                  <a
                    className={styles.infoCard}
                    href={item.href}
                    key={item.title}
                  >
                    <div className={styles.infoIcon}>
                      <i className={item.icon}></i>
                    </div>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className={styles.formHeader}>
                <p className={styles.formPreTitle}>Send Your Enquiry</p>
                <h3>How Can We Help?</h3>
                <p>
                  Complete the form below and your request will be sent to
                  HomeStartGuide for buyer support, property viewing assistance,
                  negotiation guidance, auction support, or AML preparation.
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
                  value="New HomeStartGuide Homepage Buyer Support Enquiry"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://homestartguide.com/thank-you/"
                />

                <div className={styles.twoColumn}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    required
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    required
                  />
                </div>

                <div className={styles.twoColumn}>
                  <input type="tel" placeholder="Phone Number" name="phone" />

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
                  placeholder="Subject"
                  name="subject"
                  defaultValue="HomeStartGuide Buyer Support Enquiry"
                />

                <textarea
                  placeholder="Tell us about the property, viewing, offer, auction, or document issue you need help with."
                  name="message"
                  required
                ></textarea>

                <button type="submit" className={styles.submitButton}>
                  Send Buyer Support Enquiry
                </button>
              </form>

              <p className={styles.disclaimer}>
                HomeStartGuide provides non-regulated buyer representation,
                property viewing assistance, negotiation support, and AML
                pre-screening preparation. Formal building surveys, regulated
                mortgage advice, and legal conveyancing are provided by
                qualified third-party specialists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
