import Link from "next/link";
import styles from "./GallerySection.module.css";

const supportAreas = [
  {
    image: "/assets/images/gallery/gallery-01.jpg",
    icon: "/assets/images/gallery/icon/01.svg",
    title: "Mortgage Preparation",
    tag: "Planning & Readiness",
    description:
      "Understand affordability, deposit planning, Agreement in Principle, credit preparation, and the key documents usually needed before you apply.",
  },
  {
    image: "/assets/images/gallery/gallery-02.jpg",
    icon: "/assets/images/gallery/icon/01.svg",
    title: "Property Search Guidance",
    tag: "Search & Compare",
    description:
      "Compare locations, property types, transport links, local value, viewing questions, and hidden risks before making a decision.",
  },
  {
    image: "/assets/images/gallery/gallery-03.jpg",
    icon: "/assets/images/gallery/icon/01.svg",
    title: "Legal Process Support",
    tag: "Survey, Solicitor & Completion",
    description:
      "Understand surveys, searches, solicitor communication, contracts, exchange, completion, and moving preparation with better clarity.",
  },
];

export default function GallerySection() {
  return (
    <section className={styles.gallerySection} id="support-areas">
      <span className={styles.backgroundText}>Support Areas</span>

      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.preTitle}>How We Support You</p>

          <h2 className={styles.title}>
            Practical Guidance For Every Stage Of Your First Home Journey
          </h2>

          <p className={styles.introText}>
            HomeStartGuide helps UK first-time buyers understand the most
            important parts of buying a home — from mortgage preparation to
            property search, legal process, and completion.
          </p>
        </div>

        <div className="row g-4">
          {supportAreas.map((area) => (
            <div className="col-lg-4 col-md-6 col-12" key={area.title}>
              <div className={styles.galleryCard}>
                <div className={styles.imageWrapper}>
                  <img src={area.image} alt={area.title} />
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.iconBox}>
                    <img src={area.icon} alt={`${area.title} icon`} />
                  </div>

                  <span className={styles.tag}>{area.tag}</span>

                  <h3>{area.title}</h3>

                  <p>{area.description}</p>

                  <Link href="/contactus" className={styles.cardButton}>
                    Get Guidance
                    <i className="far fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaBox}>
          <div>
            <h3>Not sure which step you are currently on?</h3>
            <p>
              Book a consultation and we will help you understand your next
              practical step as a first-time buyer.
            </p>
          </div>

          <Link href="/contactus" className={styles.ctaButton}>
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
