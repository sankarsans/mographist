import logo from "../../../assets/service-image.png";

const NextProjects = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "The new look book is here to showcase",
      category: "Commercial Video",
      client: "Microsoft",
      type: "Product Film",
      year: "2026",
      className: "col-12 col-md-6 col-lg-6",
      image: logo,
    },
    {
      id: 2,
      title: "The new look book here",
      category: "Post Production",
      client: "Microsoft",
      type: "Product Film",
      year: "2026",
      className: "col-12 col-md-6 col-lg-6",
      image: logo,
    },
  ];

  return (
    <div className="next-projects-section my-5">
      <div className="container py-2 mt-3">
        <div className="row g-4">
          <div className="main-heading">Next Project </div>
          {portfolioItems.map((item) => (
            <div key={item.id} className={item.className}>
              <div className="card border-0 bg-transparent h-100 ">
                <div
                  className="position-relative overflow-hidden mb-3"
                  style={{ borderRadius: "40px" }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-100"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className="card-body p-0">
                  <h6
                    className="fw-bold text-dark mb-1"
                    style={{
                      fontSize: "1.05rem",
                      lineHeight: "1.3",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    {item.title}
                  </h6>
                  <p
                    className="text-muted mb-0"
                    style={{
                      fontSize: "0.85rem",
                      color: "rgba(77, 77, 77, 1)",
                    }}
                  >
                    {item.client} · {item.type} · {item.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NextProjects;
