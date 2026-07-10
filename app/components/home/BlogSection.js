import Link from "next/link";
import React from "react";

export default function BlogSection() {
  return (
    <main>
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
    </main>
  );
}
