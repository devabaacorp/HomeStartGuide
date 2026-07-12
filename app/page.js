import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import ServicesSection from "./components/home/ServicesSection";
import BusinessGoalSection from "./components/home/BusinessGoalSection";
import CounterSection from "./components/home/CounterSection";
import GallerySection from "./components/home/GallerySection";
import TrustedClientsSection from "./components/home/TrustedClientsSection";
import TeamSection from "./components/home/TeamSection";
import FeatureSection from "./components/home/FeatureSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import BlogSection from "./components/home/BlogSection";
import ContactSection from "./components/home/ContactSection";
import MapSection from "./components/home/MapSection";
import FAQSection from "./components/home/FAQSection";
import MortgageCalculatorCTASection from "./components/home/MortgageCalculatorCTASection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MortgageCalculatorCTASection />
      <BusinessGoalSection />
      <CounterSection />
      <GallerySection />
      <TrustedClientsSection />
      <TeamSection />
      <FeatureSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <MapSection />
      <FAQSection />
    </>
  );
}
