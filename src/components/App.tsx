import Header from "./Pages/Common/Header";
import Footer from "./Pages/Common/Footer";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Work from "./Pages/Work/Work";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/works" element={<Works />} />
        <Route path="/services" element={<Services />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Work />} />
      </Routes>
      {/* <ContactSection /> */}

      <Footer />
    </div>
  );
}
