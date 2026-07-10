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
  title: "HomeStartGuide | First-Time Buyer Guide UK",
  description:
    "HomeStartGuide helps UK first-time buyers understand mortgages, property search, government schemes, and the home-buying process with clear step-by-step guidance.",
  keywords: [
    "First time home buyer UK",
    "First home buyer guide UK",
    "Mortgage help for first time buyers",
    "How to buy a house in the UK",
    "First home consultation UK",
    "Home buying advisor UK",
    "First time buyer mortgage guide",
    "Property buying consultant UK",
    "Home ownership guide UK",
    "Buy your first house UK",
  ],
  authors: [{ name: "HomeStartGuide" }],
  openGraph: {
    title: "HomeStartGuide | First-Time Buyer Guide UK",
    description:
      "Clear, practical support for UK first-time buyers, including mortgage readiness, property search guidance, government schemes, and the complete home-buying process.",
    type: "website",
    locale: "en_GB",
    siteName: "HomeStartGuide",
  },
  twitter: {
    card: "summary_large_image",
    title: "HomeStartGuide | First-Time Buyer Guide UK",
    description:
      "Clear, practical support for UK first-time buyers, including mortgage readiness, property search guidance, government schemes, and the complete home-buying process.",
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
