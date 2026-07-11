// import React from "react";

// export default function TestimonialsSection() {
//   return (
//     <main>
//       <div>
//         <div className="rts-client-feedback">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-7">
//                 <div className="rts-title-area reviews text-start pl--30 pt--70">
//                   <p className="pre-title">Our Testimonials</p>
//                   <h2 className="title">Client’s Feedbacks</h2>
//                   <div className="swiper mySwipertestimonial">
//                     <div className="swiper mySwipers">
//                       <div className="swiper-wrapper">
//                         <div className="swiper-slide">
//                           <div className="testimonial-inner">
//                             <p className="disc text-start">
//                               “Consectetur adipiscing elit velit porta sapien
//                               purus erat nec, a ornare laoreet sem gravida
//                               accumsan in commodo aliquet nascetur maecenas. Sem
//                               tempus hendrerit diam mauris leo magna sociosqu
//                               viverra, accumsan massa tristique egestas cum
//                               sodales hac lacinia feugiat scelerisque porttitor”
//                             </p>
//                             <div className="testimonial-bottom-one">
//                               <div className="thumbnail">
//                                 <img
//                                   src="/assets/images/testimonials/02.png"
//                                   alt="business-testimonials"
//                                 />
//                               </div>
//                               <div className="details">
//                                 <a href="#">
//                                   <h5 className="title">David Smith</h5>
//                                 </a>
//                                 <span>JHKL Owner</span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="swiper-slide">
//                           <div className="testimonial-inner">
//                             <p className="disc text-start">
//                               “Consectetur adipiscing elit velit porta sapien
//                               purus erat nec, a ornare laoreet sem gravida
//                               accumsan in commodo aliquet nascetur maecenas. Sem
//                               tempus hendrerit diam mauris leo magna sociosqu
//                               viverra, accumsan massa tristique egestas cum
//                               sodales hac lacinia feugiat scelerisque porttitor”
//                             </p>
//                             <div className="testimonial-bottom-one">
//                               <div className="thumbnail">
//                                 <img
//                                   src="/assets/images/testimonials/02.png"
//                                   alt="business-testimonials"
//                                 />
//                               </div>
//                               <div className="details">
//                                 <a href="#">
//                                   <h5 className="title">David Smith</h5>
//                                 </a>
//                                 <span>JHKL Owner</span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="swiper-slide">
//                           <div className="testimonial-inner">
//                             <p className="disc text-start">
//                               “Consectetur adipiscing elit velit porta sapien
//                               purus erat nec, a ornare laoreet sem gravida
//                               accumsan in commodo aliquet nascetur maecenas. Sem
//                               tempus hendrerit diam mauris leo magna sociosqu
//                               viverra, accumsan massa tristique egestas cum
//                               sodales hac lacinia feugiat scelerisque porttitor”
//                             </p>
//                             <div className="testimonial-bottom-one">
//                               <div className="thumbnail">
//                                 <img
//                                   src="/assets/images/testimonials/02.png"
//                                   alt="business-testimonials"
//                                 />
//                               </div>
//                               <div className="details">
//                                 <a href="#">
//                                   <h5 className="title">David Smith</h5>
//                                 </a>
//                                 <span>JHKL Owner</span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="swiper-button-next"></div>
//                     <div className="swiper-button-prev"></div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-5">
//                 <div className="rts-test-one-image-inner">
//                   <img
//                     src="/assets/images/testimonials/01.png"
//                     alt="business_testimobials"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    name: "Sarah & James",
    location: "Manchester",
    label: "Sample Buyer Feedback",
    image: "/assets/images/testimonials/02.png",
    comment:
      "HomeStartGuide helped us understand the first-time buying process more clearly, especially mortgage preparation, property search, and the key steps before making an offer.",
  },
  {
    name: "Rebecca",
    location: "Birmingham",
    label: "Sample Buyer Feedback",
    image: "/assets/images/testimonials/02.png",
    comment:
      "The step-by-step guidance made the process feel less confusing. I understood what to prepare before starting my property search and what questions to ask.",
  },
  {
    name: "Daniel",
    location: "Leeds",
    label: "Sample Buyer Feedback",
    image: "/assets/images/testimonials/02.png",
    comment:
      "The buyer roadmap helped me understand affordability, mortgage readiness, surveys, legal steps, and completion in a much clearer way.",
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
                  What First-Time Buyers Often Need Help With
                </h2>

                <p className={styles.introText}>
                  These sample feedback cards are based on common first-time
                  buyer needs. They can be quickly replaced with real client
                  testimonials once approved feedback is available.
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
                  Replace with real approved testimonials when available.
                </p>
              </div>
            </div>

            <div className="col-lg-5">
              <div className={styles.imageCard}>
                <img
                  src="/assets/images/testimonials/01.png"
                  alt="First-time buyer support feedback"
                />

                <div className={styles.imageBadge}>
                  <span>Trust</span>
                  <p>Clear guidance for first-time home buyers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
