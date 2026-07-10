// import React from "react";
// import style from "./HeroSection.module.css";

// export default function HeroSection() {
//   return (
//     <main className={style.hero_main_div}>
//       <div>
//         <div className="rts-banner-area rts-banner-one" id="banner">
//           <div className="swiper mySwiper banner-one">
//             <div className="swiper rts-brand__slider">
//               <div className="swiper-wrapper">
//                 <div className="swiper-slide">
//                   <div className="banner-one-inner text-start">
//                     <p className="pre-title">
//                       <span>Welcome!</span> Start Growing Your Business Today
//                     </p>
//                     <h1 className="title ">
//                       Make <span>Business Unique </span> <br />
//                       With Great Ideas
//                     </h1>
//                     <p className="disc banner-para">
//                       Porttitor ornare fermentum aliquam pharetra facilisis
//                       gravida risus suscipit <br /> Dui feugiat fusce conubia
//                       ridiculus tristique parturient
//                     </p>
//                     <a href="#" className="rts-btn btn-primary color-h-black">
//                       Get Consultant
//                     </a>
//                     <img
//                       className="shape-img one"
//                       src="/assets/images/banner/shape/01.png"
//                       alt="banner_business"
//                     />
//                   </div>
//                 </div>
//                 <div className="swiper-slide">
//                   <div className="banner-one-inner text-start">
//                     <p className="pre-title">
//                       <span>Welcome!</span> Start Growing Your Business Today
//                     </p>
//                     <h1 className="title ">
//                       Launch <span>Ultra Modern</span> <br /> Effective Business
//                     </h1>
//                     <p className="disc banner-para">
//                       Porttitor ornare fermentum aliquam pharetra facilisis
//                       gravida risus suscipit <br /> Dui feugiat fusce conubia
//                       ridiculus tristique parturient
//                     </p>
//                     <a href="#" className="rts-btn btn-primary color-h-black">
//                       Get Consultant
//                     </a>
//                     <img
//                       className="shape-img one"
//                       src="/assets/images/banner/shape/01.png"
//                       alt="banner_business"
//                     />
//                   </div>
//                 </div>
//                 <div className="swiper-slide">
//                   <div className="banner-one-inner text-start">
//                     <p className="pre-title">
//                       <span>Welcome!</span> Start Growing Your Business Today
//                     </p>
//                     <h1 className="title ">
//                       Make <span>Business Growth</span> <br /> With Next Level
//                     </h1>
//                     <p className="disc banner-para">
//                       Porttitor ornare fermentum aliquam pharetra facilisis
//                       gravida risus suscipit <br /> Dui feugiat fusce conubia
//                       ridiculus tristique parturient
//                     </p>
//                     <a href="#" className="rts-btn btn-primary color-h-black">
//                       Get Consultant
//                     </a>
//                     <img
//                       className="shape-img one"
//                       src="/assets/images/banner/shape/01.png"
//                       alt="banner_business"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="animation-img">
//             <img
//               className="shape-img two"
//               src="/assets/images/banner/shape/02.png"
//               alt="banner_business"
//             />
//             <img
//               className="shape-img three"
//               src="/assets/images/banner/shape/03.png"
//               alt="banner_business"
//             />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
import Link from "next/link";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <main className={styles.hero_main_div}>
      <div className="rts-banner-area rts-banner-one" id="banner">
        <div className="swiper mySwiper banner-one">
          <div className="swiper rts-brand__slider">
            <div className="swiper-wrapper">
              {/* Slide 1 */}
              <div className="swiper-slide">
                <div
                  className={`banner-one-inner text-start ${styles.heroContent}`}
                >
                  <p className="pre-title">
                    <span>Welcome!</span> First-Time Buyer Support in the UK
                  </p>

                  <h1 className="title">
                    Buy Your First Home <br />
                    <span>With Confidence</span>
                  </h1>

                  <p className={`disc banner-para ${styles.heroDescription}`}>
                    We simplify every step of your home-buying journey — from
                    understanding mortgages and government schemes to finding
                    the right property and completing your purchase.
                  </p>

                  <div className={styles.heroButtons}>
                    <Link
                      href="/contactus"
                      className="rts-btn btn-primary color-h-black"
                    >
                      Book a Consultation
                    </Link>

                    <Link
                      href="/#buyer-roadmap"
                      className={styles.secondaryBtn}
                    >
                      View Buyer Roadmap
                    </Link>
                  </div>

                  <ul className={styles.heroChecklist}>
                    <li>First-Time Buyer Guidance</li>
                    <li>Mortgage Support & Advice</li>
                    <li>Property Search Assistance</li>
                    <li>Government Scheme Guidance</li>
                    <li>Step-by-Step Buying Roadmap</li>
                  </ul>

                  <img
                    className="shape-img one"
                    src="/assets/images/banner/shape/01.png"
                    alt="HomeStartGuide decorative shape"
                  />
                </div>
              </div>

              {/* Slide 2 */}
              <div className="swiper-slide">
                <div
                  className={`banner-one-inner text-start ${styles.heroContent}`}
                >
                  <p className="pre-title">
                    <span>Plan Smart.</span> Move Forward With Clarity
                  </p>

                  <h1 className="title">
                    Understand Mortgages <br />
                    <span>Before You Apply</span>
                  </h1>

                  <p className={`disc banner-para ${styles.heroDescription}`}>
                    Get practical guidance on affordability, deposits, mortgage
                    readiness, credit preparation, and the key steps before
                    making an offer.
                  </p>

                  <div className={styles.heroButtons}>
                    <Link
                      href="/contactus"
                      className="rts-btn btn-primary color-h-black"
                    >
                      Get Started Today
                    </Link>

                    <Link
                      href="/#mortgage-guidance"
                      className={styles.secondaryBtn}
                    >
                      Mortgage Guidance
                    </Link>
                  </div>

                  <ul className={styles.heroChecklist}>
                    <li>Affordability Planning</li>
                    <li>Deposit Preparation</li>
                    <li>Mortgage Readiness Review</li>
                    <li>Agreement in Principle Guidance</li>
                  </ul>

                  <img
                    className="shape-img one"
                    src="/assets/images/banner/shape/01.png"
                    alt="HomeStartGuide decorative shape"
                  />
                </div>
              </div>

              {/* Slide 3 */}
              <div className="swiper-slide">
                <div
                  className={`banner-one-inner text-start ${styles.heroContent}`}
                >
                  <p className="pre-title">
                    <span>Search Better.</span> Avoid Costly Mistakes
                  </p>

                  <h1 className="title">
                    Find The Right Home <br />
                    <span>With Better Guidance</span>
                  </h1>

                  <p className={`disc banner-para ${styles.heroDescription}`}>
                    We help you evaluate property value, location, transport
                    links, surveys, hidden risks, and the buying process before
                    you commit.
                  </p>

                  <div className={styles.heroButtons}>
                    <Link
                      href="/contactus"
                      className="rts-btn btn-primary color-h-black"
                    >
                      Speak To A Consultant
                    </Link>

                    <Link href="/our-service" className={styles.secondaryBtn}>
                      Explore Services
                    </Link>
                  </div>

                  <ul className={styles.heroChecklist}>
                    <li>Property Search Support</li>
                    <li>Offer & Negotiation Guidance</li>
                    <li>Survey & Legal Process Guidance</li>
                    <li>Completion Preparation</li>
                  </ul>

                  <img
                    className="shape-img one"
                    src="/assets/images/banner/shape/01.png"
                    alt="HomeStartGuide decorative shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="animation-img">
          <img
            className="shape-img two"
            src="/assets/images/banner/shape/02.png"
            alt="HomeStartGuide decorative shape"
          />
          <img
            className="shape-img three"
            src="/assets/images/banner/shape/03.png"
            alt="HomeStartGuide decorative shape"
          />
        </div>
      </div>
    </main>
  );
}
