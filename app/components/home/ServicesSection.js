import Link from "next/link";
import React from "react";

export default function ServicesSection() {
  return (
    <main>
      <div>
        <div className="rts-service-area rts-section-gapBottom" id="service">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="rts-title-area service text-center">
                  <p className="pre-title">Our Services</p>
                  <h2 className="title">High Quality Services</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid service-main plr--120-service mt--50 plr_md--0 pl_sm--0 pr_sm--0">
            <div className="background-service row">
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="service-one-inner one">
                  <div className="thumbnail">
                    <img
                      src="/assets/images/service/icon/01.svg"
                      alt="finbiz_service"
                    />
                  </div>
                  <div className="service-details">
                    <Link href="/service-details">
                      <h5 className="title">Business Planning</h5>
                    </Link>
                    <p className="disc">
                      Sagitis himos pulvinar morb socis laoreet posuere enim non
                      auctor etiam pretium libero
                    </p>
                    <Link
                      className="rts-read-more btn-primary"
                      href="/service-details"
                    >
                      <i className="far fa-arrow-right"></i>Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="service-one-inner two">
                  <div className="thumbnail">
                    <img
                      src="/assets/images/service/icon/02.svg"
                      alt="finbiz_service"
                    />
                  </div>
                  <div className="service-details">
                    <Link href="/service-details">
                      <h5 className="title">Develop Process</h5>
                    </Link>
                    <p className="disc">
                      Sagitis himos pulvinar morb socis laoreet posuere enim non
                      auctor etiam pretium libero
                    </p>
                    <Link
                      className="rts-read-more btn-primary"
                      href="/service-details"
                    >
                      <i className="far fa-arrow-right"></i>Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="service-one-inner three">
                  <div className="thumbnail">
                    <img
                      src="/assets/images/service/icon/03.svg"
                      alt="finbiz_service"
                    />
                  </div>
                  <div className="service-details">
                    <Link href="/service-details">
                      <h5 className="title">Strategy & Planning</h5>
                    </Link>
                    <p className="disc">
                      Sagitis himos pulvinar morb socis laoreet posuere enim non
                      auctor etiam pretium libero
                    </p>
                    <Link
                      className="rts-read-more btn-primary"
                      href="/service-details"
                    >
                      <i className="far fa-arrow-right"></i>Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="service-one-inner four">
                  <div className="thumbnail">
                    <img
                      src="/assets/images/service/icon/04.svg"
                      alt="finbiz_service"
                    />
                  </div>
                  <div className="service-details">
                    <Link href="/service-details">
                      <h5 className="title">Business Support</h5>
                    </Link>
                    <p className="disc">
                      Sagitis himos pulvinar morb socis laoreet posuere enim non
                      auctor etiam pretium libero
                    </p>
                    <Link
                      className="rts-read-more btn-primary"
                      href="/service-details"
                    >
                      <i className="far fa-arrow-right"></i>Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="service-one-inner five">
                  <div className="thumbnail">
                    <img
                      src="/assets/images/service/icon/05.svg"
                      alt="finbiz_service"
                    />
                  </div>
                  <div className="service-details">
                    <Link href="/service-details">
                      <h5 className="title">Audit & Evaluation</h5>
                    </Link>
                    <p className="disc">
                      Sagitis himos pulvinar morb socis laoreet posuere enim non
                      auctor etiam pretium libero
                    </p>
                    <Link
                      className="rts-read-more btn-primary"
                      href="/service-details"
                    >
                      <i className="far fa-arrow-right"></i>Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="service-one-inner six">
                  <div className="thumbnail">
                    <img
                      src="/assets/images/service/icon/06.svg"
                      alt="finbiz_service"
                    />
                  </div>
                  <div className="service-details">
                    <Link href="/service-details">
                      <h5 className="title">Consultancy & Advice</h5>
                    </Link>
                    <p className="disc">
                      Sagitis himos pulvinar morb socis laoreet posuere enim non
                      auctor etiam pretium libero
                    </p>
                    <Link
                      className="rts-read-more btn-primary"
                      href="/service-details"
                    >
                      <i className="far fa-arrow-right"></i>Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cta-one-bg col-12">
                <div className="cta-one-inner">
                  <div className="cta-left">
                    <h3 className="title">
                      Let’s discuss about how we can help make your business
                      better
                    </h3>
                  </div>
                  <div className="cta-right">
                    <Link className="rts-btn btn-white" href="/appoinment-2">
                      Lets Work Together
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
