import { useState, useEffect, use } from 'react';
import logo from '../../../assets/logo-svg.svg';
import { NavLink, useLocation } from 'react-router-dom';
import Buttons from './Buttons';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const toggleNavbar = () => setIsOpen(!isOpen);

  const isHomePage = location.pathname === '/' || location.pathname === '/home';
  const IsHomePageClass = !isHomePage ? 'header-theme-border' : '';

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Blur/solidify background once scrolled past 50px
      setIsScrolled(currentScrollY > 50);

      // Don't auto-hide if mobile menu is currently expanded
      if (isOpen) return;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down -> hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up -> show navbar
        setIsVisible(true);
      }

      lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <>
      <style>{`
        .custom-navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1030;
          transition: transform 0.35s ease, background-color 0.3s ease, backdrop-filter 0.3s ease;
          background-color: transparent;
          padding: 1.25rem 0;
          .container{
            background-color: #18152A;
            border-radius: 50px;
            padding: 6px 40px;
          }
        }

        .header-theme-border {
          border: 1px solid #888690;
        }
        /* Slide header out of view on scroll down */
        .custom-navbar.navbar-hidden {
          transform: translateY(-100%);
        }

        /* Frosted glass / backdrop once scrolled past top banner */
        .custom-navbar.navbar-scrolled {
          border: none;
        }

        .nav-link-custom {
          color: #fff !important;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: opacity 0.2s ease;
          padding: 0.5rem 1.25rem !important;
          opacity: 0.5;
          &.active{
          position: relative;
          opacity: 1;
           &::after{
            content: '';
            background-color: #FF8600;
            width: 5px;
            height: 5px;
            position: absolute;
            bottom: -0px;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 50%;
          }
        }

        .nav-link-custom:hover {
          opacity: 1;
        }
      }

        .border-active{
          .nav-link-custom{
            position: relative;
            opacity: 1;
            transition: opacity 0.2s ease;
            &:hover{
              opacity: 0.8;
              transition: opacity 0.2s ease;
            }
          }
        }

        .btn-custom-cta {
          background-color: #3b28cc;
          color: #ffffff;
          font-size: 0.875rem;
          font-weight: 400;
          border-radius: 60px;
          padding: 0.65rem 1.2rem;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: background-color 0.2s ease, transform 0.15s ease;
        }

        .btn-custom-cta:hover {
          background-color: #2f1fa8;
          color: #ffffff;
          transform: translateY(-1px);
        }

        /* Ensure mobile dropdown stays readable over banner background */
        @media (max-width: 991.98px) {
          .navbar-collapse.show {
            background-color: #ffffff;
            padding: 1rem;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
            margin-top: 0.75rem;
            .nav-link-custom {
              color: #000 !important;}
          }
        }
      `}</style>

      <nav
        className={`navbar navbar-expand-lg custom-navbar ${
          !isVisible ? 'navbar-hidden' : ''
        } ${isScrolled ? 'navbar-scrolled' : ''}`}
      >
        <div className={`container ${IsHomePageClass}`}>
          {/* Brand Logo */}
          <NavLink
            to="/home"
            className="navbar-brand d-flex align-items-center"
          >
            <img src={logo} alt="Logo" width="100%" className="me-2" />
          </NavLink>

          {/* Mobile Hamburger Toggle */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarContent"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Menu */}
          <div
            className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
            id="navbarContent"
          >
            <ul
              className={`navbar-nav ms-auto align-items-lg-center my-3 my-lg-0 gap-lg-1 ${
                isHomePage ? 'border-active' : ''
              }`}
            >
              <li className="nav-item">
                <NavLink
                  to="/works"
                  className={({ isActive }) =>
                    `nav-link nav-link-custom ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Works
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `nav-link nav-link-custom ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `nav-link nav-link-custom ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </NavLink>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="ms-lg-3 mt-2 mt-lg-0">
              <Buttons content="Get in touch" href="#contact" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
