// import Link from "next/link";
// import styles from "./GallerySection.module.css";

// const supportAreas = [
//   {
//     image: "/assets/images/gallery/gallery-01.jpg",
//     icon: "/assets/images/gallery/icon/01.svg",
//     title: "Mortgage Preparation",
//     tag: "Planning & Readiness",
//     description:
//       "Understand affordability, deposit planning, Agreement in Principle, credit preparation, and the key documents usually needed before you apply.",
//   },
//   {
//     image: "/assets/images/gallery/gallery-02.jpg",
//     icon: "/assets/images/gallery/icon/01.svg",
//     title: "Property Search Guidance",
//     tag: "Search & Compare",
//     description:
//       "Compare locations, property types, transport links, local value, viewing questions, and hidden risks before making a decision.",
//   },
//   {
//     image: "/assets/images/gallery/gallery-03.jpg",
//     icon: "/assets/images/gallery/icon/01.svg",
//     title: "Legal Process Support",
//     tag: "Survey, Solicitor & Completion",
//     description:
//       "Understand surveys, searches, solicitor communication, contracts, exchange, completion, and moving preparation with better clarity.",
//   },
// ];

// export default function GallerySection() {
//   return (
//     <section className={styles.gallerySection} id="support-areas">
//       <span className={styles.backgroundText}>Support Areas</span>

//       <div className="container">
//         <div className={styles.sectionHeader}>
//           <p className={styles.preTitle}>How We Support You</p>

//           <h2 className={styles.title}>
//             Practical Guidance For Every Stage Of Your First Home Journey
//           </h2>

//           <p className={styles.introText}>
//             HomeStartGuide helps UK first-time buyers understand the most
//             important parts of buying a home — from mortgage preparation to
//             property search, legal process, and completion.
//           </p>
//         </div>

//         <div className="row g-4">
//           {supportAreas.map((area) => (
//             <div className="col-lg-4 col-md-6 col-12" key={area.title}>
//               <div className={styles.galleryCard}>
//                 <div className={styles.imageWrapper}>
//                   <img src={area.image} alt={area.title} />
//                 </div>

//                 <div className={styles.cardContent}>
//                   <div className={styles.iconBox}>
//                     <img src={area.icon} alt={`${area.title} icon`} />
//                   </div>

//                   <span className={styles.tag}>{area.tag}</span>

//                   <h3>{area.title}</h3>

//                   <p>{area.description}</p>

//                   <Link href="/contactus" className={styles.cardButton}>
//                     Get Guidance
//                     <i className="far fa-arrow-right"></i>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className={styles.ctaBox}>
//           <div>
//             <h3>Not sure which step you are currently on?</h3>
//             <p>
//               Book a consultation and we will help you understand your next
//               practical step as a first-time buyer.
//             </p>
//           </div>

//           <Link href="/contactus" className={styles.ctaButton}>
//             Book a Consultation
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
import Link from "next/link";
import styles from "./GallerySection.module.css";

const supportAreas = [
  {
    image: "/assets/images/gallery/gallery-01.jpg",
    icon: "/assets/images/gallery/icon/01.svg",
    title: "Property Viewing Companion",
    tag: "In-Person Viewing Support",
    description:
      "We attend property viewings with you, observe visible red flags, ask practical questions, and help you avoid pressure-led decisions.",
  },
  {
    image: "/assets/images/gallery/gallery-02.jpg",
    icon: "/assets/images/gallery/icon/01.svg",
    title: "Negotiation Support",
    tag: "Ex-Estate Agent Insight",
    description:
      "Use estate-agency experience to avoid emotional overbidding, challenge inflated pricing, and move forward with a sensible offer strategy.",
  },
  {
    image: "/assets/images/gallery/gallery-03.jpg",
    icon: "/assets/images/gallery/icon/01.svg",
    title: "Auction & AML Preparation",
    tag: "Risk, Deposit & Document Support",
    description:
      "Understand auction risks, non-refundable deposit traps, proof of funds preparation, and AML pre-screening readiness before you commit.",
  },
];

export default function GallerySection() {
  return (
    <section className={styles.gallerySection} id="support-areas">
      <span className={styles.backgroundText}>Support Areas</span>

      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.preTitle}>How We Support Buyers</p>

          <h2 className={styles.title}>
            Practical Buyer Protection Before You View, Offer, Bid, Or Commit
          </h2>

          <p className={styles.introText}>
            HomeStartGuide supports first-time buyers and auction buyers with
            in-person viewing assistance, visible red flag awareness, ex-estate
            agent negotiation insight, auction guidance, and AML preparation
            support.
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
                    Get Buyer Support
                    <i className="far fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
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
      </div>
    </section>
  );
}
