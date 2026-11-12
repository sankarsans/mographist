import { useState } from 'react';
import pattern from '../../../assets/pattern.png';

const processSteps = [
  {
    id: '01',
    title: 'Discover',
    shortDesc: 'Understand goals.',
    fullDesc: 'We understand your business, audience, objectives, and vision',
  },
  {
    id: '02',
    title: 'Strategy',
    shortDesc: 'Plan & architect.',
    fullDesc: 'We develop the right concept, story, and creative direction',
  },
  {
    id: '03',
    title: 'Create',
    shortDesc: 'Produce and animate',
    fullDesc: 'We bring ideas to life through compelling visual storytelling',
  },
  {
    id: '04',
    title: 'Refine',
    shortDesc: 'Perfect every detail',
    fullDesc: 'We perfect every detail for quality and creative excellence',
  },
  {
    id: '05',
    title: 'Deliver',
    shortDesc: 'Ready for every platform',
    fullDesc: 'We deliver impactful content tailored to every platform',
  },
];

const CreativeProcess = () => {
  // Default active card matching design (02)
  const [activeStep, setActiveStep] = useState('02');

  return (
    <>
      <style>{`
        .process-section {
          background: linear-gradient(263deg,rgba(248, 249, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);
          position: relative;
          padding: 5rem 0;

          &::after{
              content: "";
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              background: url(${pattern}) no-repeat;
              z-index: 99;
              background-size: auto;
              background-position: top right;
            }
      }

        /* Flexbox Cards Container */
        .process-cards-track {
          display: flex;
          align-items: stretch;
          gap: 1rem;
          margin-top: 3.5rem;
              z-index: 999;
    position: relative;
        }

        /* Default Card Styling */
        .process-card {
          flex: 1;
          background-color: rgba(255, 255, 255, 1);
          border: 1px solid rgba(226, 226, 226, 1);
          box-shadow: rgba(219, 222, 248, 0.3) 0px 10px 20px -10px;
          border-radius: 24px;
          padding: 1.75rem 1.5rem;
          cursor: pointer;
          position: relative;
          // transition: flex 0.4s cubic-bezier(0.25, 1, 0.5, 1),
          //             transform 0.35s ease,
          //             background-color 0.35s ease,
          //             box-shadow 0.35s ease;
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
          color: rgba(223, 223, 223, 1);
          margin-bottom: 1.0rem;
          transition: color 0.3s ease;
        }

        .process-card.active .step-number {
          color: rgba(255, 226, 194, 1);
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
          color: rgba(66, 66, 66, 1);
          margin: 0;
          font-weight: 400;
          transition: color 0.3s ease;
        }

        .process-card.active .step-desc {
          color: rgba(184, 184, 184, 1);
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
              <span className="section-tag">OUR CREATIVE PROCESS</span>
              <h2 className="main-heading">The Making Behind the Magic</h2>
              <p className="section-subtitle">
                From the first spark to the final frame, every step has a
                purpose
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
                  className={`process-card ${isActive ? 'active' : ''}`}
                  onMouseEnter={() => setActiveStep(step.id)}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className="step-number">{step.id}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">
                    {isActive ? step.fullDesc : step.fullDesc}
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
