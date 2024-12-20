import axios from "axios";
import { useState } from "react";

const SkillsUpload = () => {
  // State variables to manage form inputs
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");

  // Handle form submission to add the contact form heading
  const handleSubmit = async (e) => {
    e.preventDefault();

    const skillData = {
      image: image,
      title: title,
    };

    try {
      // Send POST request to add contact form to the backend
      const response = await axios.post(
        "https://muthu-personal-portfolio.onrender.com/api/skills",
        skillData
      );
      alert("skill sent successfully!");
      console.log(response.data);
    } catch (error) {
      alert("Failed to add skill. Check the console for details.");
      console.error(error);
    }
    setImage("");
    setTitle("");
  };

  return (
    <>
      <section className="flex flex-col gap-5 bg-black rounded-lg p-5 text-customDark">
        <h3 className="text-green-500 font-bold text-2xl">Add Skiils</h3>
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
            placeholder="Name of the skill"
          />
          <button
            className="bg-green-900 hover:bg-green-950 font-semibold text-white p-2 rounded-md"
            type="submit"
          >
            Add Skill
          </button>
        </form>
      </section>
    </>
  );
};

export default SkillsUpload;
