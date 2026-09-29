import testi from "../../../assets/tesit-bg.png";
import testi1 from "../../../assets/test-bg-2.png";
const testimonials = [
  {
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    quote:
      "Their ability to simplify technical concepts through motion graphics was outstanding. The entire process was collaborat",
    name: "Amit Verma",
    role: "Product Manager, CloudSync",
  },
  {
    id: 2,
    avatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80",
    quote:
      "Their ability to simplify technical concepts through motion graphics was outstanding. The entire process was collaborative, fast, and incredibly professional",
    name: "Amit Verma",
    role: "Product Manager, CloudSync",
  },
  {
    id: 3,
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    quote:
      "Their ability to simplify technical concepts through motion graphics was outstanding. The entire process was collaborative",
    name: "Amit Verma",
    role: "Product Manager, CloudSync",
  },
];

const TestimonialsSection = () => {
  return (
    <>
      <style>{`
        /* Testimonial Card Styling */
        .testimonials-section {
              border-radius: 80px;
          margin: 0rem 2rem;
          background: ${`url(${testi})`};
          background-size: cover;
          background-position: 0 0;
          padding: 4.5rem 3rem;
          .container {
          //  background: ${`url(${testi1})`};
          background-size: cover;
          background-position: 0 0;
          }
        }
        .testimonial-card {
          
          border-radius: 28px;
          padding: 2.25rem 2rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid rgba(133, 97, 71, 0.3);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-6px);
          border-color: rgba(249, 115, 22, 0.3);
          box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.6);
        }

        .avatar-img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 1.75rem;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .quote-text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(185, 185, 185, 1);
          font-weight: 400;
          margin-bottom: 2rem;
        }

        .author-name {
          font-size: 1.05rem;
          font-weight: 600;
          color: rgba(250, 250, 250, 1);
          margin-bottom: 0.2rem;
        }

        .author-role {
          font-size: 0.85rem;
          color: rgba(205, 205, 205, 1);
          margin-bottom: 0;
          font-weight: 400;
        }
      `}</style>

      <section className="testimonials-section ">
        <div className="container">
          {/* Header */}
          <div className="row">
            <div className="col-12">
              <span className="section-tag">How We Work</span>
              <h2 className="main-heading white">Trusted By Growing Brands</h2>
              <p className="sub-description footer">
                Real partnerships. Real results.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="row g-4">
            {testimonials.map((item) => (
              <div key={item.id} className="col-12 col-md-6 col-lg-4">
                <div className="testimonial-card">
                  <div>
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="avatar-img"
                      loading="lazy"
                    />
                    <p className="quote-text">{item.quote}</p>
                  </div>
                  <div>
                    <h4 className="author-name">{item.name}</h4>
                    <p className="author-role">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
