import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PortfolioGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = [
    "All",
    "Commercial Video",
    "Post Production",
    "Brand Film",
    "Motion Design",
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "The new look book is here to showcase",
      category: "Commercial Video",
      client: "Microsoft",
      type: "Product Film",
      year: "2026",
      className: "col-12 col-md-6 col-lg-4",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "The new look book here",
      category: "Post Production",
      client: "Microsoft",
      type: "Product Film",
      year: "2026",
      className: "col-12 col-md-6 col-lg-4",
      image:
        "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "The new look bookhere",
      category: "Brand Film",
      client: "Microsoft",
      type: "Product Film",
      year: "2026",
      className: "col-12 col-md-6 col-lg-4",
      image:
        "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "The new look book is here",
      category: "Motion Design",
      client: "Microsoft",
      type: "Product Film",
      year: "2026",
      className: "col-12 col-md-6 col-lg-4",
      image:
        "https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "The new look book is here to showcase",
      category: "Commercial Video",
      client: "Microsoft",
      type: "Product Film",
      year: "2026",
      className: "col-12 col-md-6 col-lg-4",
      image:
        "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "The new look book here",
      category: "Brand Film",
      client: "Microsoft",
      type: "Product Film",
      year: "2026",
      className: "col-12 col-md-6 col-lg-4",
      image:
        "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 7,
      title: "The new look book is here to showcase",
      category: "Motion Design",
      client: "Microsoft",
      type: "Product Film",
      year: "2026",
      className: "col-12 col-md-6 col-lg-4",
      image:
        "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 8,
      title: "The new look bookhere",
      category: "Post Production",
      client: "Microsoft",
      type: "Product Film",
      year: "2026",
      className: "col-12 col-md-6 col-lg-4",
      image:
        "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="container py-5 mt-3">
      <div className="d-flex flex-wrap gap-3 mb-4">
        {categories.map((category) => {
          const isActive = activeFilter === category;
          return (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`btn px-4 py-2 fw-semibold borderColor backgroundColor"}`}
              style={{
                borderRadius: "12px",
                fontSize: "0.9rem",
                borderColor: isActive ? "#6f42c1" : "rgba(227, 227, 227, 1)",
                color: isActive ? "#6f42c1" : "#495057",
                backgroundColor: isActive
                  ? "rgba(235, 231, 255, 1)"
                  : "rgba(246, 246, 246, 1)",
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="row g-4">
        {filteredItems.map((item) => (
          <div key={item.id} className={item.className}>
            <div className="card border-0 bg-transparent h-100 mb-5">
              <div
                className="position-relative overflow-hidden mb-3"
                style={{ borderRadius: "40px", aspectRatio: "1 / 1" }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-100 h-100"
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
                  style={{ fontSize: "0.85rem", color: "rgba(77, 77, 77, 1)" }}
                >
                  {item.client} · {item.type} · {item.year}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-5">
          <p className="text-muted">
            No portfolio items found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default PortfolioGallery;
