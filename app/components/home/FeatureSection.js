import React from "react";

export default function FeatureSection() {
  return (
    <main>
      <div>
        <div className="rts-feature-area rts-section-gap">
          <div className="container-fluid padding-controler plr--120">
            <div className="row bg-white-feature  pt--120 pb--120">
              <div className="col-xl-6 col-lg-12">
                <div className="feature-left-area">
                  <img src="/assets/images/feature/01.png" alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-12">
                <div className="rts-title-area feature text-start pl--30 pl_sm--0">
                  <p className="pre-title">Boost Your Business Today</p>
                  <h2 className="title feature-title">
                    Most Reliable Efficient <br />
                    Consulting Agency
                  </h2>
                  <p>
                    Porttitor ornare fermentum aliquam pharetra ut facilisis
                    gravida risus suscipit feugiat fusce conubia ridiculus
                    tristique solving parturient natoque vulputate risu hasellus
                    quam tincidunt posuere aliquam accumsan
                  </p>
                </div>
                <div className="feature-one-wrapper pl--30 mt--40 pl_sm--0">
                  <div className="single-feature-one">
                    <i className="fal fa-check"></i>
                    <p>Fast Growing Sells</p>
                  </div>
                  <div className="single-feature-one">
                    <i className="fal fa-check"></i>
                    <p>24/7 Quality Services</p>
                  </div>
                  <div className="single-feature-one">
                    <i className="fal fa-check"></i>
                    <p>Expert Members</p>
                  </div>
                  <div className="single-feature-one">
                    <i className="fal fa-check"></i>
                    <p>Best Quality Services</p>
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
