import React from "react";

const stats = [
  { value: "05+", label: "Happy clients" },
  { value: "20+", label: "Projects delivered" },
  { value: "10+", label: "Years of experience" },
];

const StoryJourneySection = () => {
  return (
    <>
      <style>{`
        .story-journey-section {
          background-color: #ffffff;
          padding: 6rem 0;
          font-family: system-ui, -apple-system, sans-serif;
        }

        

        /* Centered Inner Container to match exact proportions */
        .story-content-container {
          max-width: 580px;
          margin: 0 auto;
        }

        /* Smooth Pill-Rounded Image */
        .story-visual-card {
          width: 100%;
          height: 230px;
          border-radius: 36px;
          overflow: hidden;
          margin-bottom: 2.25rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        .story-visual-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Paragraphs */
        .story-desc {
          color: #3f3f46;
          font-size: 0.98rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        /* CTA Button */
        .btn-start-story {
          background-color: #3b28cc;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 600;
          border-radius: 12px;
          padding: 0.75rem 1.4rem;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          transition: background-color 0.2s ease, transform 0.15s ease;
        }

        .btn-start-story:hover {
          background-color: #2f1fa8;
          color: #ffffff;
          transform: translateY(-1px);
        }

        /* Stats Cards */
        .stat-card {
          background-color: rgba(245, 245, 245, 1);
          border: 1px solid rgba(214, 214, 214, 1);
          border-radius: 56px;
          padding: 3.25rem 1.5rem;
          text-align: center;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -8px rgba(0, 0, 0, 0.06);
        }

        .stat-number {
          font-size: 4rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: #09090b;
          line-height: 1;
          margin-bottom: 0.75rem;
        }

        .stat-label {
          color: #52525b;
          font-size: 0.95rem;
          font-weight: 500;
          margin: 0;
        }

        @media (max-width: 768px) {
          .story-journey-section {
            padding: 4rem 0;
          }
          .story-heading {
            margin-bottom: 2.5rem;
          }
          .story-visual-card {
            height: 190px;
            border-radius: 24px;
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
                <div className="story-visual-card">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
                    alt="The Journey Of Mographist visual art"
                  />
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
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Statistics Cards */}
          <div className="row g-4 pt-lg-5 pt-3 justify-content-center">
            {stats.map((item, idx) => (
              <div key={idx} className="col-12 col-md-4">
                <div className="stat-card">
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
