import Header from "./Header";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import About from "./About";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/works" element={<Works />} />
        <Route path="/services" element={<Services />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
      <ContactSection />

      <Footer />
    </div>
  );
}
