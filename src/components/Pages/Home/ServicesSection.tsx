import { useState, useRef, useEffect } from "react";
import arrowNew from "../../../assets/arrow-new.png";
const servicesData = [
  {
    id: "01",
    title: "Live Action Video Production",
    description:
      "High-end on-location cinematography, directing, and full set production.",
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-sunset-26070-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    tags: ["Location Scouting", "Directing", "Cinema Cameras", "Studio Shoots"],
  },
  {
    id: "02",
    title: "Commercial & Product Videos",
    description:
      "Professional video production services for brands, business, products and campaigns.",
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-modern-smartphone-with-a-green-screen-42993-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "Corporate Film",
      "Promotional Videos",
      "Brand Storytelling",
      "Product Launches",
    ],
  },
  {
    id: "03",
    title: "Event Coverage & Content Creation",
    description:
      "Multi-camera live setups, recaps, keynotes, and festival highlights.",
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-dj-mixing-music-at-a-club-festival-42698-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    tags: ["Live Streaming", "Keynotes", "Festivals", "Event Recaps"],
  },
  {
    id: "04",
    title: "Animation & Motion Graphics",
    description:
      "Dynamic 2D/3D motion graphics, kinetic typography, and character animations.",
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-tree-branches-in-the-breeze-1188-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    tags: ["3D Modeling", "Explainer Videos", "Kinetic Typography", "VFX"],
  },
  {
    id: "05",
    title: "AI Powered Content Creation",
    description:
      "Next-gen synthetic media, AI enhancements, and hyper-personalized video scaling.",
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-charts-and-data-31913-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    tags: ["Generative AI", "Voice Cloning", "Automation", "Virtual Avatars"],
  },
  {
    id: "06",
    title: "Virtual Production And Interactive Design",
    description:
      "Real-time Unreal Engine environments with seamless LED volume integration.",
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    tags: ["Unreal Engine", "LED Walls", "XR Experiences", "Interactive 3D"],
  },
  {
    id: "07",
    title: "Post Production Services",
    description:
      "Precision color grading, sound design, compositing, and master delivery.",
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Color Grading", "Sound Design", "Foley", "VFX Cleanups"],
  },
  {
    id: "08",
    title: "SaaS & Technology Content",
    description:
      "Software walkthroughs, feature demos, and investor pitch visual decks.",
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-39962-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["Product Demos", "UI Walkthroughs", "SaaS Promos", "Tech Tutorials"],
  },
  {
    id: "09",
    title: "Cyber Security Awareness Content",
    description:
      "Engaging, narrative-driven training modules and enterprise security explainers.",
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-server-room-rack-with-flashing-led-lights-42544-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "Phishing Simulations",
      "Enterprise Training",
      "Data Privacy",
      "Compliance",
    ],
  },
  {
    id: "10",
    title: "Social Media & Content Creation",
    description:
      "High-retention vertical reels, TikTok campaigns, and viral social cuts.",
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-scrolling-social-media-42994-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
    tags: ["9:16 Vertical", "TikTok & Reels", "Short Form", "Trend Jacking"],
  },
];

