import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const carouselSlides = [
  {
    id: "01",
    badge: "Brand film",
    title: "Precision Craftsmanship And Typesetting",
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-sunset-26070-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "02",
    badge: "Brand film",
    title:
      "Simply Dummy Text Of The Printing And Type Industry. Lorem Ipsum Has Been.",
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-charts-and-data-31913-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "03",
    badge: "Brand film",
    title: "Simply Dummy Text Of The Printing And Industry. Lorem Ipsum.",
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-modern-smartphone-with-a-green-screen-42993-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "04",
    badge: "Commercial",
    title: "Next-Generation Dynamic Product Visuals & Motion.",
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-39962-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "05",
    badge: "Animation",
    title: "Hyper-Realistic 3D Renders and Futuristic Worlds.",
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "06",
    badge: "Showcase",
    title: "Creative Multi-Format Digital Delivery & Sound.",
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
];

const VideoCarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const activeVideoRef = useRef(null);

  useEffect(() => {
    if (activeVideoRef.current) {
      activeVideoRef.current.pause();
      activeVideoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselSlides.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === carouselSlides.length - 1 ? 0 : prev + 1,
    );
  };

  const togglePlay = () => {
    if (!activeVideoRef.current) return;
    if (isPlaying) {
      activeVideoRef.current.pause();
      setIsPlaying(false);
    } else {
      activeVideoRef.current.play();
      setIsPlaying(true);
    }
  };

  const progressPercentage = ((currentIndex + 1) / carouselSlides.length) * 100;

  return (
    <>
      <style>{`
        .carousel-section {
          background-color: #ffffff;
          padding: 3.5rem 0 5rem 0;
          overflow: hidden;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .carousel-stage {
          position: relative;
          width: 100%;
          height: 480px;
          perspective: 1600px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Fixed dimensions to calculate precise pixel gaps */
        .slide-card {
          position: absolute;
          width: 540px;
          height: 430px;
          border-radius: 32px;
          overflow: hidden;
          background-color: #0d0d11;
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.35);
          transition: transform 0.65s cubic-bezier(0.25, 1, 0.5, 1),
                      opacity 0.65s ease,
                      box-shadow 0.65s ease;
          cursor: pointer;
        }

        /* Active Card (Center) */
        .slide-card.active {
          transform: translateX(0) scale(1) translateZ(0);
          opacity: 1;
          z-index: 10;
        }

        /* Previous Card (Left): Shifted further with a distinct 32px margin gap */
        .slide-card.prev {
          transform: translateX(calc(-100% - 32px)) scale(0.92) rotateY(10deg);
          opacity: 1;
          z-index: 4;
        }

        /* Next Card (Right): Shifted further with a distinct 32px margin gap */
        .slide-card.next {
          transform: translateX(calc(100% + 32px)) scale(0.92) rotateY(-10deg);
          opacity: 1;
          z-index: 4;
        }

        .slide-card.hidden {
          transform: translateX(0) scale(0.6);
          opacity: 0;
          z-index: 0;
          pointer-events: none;
        }

        .slide-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          inset: 0;
        }

        .slide-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, transparent 40%, rgba(0, 0, 0, 0.82) 100%);
          z-index: 2;
          pointer-events: none;
        }

        .slide-badge {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          z-index: 4;
          background: rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
        }

        .slide-content {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          right: 1.5rem;
          z-index: 4;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1.25rem;
        }

        .slide-title {
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 600;
          line-height: 1.35;
          margin: 0;
          max-width: 82%;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .slide-action-btn {
          width: 38px;
          height: 38px;
          min-width: 38px;
          background: #ffffff;
          color: #000000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 1rem;
          font-weight: bold;
          transition: transform 0.2s ease;
        }

        .slide-action-btn:hover {
          transform: rotate(45deg);
        }

        .center-play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 5;
          width: 66px;
          height: 66px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }

        .center-play-btn:hover {
          transform: translate(-50%, -50%) scale(1.08);
          background: rgba(255, 255, 255, 0.32);
        }

        .play-shape {
          width: 0;
          height: 0;
          border-top: 9px solid transparent;
          border-bottom: 9px solid transparent;
          border-left: 14px solid #ffffff;
          margin-left: 3px;
        }

        .pause-shape {
          display: flex;
          gap: 4px;
        }

        .pause-shape span {
          width: 4px;
          height: 15px;
          background-color: #ffffff;
          border-radius: 2px;
        }

        .controls-container {
          max-width: 760px;
          margin: 2.75rem auto 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .counter-box {
          font-size: 0.95rem;
          font-weight: 700;
          color: #71717a;
          white-space: nowrap;
        }

        .counter-highlight {
          color: #f97316;
        }

        .progress-track {
          flex: 1;
          height: 3px;
          background-color: #e4e4e7;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background-color: #f97316;
          border-radius: 4px;
          transition: width 0.4s ease;
        }

        .nav-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: transparent;
          border: 1px solid #d4d4d8;
          color: #71717a;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .nav-btn:hover,
        .nav-btn.active-btn {
          border-color: #3b28cc;
          color: #3b28cc;
        }

        @media (max-width: 768px) {
          .slide-card {
            width: 84vw;
            height: 360px;
          }
          .slide-card.prev {
            transform: translateX(calc(-100% - 16px)) scale(0.88);
          }
          .slide-card.next {
            transform: translateX(calc(100% + 16px)) scale(0.88);
          }
        }
      `}</style>

      <section className="carousel-section">
        <div className="container-fluid px-0">
          <div className="carousel-stage">
            {carouselSlides.map((slide, index) => {
              const total = carouselSlides.length;
              let position = "hidden";

              if (index === currentIndex) {
                position = "active";
              } else if (index === (currentIndex - 1 + total) % total) {
                position = "prev";
              } else if (index === (currentIndex + 1) % total) {
                position = "next";
              }

              const isActive = position === "active";

              return (
                <div
                  key={slide.id}
                  className={`slide-card ${position}`}
                  onClick={() => {
                    if (position === "prev") handlePrev();
                    if (position === "next") handleNext();
                    if (isActive) togglePlay();
                  }}
                >
                  <span className="slide-badge">{slide.badge}</span>

                  {isActive ? (
                    <video
                      ref={activeVideoRef}
                      className="slide-media"
                      src={slide.videoSrc}
                      poster={slide.poster}
                      playsInline
                      loop
                      muted
                      onEnded={() => setIsPlaying(false)}
                    />
                  ) : (
                    <img
                      src={slide.poster}
                      alt={slide.title}
                      className="slide-media"
                    />
                  )}

                  <div className="slide-overlay-gradient"></div>

                  {isActive && (
                    <div
                      className="center-play-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay();
                      }}
                    >
                      {isPlaying ? (
                        <div className="pause-shape">
                          <span></span>
                          <span></span>
                        </div>
                      ) : (
                        <div className="play-shape"></div>
                      )}
                    </div>
                  )}

                  <div className="slide-content">
                    <p className="slide-title">{slide.title}</p>
                    <a
                      href={`#slide-${slide.id}`}
                      className="slide-action-btn"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="View project"
                    >
                      &#8599;
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="container px-4">
            <div className="controls-container">
              <div className="counter-box">
                <span className="counter-highlight">
                  {carouselSlides[currentIndex].id}
                </span>
                <span>/0{carouselSlides.length}</span>
              </div>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button
                  type="button"
                  className="nav-btn"
                  onClick={handlePrev}
                  aria-label="Previous Slide"
                >
                  &#8592;
                </button>
                <button
                  type="button"
                  className="nav-btn active-btn"
                  onClick={handleNext}
                  aria-label="Next Slide"
                >
                  &#8594;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoCarouselSection;
