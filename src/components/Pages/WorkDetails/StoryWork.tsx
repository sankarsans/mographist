import React, { useState, useEffect, useRef } from 'react';
import behind from '../../../assets/behind.png';

const storyData = [
  {
    id: '01',
    title: 'The Challenge',
    desc1:
      'Cybersecurity is complex. The challenge was to communicate evolving digital threats and security solutions through a story that audiences could easily understand.',
    desc2:
      'The goal was to simplify technical information without losing its depth, relevance or impact',
    image: behind,
  },
  {
    id: '02',
    title: 'The Idea',
    desc1:
      'Transform abstract security concepts into a cinematic visual world, using motion, 3D and storytelling to make the invisible feel tangible.',
    desc2:
      'Every visual element was designed to connect technology with human experiences and make the message more relatable',
    image: behind,
  },
  {
    id: '03',
    title: 'The Impact',
    desc1:
      'A visually engaging film designed to make complex cybersecurity ideas more accessible, memorable and relevant to a wider audience.',
    desc2:
      'The result is a compelling visual narrative that strengthens understanding, builds awareness and leaves a lasting impression',
    image: behind,
  },
];

const StoryWork = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;

      const rect = trackRef.current.getBoundingClientRect();
      const scrollableDistance =
        trackRef.current.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) return;

      // 0.0 at top of section, 1.0 at bottom of section
      const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1);

      // Divide scroll into 3 evenly spaced intervals
      const stepIndex = Math.min(
        Math.floor(progress * storyData.length),
        storyData.length - 1
      );

      setActiveIndex(stepIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate timeline fill height dynamically
  const progressHeight = `${(activeIndex / (storyData.length - 1)) * 100}%`;

  return (
    <>
      <style>{`
        /* 300vh runway: 100vh per story step */
        .story-scroll-track {
          position: relative;
          height: 300vh;
        }

        /* Sticky viewport: locks in place during the 300vh scroll */
        .story-sticky-viewport {
          position: sticky;
          top: 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        @keyframes fadeInSlideUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes imageCrossFade {
          from {
            opacity: 0.3;
            transform: scale(0.97);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .story-animated-text {
          animation: fadeInSlideUp 0.4s ease forwards;
        }

        .story-animated-img {
          animation: imageCrossFade 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Outer Scroll Runway */}
      <div className="story-scroll-track" ref={trackRef}>
        {/* Pinned Sticky Section */}
        <div className="story-sticky-viewport my-4">
          <div
            className="behind-work-section bg-black-section w-100"
            style={{
              borderRadius: '80px',
              margin: '0rem 2rem',
              padding: '4rem 2rem',
              backgroundColor: '#0d0a14',
            }}
          >
            <div className="container">
              <div className="text-white position-relative">
                {/* Header Tagline & Title */}
                <div className="mb-5">
                  <div className="d-flex align-items-center mb-2">
                    <span
                      style={{
                        color: 'rgba(255, 134, 0, 1)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                      }}
                    >
                      • From The First Insight To The Final Frame
                    </span>
                  </div>
                  <h2
                    className="main-heading white fw-bold"
                    style={{ fontSize: '2.75rem' }}
                  >
                    The Story Behind The Work
                  </h2>
                </div>

                {/* Content Grid */}
                <div className="row align-items-center g-4">
                  {/* Left Column: Timeline Stepper */}
                  <div className="col-12 col-lg-5">
                    <div className="position-relative ps-1">
                      {/* Background Timeline Guide */}
                      <div
                        className="position-absolute"
                        style={{
                          left: '48px',
                          top: '16px',
                          bottom: '24px',
                          width: '2px',
                          backgroundColor: 'rgba(255, 255, 255, 0.15)',
                          zIndex: 0,
                        }}
                      />

                      {/* Active Progress Line */}
                      <div
                        className="position-absolute"
                        style={{
                          left: '48px',
                          top: '16px',
                          height: progressHeight,
                          maxHeight: 'calc(100% - 40px)',
                          width: '2px',
                          backgroundColor: 'rgba(255, 134, 0, 1)',
                          zIndex: 0,
                          transition: 'height 0.4s ease',
                        }}
                      />

                      <div className="d-flex flex-column gap-4">
                        {storyData.map((item, index) => {
                          const isActive = activeIndex === index;
                          return (
                            <div
                              key={item.id}
                              className="d-flex align-items-start position-relative"
                              style={{
                                cursor: 'pointer',
                                zIndex: 1,
                                userSelect: 'none',
                              }}
                              onClick={() => {
                                // Manual click moves step & aligns window scroll to that step's slot
                                setActiveIndex(index);
                                if (trackRef.current) {
                                  const rect =
                                    trackRef.current.getBoundingClientRect();
                                  const total =
                                    trackRef.current.offsetHeight -
                                    window.innerHeight;
                                  const targetScroll =
                                    window.scrollY +
                                    rect.top +
                                    (index / (storyData.length - 1)) * total;
                                  window.scrollTo({
                                    top: targetScroll,
                                    behavior: 'smooth',
                                  });
                                }
                              }}
                            >
                              {/* Step Number */}
                              <span
                                className="fw-semibold pe-3 pt-1 text-center"
                                style={{
                                  width: '36px',
                                  fontSize: '1.05rem',
                                  color: isActive
                                    ? 'rgba(255, 134, 0, 1)'
                                    : 'rgba(192, 192, 192, 0.6)',
                                  transform: isActive
                                    ? 'scale(1.1)'
                                    : 'scale(1)',
                                  transition: 'all 0.3s ease',
                                }}
                              >
                                {item.id}
                              </span>

                              {/* Dot Node */}
                              <div className="pe-3 pt-2 d-flex align-items-center justify-content-center">
                                <div
                                  className="rounded-circle"
                                  style={{
                                    width: '15px',
                                    height: '15px',
                                    background: isActive
                                      ? '#FF8600'
                                      : 'linear-gradient(295deg, #111 0%, #666 100%)',
                                    border: isActive
                                      ? '0px solid #753b0e'
                                      : '2px solid #444',
                                    boxShadow: isActive
                                      ? '0 0 14px rgba(255, 134, 0, 0.6)'
                                      : 'none',
                                    transform: isActive
                                      ? 'scale(1.2)'
                                      : 'scale(1)',
                                    transition:
                                      'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                    // marginLeft: isActive ? '4px' : '0px',
                                  }}
                                />
                              </div>

                              {/* Title & Accordion Body */}
                              <div className="flex-grow-1 ps-1 pt-1">
                                <h5
                                  className="fw-bold mb-2"
                                  style={{
                                    fontSize: '1.25rem',
                                    color: isActive
                                      ? '#ffffff'
                                      : 'rgba(192, 192, 192, 0.7)',
                                    transform: isActive
                                      ? 'translateX(4px)'
                                      : 'translateX(0)',
                                    transition: 'all 0.3s ease',
                                  }}
                                >
                                  {item.title}
                                </h5>

                                {isActive && (
                                  <div
                                    key={`text-${activeIndex}`}
                                    className="story-animated-text mt-2"
                                    style={{
                                      color: 'rgba(255, 209, 209, 1)',
                                      fontSize: '0.86rem',
                                      lineHeight: '1.65',
                                      maxWidth: '340px',
                                    }}
                                  >
                                    <p className="mb-3">{item.desc1}</p>
                                    <p className="mb-0">{item.desc2}</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Layered Card Stack */}
                  <div className="col-12 col-lg-7 d-flex justify-content-center justify-content-lg-end">
                    <div
                      className="position-relative w-100"
                      style={{ maxWidth: '560px', marginTop: '25px' }}
                    >
                      {/* Top Stack Rim 1 */}
                      <div
                        className="position-absolute start-50 translate-middle-x"
                        style={{
                          top: '-22px',
                          width: '68%',
                          height: '28px',
                          backgroundColor: 'rgba(255, 255, 255, 0.12)',
                          borderRadius: '20px 20px 0 0',
                          zIndex: 1,
                        }}
                      />

                      {/* Top Stack Rim 2 */}
                      <div
                        className="position-absolute start-50 translate-middle-x"
                        style={{
                          top: '-11px',
                          width: '82%',
                          height: '28px',
                          backgroundColor: 'rgba(255, 255, 255, 0.22)',
                          borderRadius: '24px 24px 0 0',
                          zIndex: 2,
                        }}
                      />

                      {/* Main Foreground Active Card */}
                      <div
                        className="position-relative overflow-hidden shadow-lg"
                        style={{
                          borderRadius: '32px',
                          backgroundColor: '#dfdbce',
                          aspectRatio: '16 / 10',
                          zIndex: 3,
                        }}
                      >
                        <img
                          key={`img-${activeIndex}`}
                          src={storyData[activeIndex].image}
                          alt={storyData[activeIndex].title}
                          className="story-animated-img w-100 h-100"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryWork;
