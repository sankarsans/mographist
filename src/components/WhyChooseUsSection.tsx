import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const features = [
  {
    id: 1,
    title: "Creative Excellence",
    desc: "We bring a filmmaker's eye and a designer's precision to every project. Our work doesn't just communicate — it captivates, leaving a lasting visual impression that builds brand equity over time.",
  },
  {
    id: 2,
    title: "End to End Production",
    desc: "From concept development to final delivery, we manage every stage of the creative process.",
  },
  {
    id: 3,
    title: "AI Enhanced Workflows",
    desc: "We leverage the latest AI technologies alongside traditional production techniques to increase efficiency, creativity, and scalability.",
  },
  {
    id: 4,
    title: "Rapid Prototyping",
    desc: "Iterative moodboards, wireframes, and concept animatics that bring concepts to life before production.",
  },
  {
    id: 5,
    title: "Global Delivery Standards",
    desc: "Multi-aspect ratio assets formatted precisely for broadcast, enterprise, social, and web performance.",
  },
  {
    id: 6,
    title: "Strategic Brand Alignment",
    desc: "Ensuring motion styles and narratives cleanly reflect your existing brand identity and objectives.",
  },
];

const WhyChooseUsSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;
  const totalSlides = features.length;

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? totalSlides - itemsPerPage : prev - 1,
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev >= totalSlides - itemsPerPage ? 0 : prev + 1,
    );
  };

  const currentVisible = features.slice(startIndex, startIndex + itemsPerPage);
  // Pad if reaching array boundary
  while (currentVisible.length < itemsPerPage) {
    currentVisible.push(features[currentVisible.length % totalSlides]);
  }

  const currentDisplayIndex = (startIndex + 1).toString().padStart(2, "0");

  return (
    <>
      <style>{`
        .why-choose-us-section {
          background-color: #ffffff;
          padding: 5.5rem 0 6rem 0;
          font-family: system-ui, -apple-system, sans-serif;
          position: relative;
          overflow: hidden;
        }

       

       
        /* Carousel Navigation Controls */
        .controls-wrapper {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .counter-label {
          font-size: 1.05rem;
          font-weight: 700;
          color: #71717a;
        }

        .counter-active {
          color: #f97316;
        }

        .carousel-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #e4e4e7;
          color: #18181b;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .carousel-btn:hover {
          border-color: #3b28cc;
          color: #3b28cc;
          box-shadow: 0 4px 12px rgba(59, 40, 204, 0.1);
        }

        /* Timeline Wave Canvas */
        .timeline-container {
          position: relative;
          margin-top: 4.5rem;
          min-height: 380px;
        }

        .wave-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 180px;
          pointer-events: none;
          z-index: 2;
          overflow: visible;
        }

        /* Steps Layout Track */
        .step-col {
          position: relative;
          z-index: 3;
          transition: all 0.4s ease;
        }

        /* Large Ambient Watermark Numbers */
        .watermark-number {
          position: absolute;
          top: -85px;
          left: 0;
          font-size: 9.5rem;
          font-weight: 900;
          line-height: 1;
          color: #f1f3f5;
          z-index: 1;
          user-select: none;
          pointer-events: none;
        }

        .step-content {
          position: relative;
          z-index: 2;
          padding-right: 1.5rem;
        }

        /* Staggered Vertical Alignments matching waveform nodes */
        .step-pos-0 {
          margin-top: 130px;
        }

        .step-pos-1 {
          margin-top: 105px;
        }

        .step-pos-2 {
          margin-top: 40px;
        }

        .step-title {
          font-size: 1rem;
          font-weight: 700;
          color: #09090b;
          margin-bottom: 0.65rem;
        }

        .step-desc {
          font-size: 0.86rem;
          color: #52525b;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 991.98px) {
          .wave-svg {
            display: none;
          }
          .step-pos-0, .step-pos-1, .step-pos-2 {
            margin-top: 0;
          }
          .watermark-number {
            font-size: 6.5rem;
            top: -45px;
          }
          .step-col {
            margin-bottom: 3.5rem;
          }
        }
      `}</style>

      <section className="why-choose-us-section">
        <div className="container-fluid px-4 px-lg-5">
          {/* Header Row: Title & Controls */}
          <div className="row align-items-end justify-content-between gy-4">
            <div className="col-12 col-lg-7">
              <span className="section-tag">Why Choose Us</span>
              <h2 className="main-heading">
                Where Vision
                <br />
                Meets Precision
              </h2>
              <p className="sub-description mb-0">
                Everything you need to know about working with Mographist. Can't
                find your answer?
              </p>
            </div>

            <div className="col-12 col-lg-auto">
              <div className="controls-wrapper">
                <span className="counter-label">
                  <span className="counter-active">{currentDisplayIndex}</span>{" "}
                  / 0{totalSlides}
                </span>
                <button
                  type="button"
                  className="carousel-btn"
                  onClick={handlePrev}
                  aria-label="Previous items"
                >
                  &#8592;
                </button>
                <button
                  type="button"
                  className="carousel-btn"
                  onClick={handleNext}
                  aria-label="Next items"
                >
                  &#8594;
                </button>
              </div>
            </div>
          </div>

          {/* S-Curve Continuous Wave with Interactive Step Nodes */}
          <div className="timeline-container">
            {/* Smooth SVG Sine/Cubic Wave */}
            <svg
              className="wave-svg"
              viewBox="0 0 1200 180"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <filter
                  id="waveShadow"
                  x="-5%"
                  y="-5%"
                  width="110%"
                  height="150%"
                >
                  <feDropShadow
                    dx="0"
                    dy="8"
                    stdDeviation="10"
                    floodColor="#3b28cc"
                    floodOpacity="0.08"
                  />
                </filter>
              </defs>

              {/* Connected Orange Wave Line */}
              <path
                d="M 0 100 C 90 120, 140 120, 200 115 C 280 110, 420 75, 590 100 C 760 125, 870 30, 960 30 C 1040 30, 1120 40, 1200 0"
                stroke="#f97316"
                strokeWidth="3.5"
                strokeLinecap="round"
                filter="url(#waveShadow)"
              />

              {/* Node 1 Pin */}
              <circle
                cx="200"
                cy="115"
                r="14"
                fill="#ffffff"
                stroke="#f4f4f5"
                strokeWidth="4"
              />
              <circle cx="200" cy="115" r="8" fill="#d4d4d8" />

              {/* Node 2 Pin */}
              <circle
                cx="590"
                cy="100"
                r="14"
                fill="#ffffff"
                stroke="#f4f4f5"
                strokeWidth="4"
              />
              <circle cx="590" cy="100" r="8" fill="#d4d4d8" />

              {/* Node 3 Pin */}
              <circle
                cx="960"
                cy="30"
                r="14"
                fill="#ffffff"
                stroke="#f4f4f5"
                strokeWidth="4"
              />
              <circle cx="960" cy="30" r="8" fill="#d4d4d8" />
            </svg>

            {/* 3 Active Displayed Features */}
            <div className="row g-4">
              {currentVisible.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className={`col-12 col-lg-4 step-col step-pos-${index}`}
                >
                  {/* Subtle Big Numeric Watermark */}
                  <div className="watermark-number">{item.id}</div>

                  {/* Body Content */}
                  <div className="step-content">
                    <h3 className="step-title">{item.title}</h3>
                    <p className="step-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUsSection;
