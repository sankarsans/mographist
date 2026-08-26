import { useState } from "react";

const processSteps = [
  {
    id: "01",
    title: "Discover",
    shortDesc: "Understand goals.",
    fullDesc:
      "Deep dive into brand goals, audience research, and identifying core project objectives.",
  },
  {
    id: "02",
    title: "Strategy",
    shortDesc: "Plan & architect.",
    fullDesc:
      "We build a precise creative roadmap and production plan with milestones, visual references, and a clear technical brief.",
  },
  {
    id: "03",
    title: "Create",
    shortDesc: "Produce and animate",
    fullDesc:
      "Full-scale creative execution, live production, high-end 3D motion, and iterative visual asset drafting.",
  },
  {
    id: "04",
    title: "Refine",
    shortDesc: "Perfect every detail",
    fullDesc:
      "Polishing typography, micro-interactions, color matching, sound design, and incorporating direct client feedback.",
  },
  {
    id: "05",
    title: "Deliver",
    shortDesc: "Ready for every platform",
    fullDesc:
      "Master export renders, multi-platform compression packages, and complete handoff documentation.",
  },
];

const CreativeProcess = () => {
  // Default active card matching design (02)
  const [activeStep, setActiveStep] = useState("02");

  return (
    <>
      <style>{`
        .process-section {
          background-color: #ffffff;
          padding: 5rem 0;
          font-family: system-ui, -apple-system, sans-serif;
        

        

        /* Flexbox Cards Container */
        .process-cards-track {
          display: flex;
          align-items: stretch;
          gap: 1rem;
          margin-top: 3.5rem;
        }

        /* Default Card Styling */
        .process-card {
          flex: 1;
          background-color: #f4f4f5;
          border-radius: 20px;
          padding: 1.75rem 1.5rem;
          cursor: pointer;
          position: relative;
          transition: flex 0.4s cubic-bezier(0.25, 1, 0.5, 1),
                      transform 0.35s ease,
                      background-color 0.35s ease,
                      box-shadow 0.35s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          min-height: 270px;
          overflow: hidden;
        }

        /* Active / Hover Zoomed Card Styling */
        .process-card.active {
          flex: 1.75;
          background-color: #18181b;
          color: #ffffff;
          transform: scale(1.04);
          z-index: 2;
          box-shadow: 0 20px 35px -10px rgba(0, 0, 0, 0.35);
        }

        .step-number {
          font-size: 2.25rem;
          font-weight: 400;
          color: #a1a1aa;
          margin-bottom: 1.0rem;
          transition: color 0.3s ease;
        }

        .process-card.active .step-number {
          color: #f97316;
          font-weight: 700;
        }

        .step-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #18181b;
          margin-bottom: 0.3rem;
          transition: color 0.3s ease;
        }

        .process-card.active .step-title {
          color: #ffffff;
        }

        .step-desc {
          font-size: 1rem;
          line-height: 1.45;
          color: #71717a;
          margin: 0;
          font-weight: 400;
          transition: color 0.3s ease;
        }

        .process-card.active .step-desc {
          color: #a1a1aa;
        }

        /* Mobile Breakpoints */
        @media (max-width: 991.98px) {
          .process-cards-track {
            flex-direction: column;
            gap: 1.25rem;
          }

          .process-card {
            flex: unset !important;
            min-height: auto;
            transform: none !important;
          }

          .process-card.active {
            transform: scale(1.02) !important;
          }
        }
      }
      `}</style>

      <section className="process-section">
        <div className="container">
          {/* Section Header */}
          <div className="row">
            <div className="col-12 col-lg-8">
              <span className="section-tag">How We Work</span>
              <h2 className="main-heading">Our Creative Process</h2>
              <p className="section-subtitle">
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's
              </p>
            </div>
          </div>

          {/* Cards Track */}
          <div className="process-cards-track">
            {processSteps.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <div
                  key={step.id}
                  className={`process-card ${isActive ? "active" : ""}`}
                  onMouseEnter={() => setActiveStep(step.id)}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className="step-number">{step.id}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">
                    {isActive ? step.fullDesc : step.shortDesc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CreativeProcess;
