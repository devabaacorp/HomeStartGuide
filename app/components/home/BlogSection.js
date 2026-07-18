import Link from "next/link";
import styles from "./BlogSection.module.css";

const blogPosts = [
  {
    image: "/assets/images/blog/02.jpg",
    badge: "Guide 01",
    category: "First-Time Buyer Guide",
    title: "How To Prepare Before Buying Your First Home",
    description:
      "Understand affordability, deposit planning, documents, credit readiness, and the first practical steps before starting your property search.",
    href: "/#blog-section",
  },
  {
    image: "/assets/images/blog/03.jpg",
    badge: "Guide 02",
    category: "Mortgage Readiness",
    title: "Mortgage Readiness Checklist For First-Time Buyers",
    description:
      "Learn what to prepare before speaking with mortgage professionals, including income, expenses, deposit, credit history, and key documents.",
    href: "/#blog-section",
  },
  {
    image: "/assets/images/blog/04.jpg",
    badge: "Guide 03",
    category: "Property Search Support",
    title: "Common Mistakes To Avoid Before Making An Offer",
    description:
      "Avoid emotional offers, hidden costs, weak location research, and unclear understanding of surveys, legal steps, and completion.",
    href: "/#blog-section",
  },
];

export default function BlogSection() {
  return (
    <section className={styles.blogSection} id="blog-section">
      <span className={styles.backgroundText}>Buyer Guides</span>

      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.preTitle}>Helpful Resources</p>

          <h2 className={styles.title}>
            Practical Guides For UK First-Time Buyers
          </h2>

          <p className={styles.introText}>
            Learn the important steps before buying your first home — from
            mortgage readiness and property search to making an offer and
            understanding the legal process.
          </p>
        </div>

        <div className="row g-4">
          {blogPosts.map((post) => (
            <div className="col-lg-4 col-md-6 col-12" key={post.title}>
              <article className={styles.blogCard}>
                <div className={styles.imageWrapper}>
                  <img src={post.image} alt={post.title} />

                  <div className={styles.blogBadge}>
                    <span>{post.badge}</span>
                  </div>
                </div>

                <div className={styles.blogContent}>
                  <p className={styles.category}>{post.category}</p>

                  <Link href={post.href}>
                    <h3>{post.title}</h3>
                  </Link>

                  <p className={styles.description}>{post.description}</p>

                  <Link className={styles.readMore} href={post.href}>
                    Read Guide
                    <i className="far fa-arrow-right"></i>
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className={styles.ctaBox}>
          <div>
            <h3>Need help understanding your next buying step?</h3>
            <p>
              Book a consultation and get practical direction for your first
              home-buying journey.
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
