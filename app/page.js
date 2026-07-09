import Link from "next/link";

export default function Page() {
  return (
    <>
      <div>
        <div className="rts-banner-area rts-banner-one" id="banner">
          <div className="swiper mySwiper banner-one">
            <div className="swiper rts-brand__slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="banner-one-inner text-start">
                    <p className="pre-title">
                      <span>Welcome!</span> Start Growing Your Business Today
                    </p>
                    <h1 className="title ">
                      Make <span>Business Unique </span> <br />
                      With Great Ideas
                    </h1>
                    <p className="disc banner-para">
                      Porttitor ornare fermentum aliquam pharetra facilisis
                      gravida risus suscipit <br /> Dui feugiat fusce conubia
                      ridiculus tristique parturient
                    </p>
                    <a href="#" className="rts-btn btn-primary color-h-black">
                      Get Consultant
                    </a>
                    <img
                      className="shape-img one"
                      src="/assets/images/banner/shape/01.png"
                      alt="banner_business"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="banner-one-inner text-start">
                    <p className="pre-title">
                      <span>Welcome!</span> Start Growing Your Business Today
                    </p>
                    <h1 className="title ">
                      Launch <span>Ultra Modern</span> <br /> Effective Business
                    </h1>
                    <p className="disc banner-para">
                      Porttitor ornare fermentum aliquam pharetra facilisis
                      gravida risus suscipit <br /> Dui feugiat fusce conubia
                      ridiculus tristique parturient
                    </p>
                    <a href="#" className="rts-btn btn-primary color-h-black">
                      Get Consultant
                    </a>
                    <img
                      className="shape-img one"
                      src="/assets/images/banner/shape/01.png"
                      alt="banner_business"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="banner-one-inner text-start">
                    <p className="pre-title">
                      <span>Welcome!</span> Start Growing Your Business Today
                    </p>
                    <h1 className="title ">
                      Make <span>Business Growth</span> <br /> With Next Level
                    </h1>
                    <p className="disc banner-para">
                      Porttitor ornare fermentum aliquam pharetra facilisis
                      gravida risus suscipit <br /> Dui feugiat fusce conubia
                      ridiculus tristique parturient
                    </p>
                    <a href="#" className="rts-btn btn-primary color-h-black">
                      Get Consultant
                    </a>
                    <img
                      className="shape-img one"
                      src="/assets/images/banner/shape/01.png"
                      alt="banner_business"
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
              alt="banner_business"
            />
            <img
              className="shape-img three"
              src="/assets/images/banner/shape/03.png"
              alt="banner_business"
            />
          </div>
        </div>
      </div>
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
      <div>
        <div className="rts-gallery-area rts-section-gap gallery-bg bg_image">
          <div className="container">
            <div className="row">
              <div className="rts-title-area gallery text-start pl_sm--20">
                <p className="pre-title">Popular Projects</p>
                <h2 className="title">Our Completed Projects</h2>
              </div>
            </div>
            <div className="row mt--45">
              <div className="col-12">
                <div className="swiper mygallery mySwipers">
                  <div className="swiper mySwipers">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="row g-5 w-g-100">
                          <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                            <div className="thumbnail-gallery">
                              <img
                                src="/assets/images/gallery/gallery-01.jpg"
                                alt="business-images"
                              />
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                            <div className="bg-right-gallery">
                              <div className="icon">
                                <img
                                  src="/assets/images/gallery/icon/01.svg"
                                  alt="Business-gallery"
                                />
                              </div>
                              <Link href="/project/Business-solution">
                                <h4 className="title">Pro Business Solution</h4>
                              </Link>
                              <span>Case Study, Growth</span>
                              <p className="disc">
                                Ornare etiam laoreet dictumst nisl quisque
                                scelerisque cras ut porta interdum purus mattis
                                iaculis litora turpis torquent posuere.
                              </p>
                              <Link
                                className="rts-btn btn-primary"
                                href="/project/Business-solution"
                              >
                                View Project
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="row g-5 w-g-100">
                          <div className="col-lg-7">
                            <div className="thumbnail-gallery">
                              <img
                                src="/assets/images/gallery/gallery-02.jpg"
                                alt="business-images"
                              />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="bg-right-gallery">
                              <div className="icon">
                                <img
                                  src="/assets/images/gallery/icon/01.svg"
                                  alt="Business-gallery"
                                />
                              </div>
                              <Link href="/project/Invent-Workd">
                                <h4 className="title">Finbiz Pro Business</h4>
                              </Link>
                              <span>Case Study, Growth</span>
                              <p className="disc">
                                In the literal sense, the term “Business” means
                                the state of being busy. But it is a very wide
                                connotation of business.
                              </p>
                              <Link
                                className="rts-btn btn-primary"
                                href="/project/Invent-Workd"
                              >
                                View Project
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="row g-5 w-g-100">
                          <div className="col-lg-7">
                            <div className="thumbnail-gallery">
                              <img
                                src="/assets/images/gallery/gallery-03.jpg"
                                alt="business-images"
                              />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="bg-right-gallery">
                              <div className="icon">
                                <img
                                  src="/assets/images/gallery/icon/01.svg"
                                  alt="Business-gallery"
                                />
                              </div>
                              <Link href="/project/Modern-Solution-technology">
                                <h4 className="title">Pro Solution Business</h4>
                              </Link>
                              <span>Case Study, Growth</span>
                              <p className="disc">
                                But a very wide of business because it covers
                                every human activity. Business is really
                                concerned with the production.
                              </p>
                              <Link
                                className="rts-btn btn-primary"
                                href="/project/Modern-Solution-technology"
                              >
                                View Project
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="rts-trusted-client rts-section-gapBottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title-area-client text-center">
                  <p className="client-title">Our Trusted Clients</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="client-wrapper-one">
                <a href="#">
                  <img
                    src="/assets/images/client/01.png"
                    alt="business_finbiz"
                  />
                </a>
                <a href="#">
                  <img
                    src="/assets/images/client/02.png"
                    alt="business_finbiz"
                  />
                </a>
                <a href="#">
                  <img
                    src="/assets/images/client/03.png"
                    alt="business_finbiz"
                  />
                </a>
                <a href="#">
                  <img
                    src="/assets/images/client/04.png"
                    alt="business_finbiz"
                  />
                </a>
                <a href="#">
                  <img
                    src="/assets/images/client/05.png"
                    alt="business_finbiz"
                  />
                </a>
                <a href="#">
                  <img
                    src="/assets/images/client/06.png"
                    alt="business_finbiz"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <div>
        <div className="rts-client-feedback">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="rts-title-area reviews text-start pl--30 pt--70">
                  <p className="pre-title">Our Testimonials</p>
                  <h2 className="title">Client’s Feedbacks</h2>
                  <div className="swiper mySwipertestimonial">
                    <div className="swiper mySwipers">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="testimonial-inner">
                            <p className="disc text-start">
                              “Consectetur adipiscing elit velit porta sapien
                              purus erat nec, a ornare laoreet sem gravida
                              accumsan in commodo aliquet nascetur maecenas. Sem
                              tempus hendrerit diam mauris leo magna sociosqu
                              viverra, accumsan massa tristique egestas cum
                              sodales hac lacinia feugiat scelerisque porttitor”
                            </p>
                            <div className="testimonial-bottom-one">
                              <div className="thumbnail">
                                <img
                                  src="/assets/images/testimonials/02.png"
                                  alt="business-testimonials"
                                />
                              </div>
                              <div className="details">
                                <a href="#">
                                  <h5 className="title">David Smith</h5>
                                </a>
                                <span>JHKL Owner</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="testimonial-inner">
                            <p className="disc text-start">
                              “Consectetur adipiscing elit velit porta sapien
                              purus erat nec, a ornare laoreet sem gravida
                              accumsan in commodo aliquet nascetur maecenas. Sem
                              tempus hendrerit diam mauris leo magna sociosqu
                              viverra, accumsan massa tristique egestas cum
                              sodales hac lacinia feugiat scelerisque porttitor”
                            </p>
                            <div className="testimonial-bottom-one">
                              <div className="thumbnail">
                                <img
                                  src="/assets/images/testimonials/02.png"
                                  alt="business-testimonials"
                                />
                              </div>
                              <div className="details">
                                <a href="#">
                                  <h5 className="title">David Smith</h5>
                                </a>
                                <span>JHKL Owner</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="testimonial-inner">
                            <p className="disc text-start">
                              “Consectetur adipiscing elit velit porta sapien
                              purus erat nec, a ornare laoreet sem gravida
                              accumsan in commodo aliquet nascetur maecenas. Sem
                              tempus hendrerit diam mauris leo magna sociosqu
                              viverra, accumsan massa tristique egestas cum
                              sodales hac lacinia feugiat scelerisque porttitor”
                            </p>
                            <div className="testimonial-bottom-one">
                              <div className="thumbnail">
                                <img
                                  src="/assets/images/testimonials/02.png"
                                  alt="business-testimonials"
                                />
                              </div>
                              <div className="details">
                                <a href="#">
                                  <h5 className="title">David Smith</h5>
                                </a>
                                <span>JHKL Owner</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="rts-test-one-image-inner">
                  <img
                    src="/assets/images/testimonials/01.png"
                    alt="business_testimobials"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="rts-blog-area rts-section-gap bg-secondary"
          id="blog-section"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title-area text-center">
                  <span>Blog Posts</span>
                  <h2 className="title">News & Updates</h2>
                </div>
              </div>
            </div>
            <div className="g-5 mt--20">
              <div className="swiper ">
                <div className="swiper mySwiperh1_blog">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="single-blog-one-wrapper">
                        <div className="thumbnail">
                          <img
                            src="/assets/images/blog/02.jpg"
                            alt="business_Blog"
                          />
                          <div className="blog-badge">
                            <span>15 Jan, 2023</span>
                          </div>
                        </div>
                        <div className="blog-content">
                          <p>
                            <span>Business Solution </span>/ by David Dolean
                          </p>
                          <Link href="/blog-grid/18">
                            <h5 className="title">
                              The quick settle tips of the new ages exist{" "}
                            </h5>
                          </Link>
                          <Link
                            className="rts-read-more btn-primary"
                            href="/blog-grid/18"
                          >
                            <i className="far fa-arrow-right"></i>Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="single-blog-one-wrapper">
                        <div className="thumbnail">
                          <img
                            src="/assets/images/blog/03.jpg"
                            alt="business_Blog"
                          />
                          <div className="blog-badge">
                            <span>15 Jan, 2023</span>
                          </div>
                        </div>
                        <div className="blog-content">
                          <p>
                            <span>Business Solution </span>/ by David Dolean
                          </p>
                          <Link href="/blog-grid/19">
                            <h5 className="title">
                              Old generation settle tips of the new ages upps
                              !{" "}
                            </h5>
                          </Link>
                          <Link
                            className="rts-read-more btn-primary"
                            href="/blog-grid/19"
                          >
                            <i className="far fa-arrow-right"></i>Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="single-blog-one-wrapper">
                        <div className="thumbnail">
                          <img
                            src="/assets/images/blog/04.jpg"
                            alt="business_Blog"
                          />
                          <div className="blog-badge">
                            <span>15 Jan, 2023</span>
                          </div>
                        </div>
                        <div className="blog-content">
                          <p>
                            <span>Business Solution </span>/ by David Dolean
                          </p>
                          <Link href="/blog-grid/20">
                            <h5 className="title">
                              Monkey Form settle tips of the new ages end{" "}
                            </h5>
                          </Link>
                          <Link
                            className="rts-read-more btn-primary"
                            href="/blog-grid/20"
                          >
                            <i className="far fa-arrow-right"></i>Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="single-blog-one-wrapper">
                        <div className="thumbnail">
                          <img
                            src="/assets/images/blog/04.jpg"
                            alt="business_Blog"
                          />
                          <div className="blog-badge">
                            <span>15 Jan, 2023</span>
                          </div>
                        </div>
                        <div className="blog-content">
                          <p>
                            <span>Business Solution </span>/ by David Dolean
                          </p>
                          <Link href="/blog-grid/21">
                            <h5 className="title">
                              Profitable business makes your profit
                            </h5>
                          </Link>
                          <Link
                            className="rts-read-more btn-primary"
                            href="/blog-grid/21"
                          >
                            <i className="far fa-arrow-right"></i>Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="rts-contact-area contact-one">
          <div className="container">
            <div className="row align-items-center g-0">
              <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="contact-image-one">
                  <img src="/assets/images/contact/01.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="contact-form-area-one">
                  <div className="rts-title-area contact text-start">
                    <p className="pre-title">Make An Appointment</p>
                    <h2 className="title">Request a free quote</h2>
                  </div>
                  <div id="form-messages"></div>
                  <form
                    id="contact-form"
                    action="https://finbiz-nextjs.netlify.app/mailer.php"
                    method="post"
                  >
                    <div className="name-email">
                      <input type="text" placeholder="Your Name" name="name" />
                      <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Business Topic"
                      name="subject"
                    />
                    <textarea
                      placeholder="Type Your Message"
                      name="message"
                    ></textarea>
                    <button type="submit" className="rts-btn btn-primary">
                      Submit Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="rts-map-area bg-light-white" id="address">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="mapdetails-inner-one">
                  <div className="left-area single-wized">
                    <h5 className="title">Get in touch</h5>
                    <div className="details">
                      <p>Work and general inquiries</p>
                      <a className="number" href="#">
                        +3509.120-8605
                      </a>
                      <p className="time-header">Assistance hours:</p>
                      <p className="time">
                        Monday – Friday <br /> 6 am to 8 pm EST
                      </p>
                    </div>
                  </div>
                  <div className="right-area single-wized">
                    <h5 className="title">Post Address</h5>
                    <div className="details">
                      <p>Service Office</p>
                      <a href="#">
                        786 Dortans Ave, Otam Sites, <br />
                        CA 36108, United States
                      </a>
                      <p className="headoffice">Head Office</p>
                      <p className="office">142 Drive Lane. USA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.288851207937!2d90.47855065!3d23.798243149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1663151706353!5m2!1sen!2sbd"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}
