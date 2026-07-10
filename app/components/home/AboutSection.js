import Link from "next/link";
import React from "react";

export default function AboutSection() {
  return (
    <main>
      <div>
        <div
          className="rts-about-area rts-section-gap bg-about-sm-shape"
          id="about"
        >
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-md-2 order-sm-2 order-2 mt_md--50 mt_sm--50">
                <div className="rts-title-area">
                  <p className="pre-title">More About Us</p>
                  <h2 className="title">
                    We Provide Best Business Solution in Town
                  </h2>
                </div>
                <div className="about-inner">
                  <p className="disc">
                    Porttitor ornare fermentum aliquam pharetra ut facilisis
                    gravida risus suscipit. dui feugiat fusce conubia ridiculus
                    tristique parturient natoque vulputate risu business
                    solution ceter 24/7 great support
                  </p>
                  <div className="row about-success-wrapper">
                    <div className="col-lg-6 col-md-6">
                      <div className="single">
                        <i className="far fa-check"></i>
                        <p className="details">24/7 Call Services Avilable</p>
                      </div>
                      <div className="single">
                        <i className="far fa-check"></i>
                        <p className="details">Great Skilled Consultant</p>
                      </div>
                      <div className="single">
                        <i className="far fa-check"></i>
                        <p className="details">Expert Team Members</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="single">
                        <i className="far fa-check"></i>
                        <p className="details">How to improve business</p>
                      </div>
                      <div className="single">
                        <i className="far fa-check"></i>
                        <p className="details">Business is the best plan</p>
                      </div>
                      <div className="single">
                        <i className="far fa-check"></i>
                        <p className="details">Services we provide</p>
                      </div>
                    </div>
                  </div>
                  <div className="row about-founder-wrapper align-items-center mt--40">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="author-inner">
                        <a className="thumbnail" href="#">
                          <img
                            src="/assets/images/about/sm-01.png"
                            alt="finbiz_founder"
                          />
                        </a>
                        <div className="founder-details">
                          <Link href="/team-details-2">
                            <h6 className="title">Adrew David</h6>
                          </Link>
                          <span>CEO & Founder</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_sm--20">
                      <div className="author-call-option">
                        <img
                          className="authore-call"
                          src="/assets/images/about/call.svg"
                          alt="call_founder"
                        />
                        <div className="call-details">
                          <span>Call us anytime</span>
                          <a href="tel:+18475555555">
                            <h6 className="title">+256 21458.2146</h6>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-md-1 order-sm-1 order-1">
                <div className="about-one-thumbnail">
                  <img
                    src="/assets/images/about/main/about-01.png"
                    alt="about-finbiz"
                  />
                  <img
                    className="small-img"
                    src="/assets/images/about/main/about-02.png"
                    alt="finbiz-small"
                  />
                  <div className="experience">
                    <div className="left single">
                      <h2 className="title">25+</h2>
                      <p className="time">Years</p>
                    </div>
                    <div className="right single">
                      <p className="disc">
                        Of experience in consulting service
                      </p>
                    </div>
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
