import Banner from './Banner';
import Contact from './Contact';
import NextProjects from './NextProjects';
import ServiceProcess from './ServiceProcess';
import WhatWeOffer from './WhatWeOffer';

export default function ServiceDetails() {
  return (
    <div>
      <Banner />
      <WhatWeOffer />
      <ServiceProcess />
      <NextProjects />
      <Contact />
    </div>
  );
}
