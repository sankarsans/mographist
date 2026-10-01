const Contact = () => {
  return (
    <div className="container py-5 mb-5">
      <div
        className="text-center p-5 position-relative overflow-hidden d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundColor: "#f4f6fb",
          borderRadius: "80px",
          minHeight: "400px",
          border: "1px solid rgba(33, 42, 120, 0.23)",
        }}
      >
        {/* Subtle background curved blobs to match the design's edges */}
        <div
          className="position-absolute"
          style={{
            top: "-10%",
            left: "-5%",
            width: "30%",
            height: "80%",
            backgroundColor: "#eef1fa",
            borderRadius: "50%",
            zIndex: 0,
          }}
        ></div>

        <div
          className="position-absolute"
          style={{
            bottom: "-20%",
            right: "-5%",
            width: "35%",
            height: "90%",
            backgroundColor: "#eef1fa",
            borderRadius: "50%",
            zIndex: 0,
          }}
        ></div>

        {/* Text and Button Content */}
        <div className="position-relative" style={{ zIndex: 1 }}>
          <p
            className=" fw-medium mb-2"
            style={{ fontSize: "1.25rem", color: "rgba(66, 66, 66, 1)" }}
          >
            Idea → Reality
          </p>

          <h2
            className="fw-bold mb-4  mx-auto"
            style={{
              fontSize: "2.8rem",
              lineHeight: "1.2",
              maxWidth: "650px",
              color: "rgba(0, 0, 0, 1)",
            }}
          >
            Got a great idea, you <br className="d-none d-md-block" /> want to
            bring to life?
          </h2>

          <button
            className="btn text-white px-5 py-3 mt-2 border-0 shadow-sm"
            style={{
              backgroundColor: "rgba(58, 36, 181, 1)",
              borderRadius: "50px",
              fontWeight: "400",
              fontSize: "1.05rem",
            }}
          >
            Get in Touch →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
