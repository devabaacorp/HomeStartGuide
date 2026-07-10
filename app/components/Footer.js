// import Link from "next/link";

// export default function Footer() {
//   return (
//     <>
//       <div
//         className="rts-footer-area footer-one rts-section-gapTop bg-footer-one"
//         id="f-contact"
//       >
//         <div className="container bg-shape-f1">
//           <div className="row">
//             <div className="col-12">
//               <div className="rts-cta-wrapper">
//                 <div className="background-cta">
//                   <div className="row">
//                     <div className="col-lg-6">
//                       <div className="cta-left-wrapepr">
//                         <p className="cta-disc">Latest Business Ideas</p>
//                         <h3 className="title">Sign Up Newsletter</h3>
//                       </div>
//                     </div>
//                     <div className="col-lg-6">
//                       <form className="cta-input-arae">
//                         <input
//                           type="email"
//                           placeholder="Enter Email Address"
//                           name="email"
//                         />
//                         <button type="submit" className="rts-btn btn-primary">
//                           Subscribe Now
//                         </button>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row pt--120 pt_sm--80 pb--80 pb_sm--40">
//             <div className="col-xl-4 col-md-6 col-sm-12 col-12">
//               <div className="footer-one-single-wized">
//                 <div className="wized-title">
//                   <h5 className="title">Quick Links</h5>
//                   <img
//                     src="/assets/images/footer/under-title.png"
//                     alt="finbiz_footer"
//                   />
//                 </div>
//                 <div className="quick-link-inner">
//                   <ul className="links">
//                     <li>
//                       <a href="#">
//                         <i className="far fa-arrow-right"></i> Forum Support
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#">
//                         <i className="far fa-arrow-right"></i> Help & FAQ
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#">
//                         <i className="far fa-arrow-right"></i> Contact Us
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#">
//                         <i className="far fa-arrow-right"></i> Pricing & Plans
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#">
//                         <i className="far fa-arrow-right"></i> Cookie Policy
//                       </a>
//                     </li>
//                   </ul>
//                   <ul className="links margin-left-70">
//                     <li>
//                       <a href="#">
//                         <i className="far fa-arrow-right"></i> About Us
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#">
//                         <i className="far fa-arrow-right"></i> My Account
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#">
//                         <i className="far fa-arrow-right"></i>Our Company
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#">
//                         <i className="far fa-arrow-right"></i>Service
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-4 col-md-6 col-sm-12 col-12">
//               <div className="footer-one-single-wized mid-bg">
//                 <div className="wized-title">
//                   <h5 className="title">Opening Hours</h5>
//                   <img
//                     src="/assets/images/footer/under-title.png"
//                     alt="finbiz_footer"
//                   />
//                 </div>
//                 <div className="opening-time-inner">
//                   <div className="single-opening">
//                     <p className="day">Week Days</p>
//                     <p className="time">09.00 - 24:00</p>
//                   </div>
//                   <div className="single-opening">
//                     <p className="day">Saturday</p>
//                     <p className="time">08:00 - 03.00</p>
//                   </div>
//                   <div className="single-opening mb--30 mb_sm--10">
//                     <p className="day">Sunday</p>
//                     <p className="time">Day Off</p>
//                   </div>
//                   <Link
//                     className="rts-btn btn-primary contact-us"
//                     href="/contactus"
//                   >
//                     Contact Us
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-4 col-md-6 col-sm-12 col-12">
//               <div className="footer-one-single-wized margin-left-65">
//                 <div className="wized-title">
//                   <h5 className="title">Popular Updates</h5>
//                   <img
//                     src="/assets/images/footer/under-title.png"
//                     alt="finbiz_footer"
//                   />
//                 </div>
//                 <div className="post-wrapper">
//                   <div className="single-footer-post mb--30">
//                     <div className="left-thumbnail">
//                       <img
//                         src="/assets/images/footer/post/01.png"
//                         alt="finbiz_business-post"
//                       />
//                     </div>
//                     <div className="post-right">
//                       <p>
//                         {" "}
//                         <i className="fal fa-clock"></i> 15th April, 2024
//                       </p>
//                       <Link href="/blog-details-default">
//                         <h6 className="title">
//                           Best Business Ideas For Getting Solution
//                         </h6>
//                       </Link>
//                       <Link className="red-more" href="/blog-details-default">
//                         Read More<i className="far fa-arrow-right"></i>
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="single-footer-post">
//                     <div className="left-thumbnail">
//                       <img
//                         src="/assets/images/footer/post/02.png"
//                         alt="finbiz_business-post"
//                       />
//                     </div>
//                     <div className="post-right">
//                       <p>
//                         {" "}
//                         <i className="fal fa-clock"></i> 15th April, 2022
//                       </p>
//                       <Link href="/blog-details-default">
//                         <h6 className="title">
//                           Best Business Ideas For Getting Solution
//                         </h6>
//                       </Link>
//                       <Link className="red-more" href="/blog-details-default">
//                         Read More<i className="far fa-arrow-right"></i>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="rts-copyright-area">
//           <div className="container">
//             <div className="row">
//               <div className="col-12">
//                 <div className="text-center">
//                   <p>FINBIZ - Copyright 2022. All rights reserved.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="progress-wrap">
//         <svg
//           className="progress-circle svg-content"
//           width="100%"
//           height="100%"
//           viewbox="-1 -1 102 102"
//         >
//           <path
//             d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
//             style={{
//               transition: "stroke-dashoffset 10ms linear 0s",
//               strokeDasharray: "307.919, 307.919",
//               strokeDashoffset: "307.919",
//             }}
//           ></path>
//         </svg>
//       </div>
//       <div className="rts-switcher"></div>
//     </>
//   );
// }

