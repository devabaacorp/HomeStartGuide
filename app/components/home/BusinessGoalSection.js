import Link from "next/link";
import React from "react";

export default function BusinessGoalSection() {
  return (
    <main>
      <div>
        <div
          className="rts-business-goal mt--0 rts-section-gapBottom"
          id="goal"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="business-goal-one">
                  <img
                    src="/assets/images/business-goal/01.jpg"
                    alt="Business_Goal"
                  />
                  <img
                    className="small"
                    src="/assets/images/business-goal/sm-01.jpg"
                    alt="Business_Goal"
                  />
                </div>
              </div>
              <div className="col-lg-6 mt--35 mt_md--70 mt_sm--70">
                <div className="business-goal-right">
                  <div className="rts-title-area business text-start pl--30">
                    <p className="pre-title">JUST A CONSULTANCY</p>
                    <h2 className="title">
                      We know how to manage business globally
                    </h2>
                  </div>
                  <div className="rts-business-goal pl--30">
                    <div className="single-goal">
                      <img
                        src="/assets/images/business-goal/icon/01.svg"
                        alt="business_Icone"
                        className="thumb"
                      />
                      <div className="goal-wrapper">
                        <h6 className="title">Best Business Consulting</h6>
                        <p className="disc">
                          Fusce condimentum mattis placerat odio donec lacus
                          porta torquent, mauris gravida rutrum
                        </p>
                      </div>
                    </div>
                    <div className="single-goal">
                      <img
                        src="/assets/images/business-goal/icon/02.svg"
                        alt="business_Icone"
                        className="thumb"
                      />
                      <div className="goal-wrapper">
                        <h6 className="title">24/7 Customer Support</h6>
                        <p className="disc">
                          Fusce condimentum mattis placerat odio donec lacus
                          porta torquent, mauris gravida rutrum
                        </p>
                      </div>
                    </div>
                    <div className="goal-button-wrapper mt--70">
                      <Link
                        className="rts-btn btn-primary color-h-black"
                        href="/contactus"
                      >
                        Contact Us
                      </Link>
                      <div className="vedio-icone">
                        <a
                          id="play-video"
                          className="video-play-button"
                          href="#"
                        >
                          <span></span>
                          <span className="outer-text">Watch Video</span>
                        </a>
                      </div>
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
