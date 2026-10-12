import Contact from '../Work/Contact';
import WorkDetails from './WorkDetails';
import Banner from './Banner';
import BannerServices from './BannerServices';
import NextProjects from './NextProjects';
import ServiceTypes from './ServiceTypes';
import StoryWork from './StoryWork';

export default function Services() {
  return (
    <div>
      <Banner />
      <BannerServices />
      <StoryWork />
      <WorkDetails />
      <ServiceTypes />
      <NextProjects />
      <Contact />
    </div>
  );
}
