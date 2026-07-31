import Link from "next/link";
import styles from "./BlogSection.module.css";

const blogPosts = [
  {
    image: "/assets/images/blog/02.jpg",
    badge: "Guide 01",
    category: "Viewing Support",
    title: "Why You Should Not Attend A Property Viewing Alone",
    description:
      "Learn why first-time buyers can miss visible red flags, feel pressured by estate agents, and make rushed decisions during property viewings.",
    href: "/#blog-section",
  },
  {
    image: "/assets/images/blog/03.jpg",
    badge: "Guide 02",
    category: "Negotiation Support",
    title: "How Estate Agent Pressure Can Lead To Overpaying",
    description:
      "Understand common pressure tactics, emotional bidding risks, inflated pricing, and how ex-agent insight can help you prepare a sensible offer.",
    href: "/#blog-section",
  },
  {
    image: "/assets/images/blog/04.jpg",
    badge: "Guide 03",
    category: "Auction & AML Preparation",
    title: "Auction Buyer Risks Before You Bid Or Pay A Deposit",
    description:
      "Understand guide price traps, legal pack concerns, non-refundable deposits, proof of funds preparation, and AML pre-screening readiness.",
    href: "/#blog-section",
  },
];

export default function BlogSection() {
  return (
    <section className={styles.blogSection} id="blog-section">
      <span className={styles.backgroundText}>Buyer Guides</span>

      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.preTitle}>Helpful Buyer Resources</p>

          <h2 className={styles.title}>
            Practical Guides Before You View, Offer, Bid, Or Commit
          </h2>

          <p className={styles.introText}>
            Learn how to protect yourself before a property decision — from
            viewing red flags and estate agent pressure to negotiation, auction
            risks, deposit traps, and AML preparation.
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
                    Read Buyer Guide
                    <i className="far fa-arrow-right"></i>
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className={styles.ctaBox}>
          <div>
            <h3>Need support before your next viewing?</h3>
            <p>
              Secure practical buyer protection for a flat £500 one-off fee and
              get support before you view, offer, bid, or commit.
            </p>
          </div>

          <Link href="/contactus" className={styles.ctaButton}>
            Book £500 Viewing Companion
          </Link>
        </div>

        <p className={styles.disclaimer}>
          HomeStartGuide provides non-regulated buyer representation, property
          viewing assistance, negotiation support, and AML pre-screening
          preparation. Formal building surveys, regulated mortgage advice, and
          legal conveyancing are provided by qualified third-party specialists.
        </p>
      </div>
    </section>
  );
}
