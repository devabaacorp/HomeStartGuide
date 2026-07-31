// import styles from "./CounterSection.module.css";

// const counterItems = [
//   {
//     icon: "/assets/images/counterup/icon/01.svg",
//     title: "8-Step",
//     text: "Buying Roadmap",
//     description: "A clear path from preparation to completion.",
//   },
//   {
//     icon: "/assets/images/counterup/icon/02.svg",
//     title: "100%",
//     text: "First-Time Buyer Focus",
//     description: "Support designed specifically for new buyers.",
//   },
//   {
//     icon: "/assets/images/counterup/icon/03.svg",
//     title: "Mortgage",
//     text: "Readiness Guidance",
//     description: "Understand affordability and preparation steps.",
//   },
//   {
//     icon: "/assets/images/counterup/icon/04.svg",
//     title: "Property",
//     text: "Search Support",
//     description: "Compare homes, locations, risks, and value.",
//   },
// ];

// export default function CounterSection() {
//   return (
//     <section className={styles.counterSection}>
//       <span className={styles.backgroundText}>HomeStartGuide</span>

//       <div className="container">
//         <div className={styles.sectionHeader}>
//           <p className={styles.preTitle}>Why Buyers Trust Us</p>

//           <h2 className={styles.title}>
//             Practical Support For A Smarter First Home Journey
//           </h2>

//           <p className={styles.introText}>
//             HomeStartGuide helps UK first-time buyers understand the buying
//             process clearly, avoid common mistakes, and move forward with better
//             preparation.
//           </p>
//         </div>

//         <div className={styles.counterGrid}>
//           {counterItems.map((item) => (
//             <div className={styles.counterCard} key={item.text}>
//               <div className={styles.iconBox}>
//                 <img src={item.icon} alt={item.text} />
//               </div>

//               <div>
//                 <h3>{item.title}</h3>
//                 <h4>{item.text}</h4>
//                 <p>{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className={styles.noteBox}>
//           HomeStartGuide provides general education and practical guidance.
//           Mortgage, financial, and legal advice should be taken from qualified
//           professionals where required.
//         </div>
//       </div>
//     </section>
//   );
// }
import styles from "./CounterSection.module.css";

const counterItems = [
  {
    icon: "/assets/images/counterup/icon/01.svg",
    title: "£500",
    text: "Flat Viewing Package",
    description:
      "One-off buyer support before you view, offer, bid, or commit to a property decision.",
  },
  {
    icon: "/assets/images/counterup/icon/02.svg",
    title: "In-Person",
    text: "Viewing Companion",
    description:
      "Attend property viewings with practical support and a second pair of experienced eyes.",
  },
  {
    icon: "/assets/images/counterup/icon/03.svg",
    title: "Ex-Agent",
    text: "Negotiation Insight",
    description:
      "Avoid pressure tactics, emotional overbidding, and inflated offers with estate-agency experience.",
  },
  {
    icon: "/assets/images/counterup/icon/04.svg",
    title: "Auction",
    text: "AML & Risk Support",
    description:
      "Understand auction risks, deposit traps, proof of funds, and AML pre-screening preparation.",
  },
];

export default function CounterSection() {
  return (
    <section className={styles.counterSection}>
      <span className={styles.backgroundText}>Buyer Protection</span>

      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.preTitle}>Why Buyers Use HomeStartGuide</p>

          <h2 className={styles.title}>
            Practical Protection Before You View, Offer, Bid, Or Commit
          </h2>

          <p className={styles.introText}>
            HomeStartGuide supports first-time buyers and auction buyers with
            property viewing assistance, visible red flag awareness, ex-estate
            agent negotiation insight, auction guidance, and AML preparation
            support.
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
          HomeStartGuide provides non-regulated buyer representation, property
          viewing assistance, negotiation support, and AML pre-screening
          preparation. Formal building surveys, regulated mortgage advice, and
          legal conveyancing are provided by qualified third-party specialists.
        </div>
      </div>
    </section>
  );
}
