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
                  Hands-On Buyer Protection Before You Commit
                </h2>
              </div>

              <div className="about-inner">
                <p className="disc">
                  HomeStartGuide helps first-time buyers and auction buyers make
                  safer, better-informed property decisions. Instead of going to
                  viewings alone, you can have practical support from someone
                  with 2+ years of estate agency and auction house experience —
                  helping you spot visible red flags, understand agent pressure,
                  prepare your documents, and negotiate with more confidence.
                </p>

                <div className="row about-success-wrapper">
                  <div className="col-lg-6 col-md-6">
                    <div className="single">
                      <i className="far fa-check"></i>
                      <p className="details">In-Person Viewing Support</p>
                    </div>

                    <div className="single">
                      <i className="far fa-check"></i>
                      <p className="details">
                        Visible Property Red Flag Checks
                      </p>
                    </div>

                    <div className="single">
                      <i className="far fa-check"></i>
                      <p className="details">Ex-Estate Agent Insight</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="single">
                      <i className="far fa-check"></i>
                      <p className="details">Negotiation Support</p>
                    </div>

                    <div className="single">
                      <i className="far fa-check"></i>
                      <p className="details">Auction Buyer Guidance</p>
                    </div>

                    <div className="single">
                      <i className="far fa-check"></i>
                      <p className="details">AML Preparation Support</p>
                    </div>
                  </div>
                </div>

                <p className={styles.disclaimer}>
                  HomeStartGuide provides non-regulated buyer representation,
                  property viewing assistance, negotiation support, and AML
                  pre-screening preparation. Regulated mortgage advice, formal
                  building surveys, and legal conveyancing are provided by
                  qualified third-party specialists.
                </p>

                <div className="row about-founder-wrapper align-items-center mt--40">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="author-inner">
                      <Link className="thumbnail" href="/about-us">
                        <img
                          src="/assets/images/about/sm-01.png"
                          alt="HomeStartGuide buyer advocate"
                        />
                      </Link>

                      <div className="founder-details">
                        <Link href="/about-us">
                          <h6 className="title">HomeStartGuide Team</h6>
                        </Link>
                        <span>Buyer Advocate Support</span>
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
                    Book Your Viewing Companion (£500)
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-md-1 order-sm-1 order-1">
              <div className="about-one-thumbnail">
                <img
                  src="/assets/images/about/main/about-01.png"
                  alt="UK property viewing support"
                />

                <img
                  className="small-img"
                  src="/assets/images/about/main/about-02.png"
                  alt="UK buyer advocate support"
                />

                <div className="experience">
                  <div className="left single">
                    <h2 className="title">£500</h2>
                    <p className="time">Flat Fee</p>
                  </div>

                  <div className="right single">
                    <p className="disc">
                      Viewing companion package to help protect your property
                      decision
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
