import axios from "axios";
import { useState } from "react";

const ProjectUpload = () => {
  // State variables to manage form inputs
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [skiilsUsed, setSkiilsUsed] = useState("");
  const [liveDemo, setLiveDemo] = useState("");
  const [gitHub, setGitHub] = useState("");

  // Handle form submission to add the contact form heading
  const handleSubmit = async (e) => {
    e.preventDefault();

    const projectData = {
      image: image,
      title: title,
      desc: desc,
      skiilsUsed: skiilsUsed,
      liveDemo: liveDemo,
      gitHub: gitHub,
    };

    try {
      // Send POST request to add contact form to the backend
      const response = await axios.post(
        "https://muthu-personal-portfolio.onrender.com/api/projects",
        projectData
      );
      alert("Projects sent successfully!");
      console.log(response.data);
    } catch (error) {
      alert("Failed to add project. Check the console for details.");
      console.error(error);
    }
    setImage("");
    setTitle("");
    setDesc("");
    setSkiilsUsed("");
    setLiveDemo("");
    setGitHub("");
  };

  return (
    <>
      <section className="flex flex-col gap-5 bg-black rounded-lg p-5 text-customDark">
        <h3 className="text-green-500 font-bold text-2xl">Add Projects</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border border-customDark p-2 rounded-md bg-green-200 focus:outline-none focus:bg-green-300 focus:ring-2 focus:ring-green-300"
            type="text"
            placeholder="Paste Image URL"
          />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-customDark p-2 rounded-md bg-green-200 focus:outline-none focus:bg-green-300 focus:ring-2 focus:ring-green-300"
            type="text"
            placeholder="Name of the Project"
          />
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="border border-customDark p-2 rounded-md bg-green-200 focus:outline-none focus:bg-green-300 focus:ring-2 focus:ring-green-300"
            type="text"
            placeholder="Description"
          />
          <input
            value={skiilsUsed}
            onChange={(e) => setSkiilsUsed(e.target.value)}
            className="border border-customDark p-2 rounded-md bg-green-200 focus:outline-none focus:bg-green-300 focus:ring-2 focus:ring-green-300"
            type="text"
            placeholder="Name of the skills used"
          />
          <input
            value={liveDemo}
            onChange={(e) => setLiveDemo(e.target.value)}
            className="border border-customDark p-2 rounded-md bg-green-200 focus:outline-none focus:bg-green-300 focus:ring-2 focus:ring-green-300"
            type="text"
            placeholder="Live Link"
          />
          <input
            value={gitHub}
            onChange={(e) => setGitHub(e.target.value)}
            className="border border-customDark p-2 rounded-md bg-green-200 focus:outline-none focus:bg-green-300 focus:ring-2 focus:ring-green-300"
            type="text"
            placeholder="GitHub Link"
          />

          <button
            className="bg-green-900 hover:bg-green-950 font-semibold text-white p-2 rounded-md"
            type="submit"
          >
            Add Project
          </button>
        </form>
      </section>
    </>
  );
};

export default ProjectUpload;
