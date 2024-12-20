import axios from "axios";
import { useState } from "react";

const SocialMediaUpload = () => {
  // State variables to manage form inputs
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");

  // Handle form submission to add the contact form heading
  const handleSubmit = async (e) => {
    e.preventDefault();

    const socialMediaData = {
      image: image,
      link: link,
      title: title,
    };

    try {
      // Send POST request to add contact form to the backend
      const response = await axios.post(
        "https://muthu-personal-portfolio.onrender.com/api/socialmedia",
        socialMediaData
      );
      alert("Link added successfully!");
      console.log(response.data);
    } catch (error) {
      alert("Failed to add link. Check the console for details.");
      console.error(error);
    }
    setImage("");
    setTitle("");
    setLink("");
  };

  return (
    <>
      <section className="flex flex-col gap-5 bg-black rounded-lg p-5 text-customDark">
        <h3 className="text-green-500 font-bold text-2xl">Add Social Medias</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border border-customDark p-2 rounded-md bg-green-200 focus:outline-none focus:bg-green-300 focus:ring-2 focus:ring-green-300"
            type="text"
            placeholder="Paste Image URL"
          />
          <input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="border border-customDark p-2 rounded-md bg-green-200 focus:outline-none focus:bg-green-300 focus:ring-2 focus:ring-green-300"
            type="text"
            placeholder="Paste the Link"
          />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-customDark p-2 rounded-md bg-green-200 focus:outline-none focus:bg-green-300 focus:ring-2 focus:ring-green-300"
            type="text"
            placeholder="Title"
          />

          <button
            className="bg-green-900 hover:bg-green-950 font-semibold text-white p-2 rounded-md"
            type="submit"
          >
            Add Social Media Link
          </button>
        </form>
      </section>
    </>
  );
};

export default SocialMediaUpload;
