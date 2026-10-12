import HomeBanner from '../../../assets/home-bg.png';
import Buttons from '../Common/Buttons';
import arrow from '../../../assets/arrow.png';

export default function AboutBanner() {
  return (
    <>
      <style>
        {`
        /* Scroll runway: gives 300vh for smooth step-by-step expansion */
        .inner-banner {
          height: 90vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 8rem 0 2.5rem 0;
          background-image: url(${HomeBanner});
          text-align: center;
        }
  `}
      </style>

      <section className="inner-banner d-flex align-items-center justify-content-center text-center text-white px-3 py-5">
        {/* Content Container */}
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-12 col-md-11 col-lg-9 col-xl-8">
              <h1 className="banner-title mb-4 white">
                Live Action<br></br> Video Productions
              </h1>
              <p className="mx-auto mb-0 banner-subtitle">
                From concept to final cut, we create cinematic films that move
                brands, products and ideas to life.
              </p>
              <Buttons
                className="btn btn-outline-light px-4 mt-4 border-0 shadow-sm"
                content="Start a Project"
                icon={arrow}
                href="#contact"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
