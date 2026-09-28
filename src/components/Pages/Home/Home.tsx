import Features from "./Features";
import ServicesSection from "./ServicesSection";
import CreativeProcess from "./CreativeProcess";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import Banner from "./Banner";
import ContactSection from "../Common/ContactSection";
import Why from "./Why";

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
      <Why />
      <CreativeProcess />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
