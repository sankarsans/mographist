import Header from './Pages/Common/Header';
import Footer from './Pages/Common/Footer';
import Home from './Pages/Home/Home';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom';
import About from './Pages/About/About';
import Work from './Pages/Work/Work';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import useScrollToHash from './Pages/Common/useScrollToHash';
import WorkDetails from './Pages/WorkDetails/WorkDetails';

export default function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/home' || location.pathname === '/';
  useScrollToHash();

  return (
    <div>
      <Header />
      <Router basename="/mographist">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Work />} />
          <Route path="/work-details/:id" element={<WorkDetails />} />
          <Route path="/service-details/:id" element={<ServiceDetails />} />
        </Routes>
      </Router>

      {!isHomePage && <Footer />}
    </div>
  );
}
