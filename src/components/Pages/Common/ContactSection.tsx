import React, { useState } from 'react';
import logo from '../../../assets/mographist-logo.png';
import line from '../../../assets/line.png';
import { services } from '../ServiceDetails/serviceData';
import { useNavigate } from 'react-router-dom';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    requirements: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.requirements.trim()) {
      errs.requirements = 'Please tell us about your requirements';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          requirements: '',
        });
        setSubmitted(false);
      }, 4000);
    }
  };

  const navigate = useNavigate();

  const handleClick = (serviceId: string) => {
    // Navigate to the desired route
    navigate(`/service-details/${serviceId}`);
  };

  return (
    <>
      <style>{`
        /* Contact Details */
        .services-motion {
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
          background: #101010;
          padding: 1.7rem 0;
          margin-top: 3rem;
          position: relative;
          &::before,
          &::after {
            content: '';
            position: absolute;
            top: 2%;
            width: 100%; 
            height: 98%;
            z-index: 2;
            background: #101010;
          }
        }

        .services-track {
          display: flex;
          width: max-content;
          position: relative;
          z-index: 99;
          // gap: 2.5rem; /* Space between each service item */
          animation: scrollLeft 25s linear infinite; /* Adjust 25s to control speed */
        }

        /* Optional: Pause scrolling when the user hovers over it */
        .services-motion:hover .services-track {
          animation-play-state: paused;
        }

        .service-item {
          flex-shrink: 0;
          color: #767676;
          font-size: 1rem;
          font-weight: 500;
          border-right: 1px solid #484848;
          padding: 0 2rem;
          a{
            color: #767676;
            text-decoration: none;
            cursor: pointer;
            transition: color 0.2s ease;
          }
          a:hover{
            color: #ffffff;
          }
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .contact-section {
            border-radius: 80px;
            margin: 0rem 2rem;
            padding-bottom: 0rem;
            margin-bottom: 2rem;
        }
        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
          text-decoration: none;
        }

        .icon-circle {
          width: 44px;
          height: 44px;
          min-width: 44px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.05);
          // border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.6); 
        }

        .info-label {
          font-size: 0.75rem;
          color: rgba(165, 165, 165, 1);
          margin: 0;
          text-transform: capitalize;
        }

        .info-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0;
        }

        .social-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #71717a;
          text-decoration: none;
          font-size: 0.85rem;
          transition: all 0.2s ease;
        }

        .social-circle:hover {
          color: #ffffff;
          background-color: #27272a;
        }

        /* Form Card Styling */
        .form-card {
          background-color: rgba(26, 26, 26, 1);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 28px;
          padding: 2.75rem 2.5rem;
          // margin-top: 3.5rem;
        }

        .form-card-title {
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 2rem;
        }

        .custom-label {
          font-size: 0.75rem;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.4);
          margin-bottom: 0.45rem;
        }

        .custom-input {
          background-color: rgba(255, 255, 255, 0.05) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 16px !important;
          color: #ffffff !important;
          font-size: 0.88rem;
          padding: 0.8rem 1rem !important;
          transition: border-color 0.2s ease;
        }

        .custom-input::placeholder {
          color: #52525b !important;
        }

        .custom-input:focus {
          border-color: #3b28cc !important;
          box-shadow: none !important;
        }

        .custom-input.is-invalid {
          border-color: #ef4444 !important;
        }

        .invalid-feedback {
          font-size: 0.75rem;
          color: #f87171;
          margin-top: 0.35rem;
        }

        .btn-submit {
          background-color: rgba(58, 36, 181, 1);
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 600;
          border-radius: 99px;
          padding: 0.95rem 1.5rem;
          border: none;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          transition: background-color 0.2s ease, transform 0.15s ease;
          margin-top: 1rem;
        }

        .btn-submit:hover {
          background-color: #2f1fa8;
          transform: translateY(-1px);
        }

        @media (max-width: 991.98px) {
          .form-card {
            padding: 2rem 1.5rem;
          }
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
        .footer-logo{
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          background: url(${line}) #050505;
          background-size: auto;
          background-position: bottom center;
          background-repeat: no-repeat;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
      `}</style>

      <section className="contact-section bg-black-section px-0">
        <div className="container">
          <div className="row gy-5 align-items-centers px-3">
            {/* Left Column: Heading & Contact Channels */}
            <div className="col-12 col-lg-6">
              <span className="section-tag">Get In Touch</span>
              <h2 className="main-heading white">
                Your Idea. Our<br></br> Next Big Thing
              </h2>
              <p className="sub-description footer">
                Every great story starts somewhere. Let's start yours together
              </p>

              <div className="contact-links mb-4">
                {/* Phone */}
                <a href="tel:+918147317648" className="contact-info-item">
                  <div className="icon-circle">
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="info-label">Call Us</p>
                    <p className="info-value">+91 8147317648</p>
                  </div>
                </a>

                {/* WhatsApp */}
                {/* <a
                  href="https://wa.me/918147317648"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-info-item"
                >
                  <div className="icon-circle">
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="info-label">Chat on WhatsApp</p>
                    <p className="info-value">+91 8147317648</p>
                  </div>
                </a> */}

                {/* Email */}
                <a
                  href="mailto:info@mographist.com"
                  className="contact-info-item"
                >
                  <div className="icon-circle">
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="info-label">Email Us</p>
                    <p className="info-value">Hi@mographist.com</p>
                  </div>
                </a>
              </div>

              {/* Social Follow */}
              <div className="mt-xs-0" style={{ marginTop: '9.5rem' }}>
                <span
                  style={{
                    opacity: '60%',
                    fontSize: '0.875rem',
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span style={{ paddingLeft: '0.5rem' }}>
                    Bangalore, Karnataka, India- 560061
                  </span>
                </span>
                <div className="d-flex align-items-center gap-3 mt-1 pt-2">
                  {/* <span
                  style={{
                    fontSize: '0.8rem',
                    color: '#71717a',
                    marginRight: '0.5rem',
                  }}
                >
                  Follow us:
                </span> */}

                  <a
                    href="#instagram"
                    className="social-circle"
                    aria-label="Instagram"
                  >
                    <svg
                      width="14"
                      height="14"
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
                  <a
                    href="#twitter"
                    className="social-circle"
                    aria-label="Twitter"
                  >
                    <svg
                      width="14"
                      height="14"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="#linkedin"
                    className="social-circle"
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
                  <a
                    href="#youtube"
                    className="social-circle"
                    aria-label="YouTube"
                  >
                    <svg
                      width="14"
                      height="14"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="col-12 col-lg-6">
              <div className="form-card">
                <h3 className="form-card-title">
                  Tell Us What You're Imagining
                </h3>

                {submitted ? (
                  <div
                    className="alert alert-success border-0 rounded-4 py-3 text-center"
                    style={{ backgroundColor: '#14532d', color: '#bbf7d0' }}
                  >
                    Thank you! Your message has been sent successfully.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="row g-3 mb-3">
                      {/* Name */}
                      <div className="col-12 col-md-6">
                        <label className="custom-label" htmlFor="name">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`form-control custom-input ${errors.name ? 'is-invalid' : ''}`}
                        />
                        {errors.name && (
                          <div className="invalid-feedback">{errors.name}</div>
                        )}
                      </div>

                      {/* Email */}
                      <div className="col-12 col-md-6">
                        <label className="custom-label" htmlFor="email">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className={`form-control custom-input ${errors.email ? 'is-invalid' : ''}`}
                        />
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>
                    </div>

                    {/* Company */}
                    <div className="mb-3">
                      <label className="custom-label" htmlFor="company">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Name"
                        className="form-control custom-input"
                      />
                    </div>

                    {/* Service Required */}
                    <div className="mb-3">
                      <label className="custom-label" htmlFor="service">
                        What Are You Looking For? *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="form-select custom-input"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value="Live Action Video Production">
                          Live Action Video Production
                        </option>
                        <option value="Commercial & Product Videos">
                          Commercial & Product Videos
                        </option>
                        <option value="Animation & Motion Graphics">
                          Animation & Motion Graphics
                        </option>
                        <option value="AI Powered Content Creation">
                          AI Powered Content Creation
                        </option>
                        <option value="Post Production Services">
                          Post Production Services
                        </option>
                      </select>
                    </div>

                    {/* Share Your Requirements */}
                    <div className="mb-4">
                      <label className="custom-label" htmlFor="requirements">
                        Tell Us About Your Project *{' '}
                      </label>
                      <textarea
                        id="requirements"
                        name="requirements"
                        rows="4"
                        value={formData.requirements}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, timeline and budget..."
                        className={`form-control custom-input ${errors.requirements ? 'is-invalid' : ''}`}
                      ></textarea>
                      {errors.requirements && (
                        <div className="invalid-feedback">
                          {errors.requirements}
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-submit">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="services-motion"
          style={{
            background:
              'linear-gradient(90deg, #101010 0%, #3A24B5 49%, #101010 79%)',
          }}
        >
          <div className="services-track">
            {/* First set of items */}
            {services.map((service) => (
              <div key={service.id} className="service-item">
                <a
                  onClick={() => handleClick(service.id)}
                  className="service-title cusror-pointer"
                >
                  {service.title}
                </a>
              </div>
            ))}

            {/* Duplicate set for seamless infinite looping */}
            {services.map((service) => (
              <div key={`${service.id}-duplicate`} className="service-item">
                <a
                  onClick={() => handleClick(service.id)}
                  className="service-title cusror-pointer"
                >
                  {service.title}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div
          className=""
          style={{
            backgroundColor: '#050505',
            borderRadius: '80px',
            paddingBottom: '1.5rem',
          }}
        >
          <div className="footer-logo pt-5 px-4">
            <img src={logo} className="img-fluid" alt="Logo" />
          </div>
          <div className="container">
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3 px-lg-5">
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
        </div>
      </section>
    </>
  );
};

export default ContactSection;
