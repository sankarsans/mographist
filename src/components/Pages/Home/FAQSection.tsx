import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "Do You Provide Scripting Services?",
    answer:
      "Yes, we provide end-to-end creative scriptwriting, narrative concept development, storyboard drafting, and voiceover script timing tailored specifically to your target audience.",
  },
  {
    id: 2,
    question: "Can You Work With Our Existing Footage?",
    answer:
      "Their ability to simplify technical concepts through motion graphics was outstanding. The entire process was collaborative. Their ability to simplify technical concepts through motion graphics was outstanding. The entire process was collaborative",
  },
  {
    id: 3,
    question: "What Formats Do You Deliver?",
    answer:
      "We deliver ready-to-publish assets optimized for web, social media (16:9, 9:16, 1:1, 4:5), broadcast ProRes master files, high-efficiency MP4/WebM files, and vector Lottie animations.",
  },
  {
    id: 4,
    question: "How Long Does A Typical Project Take?",
    answer:
      "A typical animation or live-action project takes between 2 to 4 weeks from concept approval to final master delivery, depending on complexity and revision cycles.",
  },
  {
    id: 5,
    question: "Can You Create Videos For Internal Training?",
    answer:
      "Absolutely. We regularly produce internal onboarding series, cybersecurity training videos, interactive learning modules, and corporate compliance visual guides.",
  },
];

const FAQSection = () => {
  // Preset default active item to match the layout (index 1 / item 2)
  const [openIndex, setOpenIndex] = useState(1);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <style>{`
        .faq-section {
          background-color: #ffffff;
          padding: 5rem 0;
        }

        

        /* FAQ Accordion List */
        .faq-list {
          display: flex;
          flex-direction: column;
        }

        .faq-item {
          border-bottom: 1px solid #e4e4e7;
          padding: 1.35rem 0;
          transition: border-color 0.2s ease;
        }

        .faq-item:first-child {
          border-top: 1px solid #e4e4e7;
        }

        .faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: none;
          border: none;
          padding: 0;
          text-align: left;
          cursor: pointer;
          gap: 1.5rem;
        }

        .faq-question {
          font-size: 1.05rem;
          font-weight: 600;
          color: rgba(0, 0, 0, 1);
          margin: 0;
          transition: color 0.2s ease;
        }

        .faq-item.active .faq-question {
          color: rgba(58, 36, 181, 1);
        }

        /* Circular Toggle Icon */
        .faq-icon-btn {
          width: 30px;
          height: 30px;
          min-width: 30px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid rgba(41, 41, 41, 1);
          color: rgba(10, 10, 10, 1);
          font-size: 1.1rem;
          font-weight: 400;
          line-height: 0;
          transition: all 0.25s ease;
        }

        .faq-item.active .faq-icon-btn {
          background-color: #3b28cc;
          border-color: #3b28cc;
          color: #ffffff;
        }

        /* Collapsible Answer Body */
        .faq-collapse {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.3s ease-out;
        }

        .faq-collapse.open {
          grid-template-rows: 1fr;
        }

        .faq-collapse-inner {
          overflow: hidden;
        }

        .faq-answer {
          color: rgba(66, 66, 66, 1);
          font-size: 0.92rem;
          line-height: 1.6;
          margin: 0;
          padding-top: 0.85rem;
          padding-right: 2.5rem;
        }

        @media (max-width: 991.98px) {
          .faq-answer {
            padding-right: 0;
          }
          .faq-subtitle {
            max-width: 100%;
          }
        }
      `}</style>

      <section className="faq-section">
        <div className="container">
          <div className="row gy-5">
            {/* Left Column: Heading & Subtitle */}
            <div className="col-12 col-lg-5 pe-lg-4">
              <span className="section-tag">Questions</span>
              <h2 className="main-heading">
                Frequently
                <br className="d-none d-lg-block" /> Asked Questions
              </h2>
              <p className="section-subtitle">
                Everything you need to know about working with Mographist. Can't
                find your answer?
              </p>
            </div>

            {/* Right Column: Expand/Collapse Accordion */}
            <div className="col-12 col-lg-7">
              <div className="faq-list">
                {faqData.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={faq.id}
                      className={`faq-item ${isOpen ? "active" : ""}`}
                    >
                      <button
                        type="button"
                        className="faq-trigger"
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${faq.id}`}
                      >
                        <h3 className="faq-question">{faq.question}</h3>
                        <span className="faq-icon-btn" aria-hidden="true">
                          +
                        </span>
                      </button>

                      <div
                        id={`faq-answer-${faq.id}`}
                        className={`faq-collapse ${isOpen ? "open" : ""}`}
                        role="region"
                      >
                        <div className="faq-collapse-inner">
                          <p className="faq-answer">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
