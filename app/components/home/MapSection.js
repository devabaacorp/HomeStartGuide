import styles from "./MapSection.module.css";

const address = "40 Winsford Terrace, Great Cambridge Road, London N18 1BS";
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
