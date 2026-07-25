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
                    <span>Buyer Protection.</span> Viewing Companion Support
                  </p>

                  <h1 className="title">
                    Never Go to a Property <br />
                    <span>Viewing Alone Again.</span>
                  </h1>

                  <p className={`disc banner-para ${styles.heroDescription}`}>
                    We attend property viewings with you, spot hidden structural
                    red flags, protect you from high-pressure estate agent
                    tactics, and negotiate the fair price—for a flat £500
                    one-off fee.
                  </p>

                  <div className={styles.heroButtons}>
                    <Link
                      href="/contactus"
                      className="rts-btn btn-primary color-h-black"
                    >
                      Book Your Viewing Companion (£500)
                    </Link>

                    <Link href="/contactus" className={styles.secondaryBtn}>
                      Claim Your Free 15-Min Strategy Call
                    </Link>
                  </div>

                  <ul className={styles.heroChecklist}>
                    <li>In-Person Property Viewing Support</li>
                    <li>Estate Agent Pressure Protection</li>
                    <li>Negotiation Support Before You Offer</li>
                    <li>Auction Buyer Guidance</li>
                    <li>Flat £500 One-Off Viewing Companion Package</li>
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
                    <span>Ex-Agent Insight.</span> Avoid Overpaying
                  </p>

                  <h1 className="title">
                    Get Protected From <br />
                    <span>Costly Buyer Mistakes</span>
                  </h1>

                  <p className={`disc banner-para ${styles.heroDescription}`}>
                    With 2+ years of estate agency and auction house experience,
                    we help first-time buyers and auction buyers understand
                    property risks, agent tactics, pricing pressure, and offer
                    strategy before they commit.
                  </p>

                  <div className={styles.heroButtons}>
                    <Link
                      href="/contactus"
                      className="rts-btn btn-primary color-h-black"
                    >
                      Get Expert Negotiation Support
                    </Link>

                    <Link href="/#services" className={styles.secondaryBtn}>
                      Explore Buyer Support
                    </Link>
                  </div>

                  <ul className={styles.heroChecklist}>
                    <li>Ex-Estate Agent Negotiation Support</li>
                    <li>Property Red Flag Awareness</li>
                    <li>Fair Price Guidance</li>
                    <li>First-Time Buyer Confidence</li>
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
                    <span>Auction Ready.</span> Bid With More Control
                  </p>

                  <h1 className="title">
                    Don’t Risk Auction <br />
                    <span>Deposit Traps</span>
                  </h1>

                  <p className={`disc banner-para ${styles.heroDescription}`}>
                    We guide auction buyers through key auction risks, legal
                    pack awareness, bidding pressure, non-refundable deposit
                    concerns, and AML preparation before they make a serious
                    commitment.
                  </p>

                  <div className={styles.heroButtons}>
                    <Link
                      href="/contactus"
                      className="rts-btn btn-primary color-h-black"
                    >
                      Book Auction Buyer Support
                    </Link>

                    <Link
                      href="/#buyer-roadmap"
                      className={styles.secondaryBtn}
                    >
                      View Buyer Roadmap
                    </Link>
                  </div>

                  <ul className={styles.heroChecklist}>
                    <li>Auction House Experience</li>
                    <li>Legal Pack Awareness</li>
                    <li>AML Preparation Support</li>
                    <li>Deposit Risk Awareness</li>
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
