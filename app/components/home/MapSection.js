// import React from "react";

// export default function MapSection() {
//   return (
//     <main>
//       {" "}
//       <div>
//         <div className="rts-map-area bg-light-white" id="address">
//           <div className="container-fluid">
//             <div className="row align-items-center">
//               <div className="col-lg-6">
//                 <div className="mapdetails-inner-one">
//                   <div className="left-area single-wized">
//                     <h5 className="title">Get in touch</h5>
//                     <div className="details">
//                       <p>Work and general inquiries</p>
//                       <a className="number" href="#">
//                         +3509.120-8605
//                       </a>
//                       <p className="time-header">Assistance hours:</p>
//                       <p className="time">
//                         Monday – Friday <br /> 6 am to 8 pm EST
//                       </p>
//                     </div>
//                   </div>
//                   <div className="right-area single-wized">
//                     <h5 className="title">Post Address</h5>
//                     <div className="details">
//                       <p>Service Office</p>
//                       <a href="#">
//                         786 Dortans Ave, Otam Sites, <br />
//                         CA 36108, United States
//                       </a>
//                       <p className="headoffice">Head Office</p>
//                       <p className="office">142 Drive Lane. USA</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.288851207937!2d90.47855065!3d23.798243149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1663151706353!5m2!1sen!2sbd"
//                   width="600"
//                   height="450"
//                   style={{ border: "0" }}
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

import styles from "./MapSection.module.css";

const address = "40 Winsford Terrace, London 3SD 1BS";
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  address,
)}&output=embed`;

export default function MapSection() {
  return (
    <section className={styles.mapSection} id="map">
      <div className="container-fluid p-0">
        <div className="row g-0 align-items-stretch">
          <div className="col-lg-5">
            <div className={styles.detailsPanel}>
              <p className={styles.preTitle}>Location & Contact</p>

              <h2>Reach HomeStartGuide</h2>

              <p className={styles.intro}>
                Contact us for first-time buyer guidance, mortgage readiness
                support, property search direction, and general home-buying
                enquiries.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <div className={styles.icon}>
                    <i className="fas fa-phone-alt"></i>
                  </div>

                  <div>
                    <h3>Phone</h3>
                    <a href="tel:+447466831291">+44 7466 831291</a>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.icon}>
                    <i className="fas fa-envelope"></i>
                  </div>

                  <div>
                    <h3>Email</h3>
                    <a href="mailto:info@homestartguide.com">
                      info@homestartguide.com
                    </a>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.icon}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>

                  <div>
                    <h3>Address</h3>
                    <p>{address}</p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.icon}>
                    <i className="fas fa-calendar-check"></i>
                  </div>

                  <div>
                    <h3>Consultation</h3>
                    <p>
                      Available by appointment. Contact us to arrange a suitable
                      time.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.noticeBox}>
                <strong>Important:</strong> HomeStartGuide provides general
                education and practical guidance. Regulated mortgage, financial,
                or legal advice should be taken from qualified professionals
                where required.
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className={styles.mapWrapper}>
              <iframe
                src={mapSrc}
                title="HomeStartGuide Location Map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
