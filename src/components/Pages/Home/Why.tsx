import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const cards = [
  {
    title: "Strategy Meets Creative Crafts",
    description:
      "Every project starts with a clear idea and ends with purposeful execution.",
    className: "strategy-card",
    iconColor: "#19b7d3",
    large: true,
  },
  {
    title: "One Creative Partner",
    description: "From concept & production to motion, VFX",
    className: "partner-card",
    iconColor: "#ff5d5d",
  },
  {
    title: "Built for Every Screen",
    description:
      "Content designed to perform across campaigns, products & platforms.",
    className: "screen-card",
    iconColor: "#6755e8",
  },
  {
    title: "AI-Enhanced, Human-Led",
    description:
      "Smarter workflows powered by AI, shaped by creative judgement.",
    className: "ai-card",
    iconColor: "#777777",
  },
  {
    title: "Stories Drive Impact",
    description: "We create content that informs, engages",
    className: "stories-card",
    iconColor: "#d6ae00",
  },
];

function CardIcon({ color }) {
  return (
    <div
      className="card-icon"
      style={{
        "--icon-color": color,
      }}
    >
      <span className="icon-inner">
        <span className="icon-line"></span>
      </span>
    </div>
  );
}

function ImpactCard({ card }) {
  return (
    <div
      className={`impact-card ${card.className} ${
        card.large ? "impact-card-large" : ""
      }`}
    >
      <CardIcon color={card.iconColor} />

      <div className="card-content">
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
    </div>
  );
}

export default function Why() {
  return (
    <>
      <style>{`
    
        .impact-section {
          width: 100%;
          padding: 100px 0;
          background: #ffffff;
        }

        .impact-container {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* -------------------------
           Header
        ------------------------- */

        .impact-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
          color: #f28b22;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        .impact-eyebrow::before {
          content: "";
          width: 5px;
          height: 5px;
          background: #f28b22;
          border-radius: 50%;
          display: inline-block;
        }

        .impact-title {
          margin: 0;
          font-size: clamp(32px, 4vw, 45px);
          line-height: 1.05;
          font-weight: 800;
          letter-spacing: -1.5px;
        }

        .impact-title .highlight {
          color: #3e2bbd;
        }

        .impact-subtitle {
          margin: 10px 0 30px;
          color: #3f3f3f;
          font-size: 13px;
          line-height: 1.5;
        }

        /* -------------------------
           Main Cards Layout
        ------------------------- */

        .impact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        //   grid-template-rows: 155px 162px;
          gap: 20px;
        }

        .impact-card {
          position: relative;
          overflow: hidden;
          border-radius: 32px;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .impact-card-large {
          grid-column: 1;
          grid-row: 1 / 3;
          padding: 20px 16px;
        }

        .partner-card {
          grid-column: 2;
          grid-row: 1;
        }

        .screen-card {
          grid-column: 3;
          grid-row: 1;
        }

        .ai-card {
          grid-column: 2;
          grid-row: 2;
        }

        .stories-card {
          grid-column: 3;
          grid-row: 2;
        }

        /* -------------------------
           Card Colors
        ------------------------- */

        .strategy-card {
          background: rgba(217, 242, 247, 1);
        }

        .partner-card {
          background: rgba(250, 237, 237, 1);
        }

        .screen-card {
          background: rgba(238, 236, 255, 1);
        }

        .ai-card {
          background: rgba(241, 241, 241, 1);
        }

        .stories-card {
          background: rgba(248, 244, 224, 1);
        }

        /* -------------------------
           Icons
        ------------------------- */

        .card-icon {
          width: 50px;
          height: 50px;
        //   flex: 0 0 37px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 17px;
          box-shadow:rgba(25, 166, 194, 0.08) 0px 10px 20px -10px;
        }

        .icon-inner {
          position: relative;
          width: 14px;
          height: 13px;
          border: 1.7px solid var(--icon-color);
          border-radius: 2px;
          display: block;
        }

        .icon-line {
          position: absolute;
          left: 1.5px;
          right: 1.5px;
          top: 3px;
          height: 1.5px;
          background: var(--icon-color);
        }

        /* -------------------------
           Text
        ------------------------- */

        .card-content {
          max-width: 85%;
        }

        .impact-card h3 {
          margin: 0 0 7px;
          font-size: 1.25rem;
          line-height: 1.25;
          color: #000000;
          font-weight: 700;
          letter-spacing: -0.15px;
        }

        .impact-card p {
          margin: 0;
          color: rgba(77, 77, 77, 1);
          font-size: 1rem;
          line-height: 1.55;
          font-weight: 400;
        }

        /* -------------------------
           Desktop proportions
        ------------------------- */

        @media (min-width: 992px) {
          .impact-grid {
            grid-template-columns: 1fr 1fr 1fr;
          }

          .impact-card {
            min-height: 0;
          }
        }

        /* -------------------------
           Tablet
        ------------------------- */

        @media (max-width: 767px) {
          .impact-section {
            padding: 45px 0 60px;
          }

          .impact-container {
            padding: 0 20px;
          }

          .impact-title {
            font-size: 34px;
            line-height: 1.08;
          }

          .impact-subtitle {
            margin-bottom: 25px;
          }

          .impact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            gap: 12px;
          }

          .impact-card-large {
            grid-column: 1 / 3;
            grid-row: auto;
            min-height: 230px;
          }

          .partner-card,
          .screen-card,
          .ai-card,
          .stories-card {
            grid-column: auto;
            grid-row: auto;
            min-height: 180px;
          }
        }

        /* -------------------------
           Mobile
        ------------------------- */

        @media (max-width: 575px) {
          .impact-section {
            padding: 35px 0 50px;
          }

          .impact-container {
            padding: 0 16px;
          }

          .impact-eyebrow {
            font-size: 9px;
            letter-spacing: 1px;
          }

          .impact-title {
            font-size: 30px;
            letter-spacing: -1px;
          }

          .impact-subtitle {
            font-size: 12px;
            margin-top: 9px;
            margin-bottom: 22px;
          }

          .impact-grid {
            grid-template-columns: 1fr;
            gap: 11px;
          }

          .impact-card-large,
          .partner-card,
          .screen-card,
          .ai-card,
          .stories-card {
            grid-column: 1;
            grid-row: auto;
            min-height: 180px;
          }

          .impact-card-large {
            min-height: 220px;
          }

          .impact-card {
            padding: 19px 16px;
            border-radius: 13px;
          }

          .card-icon {
            margin-bottom: 15px;
          }

          .impact-card h3 {
            font-size: 13px;
          }

          .impact-card p {
            font-size: 11px;
          }
        }
      `}</style>

      <section className="impact-section">
        <div className="container">
          {/* Section Header */}
          <div className="impact-header">
            <div className="section-tag">WHY MOGRAPHIST</div>

            <h2 className="main-heading mb-0">
              More Than Motion We Create{" "}
              <span className="highlight">Impact</span>
            </h2>

            <p className="section-subtitle mb-5">
              From the first idea to the final frame, we combine creative
              strategy,
            </p>
          </div>

          {/* Cards */}
          <div className="impact-grid">
            {cards.map((card, index) => (
              <ImpactCard key={index} card={card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
