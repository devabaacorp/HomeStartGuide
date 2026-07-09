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
import Sidebar from "./components/Sidebar";
import SearchOverlay from "./components/SearchOverlay";

export const metadata = {
  title: "HomeStartGuide | First-Time Buyer Support in the UK",
  description:
    "HomeStartGuide helps first-time home buyers in the UK understand the property buying process with clear guidance, planning support, and practical advice.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="index-one">
        <Header />
        <SearchOverlay />
        <Sidebar />
        <div id="anywhere-home" className=""></div>
        {children}
        <Footer />
        <Script src="/assets/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
