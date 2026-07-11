// import React from "react";

// export default function TrustedClientsSection() {
//   return (
//     <main>
//       {" "}
//       <div>
//         <div className="rts-trusted-client rts-section-gapBottom">
//           <div className="container">
//             <div className="row">
//               <div className="col-12">
//                 <div className="title-area-client text-center">
//                   <p className="client-title">Our Trusted Clients</p>
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               <div className="client-wrapper-one">
//                 <a href="#">
//                   <img
//                     src="/assets/images/client/01.png"
//                     alt="business_finbiz"
//                   />
//                 </a>
//                 <a href="#">
//                   <img
//                     src="/assets/images/client/02.png"
//                     alt="business_finbiz"
//                   />
//                 </a>
//                 <a href="#">
//                   <img
//                     src="/assets/images/client/03.png"
//                     alt="business_finbiz"
//                   />
//                 </a>
//                 <a href="#">
//                   <img
//                     src="/assets/images/client/04.png"
//                     alt="business_finbiz"
//                   />
//                 </a>
//                 <a href="#">
//                   <img
//                     src="/assets/images/client/05.png"
//                     alt="business_finbiz"
//                   />
//                 </a>
//                 <a href="#">
//                   <img
//                     src="/assets/images/client/06.png"
//                     alt="business_finbiz"
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

import styles from "./TrustedClientsSection.module.css";

const guidanceAreas = [
  {
    title: "Mortgage Readiness",
    description:
      "Understand affordability, deposit planning, Agreement in Principle, and document preparation.",
  },
  {
    title: "Government Schemes",
    description:
      "Get general guidance on first-time buyer schemes and basic eligibility considerations.",
  },
  {
    title: "Property Search",
    description:
      "Compare homes, locations, transport links, local value, and long-term suitability.",
  },
  {
    title: "Offer Preparation",
    description:
      "Learn how to make a sensible offer and avoid emotional or rushed buying decisions.",
  },
  {
    title: "Survey & Legal Steps",
    description:
      "Understand surveys, searches, solicitor communication, contracts, and exchange.",
  },
  {
    title: "Completion Planning",
    description:
      "Prepare for completion day, moving arrangements, final checks, and getting your keys.",
  },
];

export default function TrustedClientsSection() {
  return (
    <section className={styles.trustedSection}>
      <span className={styles.backgroundText}>Buyer Support</span>

      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.preTitle}>Trusted Guidance Areas</p>

          <h2 className={styles.title}>
            Clear Support For The Most Important Buying Decisions
          </h2>

          <p className={styles.introText}>
            HomeStartGuide focuses on the key areas where first-time buyers
            usually need the most clarity — from mortgage preparation to
            completion.
          </p>
        </div>

        <div className={styles.guidanceGrid}>
          {guidanceAreas.map((item, index) => (
            <div className={styles.guidanceCard} key={item.title}>
              <div className={styles.numberBox}>
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
