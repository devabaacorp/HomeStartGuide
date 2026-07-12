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
    title: "Visit / Postal Address",
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
          <p className={styles.preTitle}>Get In Touch</p>

          <h2 className={styles.title}>
            Start Your First Home-Buying Journey With Better Guidance
          </h2>

          <p className={styles.introText}>
            Have questions about buying your first home, mortgage readiness,
            property search, or the next step in the process? Contact
            HomeStartGuide and we will guide you in the right direction.
          </p>
        </div>

        <div className="row g-0 align-items-stretch">
          <div className="col-lg-4 col-md-12">
            <div className={styles.imagePanel}>
              <img
                src="/assets/images/contact/01.jpg"
                alt="Contact HomeStartGuide"
              />

              <div className={styles.imageOverlay}>
                <h3>Need help getting started?</h3>
                <p>
                  Speak with us and understand your next practical step as a
                  first-time buyer.
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
                <p className={styles.formPreTitle}>Book A Consultation</p>
                <h3>Send Your Enquiry</h3>
                <p>
                  Fill in the form below. For now, this form opens your email
                  app. A direct website form handler can be connected later.
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

                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    defaultValue="First-Time Buyer Consultation"
                  />
                </div>

                <textarea
                  placeholder="Tell us what stage you are at — mortgage preparation, property search, offer, legal process, or just starting."
                  name="message"
                  required
                ></textarea>

                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </form>

              <p className={styles.disclaimer}>
                HomeStartGuide provides general education and practical
                guidance. Regulated mortgage, financial, or legal advice should
                be taken from qualified professionals where required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
