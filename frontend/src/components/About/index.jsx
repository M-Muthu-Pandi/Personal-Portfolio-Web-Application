import { useEffect } from "react";
import Header from "../Common/Header";
import Mu2 from "../../assets/Muthu-2.jpg";

const About = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header about={"opacity-100 text-green-500 font-bold"} />
      <main className="md:mt-20 flex flex-col md:flex-row md:justify-between md:gap-2 items-center md:items-start p-5 sm:p-10 lg:px-20">
        <section className="hidden md:inline-block w-1/3 fixed top-[20%] left-[8%] lg:left-[10%] h-screen">
          <img
            className="rounded-md md:w-96 lg:w-[400px] hover:shadow-custom mt-20"
            src={Mu2}
            alt="Muthu"
          />
        </section>
        <section className="w-1/3 hidden md:inline-block"></section>
        <section className="sm:w-3/4 md:w-1/2 flex flex-col gap-3 text-justify text-sm sm:text-base lg:text-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold text-green-500 border-b border-green-500 pb-1">
            About Me
          </h2>
          <p className=" hover:text-green-500">
            I am Muthupandi, a motivated professional from Chennai, Tamil Nadu,
            with a strong foundation in both commerce and technology. I
            completed my schooling at St. Paul's Higher Secondary School and
            earned a{" "}
            <span className="text-green-500 font-semibold">
              Bachelor of Computer Applications (BCA)
            </span>{" "}
            degree from St. Thomas College of Arts and Science, where I
            cultivated a deep interest in technology and problem-solving.
          </p>
          <p className=" hover:text-green-500">
            My professional journey began as a Store Executive at Royal Enfield
            headquarters, where I accumulated over 2 years and 6 months of
            experience. During this time, I gained expertise in inventory
            management, logistics coordination, and team collaboration. This
            role honed my organizational skills, attention to detail, and
            ability to work effectively in a team, all of which are invaluable
            in any professional environment.
          </p>
          <p className=" hover:text-green-500">
            Driven by a passion for technology and innovation, I made a
            strategic decision to transition into the IT field. To achieve this,
            I enrolled in a{" "}
            <span className="text-green-500 font-semibold">
              Full Stack Developer
            </span>{" "}
            course and earned certifications from Error Makes Clever. Through
            this program, I specialized in the{" "}
            <span className="text-green-500 font-semibold">
              MERN (MongoDB, Express.js, React.js, Node.js) stack
            </span>
            , acquiring comprehensive skills in{" "}
            <span className="text-green-500 font-semibold">
              front-end and back-end development, database management, and
              modern web application design
            </span>
            .
          </p>
          <p className=" hover:text-green-500">
            As a Full Stack Developer, I am proficient in building dynamic and
            responsive web applications, designing robust APIs, and working
            collaboratively on end-to-end software development projects. I
            thrive in environments that encourage learning and innovation and am
            deeply committed to staying updated with emerging technologies to
            deliver impactful solutions.
          </p>
          <p className=" hover:text-green-500">
            I am now seeking opportunities in the IT sector where I can leverage
            my technical expertise, problem-solving abilities, and previous
            professional experience to contribute to cutting-edge projects. My
            goal is to work in a dynamic environment that values growth,
            creativity, and collaboration, allowing me to make meaningful
            contributions while advancing my career.
          </p>
        </section>
      </main>
    </>
  );
};

export default About;
