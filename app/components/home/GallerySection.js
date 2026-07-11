// import Link from "next/link";
// import React from "react";
// import style from "./GallerySection.module.css";

// export default function GallerySection() {
//   return (
//     <main>
//       <div className={style.gallerySection_parent_div}>
//         <div className="rts-gallery-area rts-section-gap gallery-bg bg_image">
//           <div className="container">
//             <div className="row">
//               <div className="rts-title-area gallery text-start pl_sm--20">
//                 <p className="pre-title">Popular Projects</p>
//                 <h2 className="title">Our Completed Projects</h2>
//               </div>
//             </div>
//             <div className="row mt--45">
//               <div className="col-12">
//                 <div className="swiper mygallery mySwipers">
//                   <div className="swiper mySwipers">
//                     <div className="swiper-wrapper">
//                       <div className="swiper-slide">
//                         <div className="row g-5 w-g-100">
//                           <div className="col-lg-7 col-md-12 col-sm-12 col-12">
//                             <div className="thumbnail-gallery">
//                               <img
//                                 src="/assets/images/gallery/gallery-01.jpg"
//                                 alt="business-images"
//                               />
//                             </div>
//                           </div>
//                           <div className="col-lg-5 col-md-12 col-sm-12 col-12">
//                             <div className="bg-right-gallery">
//                               <div className="icon">
//                                 <img
//                                   src="/assets/images/gallery/icon/01.svg"
//                                   alt="Business-gallery"
//                                 />
//                               </div>
//                               <Link href="/project/Business-solution">
//                                 <h4 className="title">Pro Business Solution</h4>
//                               </Link>
//                               <span>Case Study, Growth</span>
//                               <p className="disc">
//                                 Ornare etiam laoreet dictumst nisl quisque
//                                 scelerisque cras ut porta interdum purus mattis
//                                 iaculis litora turpis torquent posuere.
//                               </p>
//                               <Link
//                                 className="rts-btn btn-primary"
//                                 href="/project/Business-solution"
//                               >
//                                 View Project
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="swiper-slide">
//                         <div className="row g-5 w-g-100">
//                           <div className="col-lg-7">
//                             <div className="thumbnail-gallery">
//                               <img
//                                 src="/assets/images/gallery/gallery-02.jpg"
//                                 alt="business-images"
//                               />
//                             </div>
//                           </div>
//                           <div className="col-lg-5">
//                             <div className="bg-right-gallery">
//                               <div className="icon">
//                                 <img
//                                   src="/assets/images/gallery/icon/01.svg"
//                                   alt="Business-gallery"
//                                 />
//                               </div>
//                               <Link href="/project/Invent-Workd">
//                                 <h4 className="title">Finbiz Pro Business</h4>
//                               </Link>
//                               <span>Case Study, Growth</span>
//                               <p className="disc">
//                                 In the literal sense, the term “Business” means
//                                 the state of being busy. But it is a very wide
//                                 connotation of business.
//                               </p>
//                               <Link
//                                 className="rts-btn btn-primary"
//                                 href="/project/Invent-Workd"
//                               >
//                                 View Project
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="swiper-slide">
//                         <div className="row g-5 w-g-100">
//                           <div className="col-lg-7">
//                             <div className="thumbnail-gallery">
//                               <img
//                                 src="/assets/images/gallery/gallery-03.jpg"
//                                 alt="business-images"
//                               />
//                             </div>
//                           </div>
//                           <div className="col-lg-5">
//                             <div className="bg-right-gallery">
//                               <div className="icon">
//                                 <img
//                                   src="/assets/images/gallery/icon/01.svg"
//                                   alt="Business-gallery"
//                                 />
//                               </div>
//                               <Link href="/project/Modern-Solution-technology">
//                                 <h4 className="title">Pro Solution Business</h4>
//                               </Link>
//                               <span>Case Study, Growth</span>
//                               <p className="disc">
//                                 But a very wide of business because it covers
//                                 every human activity. Business is really
//                                 concerned with the production.
//                               </p>
//                               <Link
//                                 className="rts-btn btn-primary"
//                                 href="/project/Modern-Solution-technology"
//                               >
//                                 View Project
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="swiper-button-next"></div>
//                   <div className="swiper-button-prev"></div>
//                   <div className="swiper-pagination"></div>
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
