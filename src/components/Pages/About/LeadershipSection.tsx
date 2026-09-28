import arrow from "../../../assets/arrow.png";
import leader from "../../../assets/leader.png";
import badge from "../../../assets/badge.png";

const LeadershipSection = () => {
  return (
    <>
      <style>{`
        .leadership-section {
          background-color: #ffffff;
          padding: 5.5rem 0;
          
          overflow: hidden;
        }

       

        /* Image composition stage */
        .portrait-stage {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 480px;
        }

        /* Light-blue organic backdrop bubble */
        .stage-blob-bg {
          position: absolute;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          // background: #eef4ff;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
        }

        /* Quarter-circle geometric shape in top-left */
        .shape-quarter {
          position: absolute;
          top: 0;
          left: 14%;
          width: 46px;
          height: 46px;
          background-color: #3b28cc;
          border-top-left-radius: 100%;
          z-index: 2;
        }

        /* Orange Accent Circle */
        .shape-orange-dot {
          position: absolute;
          bottom: 10px;
          right: 22%;
          width: 22px;
          height: 22px;
          background-color: #f97316;
          border-radius: 50%;
          z-index: 2;
        }

        /* Profile cutout image */
        .portrait-img {
          position: relative;
          z-index: 3;
          width: 320px;
          height: auto;
          display: block;
          filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.12));
        }

        /* Floating Stat Notif Cards */
        .floating-badge {
          position: absolute;
          z-index: 5;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 14px;
          padding: 0.65rem 0.95rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
          animation: floatSlow 4s ease-in-out infinite alternate;
        }

        .badge-left {
          top: 48%;
          left: 2%;
        }

        .badge-right {
          bottom: 16%;
          right: 4%;
          animation-delay: -2s;
        }

        @keyframes floatSlow {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-8px); }
        }

        .badge-avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          object-fit: cover;
        }

        .badge-chip {
          background-color: #eef2ff;
          color: #3b28cc;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.18rem 0.55rem;
          border-radius: 6px;
          display: inline-block;
          margin-bottom: 0.15rem;
        }

        .badge-subtitle {
          color: #71717a;
          font-size: 0.68rem;
          margin: 0;
          white-space: nowrap;
        }

        /* Bio Column */
        .member-name {
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #09090b;
          margin-bottom: 1.5rem;
          
        }

        .member-role {
          color: #f97316;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 0.35rem;
        }

        .bio-paragraph {
          color: #3f3f46;
          font-size: 0.95rem;
          line-height: 1.65;
          margin-bottom: 1.25rem;
        }

        .btn-meet-creator {
          background-color: #3b28cc;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 600;
          border-radius: 10px;
          padding: 0.75rem 1.4rem;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          transition: background-color 0.2s ease, transform 0.15s ease;
          margin-top: 1rem;
        }

        .btn-meet-creator:hover {
          background-color: #2f1fa8;
          color: #ffffff;
          transform: translateY(-1px);
        }

        @media (max-width: 991.98px) {
          .portrait-stage {
            margin-bottom: 3.5rem;
          }
          .badge-left {
            left: 0;
          }
          .badge-right {
            right: 0;
          }
        }
      `}</style>

      <section className="leadership-section">
        {/* Standard non-fluid responsive container */}
        <div className="container">
          {/* Header Title */}
          <div className="row">
            <div className="col-12 pb-lg-5 pb-4">
              <span className="section-tag">The Team</span>
              <h2 className="main-heading">Leadership</h2>
            </div>
          </div>

          <div className="row align-items-center gy-5">
            {/* Left Column: Visual Artwork & Floating Tags */}
            <div className="col-12 col-lg-6">
              <div className="portrait-stage">
                <div className="shape-quarter"></div>
                <div className="stage-blob-bg">
                  <img
                    src={badge}
                    alt="Badge"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="shape-orange-dot"></div>

                {/* Main Profile Cutout */}
                <img
                  src={leader}
                  alt="Chetan R Vanahalli"
                  className="portrait-img rounded-circle"
                />

                {/* Left Floating Badge */}
                <div className="floating-badge badge-left">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
                    alt="Michael V"
                    className="badge-avatar"
                  />
                  <div>
                    <span className="badge-chip">+ $28,900</span>
                    <p className="badge-subtitle">Received from Michael V</p>
                  </div>
                </div>

                {/* Right Floating Badge */}
                <div className="floating-badge badge-right">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
                    alt="Michael V"
                    className="badge-avatar"
                  />
                  <div>
                    <span className="badge-chip">+ $28,900</span>
                    <p className="badge-subtitle">Received from Michael V</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Profile Narrative & Info */}
            <div className="col-12 col-lg-6 ps-lg-5">
              <p className="member-role">Founder & Creative Director</p>
              <h3 className="member-name">Chetan R Vanahalli</h3>

              <p className="sub-description mb-3">
                With over 10 years of professional experience in video
                production, motion graphics design, animation, and post
                production, Chetan leads the media and production division of
                Mographist OPC Pvt. Ltd.
              </p>

              <p className="sub-description mb-3">
                His expertise spans video production, motion graphics,
                animation, visual effects, digital content creation, and
                emerging technologies. By combining creative storytelling with
                technical excellence, he helps businesses transform ideas into
                engaging visual experiences that deliver measurable results.
              </p>

              <a href="#creator" className="btn-start-story mt-3">
                Meet the Creator
                <img src={arrow} alt="Arrow icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadershipSection;
