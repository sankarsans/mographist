import Features from "./Features";
import ServicesSection from "./ServicesSection";
import CreativeProcess from "./CreativeProcess";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import Banner from "./Banner";
import ContactSection from "../Common/ContactSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <div id="Features">
        <Features />
      </div>
      <div id="ServicesSection">
        <ServicesSection />
      </div>
      <CreativeProcess />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
