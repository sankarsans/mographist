import innerBg from '../../../assets/inner-bg.png';

const processStages = [
  {
    title: 'Creative\nDirection',
    description: 'Defining the idea, narrative and visual approach',
  },
  {
    title: 'Concept &\nStory',
    description: 'Turning ideas into compelling stories and scripts',
  },
  {
    title: 'Pre-\nproduction',
    description: 'Planning, casting, locations, sets and shot design',
  },
  {
    title: 'Product\nion',
    description: 'Bringing the vision to life on set with precision',
  },
  {
    title: 'Post-production &\nDelivery',
    description:
      'Editing, color, sound and VFX, then optimised for every screen and platform.',
  },
];

export default function ServiceProcess() {
  return (
    <>
      <style>{`
        .process-wrapper {
         border-radius: 80px;
            margin: 0rem 2rem;
            padding-bottom: 1.5rem;
            margin-bottom: 2rem;
            color: #ffffff;
            background-image: url(${innerBg});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            padding: 4.5rem 3rem;
        }

        /* Outer dark container with smooth rounded stadium corners */
        .process-card {
          position: relative;
          max-width: 1240px;
          margin: 0 auto;
          background: #090606;
          border-radius: 70px;
          padding: 5.5rem 5rem 6.5rem;
          color: #ffffff;
          overflow: hidden;
        }

        /* Warm ambient glow spilling from top-right */
        .process-card::before {
          content: "";
          position: absolute;
          top: -80px;
          right: -60px;
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, rgba(168, 92, 18, 0.35) 0%, rgba(138, 70, 10, 0.12) 45%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .process-content {
          position: relative;
          z-index: 1;
        }

        /* Top Tag */
        .process-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #EE6300;
          margin-bottom: 1.5rem;
        }

        .process-tag::before {
          content: "";
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #EE6300;
        }

        /* Main Heading */
        .process-heading {
          font-size: clamp(2.4rem, 4.8vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: #ffffff;
          max-width: 720px;
          margin: 0 0 1.25rem 0;
        }

        /* Subtitle */
        .process-subtext {
          font-size: 1.1rem;
          color: #d1b8ab;
          line-height: 1.5;
          margin-bottom: 5.5rem;
          font-weight: 400;
        }

        /* 5-Column Process Flow Grid */
        .process-timeline {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 2rem;
        }

        /* Orange dotted timeline running behind all dots */
        .process-timeline-line {
          position: absolute;
          top: 19px;
          left: 20px;
          right: calc(20% - 20px);
          height: 2px;
          background-image: radial-gradient(circle, #e58223 1px, transparent 1px);
          background-size: 8px 2px;
          background-repeat: repeat-x;
          z-index: 0;
        }

        /* Each stage item */
        .process-node {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
        }

        /* Layered timeline node circle */
        .node-bullet {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          backdrop-filter: blur(4px);
        }

        .node-bullet-core {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
        }

        /* Node Titles & Descriptions */
        .node-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.35;
          margin: 0 0 0.85rem 0;
          white-space: pre-line;
        }

        .node-desc {
          font-size: 0.86rem;
          line-height: 1.6;
          color: #C0C0C0;
          margin: 0;
        }

        /* Responsive Breakpoints */
        @media (max-width: 991.98px) {
          .process-card {
            padding: 4rem 2.5rem;
            border-radius: 40px;
          }
          .process-timeline {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem 2rem;
          }
          .process-timeline-line {
            display: none;
          }
        }

        @media (max-width: 576px) {
          .process-card {
            padding: 3rem 1.5rem;
            border-radius: 32px;
          }
          .process-timeline {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .process-subtext {
            margin-bottom: 3.5rem;
          }
        }
      `}</style>

      <section className="process-wrapper">
        <div className="container">
          <div className="process-content">
            {/* Eyebrow Tag */}
            <div className="section-tag">Our Approach</div>

            {/* Heading */}
            <h2 className="main-heading white">
              Our Process Makes It<br></br> Easier To Press Play
            </h2>

            {/* Subtitle */}
            <p
              className="section-subtitle mb-5"
              style={{
                color: '#FBD2D2',
              }}
            >
              A focused five-stage process from first idea to final frame
            </p>

            {/* Horizontal 5-Step Process Timeline */}
            <div className="process-timeline">
              <div className="process-timeline-line" />

              {processStages.map((stage, idx) => (
                <div key={idx} className="process-node">
                  <div className="node-bullet">
                    <div className="node-bullet-core" />
                  </div>
                  <h3 className="node-title">{stage.title}</h3>
                  <p className="node-desc">{stage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
