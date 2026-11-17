import { useNavigate } from 'react-router-dom';
import { services } from './serviceData';

const OtherServices = () => {
  const navigate = useNavigate();

  const handleClick = (serviceId: string) => {
    navigate(`/service-details/${serviceId}`);
  };

  return (
    <>
      <style>{`
        .other-services-section {
          background-color: #ffffff;
          padding: 2rem 0 4rem 0;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        .other-services-heading {
          font-size: 2.25rem;
          font-weight: 700;
          color: #0b0b0b;
          margin-bottom: 1.75rem;
          padding-left: 7rem;
          letter-spacing: -0.02em;
        }

        .other-services-marquee {
          overflow: hidden;
          width: 100%;
          padding-left: 5%;
        }

        .other-services-track {
          display: flex;
          align-items: center;
          width: max-content;
          gap: 1rem;
          animation: scrollRightToLeft 30s linear infinite;
        }

        /* Pause scrolling on hover */
        .other-services-marquee:hover .other-services-track {
          animation-play-state: paused;
        }

        @keyframes scrollRightToLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .service-pill {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          padding: 1.15rem 1.35rem 1.15rem 1.75rem;
          border: 1px solid #e6e6e6;
          border-radius: 9999px;
          background-color: #ffffff;
          text-decoration: none;
          color: #111111;
          font-size: 0.95rem;
          font-weight: 500;
          white-space: nowrap;
          flex-shrink: 0;
          cursor: pointer;
          transition: border-color 0.2s ease;
        }

        .service-pill:hover {
          border-color: #b0b0b0;
        }

        .service-pill-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background-color: #f3f3f3;
          color: #222222;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }

        .service-pill:hover .service-pill-icon {
          background-color: #e5e5e5;
          transform: translate(2px, -2px);
        }
      `}</style>

      <section className="other-services-section">
        <div className="other-services-container">
          <h2 className="other-services-heading">Other Services</h2>

          <div className="other-services-marquee">
            <div className="other-services-track">
              {/* First set of items */}
              {services.map((service) => (
                <a
                  key={service.id}
                  onClick={() => handleClick(service.id)}
                  className="service-pill"
                >
                  <span className="service-pill-text">{service.title}</span>
                  <span className="service-pill-icon">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </a>
              ))}

              {/* Duplicate set for seamless infinite loop */}
              {services.map((service) => (
                <a
                  key={`${service.id}-duplicate`}
                  onClick={() => handleClick(service.id)}
                  className="service-pill"
                >
                  <span className="service-pill-text">{service.title}</span>
                  <span className="service-pill-icon">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OtherServices;
