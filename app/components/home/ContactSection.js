import React from "react";

export default function ContactSection() {
  return (
    <main>
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
    </main>
  );
}
