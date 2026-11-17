import { useParams } from 'react-router-dom';
import ContactSection from '../Common/ContactSection';
import FAQSection from '../Home/FAQSection';

export default function StartAProject() {
  //   const { id } = useParams();
  //   const service = services.find((item) => item.id === id);

  //   if (!service) {
  //     return (
  //       <main className="container py-5 text-center">
  //         <h1>Service not found</h1>
  //         <p>The service you’re looking for doesn’t exist.</p>
  //       </main>
  //     );
  //   }

  return (
    <div>
      <ContactSection />
      <FAQSection />
      {/* <ServiceProcess />
      <NextProjects />
      <Contact />
      <OtherServices /> */}
    </div>
  );
}
