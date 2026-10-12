const col1Images = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop',
];

const col2Images = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1200&auto=format&fit=crop',
];

const col3Images = [
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
];

export default function OurApproach() {
  return (
    <>
      {/* 
        The SVG Mask:
        Starts at (0, 0.05), curves down to (0.5, 0.14) in the center, 
        and comes back up to (1, 0.05) on the right side.
        The bottom remains a flat straight cut from (1, 1) to (0, 1).
      */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="concave-bowl-mask" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.05 Q 0.5,0.14 1,0.05 L 1,1 L 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <style>{`
        /* 
          Concave Top Cutout Canvas:
          Sides sit higher, center dips down, bottom is flat.
        */
        .curved-marquee-viewport {
          position: relative;
          height: 740px;
          overflow: hidden;
          width: 100%;
          clip-path: url(#concave-bowl-mask);
          -webkit-clip-path: url(#concave-bowl-mask);
        }

        /* 3-Column Grid */
        .marquee-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr 1fr;
          gap: 1.5rem;
          height: 100%;
        }

        .marquee-column {
          position: relative;
          overflow: hidden;
          height: 100%;
        }

        .marquee-track {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          will-change: transform;
        }

        /* Continuous Keyframes */
        @keyframes scrollDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0%);
          }
        }

        @keyframes scrollUp {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .scroll-down {
          animation: scrollDown 24s linear infinite;
        }

        .scroll-up {
          animation: scrollUp 24s linear infinite;
        }

        /* Pause ONLY the hovered column */
        .marquee-column:hover .marquee-track {
          animation-play-state: paused;
        }

        /* Cards */
        .moment-card {
          width: 100%;
          border-radius: 24px;
          overflow: hidden;
          background-color: #f1f5f9;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.05);
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .moment-card:hover {
          transform: scale(1.02);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
        }

        .moment-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 991.98px) {
          .curved-marquee-viewport {
            height: 580px;
            clip-path: none;
            -webkit-clip-path: none;
          }

          .marquee-grid {
            grid-template-columns: 1fr 1.3fr 1fr;
            gap: 1rem;
          }
        }
      `}</style>

      <section className="visual-moments-section">
        <div className="container">
          <div className="section-tag">Key Visual Moments</div>
          <h2 className="main-heading">
            Our Approach To Bring<br></br> Complexity To Life
          </h2>

          <div className="curved-marquee-viewport">
            <div className="marquee-grid">
              {/* Column 1: Infinite Scroll Down */}
              <div className="marquee-column">
                <div className="marquee-track scroll-down">
                  {[...col1Images, ...col1Images].map((img, idx) => (
                    <div
                      key={`col1-${idx}`}
                      className="moment-card"
                      style={{ aspectRatio: '3 / 4' }}
                    >
                      <img
                        src={img}
                        alt="Visual moment"
                        className="moment-img"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: Infinite Scroll Up */}
              <div className="marquee-column">
                <div className="marquee-track scroll-up">
                  {[...col2Images, ...col2Images].map((img, idx) => (
                    <div
                      key={`col2-${idx}`}
                      className="moment-card"
                      style={{ aspectRatio: '4 / 3' }}
                    >
                      <img
                        src={img}
                        alt="Visual moment"
                        className="moment-img"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3: Infinite Scroll Down */}
              <div className="marquee-column">
                <div className="marquee-track scroll-down">
                  {[...col3Images, ...col3Images].map((img, idx) => (
                    <div
                      key={`col3-${idx}`}
                      className="moment-card"
                      style={{ aspectRatio: '3 / 4' }}
                    >
                      <img
                        src={img}
                        alt="Visual moment"
                        className="moment-img"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
