import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    name: "Sarah & James",
    location: "Manchester",
    label: "Sample Buyer Feedback",
    image: "/assets/images/testimonials/02.png",
    comment:
      "HomeStartGuide helped us understand why attending a viewing alone can be risky. The support made us feel more prepared before viewing, offering, or committing.",
  },
  {
    name: "Rebecca",
    location: "Birmingham",
    label: "Sample Buyer Feedback",
    image: "/assets/images/testimonials/02.png",
    comment:
      "The viewing companion approach was exactly what I needed. I understood visible red flags, estate agent pressure, and how to think more clearly before making an offer.",
  },
  {
    name: "Daniel",
    location: "Leeds",
    label: "Sample Buyer Feedback",
    image: "/assets/images/testimonials/02.png",
    comment:
      "The guidance around auction risks, deposit traps, negotiation, and proof of funds preparation helped me understand what to check before moving forward.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonialSection} id="testimonials">
      <span className={styles.backgroundText}>Buyer Feedback</span>

      <div className="rts-client-feedback">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div
                className={`rts-title-area reviews text-start ${styles.contentArea}`}
              >
                <p className={styles.preTitle}>Sample Buyer Feedback</p>

                <h2 className={styles.title}>
                  What Buyers Often Value Before A Property Decision
                </h2>

                <p className={styles.introText}>
                  These sample feedback cards reflect common buyer concerns
                  around property viewings, visible red flags, estate agent
                  pressure, negotiation, auction risks, and AML preparation.
                  They should be replaced with real approved testimonials once
                  available.
                </p>

                <div className="swiper mySwipertestimonial">
                  <div className="swiper mySwipers">
                    <div className="swiper-wrapper">
                      {testimonials.map((item) => (
                        <div className="swiper-slide" key={item.name}>
                          <div
                            className={`testimonial-inner ${styles.testimonialCard}`}
                          >
                            <div className={styles.quoteIcon}>“</div>

                            <p className={`disc text-start ${styles.comment}`}>
                              {item.comment}
                            </p>

                            <div className="testimonial-bottom-one">
                              <div className="thumbnail">
                                <img src={item.image} alt={item.name} />
                              </div>

                              <div className="details">
                                <h5 className="title">{item.name}</h5>
                                <span>
                                  {item.location} · {item.label}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </div>

                <p className={styles.sampleNote}>
                  Note: Current feedback is sample content for layout purposes.
                  Replace this section with real approved testimonials when
                  client feedback is available.
                </p>
              </div>
            </div>

            <div className="col-lg-5">
              <div className={styles.imageCard}>
                <img
                  src="/assets/images/testimonials/01.png"
                  alt="Buyer advocate support feedback"
                />

                <div className={styles.imageBadge}>
                  <span>Trust</span>
                  <p>Practical buyer support before you view, offer, or bid</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
