import React from "react";

export default function HeroSection() {
  const containerStyle = {
    minHeight: "75vh",
    /* Deep midnight gradient with soft top-center purple/indigo glow */
    background:
      "radial-gradient(ellipse 90% 70% at 50% 15%, #18193a 0%, #0d0e21 45%, #05060d 100%)",
    position: "relative",
    overflow: "hidden",
  };

  /* Subtle vertical grid lines matching the background */
  const gridOverlayStyle = {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
    backgroundSize: "8.333% 100%",
    pointerEvents: "none",
  };

  const titleStyle = {
    /* Responsive clamp ensures perfect sizing from mobile (32px) to desktop (60px) */
    fontSize: "clamp(2rem, 5vw + 1rem, 3.75rem)",
    letterSpacing: "-0.025em",
    lineHeight: 1.15,
  };

  const subtitleStyle = {
    fontSize: "clamp(1rem, 1.2vw + 0.5rem, 1.25rem)",
    letterSpacing: "-0.01em",
    lineHeight: 1.6,
    color: "#9aa2b5",
  };

  return (
    <section
      style={containerStyle}
      className="d-flex align-items-center justify-content-center text-center text-white px-3 py-5"
    >
      {/* Background Vertical Lines */}
      <div style={gridOverlayStyle} aria-hidden="true" />

      {/* Content Container */}
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-12 col-md-11 col-lg-9 col-xl-8">
            <h1 className="banner-title mb-4 white">
              Stories brought to life with ambitious brands and bold teams
            </h1>
            <p className="mx-auto mb-0 banner-subtitle">
              From cinematic films to motion-led experiences, we create work
              designed to move people and brands forward
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
