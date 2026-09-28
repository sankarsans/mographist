import React from "react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Video Production", href: "#video-production" },
  { label: "Motion Graphics", href: "#motion-graphics" },
  { label: "Animation", href: "#animation" },
  { label: "AI Powered Content", href: "#ai-content" },
  { label: "Post Production", href: "#post-production" },
];

const industryLinks = [
  { label: "SaaS Product Videos", href: "#saas" },
  { label: "Cybersecurity Content", href: "#cybersecurity" },
  { label: "Digital Marketing", href: "#marketing" },
  { label: "Corporate Films", href: "#corporate" },
  { label: "Brand Campaigns", href: "#campaigns" },
];

const Footer = () => {
  return (
    <>
      <style>{`
        .site-footer {
          background-color: #09090b;
          color: #ffffff;
          padding: 5rem 0 2rem 0;
          
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-brand-logo {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background-color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
        }

        .brand-name {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin-bottom: 0;
        }

        .footer-desc {
          color: rgba(255, 255, 255, 0.3);
          font-size: 0.875rem;
          line-height: 1.6;
          max-width: 320px;
          margin: 1.5rem 0 2rem 0;
        }

        /* Social Icons */
        .social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
           color: rgba(255, 255, 255, 0.3);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .social-btn:hover {
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.35);
          background-color: rgba(255, 255, 255, 0.05);
        }

        /* Nav Columns */
        .footer-column-title {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 1.75rem;
        }

        .footer-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.3);
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.2s ease;
          font-weight: 400;
        }

        .footer-link:hover {
          color: #ffffff;
        }

        /* Divider & Sub-footer */
        .footer-divider {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          margin-top: 4.5rem;
          margin-bottom: 2rem;
        }

        .copyright-text,
        .sub-footer-link {
          color: rgba(255, 255, 255, 0.2);
          font-size: 0.82rem;
        }

        .sub-footer-link {
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .sub-footer-link:hover {
          color: #a1a1aa;
        }
      `}</style>

      <footer className="site-footer">
        <div className="container">
          {/* Main Top Footer Section */}
          <div className="row gy-5">
            {/* Brand Information & Socials */}
            <div className="col-12 col-lg-4">
              <div className="d-flex align-items-center gap-2">
                <div className="footer-brand-logo">
                  <svg viewBox="0 0 40 40" width="100%" height="100%">
                    <path
                      d="M6 30V10L16 26L26 10V30"
                      fill="none"
                      stroke="#3b28cc"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="28" cy="22" r="3" fill="#f97316" />
                  </svg>
                </div>
                <span className="brand-name">Mographist</span>
              </div>

              <p className="footer-desc">
                Creative Media Production and Post Production House. We bring
                stories to life through motion, video, animation, and AI.
              </p>

              <div className="d-flex align-items-center gap-2">
                {/* Instagram */}
                <a
                  href="#instagram"
                  className="social-btn"
                  aria-label="Instagram"
                >
                  <svg
                    width="15"
                    height="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                {/* Twitter / X */}
                <a href="#twitter" className="social-btn" aria-label="Twitter">
                  <svg
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="#linkedin"
                  className="social-btn"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#youtube" className="social-btn" aria-label="YouTube">
                  <svg
                    width="15"
                    height="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3v6Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-6 col-md-4 col-lg-2 offset-lg-1">
              <h4 className="footer-column-title">Quick Links</h4>
              <ul className="footer-nav-list">
                {quickLinks.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href} className="footer-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="col-6 col-md-4 col-lg-2">
              <h4 className="footer-column-title">Services</h4>
              <ul className="footer-nav-list">
                {serviceLinks.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href} className="footer-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div className="col-12 col-md-4 col-lg-3">
              <h4 className="footer-column-title">Industries</h4>
              <ul className="footer-nav-list">
                {industryLinks.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href} className="footer-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="footer-divider"></div>

          {/* Sub Footer / Copyright */}
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3">
            <p className="copyright-text mb-0">
              &copy; 2026 Mographist OPC Pvt. Ltd. All rights reserved.
            </p>
            <div className="d-flex align-items-center gap-4">
              <a href="#privacy" className="sub-footer-link">
                Privacy Policy
              </a>
              <a href="#terms" className="sub-footer-link">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
