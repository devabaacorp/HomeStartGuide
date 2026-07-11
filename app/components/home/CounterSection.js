// import React from "react";

// export default function CounterSection() {
//   return (
//     <main>
//       <div>
//         <div className="rts-counter-up-area rts-section-gap counter-bg">
//           <div className="container">
//             <div className="row">
//               <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                 <div className="single-counter">
//                   <img
//                     src="/assets/images/counterup/icon/01.svg"
//                     alt="Business_counter"
//                   />
//                   <div className="counter-details">
//                     <p className="disc">Media Activities</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                 <div className="single-counter pl--10 justify-content-center two pl--30">
//                   <img
//                     src="/assets/images/counterup/icon/02.svg"
//                     alt="Business_counter"
//                   />
//                   <div className="counter-details">
//                     <p className="disc">Media Activities</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                 <div className="single-counter pl--10 justify-content-center three pl--50">
//                   <img
//                     src="/assets/images/counterup/icon/03.svg"
//                     alt="Business_counter"
//                   />
//                   <div className="counter-details">
//                     <p className="disc">Media Activities</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                 <div className="single-counter pl--10 justify-content-end four">
//                   <img
//                     src="/assets/images/counterup/icon/04.svg"
//                     alt="Business_counter"
//                   />
//                   <div className="counter-details">
//                     <p className="disc">Serv Activities</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

import styles from "./CounterSection.module.css";

const counterItems = [
  {
    icon: "/assets/images/counterup/icon/01.svg",
    title: "8-Step",
    text: "Buying Roadmap",
    description: "A clear path from preparation to completion.",
  },
  {
    icon: "/assets/images/counterup/icon/02.svg",
    title: "100%",
    text: "First-Time Buyer Focus",
    description: "Support designed specifically for new buyers.",
  },
  {
    icon: "/assets/images/counterup/icon/03.svg",
    title: "Mortgage",
    text: "Readiness Guidance",
    description: "Understand affordability and preparation steps.",
  },
  {
    icon: "/assets/images/counterup/icon/04.svg",
    title: "Property",
    text: "Search Support",
    description: "Compare homes, locations, risks, and value.",
  },
];

export default function CounterSection() {
  return (
    <section className={styles.counterSection}>
      <span className={styles.backgroundText}>HomeStartGuide</span>

      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.preTitle}>Why Buyers Trust Us</p>

          <h2 className={styles.title}>
            Practical Support For A Smarter First Home Journey
          </h2>

          <p className={styles.introText}>
            HomeStartGuide helps UK first-time buyers understand the buying
            process clearly, avoid common mistakes, and move forward with better
            preparation.
          </p>
        </div>

        <div className={styles.counterGrid}>
          {counterItems.map((item) => (
            <div className={styles.counterCard} key={item.text}>
              <div className={styles.iconBox}>
                <img src={item.icon} alt={item.text} />
              </div>

              <div>
                <h3>{item.title}</h3>
                <h4>{item.text}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.noteBox}>
          HomeStartGuide provides general education and practical guidance.
          Mortgage, financial, and legal advice should be taken from qualified
          professionals where required.
        </div>
      </div>
    </section>
  );
}
