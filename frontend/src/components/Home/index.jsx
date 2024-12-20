import { useEffect } from "react";
import Muthu from "../../assets/Muthu.png";
import Header from "../Common/Header";

const Home = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header home={"text-green-500 font-bold"} />
      <main className="flex flex-col md:flex-row md:justify-around gap-20 md:gap-2 items-center md:h-screen p-10 md:p-5">
        <section className="sm:w-3/4 md:w-1/2 flex flex-col gap-3 items-start animation-1">
          <h3 className="sm:text-xl md:text-2xl lg:text-3xl font-medium">
            Hi,
          </h3>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
            I'm <span className="text-green-500 font-bold">Muthupandi M</span>
          </h2>
          <h4 className="sm:text-xl md:text-2xl lg:text-3xl font-medium">
            <span className="text-green-500 font-bold">MERN</span> Stack
            Developer
          </h4>
          <p className="text-justify text-sm sm:text-base">
            I specialize in creating dynamic and responsive web applications
            using MongoDB, Express.js, React, and Node.js. With a strong
            foundation in full-stack development, I build scalable and efficient
            solutions tailored to meet your needs.
          </p>
          <a
            href="https://drive.google.com/file/d/1DNvuvOPjeq_0fOfFqDOqI9L9DdjnUhcM/view?usp=sharing"
            target="blank"
            className="border-2 text-green-500 border-green-500 hover:text-customDark font-medium text-sm sm:text-base lg:text-lg py-1 px-2 lg:py-2 lg:px-4 rounded-3xl mt-2 hover:bg-green-500"
          >
            Download Resume
          </a>
        </section>
        <section className="animation-2">
          <img
            className="w-64 md:w-80 lg:w-96 rounded-full border-8 border-customDark shadow-custom ring-4 ring-green-500"
            src={Muthu}
            alt="Muthu"
          />
        </section>
      </main>
    </>
  );
};

export default Home;
