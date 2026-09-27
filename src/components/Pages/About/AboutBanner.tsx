import React, { useState, useRef } from "react";
import arrow from "../../../assets/arrow.png";
import circle from "../../../assets/circle.png";

const AboutBanner = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const videoRef = useRef(null);

  const onClick = () => {
    setIsExpanded(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setIsExpanded(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <>
      <style>{`
        .hero-section {
          position: relative;
          background-color: #f8f9fb;
          /* Striped vertical background grid lines */
          background: #020024;
          background: linear-gradient(181deg, rgb(35 31 59) 0%, rgb(0 0 0) 100%);
          min-height: 90vh;
          // display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 9rem 0 2.5rem 0;
          overflow: hidden;
        }

        /* Main Big Heading */
        .hero-heading {
          font-size: 4rem;
          font-weight: 500;
           color: #fff;
          line-height: 1.0;
          letter-spacing: 0em;
          margin-bottom: 2rem;
        }

        /* Subtitle with Orange Accent Dot */
        .hero-subtitle {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          font-size: 2rem;
          font-weight: 400;
          line-height: 1.25;
          letter-spacing: -0.02em;
          color: rgba(209, 203, 253, 1);
          max-width: 820px;
        }

        /* Bubble Showreel Trigger Button */
        .bubble-trigger-container {
          position: absolute;
          bottom: 14%;
          right: 8%;
          z-index: 5;
        }

        .bubble-btn {
          width: 213px;
          height: 213px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #2a0845, #080112);
          border: 1px solid rgba(168, 85, 247, 0.4);
          box-shadow: 0 0 0 10px rgba(168, 85, 247, 0.08), 0 20px 40px rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
          user-select: none;
          // position: relative;
          &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: radial-gradient(circle at 35% 35%, rgba(168, 85, 247, 0.2), transparent);
            opacity: 0;
            transition: opacity 0.3s ease;
          }
        }

        .bubble-btn:hover {
          transform: scale(1.06);
          box-shadow: 0 0 0 16px rgba(168, 85, 247, 0.15), 0 25px 50px rgba(0, 0, 0, 0.5);
        }

        .bubble-play-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.65rem;
        }

        .play-arrow {
          width: 0;
          height: 0;
          border-top: 14px solid transparent;
          border-bottom: 14px solid transparent;
          border-left: 20px solid #ffffff;
          margin-left: 2px;
        }

        .bubble-label {
          font-size: 1.125rem;
          font-weight: 600;
          color: rgba(208, 188, 247, 1);
          letter-spacing: 0.02em;
        }

        /* Expanding Bubble Video Canvas */
        .bubble-video-overlay {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 20;
          background-color: #000000;
          /* Starts clipped to a 0% circle at the trigger location */
          clip-path: circle(0% at 86% 76%);
          transition: clip-path 0.85s cubic-bezier(0.77, 0, 0.175, 1);
          pointer-events: none;
        }

        .bubble-video-overlay.active {
          clip-path: circle(160% at 86% 76%);
          pointer-events: all;
        }

        .banner-video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Close Floating Bubble Button */
        .close-bubble-btn {
          position: absolute;
          top: 2rem;
          right: 2.5rem;
          z-index: 30;
          background-color: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.4);
          color: #ffffff;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: transform 0.2s ease, background-color 0.2s ease;
        }

        .close-bubble-btn:hover {
          background-color: rgba(255, 255, 255, 0.4);
          transform: scale(1.1);
        }

        /* Responsive Breakpoints */
        @media (max-width: 991.98px) {
          .bubble-trigger-container {
            position: relative;
            bottom: unset;
            right: unset;
            margin: 3rem 0;
            display: flex;
            justify-content: center;
          }

          .bubble-btn {
            width: 145px;
            height: 145px;
          }

          .bubble-video-overlay {
            clip-path: circle(0% at 50% 75%);
          }

          .bubble-video-overlay.active {
            clip-path: circle(160% at 50% 75%);
          }
        }
          .showreel-outer-ring {
          width: 240px;
          height: 240px;
          border-radius: 50%;
          padding: 13.33px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background: #000;
          position: relative;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);          float: right;

        }

        /* 1.33px Linear Gradient Border (rgba(74, 20, 184, 0.12) to rgba(74, 20, 184, 1)) */
        .showreel-outer-ring::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          padding: 1.33px;
              background: linear-gradient(180deg, rgba(74, 20, 184, 0.12) 0%, rgb(255 255 255) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .showreel-outer-ring:hover {
          transform: scale(1.05);
        }

        /* Inner Dark Circle with Retro Grid Pattern */
        .showreel-inner-circle {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 13.33px;
          position: relative;
          overflow: hidden;
          background-color: #0d0118;
          /* Dark Gradient + Ambient Radial Glow */
          background-image: url(${circle});
          box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.8);
        }

        /* Translucent Play Disc */
        .play-icon-disc {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          // background: RGBA(255, 255, 255, 0.31);
background: linear-gradient(263deg, rgb(65 22 71) 0%, rgb(96 66 101) 100%);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        /* Triangle Play Shape */
        .play-triangle-shape {
          width: 0;
          height: 0;
          border-top: 12px solid transparent;
          border-bottom: 12px solid transparent;
          border-left: 20px solid #ffffff;
          margin-left: 3px;
        }

        .showreel-btn-label {
          color: rgba(208, 188, 247, 1);
          font-size: 1.125rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
          margin: 0;
        }

        @media (max-width: 576px) {
          .showreel-outer-ring {
            width: 180px;
            height: 180px;
            padding: 10px;
          }
          .play-icon-disc {
            width: 42px;
            height: 42px;
          }
          .showreel-btn-label {
            font-size: 0.82rem;
            
          }
        }
      `}</style>

      <section className="hero-section">
        {/* Top Text Content */}
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-10">
              <h1 className="hero-heading mt-5">
                Live Action<br></br> Video Productions
              </h1>

              <div className="hero-subtitle">
                From concept to final cut, we create cinematic films that move
                brands, products and ideas to life.
              </div>
              <div>
                <a href="#contact" className="btn-start-story mt-4">
                  Start a project
                  <img src={arrow} alt="Arrow icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Circular Bubble Video Trigger */}
        <div className="container">
          <div
            className="showreel-outer-ring"
            onClick={onClick}
            role="button"
            tabIndex={0}
            aria-label="Watch Showreel"
          >
            <div className="showreel-inner-circle">
              <div className="play-icon-disc">
                <div className="play-triangle-shape"></div>
              </div>
              <p className="showreel-btn-label">Watch Showreel</p>
            </div>
          </div>
        </div>

        {/* Bubble Zoom-In / Zoom-Out Overlay Layer */}
        <div className={`bubble-video-overlay ${isExpanded ? "active" : ""}`}>
          <button
            type="button"
            className="close-bubble-btn"
            onClick={handleClose}
            aria-label="Close Showreel Video"
          >
            ✕
          </button>
          <video
            ref={videoRef}
            className="banner-video-element"
            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-sunset-26070-large.mp4"
            loop
            playsInline
            muted
          />
        </div>
      </section>
    </>
  );
};

export default AboutBanner;
