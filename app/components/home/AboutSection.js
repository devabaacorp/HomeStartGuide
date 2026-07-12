import Link from "next/link";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className="rts-about-area rts-section-gap bg-about-sm-shape">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-md-2 order-sm-2 order-2 mt_md--50 mt_sm--50">
              <div className="rts-title-area">
                <p className="pre-title">Why Choose HomeStartGuide?</p>

                <h2 className="title">
                  Clear Guidance For UK First-Time Home Buyers
                </h2>
              </div>

              <div className="about-inner">
                <p className="disc">
                  Buying your first home can feel confusing, stressful, and full
                  of unknown steps. HomeStartGuide helps first-time buyers
                  understand the full journey clearly — from mortgage
                  preparation and government schemes to property search, offers,
                  legal steps, and completion.
                </p>

                <div className="row about-success-wrapper">
                  <div className="col-lg-6 col-md-6">
                    <div className="single">
                      <i className="far fa-check"></i>
                      <p className="details">First-Time Buyer Guidance</p>
                    </div>

                    <div className="single">
                      <i className="far fa-check"></i>
                      <p className="details">Mortgage Readiness Support</p>
                    </div>

                    <div className="single">
                      <i className="far fa-check"></i>
                      <p className="details">Government Scheme Guidance</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="single">
                      <i className="far fa-check"></i>
                      <p className="details">Property Search Assistance</p>
                    </div>

                    <div className="single">
                      <i className="far fa-check"></i>
                      <p className="details">Offer & Negotiation Support</p>
                    </div>

                    <div className="single">
                      <i className="far fa-check"></i>
                      <p className="details">Step-by-Step Buying Roadmap</p>
                    </div>
                  </div>
                </div>

                <p className={styles.disclaimer}>
                  We provide general home-buying education and practical
                  guidance. Regulated mortgage, financial, or legal advice
                  should be taken from qualified professionals where required.
                </p>

                <div className="row about-founder-wrapper align-items-center mt--40">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="author-inner">
                      <Link className="thumbnail" href="/about-us">
                        <img
                          src="/assets/images/about/sm-01.png"
                          alt="HomeStartGuide consultant"
                        />
                      </Link>

                      <div className="founder-details">
                        <Link href="/about-us">
                          <h6 className="title">HomeStartGuide Team</h6>
                        </Link>
                        <span>First-Time Buyer Support</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_sm--20">
                    <div className="author-call-option">
                      <img
                        className="authore-call"
                        src="/assets/images/about/call.svg"
                        alt="Call HomeStartGuide"
                      />

                      <div className="call-details">
                        <span>Call us anytime</span>
                        <a href="tel:+447466831291">
                          <h6 className="title">+44 7466 831291</h6>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.aboutButtonWrapper}>
                  <Link href="/contactus" className={styles.aboutButton}>
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-md-1 order-sm-1 order-1">
              <div className="about-one-thumbnail">
                <img
                  src="/assets/images/about/main/about-01.png"
                  alt="UK first-time home buyer guidance"
                />

                <img
                  className="small-img"
                  src="/assets/images/about/main/about-02.png"
                  alt="UK home buying support"
                />

                <div className="experience">
                  <div className="left single">
                    <h2 className="title">8</h2>
                    <p className="time">Steps</p>
                  </div>

                  <div className="right single">
                    <p className="disc">
                      Simple roadmap from preparation to completion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
