import HomeBanner from '../../../assets/home-bg.png';

export default function Banner() {
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
                Stories brought to life with ambitious brands and bold teams
              </h1>
              <p className="mx-auto mb-0 banner-subtitle">
                From cinematic films to motion-led experiences, we create work
                designed to move people and brands forward
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
