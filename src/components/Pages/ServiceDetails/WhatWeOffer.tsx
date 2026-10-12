import React from 'react';

const services = [
  {
    number: '1',
    title: 'Commercial video production',
    description:
      'Campaign-ready films crafted to capture attention and drive results',
    bgColor: '#D9F2F7',
    numColor: '#36B4CC',
    isTall: true,
  },
  {
    number: '2',
    title: 'Corporate films',
    description: 'Stories that communicate your company, people and purpose',
    bgColor: '#FAEDED',
    numColor: '#EE6060',
  },
  {
    number: '3',
    title: 'Promotional videos',
    description:
      'Engaging films that showcase your brand, product or initiative.',
    bgColor: '#EEECFF',
    numColor: '#8378DF',
  },
  {
    number: '4',
    title: 'Brand storytelling',
    description:
      'Human stories designed to build connection, emotion and trust',
    bgColor: '#F1F1F1',
    numColor: '#636363',
  },
  {
    number: '5',
    title: 'Product launches',
    description: 'Launch films that turn products into memorable moments.',
    bgColor: '#F8F4E0',
    numColor: '#C2AC3C',
  },
  {
    number: '6',
    title: 'Training videos',
    description:
      'Clear, engaging content designed to educate, explain and enable',
    bgColor: '#EEECFF',
    numColor: '#8378DF',
  },
  {
    number: '7',
    title: 'Marketing campaigns',
    description:
      'High-impact films created for campaigns across channels and platforms',
    bgColor: '#FAEDED',
    numColor: '#EE6060',
  },
  {
    number: '8',
    title: 'Customer testimonials',
    description:
      'Authentic customer stories that build credibility and inspire confidence',
    bgColor: '#EEECFF',
    numColor: '#8378DF',
  },
];

export default function WhatWeOffer() {
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
            Crafted For Every Stage Of{' '}
            <span className="offer-heading-accent">Your Story</span>
          </h2>

          {/* Bento Card Grid */}
          <div className="bento-grid">
            {services.map((item) => (
              <div
                key={item.number}
                className={`bento-card ${item.isTall ? 'bento-card-tall' : ''}`}
                style={{ backgroundColor: item.bgColor }}
              >
                <div className="bento-badge" style={{ color: item.numColor }}>
                  {item.number}
                </div>
                <h3 className="bento-title">{item.title}</h3>
                <p className="bento-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
