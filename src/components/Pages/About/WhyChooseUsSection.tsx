import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import arrow from "../../../assets/arrow.png";

const WhyChooseUs = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const steps = [
    {
      id: "1",
      title: "Creative Excellence",
      description:
        "We bring a filmmaker's eye and a designer's precision to every project. Our work doesn't just communicate — it captivates, leaving a lasting visual impression that builds brand equity over time.",
    },
    {
      id: "2",
      title: "End to End Production",
      description:
        "From concept development to final delivery, we manage every stage of the creative process.",
    },
    {
      id: "3",
      title: "AI Enhanced Workflows",
      description:
        "We leverage the latest AI technologies alongside traditional production techniques to increase efficiency, creativity, and scalability.",
    },
    {
      id: "4",
      title: "Cinematic Storytelling",
      description:
        "We weave narratives that resonate deeply with your audience, combining compelling scripts with breathtaking visuals.",
    },
    {
      id: "5",
      title: "Global Delivery",
      description:
        "Our distributed team ensures round-the-clock progress, delivering high-quality assets regardless of your timezone.",
    },
    {
      id: "6",
      title: "Future-Proof Designs",
      description:
        "We build assets that scale across platforms and formats, ensuring your investment retains its value for years.",
    },
  ];

  // Handle arrow clicks for smooth scrolling
  const handlePrev = () => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.children[1].offsetWidth; // index 1 because index 0 is the orange line
      sliderRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.children[1].offsetWidth;
      sliderRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  };

  // Update the counter when scrolling manually or via buttons
  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const itemWidth = sliderRef.current.children[1].offsetWidth;

      // 1. Check if we have scrolled all the way to the right end
      // We use "- 1" to account for any fractional pixel rounding errors in browsers
      if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 1) {
        setCurrentIndex(steps.length); // Force it to 6/6
      } else {
        // 2. Normal calculation for the rest of the slider
        const newIndex = Math.round(scrollLeft / itemWidth) + 1;
        const clampedIndex = Math.min(Math.max(newIndex, 1), steps.length);
        setCurrentIndex(clampedIndex);
      }
    }
  };

  const padZero = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="container py-5">
      {/* Hide scrollbar with inline styles for cross-browser compatibility */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          .slider-item { flex: 0 0 100%; max-width: 100%; }
          @media (min-width: 768px) {
            .slider-item { flex: 0 0 50%; max-width: 50%; }
          }
          @media (min-width: 992px) {
            .slider-item { flex: 0 0 33.333333%; max-width: 33.333333%; }
          }
            ,
          .nav-arrow-btn{
            transition: all 0.3s ease;
          }
          .nav-arrow-btn:not(:disabled):hover {
background-color: rgb(199 189 189 / 10%);background: linear-gradient(90deg,rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.11) 100%);
          }
        `}
      </style>

      <div
        className="p-4 p-md-5 position-relative text-white overflow-hidden"
        style={{
          backgroundColor: "rgba(0, 0, 0, 1)",
          borderRadius: "80px",
        }}
      >
        {/* Header Section */}
        <div className="row mb-5 pb-2">
          <div className="col-lg-8">
            <p className="section-tag mb-4">WHY CHOOSE US</p>
            <h2 className="main-heading white mb-3">
              Where Vision
              <br />
              Meets Precision
            </h2>
            <p
              className="section-subtitle mb-0"
              style={{ color: "rgba(251, 210, 210, 1)" }}
            >
              Everything you need to know about working with Mographist. Can't
              find your answer?
            </p>
          </div>

          <div className="col-lg-4 d-flex justify-content-lg-end align-items-lg-center mt-4 mt-lg-0">
            <div className="d-flex align-items-center gap-3">
              {/* Dynamic Indicator */}
              <div className="fw-medium" style={{ fontSize: "1.1rem" }}>
                <span style={{ color: "#e57000", fontSize: "1.5rem" }}>
                  {padZero(currentIndex)}
                </span>
                <span style={{ color: "#ffffff" }}>
                  /{padZero(steps.length)}
                </span>
              </div>

              {/* Left Arrow Button */}
              <button
                onClick={handlePrev}
                disabled={currentIndex === 1}
                className="btn rounded-circle p-0 d-flex justify-content-center align-items-center nav-arrow-btn"
                style={{
                  width: "60px",
                  height: "60px",
                  border: "1px solid rgba(255,255,255)",
                  transform: "rotate(-180deg)",
                  backgroundColor:
                    currentIndex === 1
                      ? "transparent"
                      : "rgba(255,255,255,0.1)",
                  color: currentIndex === 1 ? "rgba(255,255,255,0.3)" : "#fff",
                  transition: "all 0.3s",
                }}
              >
                <img src={arrow} alt="Arrow icon" />
              </button>

              {/* Right Arrow Button */}
              <button
                onClick={handleNext}
                disabled={currentIndex === steps.length}
                className="btn rounded-circle p-0 d-flex justify-content-center align-items-center nav-arrow-btn"
                style={{
                  width: "60px",
                  height: "60px",
                  border: "1px solid rgba(255,255,255)",
                  backgroundColor:
                    currentIndex === steps.length
                      ? "transparent"
                      : "rgba(255,255,255,0.1)",
                  color:
                    currentIndex === steps.length
                      ? "rgba(255,255,255,0.3)"
                      : "#fff",
                  transition: "all 0.3s",
                }}
              >
                <img src={arrow} alt="Arrow icon" />
              </button>
            </div>
          </div>
        </div>

        {/* Timeline Slider Section */}
        <div className="position-relative mt-0">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="d-flex flex-nowrap overflow-auto hide-scrollbar position-relative pb-4"
            style={{ scrollBehavior: "smooth", scrollSnapType: "x mandatory" }}
          >
            {/* Continuous Orange Line spanning the inner content */}
            <div
              className="position-absolute"
              style={{
                top: "28px",
                left: 0,
                height: "5px",
                backgroundColor: "rgba(238, 99, 0, 1)",
                zIndex: 1,
                minWidth: "200%",
              }}
            ></div>

            {steps.map((step, index) => (
              <div
                key={step.id}
                className="slider-item px-3 position-relative"
                style={{ scrollSnapAlign: "start", zIndex: 2 }}
              >
                {/* Timeline Dot */}
                <div className="d-flex justify-content-start mb-4">
                  <div
                    className="rounded-circle d-flex justify-content-center align-items-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "rgba(255, 255, 255, 0.31))",
                      backdropFilter: "blur(5px)",
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    <div
                      className="rounded-circle bg-white"
                      style={{ width: "24px", height: "24px" }}
                    ></div>
                  </div>
                </div>

                {/* Content with Large Background Number */}
                <div className="position-relative pt-3 text-start">
                  <span
                    className="position-absolute fw-bold"
                    style={{
                      fontSize: "12rem",
                      color: "rgba(250, 208, 209, 1)",
                      opacity: "15%",
                      top: "-16px",
                      left: "-53px",
                      zIndex: -1,
                      lineHeight: "1",
                    }}
                  >
                    {step.id}
                  </span>
                  <h5 className="fw-bold mb-3 text-white">{step.title}</h5>
                  <p
                    style={{
                      color: "rgba(192, 192, 192, 1)",
                      fontSize: "1rem",
                      lineHeight: "1.6",
                      maxWidth: "90%",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
