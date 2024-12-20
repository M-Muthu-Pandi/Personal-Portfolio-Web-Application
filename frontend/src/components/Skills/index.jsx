import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Common/Header";

const Skills = () => {
  const [skill, setSkill] = useState([]);

  // Fetch Contact Form from the API on component mount
  useEffect(() => {
    window.scrollTo(0, 0);

    axios
      .get("https://muthu-personal-portfolio.onrender.com/api/skills")
      .then((res) => {
        setSkill(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

  return (
    <>
      <Header skills={"text-green-500 font-bold"} />
      <main className="md:mt-16 flex flex-col gap-10 p-5 sm:p-10 lg:px-20">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-green-500 border-b border-green-500 pb-1">
          Skills
        </h2>
        <section className="flex gap-10 justify-around sm:justify-between flex-wrap">
          {skill.map((item, index) => {
            return (
              <div
                className="w-1/4 md:w-1/5 lg:w-[12%] flex justify-center bg-white hover:bg-green-500 p-3 rounded-xl"
                key={index}
              >
                <img className="w-40" src={item.image} alt={item.title} />
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Skills;
