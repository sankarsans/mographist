import { useParams } from 'react-router-dom';
import Banner from './Banner';
import Contact from './Contact';
import NextProjects from './NextProjects';
import ServiceProcess from './ServiceProcess';
import WhatWeOffer from './WhatWeOffer';
import { services } from './serviceData';

export default function ServiceDetails() {
  const { id } = useParams();
  const service = services.find((item) => item.id === id);

  if (!service) {
    return (
      <main className="container py-5 text-center">
        <h1>Service not found</h1>
        <p>The service you’re looking for doesn’t exist.</p>
      </main>
    );
  }

  return (
    <div>
      <Banner service={service} />
      <WhatWeOffer service={service} />
      <ServiceProcess />
      <NextProjects />
      <Contact />
    </div>
  );
}
