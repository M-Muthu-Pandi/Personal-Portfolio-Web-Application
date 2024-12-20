import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Common/Header";

const Projects = () => {
  const [project, setProject] = useState([]);

  /// Fetch Contact Form from the API on component mount
  useEffect(() => {
    window.scrollTo(0, 0);

    axios
      .get("https://muthu-personal-portfolio.onrender.com/api/projects")
      .then((res) => {
        setProject(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

  return (
    <>
      <Header projects={"text-green-500 font-bold"} />
      <main className="md:mt-16 flex flex-col gap-10 p-5 sm:p-10 lg:px-20">
        <h2 className="text-start text-2xl sm:text-3xl font-semibold text-green-500 border-b border-green-500 pb-2">
          Projects
        </h2>
        <section className="flex flex-col md:flex-row md:justify-center gap-10 flex-wrap">
          {project.map((item, index) => {
            return (
              <div
                className="md:w-[45%] lg:w-[30%] bg-gray-950 hover:bg-gray-900 flex flex-col gap-3 p-5 rounded-xl"
                key={index}
              >
                <img
                  className="w-full rounded-md"
                  src={item.image}
                  alt={`Project ${index + 1}`}
                />
                <h3 className="text-xl font-semibold text-green-500">
                  {item.title}
                </h3>
                <p>{item.desc}</p>
                <p className="text-sm">{item.skiilsUsed}</p>
                <div className="flex gap-5">
                  <a
                    className="py-1 px-2 bg-green-500 hover:bg-green-700 text-black font-semibold rounded-md"
                    href={item.liveDemo}
                    target="blank"
                  >
                    Live Demo
                  </a>
                  <a
                    className="py-1 px-2 bg-green-500 hover:bg-green-700 text-black font-semibold rounded-md"
                    href={item.gitHub}
                    target="blank"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Projects;
