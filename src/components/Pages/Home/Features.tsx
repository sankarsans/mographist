import React from 'react';
import VideoCarouselSection from './VideoCarouselSection';
import Buttons from '../Common/Buttons';

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
          border-radius: 50px;
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
              <span className="section-tag">Our Portfolio</span>
              <h2 className="main-heading">
                Where creativity <br></br>Takes the Spotlight.
              </h2>
              <p className="section-subtitle mb-0">
                From imagination to motion. Explore what we've made.
              </p>
            </div>

            {/* Right Column: CTA Button */}
            <div className="col-12 col-lg-auto d-flex justify-content-start justify-content-lg-end">
              <Buttons content="See Our Creations" link="/works" href="false" />
            </div>
          </div>
        </div>
        <VideoCarouselSection />
      </section>
    </>
  );
};

export default Features;
