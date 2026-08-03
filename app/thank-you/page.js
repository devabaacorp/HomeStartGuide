import Link from "next/link";

export const metadata = {
  title: "Thank You | HomeStartGuide",
  description:
    "Thank you for contacting HomeStartGuide. We have received your buyer support enquiry.",
};

export default function ThankYouPage() {
  return (
    <main
      style={{
        minHeight: "70vh",
        padding: "220px 20px 100px",
        background: "linear-gradient(180deg, #ffffff 0%, #fff8f8 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          padding: "50px 34px",
          borderRadius: "28px",
          background: "#ffffff",
          boxShadow: "0 20px 60px rgba(15, 47, 74, 0.10)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: "0 0 12px",
            color: "#d62828",
            fontSize: "15px",
            fontWeight: "900",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Enquiry Received
        </p>

        <h1
          style={{
            margin: "0",
            color: "#0f2f4a",
            fontSize: "clamp(34px, 5vw, 52px)",
            lineHeight: "1.15",
            fontWeight: "900",
          }}
        >
          Thank You For Contacting HomeStartGuide
        </h1>

        <p
          style={{
            maxWidth: "680px",
            margin: "20px auto 0",
            color: "#6b7280",
            fontSize: "16px",
            lineHeight: "1.75",
          }}
        >
          Your enquiry has been received. A member of HomeStartGuide will review
          your message and get back to you regarding your buyer support,
          property viewing assistance, negotiation guidance, auction support, or
          AML preparation request.
        </p>

        <div
          style={{
            marginTop: "32px",
            display: "flex",
            justifyContent: "center",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              minHeight: "54px",
              padding: "0 28px",
              borderRadius: "999px",
              background: "#d62828",
              color: "#ffffff",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "15px",
              fontWeight: "900",
              textDecoration: "none",
            }}
          >
            Back To Home
          </Link>

          <Link
            href="/contactus"
            style={{
              minHeight: "54px",
              padding: "0 28px",
              borderRadius: "999px",
              border: "1px solid rgba(15, 47, 74, 0.12)",
              background: "#ffffff",
              color: "#0f2f4a",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "15px",
              fontWeight: "900",
              textDecoration: "none",
            }}
          >
            Send Another Enquiry
          </Link>
        </div>
      </div>
    </main>
  );
}
