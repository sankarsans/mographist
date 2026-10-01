import React, { useRef } from "react";
import serviceOne from "../../../assets/service-1.png";
import arrow from "../../../assets/arrow.png";

const approachCards = [
  {
    id: 1,
    title: "Creative Direction",
    description:
      "Built the narrative, visual language and emotional tone of the film",
    bgColor: "rgba(217, 242, 247, 1)",
    borderColor: "rgba(95, 210, 233, 1)",
    image: serviceOne,
  },
  {
    id: 2,
    title: "Motion & 3D",
    description:
      "Created dynamic environments and motion systems that brought the digital world to life",
    bgColor: "rgba(250, 237, 237, 1)",
    borderColor: "rgba(217, 145, 145, 1)",
    image: serviceOne,
  },
  {
    id: 3,
    title: "Sound & Atmosphere",
    description: "Designed sound and atmosphere to add tension",
    bgColor: "rgba(241, 241, 241, 1)",
    borderColor: "rgba(159, 159, 159, 1)",
    image: serviceOne,
  },
  {
    id: 4,
    title: "AI Integration",
    description:
      "Used AI-assisted workflows to accelerate iterative concept development and asset generation",
    bgColor: "rgba(238, 236, 255, 1)",
    borderColor: "rgba(147, 139, 215, 1)",
    image: serviceOne,
  },
  {
    id: 5,
    title: "Visual FX",
    description:
      "Engineered subtle volumetric lighting and particle layers to heighten immersion",
    bgColor: "rgba(232, 247, 238, 1)",
    borderColor: "rgba(140, 198, 150, 1)",
    image: serviceOne,
  },
];

const ServiceTypes = () => {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollOffset = 310;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollOffset : scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="services-section bg-black-section">
      <div className="container py-5">
        {/* Hide native scrollbar while keeping track scrollable */}
        <style>
          {`
          .approach-card-track::-webkit-scrollbar {
            display: none;
          }
            .services-section {
                border-radius: 80px;
                margin: 5rem 2rem;
        .services-section::before {
          content: "";
          position: absolute;
          top: 15%;
          right: -5%;
          width: 500px;
          height: 500px;
          background: #000000;

          pointer-events: none;
        }
          .approach-card-track {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .approach-nav-btn {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 1px solid rgba(255, 255, 255, 0.28);
            background-color: rgba(255, 255, 255, 0.08);
            color: #ffffff;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition: all 0.25s ease;
            cursor: pointer;
            user-select: none;
          }
          .approach-nav-btn:hover {
           background: linear-gradient(90deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.11) 100%);
            border-color: rgba(255, 255, 255, 0.5);
            transform: scale(1.05);
          }
        `}
        </style>

        <div className="position-relative ">
          {/* Header with Title and Arrow Controls */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end mb-5 gap-4">
            <div>
              <div className="d-flex align-items-center mb-2">
                <span className="section-tag">How We Made It</span>
              </div>

              <h2 className="main-heading white">
                Our Approach To Bring <br></br>Complexity To Life
              </h2>
            </div>

            {/* Carousel Next / Prev Buttons */}
            <div className="d-flex align-items-center gap-2 flex-shrink-0">
              <button
                type="button"
                className="approach-nav-btn"
                onClick={() => handleScroll("left")}
                aria-label="Previous cards"
              >
                <img
                  src={arrow}
                  alt="Arrow icon"
                  style={{ transform: "rotate(180deg)" }}
                />
              </button>
              <button
                type="button"
                className="approach-nav-btn"
                onClick={() => handleScroll("right")}
                aria-label="Next cards"
              >
                <img src={arrow} alt="Arrow icon" />
              </button>
            </div>
          </div>

          {/* Horizontal Carousel Track */}
          <div
            ref={scrollContainerRef}
            className="approach-card-track d-flex gap-4 overflow-x-auto pb-2"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {approachCards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 d-flex flex-column justify-content-between p-4"
                style={{
                  width: "270px",
                  minHeight: "380px",
                  borderRadius: "32px",
                  backgroundColor: card.bgColor,
                  border: `1px solid ${card.borderColor}`,
                  scrollSnapAlign: "start",
                  color: "#000",
                  boxShadow: "0 12px 28px rgba(0, 0, 0, 0.35)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                {/* Media Preview / Stamp Container */}
                <div
                  className="w-100 rounded-4 overflow-hidden d-flex align-items-center justify-content-center p-4"
                  style={{
                    height: "170px",
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="rounded-3 shadow-sm"
                    style={{
                      maxWidth: "88%",
                      maxHeight: "88%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Title & Copy */}
                <div className="text-center mt-auto">
                  <h5
                    className="fw-bold mb-2"
                    style={{ fontSize: "1.5rem", letterSpacing: "-0.01em" }}
                  >
                    {card.title}
                  </h5>
                  <p
                    className="mb-0 text-secondary"
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: "1.55",
                      color: "rgba(88, 89, 93, 1)",
                    }}
                  >
                    {card.description}
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

export default ServiceTypes;
