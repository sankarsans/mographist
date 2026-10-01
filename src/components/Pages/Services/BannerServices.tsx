import React from "react";

const BannerServices = () => {
  return (
    <div className="bg-white py-5 mt-5">
      <div className="container py-4">
        <div className="row align-items-start gx-5 gy-4">
          {/* Left Column */}
          <div className="col-12 col-md-5">
            <h1 className="main-heading mb-0">
              Future Of
              <br />
              Security
            </h1>
            <p className="section-subtitle mt-2">
              Brand Film for Microsoft Security
            </p>
          </div>

          {/* Right Column */}
          <div className="col-12 col-md-7">
            <div className="ps-md-2">
              <h4
                className="fw-bold mb-3"
                style={{
                  fontSize: "1.125rem",
                  letterSpacing: "-0.02em",
                  color: "#000000",
                }}
              >
                Commercial Video
              </h4>
              <p
                className="mb-5"
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  color: "rgba(66, 66, 66, 1)",
                  maxWidth: "520px",
                }}
              >
                Microsoft needed a brand film that could communicate the
                complexity of modern cybersecurity without overwhelming the
                audience with technical detail
              </p>

              {/* Client & Services Meta */}
              <div className="d-flex align-items-start">
                <div
                  className="pe-4"
                  style={{
                    borderRight: "1px solid rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <div
                    className="fw-bold mb-1"
                    style={{ fontSize: "0.95rem", color: "#000000" }}
                  >
                    Client
                  </div>
                  <div
                    style={{ fontSize: "0.9rem", color: "rgba(66, 66, 66, 1)" }}
                  >
                    Microsoft
                  </div>
                </div>

                <div className="ps-4">
                  <div
                    className="fw-bold mb-1"
                    style={{ fontSize: "0.95rem", color: "#000000" }}
                  >
                    Services
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "#6c757d" }}>
                    3D, VFX, Sound Design, AI, Direction, Motion Graphics
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerServices;
