// import Link from "next/link";
// import React from "react";

// export default function TeamSection() {
//   return (
//     <main>
//       {" "}
//       <div>
//         <div className="rts-team-area rts-section-gap bg-team">
//           <div className="container">
//             <div className="row">
//               <div className="col-12">
//                 <div className="rts-title-area team text-center">
//                   <p className="pre-title">Professionals Team</p>
//                   <h2 className="title">Professionals Team</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="row g-5 mt--0">
//               <div className="swiper mySwiperh1_team">
//                 <div className="swiper-wrapper">
//                   <div className="swiper-slide">
//                     <div className="team-single-one-start">
//                       <div className="team-image-area">
//                         <Link href="/team-details">
//                           <img
//                             src="/assets/images/team/tm/01.jpg"
//                             alt="Business_Team_single"
//                           />
//                           <div className="team-social">
//                             <div className="main">
//                               <i className="fal fa-plus"></i>
//                             </div>
//                             <div className="team-social-one">
//                               <i className="fab fa-youtube"></i>
//                               <i className="fab fa-twitter"></i>
//                               <i className="fab fa-instagram"></i>
//                             </div>
//                           </div>
//                         </Link>
//                       </div>
//                       <div className="single-details">
//                         <Link href="/team-details">
//                           <h5 className="title">Archer Graham</h5>
//                         </Link>
//                         <p>Founder</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="swiper-slide">
//                     <div className="team-single-one-start">
//                       <div className="team-image-area">
//                         <Link href="/team-details">
//                           <img
//                             src="/assets/images/team/tm/02.jpg"
//                             alt="Business_Team_single"
//                           />
//                           <div className="team-social">
//                             <div className="main">
//                               <i className="fal fa-plus"></i>
//                             </div>
//                             <div className="team-social-one">
//                               <i className="fab fa-youtube"></i>
//                               <i className="fab fa-twitter"></i>
//                               <i className="fab fa-instagram"></i>
//                             </div>
//                           </div>
//                         </Link>
//                       </div>
//                       <div className="single-details">
//                         <Link href="/team-details">
//                           <h5 className="title">Amelia Clover</h5>
//                         </Link>
//                         <p>Co-Founder</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="swiper-slide">
//                     <div className="team-single-one-start">
//                       <div className="team-image-area">
//                         <Link href="/team-details">
//                           <img
//                             src="/assets/images/team/tm/03.jpg"
//                             alt="Business_Team_single"
//                           />
//                           <div className="team-social">
//                             <div className="main">
//                               <i className="fal fa-plus"></i>
//                             </div>
//                             <div className="team-social-one">
//                               <i className="fab fa-youtube"></i>
//                               <i className="fab fa-twitter"></i>
//                               <i className="fab fa-instagram"></i>
//                             </div>
//                           </div>
//                         </Link>
//                       </div>
//                       <div className="single-details">
//                         <Link href="/team-details">
//                           <h5 className="title">Beckett Hayden</h5>
//                         </Link>
//                         <p>Deputy Manager</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="swiper-slide">
//                     <div className="team-single-one-start">
//                       <div className="team-image-area">
//                         <Link href="/team-details">
//                           <img
//                             src="/assets/images/team/tm/04.jpg"
//                             alt="Business_Team_single"
//                           />
//                           <div className="team-social">
//                             <div className="main">
//                               <i className="fal fa-plus"></i>
//                             </div>
//                             <div className="team-social-one">
//                               <i className="fab fa-youtube"></i>
//                               <i className="fab fa-twitter"></i>
//                               <i className="fab fa-instagram"></i>
//                             </div>
//                           </div>
//                         </Link>
//                       </div>
//                       <div className="single-details">
//                         <Link href="/team-details">
//                           <h5 className="title">Julian Wyat</h5>
//                         </Link>
//                         <p>Finance Manager</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="swiper-slide">
//                     <div className="team-single-one-start">
//                       <div className="team-image-area">
//                         <Link href="/team-details">
//                           <img
//                             src="/assets/images/team/tm/04.jpg"
//                             alt="Business_Team_single"
//                           />
//                           <div className="team-social">
//                             <div className="main">
//                               <i className="fal fa-plus"></i>
//                             </div>
//                             <div className="team-social-one">
//                               <i className="fab fa-youtube"></i>
//                               <i className="fab fa-twitter"></i>
//                               <i className="fab fa-instagram"></i>
//                             </div>
//                           </div>
//                         </Link>
//                       </div>
//                       <div className="single-details">
//                         <Link href="/team-details">
//                           <h5 className="title">Julian Wyat</h5>
//                         </Link>
//                         <p>Finance Manager</p>
//                       </div>
//                     </div>
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
import Link from "next/link";
import styles from "./TeamSection.module.css";

const supportTeam = [
  {
    image: "/assets/images/team/tm/01.jpg",
    title: "Mortgage Preparation Support",
    role: "Affordability & Readiness",
    description:
      "Helping first-time buyers understand deposit planning, affordability basics, Agreement in Principle, and mortgage preparation steps.",
  },
  {
    image: "/assets/images/team/tm/02.jpg",
    title: "Property Search Guidance",
    role: "Location & Home Comparison",
    description:
      "Supporting buyers with property search, location comparison, viewing preparation, transport links, local value, and hidden risks.",
  },
  {
    image: "/assets/images/team/tm/03.jpg",
    title: "Buyer Roadmap Support",
    role: "Step-By-Step Buying Journey",
    description:
      "Guiding first-time buyers through the major stages from early planning to offer, legal process, completion, and moving in.",
  },
  {
    image: "/assets/images/team/tm/04.jpg",
    title: "Legal Process Awareness",
    role: "Survey, Solicitor & Completion",
    description:
      "Helping buyers understand surveys, searches, solicitor communication, contracts, exchange, completion, and key buying documents.",
  },
];

export default function TeamSection() {
  return (
    <section className={styles.teamSection} id="team">
      <span className={styles.backgroundText}>Support Team</span>

      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.preTitle}>HomeStartGuide Team</p>

          <h2 className={styles.title}>
            Guidance From People Who Understand The First-Time Buyer Journey
          </h2>

          <p className={styles.introText}>
            Our support is focused on helping UK first-time buyers understand
            the process clearly, ask better questions, avoid common mistakes,
            and move forward with more confidence.
          </p>
        </div>

        <div className="row g-4">
          {supportTeam.map((member) => (
            <div
              className="col-xl-3 col-lg-6 col-md-6 col-12"
              key={member.title}
            >
              <div className={styles.teamCard}>
                <div className={styles.imageWrapper}>
                  <img src={member.image} alt={member.title} />
                </div>

                <div className={styles.cardContent}>
                  <span>{member.role}</span>
                  <h3>{member.title}</h3>
                  <p>{member.description}</p>

                  <Link href="/contactus" className={styles.cardButton}>
                    Get Support
                    <i className="far fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.noticeBox}>
          <p>
            HomeStartGuide provides general education and practical guidance.
            Regulated mortgage, financial, or legal advice should be taken from
            qualified professionals where required.
          </p>

          <Link href="/contactus" className={styles.noticeButton}>
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