const DynamicServicesShowcase = () => {
  const [activeId, setActiveId] = useState("01");
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const currentService =
    servicesData.find((s) => s.id === activeId) || servicesData[0];

  // Reload and reset playback state when switching services
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.load();
      setIsPlaying(false);
    }
  }, [activeId]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <style>{`
      .services-section {
      border-radius: 80px;
      margin: 0rem 2rem;
        .services-section::before {
          content: "";
          position: absolute;
          top: 15%;
          right: -5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(234, 88, 12, 0.12) 0%, rgba(0, 0, 0, 0) 70%);
          pointer-events: none;
        }

        

        .service-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.6rem 0;
          background: none;
          border: none;
          color: rgba(118, 118, 118, 1);
          font-size: 1.125rem;
          font-weight: 500;
          text-align: left;
          width: 100%;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }

        .service-item:hover {
          color: #e4e4e7;
          transform: translateX(4px);
        }

        .service-item.active {
          color: #ffffff;
          font-weight: 700;
          font-size: 1.15rem;
          .service-id {
           color: #ffffff;
          }
        }

        .service-id {
          font-weight: 700;
          font-size: 1rem;
          min-width: 26px;
          color: rgba(165, 165, 165, 1);
        }

        .service-arrow {
          color: #f97316;
          font-weight: bold;
          margin-left: 0.5rem;
        }

        /* Video Showcase Wrapper */
        .preview-card {
          position: relative;
          background-color: #18181b;
          border-radius: 50px 50px 50px 0;
          height: 440px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .showcase-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.3s ease;
        }

        .play-btn {
          position: relative;
          z-index: 2;
          width: 68px;
          height: 68px;
          background-color: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }

        .play-btn:hover {
          transform: scale(1.1);
          background-color: rgba(255, 255, 255, 0.35);
        }

        .play-icon {
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-left: 15px solid #ffffff;
          margin-left: 3px;
        }

        .pause-icon {
          display: flex;
          gap: 4px;
        }

        .pause-bar {
          width: 4px;
          height: 16px;
          background-color: #ffffff;
          border-radius: 2px;
        }

        /* Curved Bottom Notch */
        .card-footer-box {
          position: absolute;
          bottom: 0;
          right: 0;
          z-index: 3;
          background-color: #0b0b0b;
          border-top-left-radius: 32px;
          padding: 1.35rem 1.75rem;
          max-width: 80%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
        }

        .card-footer-box p {
          color: #a1a1aa;
          font-weight: 400;
          font-size: 1.125rem;
          line-height: 1.45;
          margin: 0;
        }

        .external-btn {
          width: 38px;
          height: 38px;
          min-width: 38px;
          background-color: #ffffff;
          color: #000000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: bold;
          transition: transform 0.2s ease;
        }

        .external-btn:hover {
          transform: rotate(45deg);
          color: #000000;
        }

        .tag-pill {
        background: linear-gradient(90deg, rgb(135 132 132 / 25%) 0%, rgba(255, 255, 255, 0.11) 100%);          color: rgba(255, 255, 255, 1);
          border: 1px solid rgba(255, 255, 255, 0.23);
          border-radius: 9999px;
          padding: 0.8rem 1.1rem;
          font-size: 0.875rem;
          font-weight: 500;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .tag-pill:hover {
          color: #ffffff;
          border-color: #3f3f46;
          background-color: #27272a;
        }

        @media (max-width: 991.98px) {
          .preview-card {
            height: 360px;
          }
          .card-footer-box {
            max-width: 100%;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
          }
        }
      }
      `}</style>

      <section className="services-section bg-black-section mx-0 mx-lg-4 mx-md-4">
        <div className="container">
          <div className="services-bg">
            {/* Section Header */}
            <div className="row">
              <div className="col-12">
                <span className="section-tag">How We Work</span>
                <h2 className="main-heading white">Our Services</h2>
              </div>
            </div>

            {/* Dynamic Content Grid */}
            <div className="row align-items-center gy-5">
              {/* Left Column: Interactive Nav List */}
              <div className="col-12 col-lg-5">
                <div className="d-flex flex-column">
                  {servicesData.map((service) => {
                    const isActive = activeId === service.id;
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setActiveId(service.id)}
                        className={`service-item ${isActive ? "active" : ""}`}
                      >
                        <span className="service-id">{service.id}</span>
                        <span>{service.title}</span>
                        {isActive && <img src={arrowNew} alt="Arrow icon" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Reactive Video Player & Tags */}
              <div className="col-12 col-lg-7">
                <div
                  className="preview-card"
                  onClick={togglePlay}
                  role="button"
                  tabIndex={0}
                >
                  {/* HTML5 Video Element */}
                  <video
                    ref={videoRef}
                    className="showcase-video"
                    src={currentService.videoSrc}
                    poster={currentService.poster}
                    playsInline
                    loop
                    muted
                    onEnded={() => setIsPlaying(false)}
                  />

                  {/* Central Play/Pause Trigger */}
                  <button
                    type="button"
                    className="btn play-btn"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                  >
                    {isPlaying ? (
                      <div className="pause-icon">
                        <span className="pause-bar"></span>
                        <span className="pause-bar"></span>
                      </div>
                    ) : (
                      <div className="play-icon"></div>
                    )}
                  </button>

                  {/* Dynamic Bottom Notch Description */}
                  {/* <div
                    className="card-footer-box"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <p>{currentService.description}</p>
                    <a
                      href={`#service-${currentService.id}`}
                      className="external-btn"
                      aria-label={`View details for ${currentService.title}`}
                    >
                      &#8599;
                    </a>
                  </div> */}
                </div>

                {/* Dynamic Categorical Tags */}
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {currentService.tags.map((tag, idx) => (
                    <span key={idx} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DynamicServicesShowcase;
