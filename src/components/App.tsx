import Header from "./Pages/Common/Header";
import Footer from "./Pages/Common/Footer";
import Home from "./Pages/Home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./Pages/About/About";
import Work from "./Pages/Work/Work";
import Services from "./Pages/Services/Services";

export default function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/home" || location.pathname === "/";

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/works" element={<Works />} />
        <Route path="/services" element={<Services />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Work />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      {/* <ContactSection /> */}

      {!isHomePage && <Footer />}
    </div>
  );
}
