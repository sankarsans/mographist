import { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  // Custom Smooth Scroll Interceptor
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <>
      <style>{`
      .navbar { 
        .custom-navbar {
          background-color: #f9fafb;
          /* Subtle grid pattern matching the layout background */
          background-image: 
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 80px 80px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          padding: 1rem 0;
        }

        .nav-link-custom {
          color: #212529 !important;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: opacity 0.2s ease;
          padding: 0.5rem 1.25rem !important;
        }

        .nav-link-custom:hover {
          opacity: 0.65;
        }

        .btn-custom-cta {
          background-color: #3b28cc;
          color: #ffffff;
          font-size: 0.875rem;
          font-weight: 400;
          border-radius: 12px;
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

        .logo-text {
          font-family: system-ui, -apple-system, sans-serif;
          font-weight: 800;
          font-size: 1.75rem;
          line-height: 1;
          letter-spacing: -1.5px;
          color: #111827;
          position: relative;
        }

        .logo-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          background-color: #f97316;
          border-radius: 50%;
          margin-left: 2px;
          vertical-align: middle;
        }
      }
      `}</style>

      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">
          {/* Brand Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#home">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link nav-link-custom ${isActive ? "active" : ""}`
              }
            >
              <img src={logo} alt="Logo" width="60%" className="me-2" />
            </NavLink>
          </a>

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
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarContent"
          >
            <ul className="navbar-nav ms-auto align-items-lg-center my-3 my-lg-0 gap-lg-1">
              <li className="nav-item">
                <a className="nav-link nav-link-custom" href="#works">
                  Works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-custom" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `nav-link nav-link-custom ${isActive ? "active" : ""}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </NavLink>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="ms-lg-3 mt-2 mt-lg-0">
              <a href="#contact" className="btn btn-custom-cta">
                Get in touch
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