import Link from "next/link";
import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/our-service" },
  { label: "Buyer Roadmap", href: "/#buyer-roadmap" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contactus" },
];

const services = [
  {
    label: "First-Time Buyer Consultation",
    href: "/our-service#first-time-buyer-consultation",
  },
  {
    label: "Mortgage Guidance",
    href: "/our-service#mortgage-guidance",
  },
  {
    label: "Government Scheme Guidance",
    href: "/our-service#government-schemes",
  },
  {
    label: "Property Search Support",
    href: "/our-service#property-search-support",
  },
  {
    label: "Offer & Negotiation Guidance",
    href: "/our-service#offer-negotiation",
  },
  {
    label: "Conveyancing Guidance",
    href: "/our-service#conveyancing-guidance",
  },
];

const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter/X", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <>
      <footer className={styles.footer} id="f-contact">
        <div className={styles.ctaArea}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <div>
                <p className={styles.ctaSmall}>Ready To Get Started?</p>
                <h3>Buy Your First Home With Confidence</h3>
                <p className={styles.ctaText}>
                  Get clear guidance, practical support, and a step-by-step
                  roadmap for your first home-buying journey in the UK.
                </p>
              </div>

              <Link href="/contactus" className={styles.ctaButton}>
                Book Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.footerMain}>
          <div className={styles.container}>
            <div className={styles.footerGrid}>
              <div className={styles.footerColumn}>
                <Link href="/" className={styles.logo}>
                  <span className={styles.logoIcon}>H</span>
                  <span className={styles.logoText}>
                    HomeStart<span>Guide</span>
                  </span>
                </Link>

                <p className={styles.aboutText}>
                  HomeStartGuide helps first-time buyers understand the UK
                  property-buying process with clear guidance, practical
                  support, and confidence at every step.
                </p>

                <div className={styles.socialLinks}>
                  {socialLinks.map((item) => (
                    <a key={item.label} href={item.href}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className={styles.footerColumn}>
                <h5 className={styles.footerTitle}>Quick Links</h5>

                <ul className={styles.linkList}>
                  {quickLinks.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.footerColumn}>
                <h5 className={styles.footerTitle}>Our Services</h5>

                <ul className={styles.linkList}>
                  {services.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.footerColumn}>
                <h5 className={styles.footerTitle}>Contact Us</h5>

                <ul className={styles.contactList}>
                  <li>
                    <span>Phone</span>
                    <a href="tel:+447466831291">+44 7466 831291</a>
                  </li>

                  <li>
                    <span>Email</span>
                    <a href="mailto:info@homestartguide.com">
                      info@homestartguide.com
                    </a>
                  </li>

                  <li>
                    <span>Address</span>
                    <p>40 Winsford Terrace, London 3SD 1BS</p>
                  </li>
                </ul>

                <Link href="/contactus" className={styles.contactButton}>
                  Contact Us
                </Link>
              </div>
            </div>

            <div className={styles.disclaimer}>
              <strong>Important:</strong> HomeStartGuide provides general
              guidance and educational support for first-time buyers. We do not
              provide regulated mortgage, financial, or legal advice. Where
              required, we can connect you with qualified professionals.
            </div>

            <div className={styles.copyrightArea}>
              <p>© 2026 HomeStartGuide. All rights reserved.</p>

              <div className={styles.legalLinks}>
                {legalLinks.map((item) => (
                  <Link key={item.label} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "307.919",
            }}
          ></path>
        </svg>
      </div>

      <div className="rts-switcher"></div>
    </>
  );
}
