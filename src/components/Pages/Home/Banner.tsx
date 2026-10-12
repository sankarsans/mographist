import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeBanner from '../../../assets/home-bg.png';
import VideoBubble from '../../../assets/video-bubble.png';
import PlayIcon from '../../../assets/play.png';

// Slides/cards cycle during the initial phase
const SHOWREEL_ITEMS = [
  {
    id: 1,
    title: 'AI Automation',
    tag: 'TRED',
    bg: '#110b29',
    video:
      'https://pub-78dd9383d8f140169345b5d60e51ec50.r2.dev/showreel_rb_3cb270b007.mp4',
  },
  {
    id: 2,
    title: 'Motion Identity',
    tag: 'Teachmint',
    bg: '#00b2fe',
    video:
      'https://pub-78dd9383d8f140169345b5d60e51ec50.r2.dev/showreel_rb_3cb270b007.mp4',
  },
  {
    id: 3,
    title: 'Creative Tech',
    tag: 'LivDemy',
    bg: '#0a0a14',
    video:
      'https://pub-78dd9383d8f140169345b5d60e51ec50.r2.dev/showreel_rb_3cb270b007.mp4',
  },
];

export default function HeroBannerShowreel() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollDistance =
        containerRef.current.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) return;

      // Normalize scroll from 0.0 to 1.0
      const currentProgress = Math.min(
        Math.max(-rect.top / scrollDistance, 0),
        1
      );
      setProgress(currentProgress);

      // Cycle through slide cards during early scroll (0% -> 40%)
      if (currentProgress < 0.4) {
        const slideIndex = Math.min(
          Math.floor((currentProgress / 0.4) * SHOWREEL_ITEMS.length),
          SHOWREEL_ITEMS.length - 1
        );
        setActiveSlide(slideIndex);
      }

      // Auto-play / pause based on scroll expansion
      if (videoRef.current) {
        if (currentProgress > 0.1 && videoRef.current.paused) {
          videoRef.current.play().catch(() => {});
        } else if (currentProgress <= 0.05 && !videoRef.current.paused) {
          videoRef.current.pause();
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Dynamic Interpolations Based on Scroll Progress ---

  // 1. Hero text opacity: fades out between 0% and 35% scroll
  const textOpacity = Math.max(1 - progress / 0.35, 0);

  // 2. Card expansion phase runs from 30% to 90% scroll
  const expandProgress = Math.min(Math.max((progress - 0.3) / 0.6, 0), 1);

  // Width & Height interpolate from small card to 100vw x 100vh
  // Small state: ~320px wide, ~210px tall
  const cardWidth = `calc(320px + (100vw - 320px) * ${expandProgress})`;
  const cardHeight = `calc(210px + (100vh - 210px) * ${expandProgress})`;

  // Smoothly moves card from bottom-right (right: 6%, bottom: 12%) to center screen (0%, 0%)
  const rightOffset = (1 - expandProgress) * 6;
  const bottomOffset = (1 - expandProgress) * 12;

  // Border radius goes from 28px down to 0px as it fills the screen
  const borderRadius = `${(1 - expandProgress) * 28}px`;

  return (
    <>
      <style>{`
        /* Scroll runway: gives 300vh for smooth step-by-step expansion */
        .hero-scroll-track {
          position: relative;
          height: 300vh;
          background-color: #0b0114;
        }

        /* Sticky viewport locked to screen */
        .hero-sticky-frame {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 8rem 0 2.5rem 0;
          background-image: url(${HomeBanner});
          background-size: calc(100% / 12) 100%;
          text-align: center;
        }

        .hero-tag {
          color: rgba(255, 134, 0, 1);
          font-size: 1.25rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 1rem;
          font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
        }

        .hero-tag::before {
          content: "";
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(255, 134, 0, 1);
        }

        .hero-heading {
          font-size: clamp(3.5rem, 10vw, 8rem);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: 0.04em;
          margin-bottom: 1rem;
        }

        .text-ai {
          color: rgba(208, 188, 247, 1);
        }

        .text-powered {
          color: #ffffff;
          margin-left: 0.25em;
        }

        .hero-subtitle {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.35;
          color: rgba(180, 180, 180, 1);
        }

        .pipeline-bar {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          color: rgba(158, 158, 158, 1);
          text-transform: uppercase;
          text-align: left;
        }

        .pipeline-bar span {
          padding: 0 1.2rem;
        }

        /* --- Morphing Interactive Card --- */
        .scroll-morph-card {
          position: absolute;
          z-index: 20;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.15);
          will-change: width, height, right, bottom, border-radius;
          transition: border-radius 0.1s linear;
          background: #000;
        }

        .scroll-morph-card video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Slide pill overlay visible only before full expansion */
        .card-pill-overlay {
          position: absolute;
          bottom: 1.25rem;
          left: 1.25rem;
          padding: 0.4rem 1rem;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(8px);
          border-radius: 999px;
          color: #fff;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.05em;
          transition: opacity 0.2s ease;
          pointer-events: none;
        }
      `}</style>

      {/* Runway wrapper providing scrolling space */}
      <section className="hero-scroll-track" ref={containerRef}>
        <div className="hero-sticky-frame">
          {/* Hero text (fades as user scrolls down) */}
          <div
            className="container"
            style={{
              opacity: textOpacity,
              transform: `translateY(-${progress * 80}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <div className="row">
              <div className="col-12 text-center pt-lg-5 mt-lg-5">
                <span className="hero-tag pt-lg-5">Creative Motion Studio</span>
                <h1 className="hero-heading">
                  <span className="text-ai">AI</span>
                  <span className="text-powered">POWERED</span>
                </h1>
                <div className="hero-subtitle">
                  <span>
                    Motion Graphics, Animation & AI powered
                    <br /> Video Production
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom pipeline labels */}
          <div className="container mt-2" style={{ opacity: textOpacity }}>
            <div className="pipeline-bar">
              <span>Concept</span> / <span>Production</span> / <span>Post</span>{' '}
              / <span>Delivery</span>
            </div>
          </div>

          {/* Morphing Video Card (expands smoothly to 100vw x 100vh) */}
          <div
            className="scroll-morph-card"
            style={{
              width: cardWidth,
              height: cardHeight,
              right: `${rightOffset}vw`,
              bottom: `${bottomOffset}vh`,
              borderRadius: borderRadius,
              pointerEvents: expandProgress > 0.85 ? 'all' : 'none',
            }}
          >
            <video
              ref={videoRef}
              key={SHOWREEL_ITEMS[activeSlide].video}
              src={SHOWREEL_ITEMS[activeSlide].video}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onError={(e) => {
                console.error('Video failed to load:', e.currentTarget.error);
              }}
              onLoadedData={() => {
                console.log('Video loaded successfully!');
              }}
            />

            {/* Project tag pill (hidden once expanded) */}
            <div
              className="card-pill-overlay"
              style={{
                opacity: Math.max(1 - expandProgress * 3, 0),
              }}
            >
              {SHOWREEL_ITEMS[activeSlide].tag}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
