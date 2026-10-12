import React from 'react';

const featuresData = [
  {
    id: 1,
    title: 'Creative Excellence',
    desc: "We bring a filmmaker's eye and a designer's precision to every project. Our work.",
  },
  {
    id: 2,
    title: 'End to End Production',
    desc: 'From concept development to final delivery, we manage every stage of the creative process.',
  },
  {
    id: 3,
    title: 'AI Enhanced Workflows',
    desc: 'We leverage the latest AI technologies alongside traditional production techniques.',
  },
  {
    id: 4,
    title: 'Creative Excellence',
    desc: "We bring a filmmaker's eye and a designer's precision to every project. Our work.",
  },
  {
    id: 5,
    title: 'End to End Production',
    desc: 'From concept development to final delivery, we manage every stage of the creative process.',
  },
  {
    id: 6,
    title: 'AI Enhanced Workflows',
    desc: 'We leverage the latest AI technologies alongside traditional production techniques.',
  },
];

export default function WhyChooseUs() {
  return (
    <>
      <style>{`
        .why-choose-section {
          position: relative;
          background-color: #F9F8FD;
          padding: 7rem 1.5rem 8rem;
        }

        /* Subtle top grid lines pattern as shown at the top of the reference */
        // .why-choose-grid-bg {
        //   position: absolute;
        //   top: 0;
        //   left: 0;
        //   right: 0;
        //   height: 260px;
        //   background-image: 
        //     linear-gradient(to right, rgba(0, 0, 0, 0.035) 1px, transparent 1px),
        //     linear-gradient(to bottom, rgba(0, 0, 0, 0.035) 1px, transparent 1px);
        //   background-size: 56px 56px;
        //   mask-image: linear-gradient(to bottom, black 30%, transparent 100%);
        //   -webkit-mask-image: linear-gradient(to bottom, black 30%, transparent 100%);
        //   pointer-events: none;
        // }

        /* 3-Column Card Grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }

        /* Feature Card */
        .feature-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 2.4rem 2rem 3rem 2rem;
          border: 1px solid #E2E2E2;
          box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.01),
            0 10px 24px rgba(15, 23, 42, 0.04);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.25s ease,
                      border-color 0.25s ease;
          display: flex;
          flex-direction: column;
          min-height: 200px;
        }

        .feature-card:hover {
          transform: translateY(-3px);
          box-shadow: 
            0 4px 8px rgba(0, 0, 0, 0.02),
            0 18px 36px rgba(15, 23, 42, 0.08);
          border-color: rgba(59, 40, 204, 0.15);
        }

        .feature-card-title {
          font-size: 1.15rem;
          font-weight: 750;
          color: #0b0914;
          margin-bottom: 0.85rem;
          letter-spacing: -0.015em;
        }

        .feature-card-text {
          font-size: 0.92rem;
          color: #555263;
          line-height: 1.6;
          margin: 0;
          font-weight: 400;
        }

        /* Responsive Breakpoints */
        @media (max-width: 991.98px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }
          .why-choose-section {
            padding: 5rem 1.25rem;
          }
          .why-choose-desc {
            margin-bottom: 2.5rem;
          }
        }

        @media (max-width: 640px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
          .why-choose-title {
            font-size: 2.25rem;
          }
          .feature-card {
            padding: 2rem 1.6rem;
            border-radius: 20px;
          }
        }
      `}</style>

      <section className="why-choose-section">
        {/* Subtle decorative grid lines at top */}
        <div className="why-choose-grid-bg" />

        <div className="container">
          {/* Eyebrow Tag */}
          <div className="section-tag">Why Choose Us</div>

          {/* Heading */}
          <h2 className="main-heading">
            Where Vision <br />
            Meets Precision
          </h2>

          {/* Subtitle */}
          <p className="section-subtitle mb-5">
            Everything you need to know about working with Mographist. Can't
            find your answer?
          </p>

          {/* 3x2 Grid Cards */}
          <div className="features-grid">
            {featuresData.map((item) => (
              <div key={item.id} className="feature-card">
                <h3 className="feature-card-title">{item.title}</h3>
                <p className="feature-card-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
