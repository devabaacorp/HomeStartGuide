import Link from "next/link";
import React from "react";

export default function TeamSection() {
  return (
    <main>
      {" "}
      <div>
        <div className="rts-team-area rts-section-gap bg-team">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="rts-title-area team text-center">
                  <p className="pre-title">Professionals Team</p>
                  <h2 className="title">Professionals Team</h2>
                </div>
              </div>
            </div>
            <div className="row g-5 mt--0">
              <div className="swiper mySwiperh1_team">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="team-single-one-start">
                      <div className="team-image-area">
                        <Link href="/team-details">
                          <img
                            src="/assets/images/team/tm/01.jpg"
                            alt="Business_Team_single"
                          />
                          <div className="team-social">
                            <div className="main">
                              <i className="fal fa-plus"></i>
                            </div>
                            <div className="team-social-one">
                              <i className="fab fa-youtube"></i>
                              <i className="fab fa-twitter"></i>
                              <i className="fab fa-instagram"></i>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="single-details">
                        <Link href="/team-details">
                          <h5 className="title">Archer Graham</h5>
                        </Link>
                        <p>Founder</p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="team-single-one-start">
                      <div className="team-image-area">
                        <Link href="/team-details">
                          <img
                            src="/assets/images/team/tm/02.jpg"
                            alt="Business_Team_single"
                          />
                          <div className="team-social">
                            <div className="main">
                              <i className="fal fa-plus"></i>
                            </div>
                            <div className="team-social-one">
                              <i className="fab fa-youtube"></i>
                              <i className="fab fa-twitter"></i>
                              <i className="fab fa-instagram"></i>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="single-details">
                        <Link href="/team-details">
                          <h5 className="title">Amelia Clover</h5>
                        </Link>
                        <p>Co-Founder</p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="team-single-one-start">
                      <div className="team-image-area">
                        <Link href="/team-details">
                          <img
                            src="/assets/images/team/tm/03.jpg"
                            alt="Business_Team_single"
                          />
                          <div className="team-social">
                            <div className="main">
                              <i className="fal fa-plus"></i>
                            </div>
                            <div className="team-social-one">
                              <i className="fab fa-youtube"></i>
                              <i className="fab fa-twitter"></i>
                              <i className="fab fa-instagram"></i>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="single-details">
                        <Link href="/team-details">
                          <h5 className="title">Beckett Hayden</h5>
                        </Link>
                        <p>Deputy Manager</p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="team-single-one-start">
                      <div className="team-image-area">
                        <Link href="/team-details">
                          <img
                            src="/assets/images/team/tm/04.jpg"
                            alt="Business_Team_single"
                          />
                          <div className="team-social">
                            <div className="main">
                              <i className="fal fa-plus"></i>
                            </div>
                            <div className="team-social-one">
                              <i className="fab fa-youtube"></i>
                              <i className="fab fa-twitter"></i>
                              <i className="fab fa-instagram"></i>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="single-details">
                        <Link href="/team-details">
                          <h5 className="title">Julian Wyat</h5>
                        </Link>
                        <p>Finance Manager</p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="team-single-one-start">
                      <div className="team-image-area">
                        <Link href="/team-details">
                          <img
                            src="/assets/images/team/tm/04.jpg"
                            alt="Business_Team_single"
                          />
                          <div className="team-social">
                            <div className="main">
                              <i className="fal fa-plus"></i>
                            </div>
                            <div className="team-social-one">
                              <i className="fab fa-youtube"></i>
                              <i className="fab fa-twitter"></i>
                              <i className="fab fa-instagram"></i>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="single-details">
                        <Link href="/team-details">
                          <h5 className="title">Julian Wyat</h5>
                        </Link>
                        <p>Finance Manager</p>
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
