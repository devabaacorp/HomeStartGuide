import Link from "next/link";
import styles from "./ServicesSection.module.css";

const services = [
  {
    icon: "/assets/images/service/icon/01.svg",
    className: "one",
    title: "First-Time Buyer Consultation",
    description:
      "Get clear guidance on where to start, how the UK buying process works, what steps to prepare for, and how to move forward with confidence.",
  },
  {
    icon: "/assets/images/service/icon/02.svg",
    className: "two",
    title: "Mortgage Guidance",
    description:
      "Understand affordability, deposit planning, Agreement in Principle, required documents, and the right questions to ask mortgage professionals.",
  },
  {
    icon: "/assets/images/service/icon/03.svg",
    className: "three",
    title: "Government Scheme Assistance",
    description:
      "We help you understand available first-time buyer schemes, eligibility basics, and how these options may support your home-buying journey.",
  },
  {
    icon: "/assets/images/service/icon/04.svg",
    className: "four",
    title: "Property Search Support",
    description:
      "Get practical support when comparing locations, property types, transport links, local value, viewing questions, and hidden risks.",
  },
  {
    icon: "/assets/images/service/icon/05.svg",
    className: "five",
    title: "Offer & Negotiation Guidance",
    description:
      "Learn how to make a sensible offer, understand market value, avoid emotional decisions, and prepare for the negotiation stage.",
  },
  {
    icon: "/assets/images/service/icon/06.svg",
    className: "six",
    title: "Conveyancing & Legal Process Guidance",
    description:
      "Understand the key legal steps, surveys, searches, solicitor communication, contracts, exchange, completion, and moving preparation.",
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection} id="service">
      <div className="rts-service-area rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rts-title-area service text-center">
                <p className="pre-title">Our Services</p>
                <h2 className="title">How HomeStartGuide Helps You</h2>
                <p className={styles.sectionIntro}>
                  Practical, step-by-step support for UK first-time buyers —
                  from early planning to property search, offer, legal process,
                  and completion.
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
                    Ready to start your first home-buying journey with better
                    clarity?
                  </h3>
                </div>

                <div className="cta-right">
                  <Link className="rts-btn btn-white" href="/contactus">
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <p className={styles.serviceDisclaimer}>
            HomeStartGuide provides general education and practical guidance.
            Regulated mortgage, financial, or legal advice should be taken from
            qualified professionals where required.
          </p>
        </div>
      </div>
    </section>
  );
}
