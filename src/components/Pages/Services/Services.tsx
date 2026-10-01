import Contact from "../Work/Contact";
import Banner from "./Banner";
import BannerServices from "./BannerServices";
import NextProjects from "./NextProjects";
import ServiceTypes from "./ServiceTypes";
import StoryWork from "./StoryWork";

export default function Services() {
  return (
    <div>
      <Banner />
      <BannerServices />
      <StoryWork />
      <ServiceTypes />
      <NextProjects />

      <Contact />
    </div>
  );
}
