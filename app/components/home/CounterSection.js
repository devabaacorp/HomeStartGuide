import React from "react";

export default function CounterSection() {
  return (
    <main>
      <div>
        <div className="rts-counter-up-area rts-section-gap counter-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="single-counter">
                  <img
                    src="/assets/images/counterup/icon/01.svg"
                    alt="Business_counter"
                  />
                  <div className="counter-details">
                    <p className="disc">Media Activities</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="single-counter pl--10 justify-content-center two pl--30">
                  <img
                    src="/assets/images/counterup/icon/02.svg"
                    alt="Business_counter"
                  />
                  <div className="counter-details">
                    <p className="disc">Media Activities</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="single-counter pl--10 justify-content-center three pl--50">
                  <img
                    src="/assets/images/counterup/icon/03.svg"
                    alt="Business_counter"
                  />
                  <div className="counter-details">
                    <p className="disc">Media Activities</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="single-counter pl--10 justify-content-end four">
                  <img
                    src="/assets/images/counterup/icon/04.svg"
                    alt="Business_counter"
                  />
                  <div className="counter-details">
                    <p className="disc">Serv Activities</p>
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
