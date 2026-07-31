import "./globals.css";
import "./styles/1de645ff4b070368.css";
import "./styles/25ef7637e285c945.css";
import "./styles/41e941f9c7c3d03a.css";
import "./styles/42e27f7b44c03b3d.css";
import "./styles/81e52bb95a003886.css";
import "./styles/88d35cb6dcd720fb.css";

import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "HomeStartGuide | Buyer Advocate & Viewing Companion UK",
  description:
    "HomeStartGuide supports UK buyers with property viewing assistance, ex-estate agent negotiation insight, auction buyer guidance, AML preparation support, and a £500 Viewing Companion Package.",
  keywords: [
    "Buyer advocate UK",
    "Property viewing companion UK",
    "Viewing companion for home buyers",
    "First time buyer support UK",
    "Property viewing support UK",
    "Estate agent negotiation support",
    "Home buyer negotiation support UK",
    "Auction buyer guidance UK",
    "AML preparation support property buyers",
    "Proof of funds preparation UK",
    "Property buyer support London",
    "HomeStartGuide",
    "£500 viewing companion package",
    "Buyer protection before property viewing",
    "Avoid overpaying for property UK",
  ],
  authors: [{ name: "HomeStartGuide" }],
  openGraph: {
    title: "HomeStartGuide | Buyer Advocate & Viewing Companion UK",
    description:
      "Practical buyer protection before you view, offer, bid, or commit. Get viewing support, ex-agent negotiation insight, auction guidance, AML preparation support, and the £500 Viewing Companion Package.",
    type: "website",
    locale: "en_GB",
    siteName: "HomeStartGuide",
  },
  twitter: {
    card: "summary_large_image",
    title: "HomeStartGuide | Buyer Advocate & Viewing Companion UK",
    description:
      "Practical buyer protection before you view, offer, bid, or commit. Get viewing support, negotiation insight, auction guidance, AML preparation support, and the £500 Viewing Companion Package.",
  },
  icons: {
    icon: "/assets/images/fav.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body className="index-one">
        <Header />
        {children}
        <Footer />

        <Script src="/assets/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
