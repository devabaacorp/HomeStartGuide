import React from "react";
import style from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <main className={style.hero_main_div}>
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
    </main>
  );
}
