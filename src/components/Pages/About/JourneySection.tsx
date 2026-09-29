import journey1 from "../../../assets/journey1.png";
import journey2 from "../../../assets/journey2.png";
import arrow from "../../../assets/arrow.png";

const stats = [
  { value: "30+", label: "Happy clients" },
  { value: "20+", label: "Projects delivered" },
  { value: "25+", label: "Years of experience" },
];

const StoryJourneySection = () => {
  return (
    <>
      <style>{`
        .story-journey-section {
          background-color: #ffffff;
          padding: 6rem 0;
        }

        

        /* Centered Inner Container to match exact proportions */
        .story-content-container {
          max-width: 580px;
          margin: 0 auto;
        }

        /* Smooth Pill-Rounded Image */

        /* Paragraphs */
        .story-desc {
          color: #3f3f46;
          font-size: 0.98rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        /* CTA Button */
       

        /* Stats Cards */
        .stat-card {
          text-align: center;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          border-right: 1px solid rgba(40, 42, 58, 1);
          &:last-child {
            border-right: none;
          }
        }

        .stat-number {
          font-size: 4rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: rgba(0, 0, 0, 1);
          line-height: 1;
          margin-bottom: 0.75rem;
        }

        .stat-label {
          color: rgba(66, 66, 66, 1);
          font-size: 0.95rem;
          font-weight: 500;
          margin: 0;
        }

        @media (max-width: 768px) {
          .story-journey-section {
            padding: 4rem 0;
          }
            .stat-card{
            border: none !important;}
          .story-heading {
            margin-bottom: 2.5rem;
          }
          .story-visual-card {
            height: auto;
            border-radius: 24px;
            img {
            margin-bottom: 1.5rem;
            }
          }
        }
      `}</style>

      <section className="story-journey-section">
        <div className="container">
          {/* Top Left-Aligned Header Block */}
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2 pb-5">
              <span className="section-tag">Our Story</span>
              <h2 className="main-heading">
                The Journey
                <br />
                Of Mographist
              </h2>
            </div>
          </div>

          {/* Centered Image, Text, and Button Column */}
          <div className="row justify-content-center pb-lg-5 pb-3">
            <div className="col-12">
              <div className="story-content-container">
                {/* Visual Banner */}
                <div className="story-visual-card row mb-4">
                  <div className="col-lg-6 col-md-6 col-12">
                    <img
                      src={journey2}
                      className="image1"
                      alt="The Journey Of Mographist visual art"
                    />
                  </div>

                  <div className="col-lg-6 col-md-6 col-12">
                    <img
                      src={journey1}
                      className="image2"
                      alt="The Journey Of Mographist visual art"
                    />
                  </div>
                </div>

                {/* Paragraph Content */}
                <p className="section-subtitle">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since 1966.
                </p>

                <p className="section-subtitle mb-4">
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum.
                </p>

                {/* Button */}
                <div>
                  <a href="#contact" className="btn-start-story">
                    Start a project
                    <img src={arrow} alt="Arrow icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Statistics Cards */}
          <div className="row g-4 pt-lg-5 pt-3 mt-lg-5 justify-content-center">
            {stats.map((item, idx) => (
              <div key={idx} className="col-12 col-md-4">
                <div
                  className="stat-card"
                  style={{
                    borderRight:
                      idx === stats.length - 1
                        ? "none"
                        : "1px solid rgba(40, 42, 58, 1)",
                  }}
                >
                  <div className="stat-number">{item.value}</div>
                  <p className="sub-description mb-0">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StoryJourneySection;
