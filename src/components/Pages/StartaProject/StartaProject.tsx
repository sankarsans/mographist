import FAQSection from '../Home/FAQSection';
import ContactSectionProject from './ContactSectionProject';

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
      <ContactSectionProject />
      <FAQSection />
      {/* <ServiceProcess />
      <NextProjects />
      <Contact />
      <OtherServices /> */}
    </div>
  );
}
