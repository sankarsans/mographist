import Contact from '../Work/Contact';
import OurApproach from './OurApproach';
import Banner from './Banner';
import BannerServices from './BannerServices';
import NextProjects from './NextProjects';
import ServiceTypes from './ServiceTypes';
import StoryWork from './StoryWork';

export default function WorkDetails() {
  return (
    <div>
      <Banner />
      <BannerServices />
      <StoryWork />
      <OurApproach />
      <ServiceTypes />
      <NextProjects />
      <Contact />
    </div>
  );
}
