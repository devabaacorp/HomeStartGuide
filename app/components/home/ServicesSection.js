import Link from "next/link";
import styles from "./ServicesSection.module.css";

const services = [
  {
    icon: "/assets/images/service/icon/01.svg",
    className: "one",
    title: "In-Person Viewing & Structural Eye",
    description:
      "We attend property viewings with you and help spot visible red flags, damp concerns, maintenance issues, layout problems, and hidden cost indicators before you spend money on surveys or legal work.",
  },
  {
    icon: "/assets/images/service/icon/02.svg",
    className: "two",
    title: "Ex-Estate Agent Negotiation",
    description:
      "With insider estate agency experience, we understand how buyers can be pressured into higher offers. We help you assess the situation and support negotiation so you do not overpay unnecessarily.",
  },
  {
    icon: "/assets/images/service/icon/03.svg",
    className: "three",
    title: "AML Pre-Screening Preparation",
    description:
      "We help you prepare and organise proof of funds, deposit trails, and basic AML-related documents before solicitors ask, reducing confusion, delay, or avoidable transaction concerns.",
  },
  {
    icon: "/assets/images/service/icon/04.svg",
    className: "four",
    title: "Auction House Expertise",
    description:
      "We guide auction buyers through key auction risks, legal pack awareness, bidding pressure, non-refundable deposit concerns, and practical preparation before making a serious commitment.",
  },
  {
    icon: "/assets/images/service/icon/05.svg",
    className: "five",
    title: "£500 Viewing Companion Package",
    description:
      "Get hands-on property viewing support, buyer protection, practical red flag awareness, and negotiation preparation for a flat £500 one-off fee before making an important property decision.",
  },
  {
    icon: "/assets/images/service/icon/06.svg",
    className: "six",
    title: "First-Time Buyer Protection",
    description:
      "We support inexperienced buyers with practical guidance, property-viewing confidence, fair price thinking, and next-step preparation so they can move forward with more control.",
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection} id="services">
      <div className="rts-service-area rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rts-title-area service text-center">
                <p className="pre-title">Buyer Protection Services</p>

                <h2 className="title">
                  Why First-Time & Auction Buyers Need Us
                </h2>

                <p className={styles.sectionIntro}>
                  Buying without the right support can lead to overpaying,
                  missing property red flags, misunderstanding auction risks, or
                  getting delayed by avoidable document issues. HomeStartGuide
                  gives you practical, hands-on buyer support before you commit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid service-main plr--120-service mt--50 plr_md--0 pl_sm--0 pr_sm--0">
          <div className="background-service row">
            {services.map((service) => (
              <div
                className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12"
                key={service.title}
              >
                <div className={`service-one-inner ${service.className}`}>
                  <div className="thumbnail">
                    <img src={service.icon} alt={service.title} />
                  </div>

                  <div className="service-details">
                    <Link href="/contactus">
                      <h5 className="title">{service.title}</h5>
                    </Link>

                    <p className="disc">{service.description}</p>

                    <Link
                      className="rts-read-more btn-primary"
                      href="/contactus"
                    >
                      <i className="far fa-arrow-right"></i>
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="cta-one-bg col-12">
              <div className="cta-one-inner">
                <div className="cta-left">
                  <h3 className="title">
                    Don&apos;t let estate agents push you into overpaying.
                  </h3>
                </div>

                <div className="cta-right">
                  <Link className="rts-btn btn-white" href="/contactus">
                    Get Expert Negotiation Support
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <p className={styles.serviceDisclaimer}>
            HomeStartGuide provides non-regulated buyer representation, property
            viewing assistance, negotiation support, and AML pre-screening
            preparation. Regulated mortgage advice, formal building surveys, and
            legal conveyancing are provided by qualified third-party
            specialists.
          </p>
        </div>
      </div>
    </section>
  );
}
