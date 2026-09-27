import React from "react";
import VideoCarouselSection from "./VideoCarouselSection";

const Features = () => {
  return (
    <>
      <style>{`
      .selected-work-section {
          background-color: #ffffff;
          padding: 5.5rem 0 5.5rem 0;

        

        .btn-view-projects {
          background-color: #3b28cc;
          color: #ffffff;
          font-size: 0.875rem;
          font-weight: 400;
          border-radius: 12px;
          padding: 0.85rem 1.2rem;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          white-space: nowrap;
          transition: background-color 0.2s ease, transform 0.15s ease;
        }

        .btn-view-projects:hover {
          background-color: #2f1fa8;
          color: #ffffff;
          transform: translateY(-1px);
        }
      }
      `}</style>

      <section className="selected-work-section">
        <div className="container">
          <div className="row align-items-center justify-content-between gy-4">
            {/* Left Column: Tag, Heading, Subtitle */}
            <div className="col-12 col-lg-8">
              <span className="section-tag">Selected Work</span>
              <h2 className="main-heading">
                Motion That Connects
                <br />
                Stories That Stay.
              </h2>
              <p className="section-subtitle mb-0">
                simply dummy text of the printing and typesetting industry.
              </p>
            </div>

            {/* Right Column: CTA Button */}
            <div className="col-12 col-lg-auto d-flex justify-content-start justify-content-lg-end">
              <a href="#projects" className="btn-view-projects">
                View all projects
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
        <VideoCarouselSection />
      </section>
    </>
  );
};

export default Features;
