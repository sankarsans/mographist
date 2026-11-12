import type { Service } from './serviceData';

type WhatWeOfferProps = {
  service: Service;
};

const cardColors = [
  { bgColor: '#D9F2F7', numColor: '#36B4CC' },
  { bgColor: '#FAEDED', numColor: '#EE6060' },
  { bgColor: '#EEECFF', numColor: '#8378DF' },
  { bgColor: '#F1F1F1', numColor: '#636363' },
];

export default function WhatWeOffer({ service }: WhatWeOfferProps) {
  return (
    <>
      <style>{`
        .offer-section {
          background-color: #ffffff;
          padding: 6rem 1.5rem 8rem;
         
        }

        .offer-heading-accent {
          color: #3b28cc;
        }

        /* 3-Column Bento Grid */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        /* Bento Card */
        .bento-card {
          border-radius: 32px;
          padding: 2.0rem 1.6rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
          min-height: 250px;
        }

        .bento-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.05);
        }

        /* First Tall Card */
        .bento-card-tall {
          grid-row: span 2;
        }

        /* Number Badge Circle */
        .bento-badge {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.7rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        /* Card Typography */
        .bento-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #000;
          line-height: 1.3;
          margin: 0 0 0.55rem 0;
          letter-spacing: -0.015em;
        }

        .bento-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #4D4D4D;
          margin: 0;
        }

        /* Responsive Breakpoints */
        @media (max-width: 991.98px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .bento-card-tall {
            grid-row: span 1;
          }
        }

        @media (max-width: 640px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }

          .offer-section {
            padding: 4.5rem 1.25rem;
          }

          .offer-heading {
            margin-bottom: 2.5rem;
          }
        }
      `}</style>

      <section className="offer-section">
        <div className="container">
          {/* Eyebrow Tag */}
          <div className="section-tag">What We Offer</div>

          {/* Heading */}
          <h2 className="main-heading mb-5">
            Crafted for every stage of
            <span className="offer-heading-accent"> your story</span>
          </h2>

          {/* Bento Card Grid */}
          <div className="bento-grid">
            {service.tags.map((tag, index) => {
              const colors = cardColors[index % cardColors.length];
              return (
                <div
                  key={tag.title}
                  className={`bento-card ${index === 0 ? 'bento-card-tall' : ''}`}
                  style={{ backgroundColor: colors.bgColor }}
                >
                  <div
                    className="bento-badge"
                    style={{ color: colors.numColor }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="bento-title">{tag.title}</h3>
                  <p className="bento-desc">{tag.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
