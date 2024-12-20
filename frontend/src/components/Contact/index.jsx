import { useEffect } from "react";
import Header from "../Common/Header";
import ConnectMe from "./ConnectMe";
import ContactForm from "./contactForm";

const Contact = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header contact={"text-green-500 font-bold"} />
      <main className="md:pt-24 flex flex-col gap-10 p-5 sm:p-10 lg:px-20 min-h-screen">
        <h2 className="text-end text-2xl sm:text-3xl font-semibold text-green-500 border-b border-green-500 pb-2">
          Contact
        </h2>
        <section className="flex flex-col md:flex-row gap-10 px-3 sm:px-5 lg:justify-between mt-5">
          <ContactForm />
          <ConnectMe />
        </section>
      </main>
    </>
  );
};

export default Contact;
