import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  // State variables to manage form inputs
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission to add the contact form heading
  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactFormData = {
      userName: userName,
      email: email,
      number: number,
      message: message,
    };

    try {
      // Send POST request to add contact form to the backend
      const response = await axios.post(
        "https://muthu-personal-portfolio.onrender.com/api/contactform",
        contactFormData
      );
      alert("Message sent successfully!");
      console.log(response.data);
    } catch (error) {
      alert("Failed to send message. Check the console for details.");
      console.error(error);
    }
    setUserName("");
    setEmail("");
    setNumber("");
    setMessage("");
  };

  return (
    <div className="text-customDark sm:px-10 rounded-2xl md:w-1/2">
      <h3 className="text-green-500 font-bold text-2xl mb-5">Send a Message</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border border-customDark p-2 rounded-md bg-green-200 focus:outline-none focus:bg-green-300 focus:ring-2 focus:ring-green-300"
          type="text"
          placeholder="Full Name"
          required
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-customDark p-2 rounded-md bg-green-200 focus:outline-none focus:bg-green-300 focus:ring-2 focus:ring-green-300"
          type="email"
          placeholder="Email Address"
          required
        />
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="border border-customDark p-2 rounded-md bg-green-200 focus:outline-none focus:bg-green-300 focus:ring-2 focus:ring-green-300"
          type="number"
          placeholder="Mobile Number (Optional)"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-customDark p-2 rounded-md bg-green-200 focus:outline-none focus:bg-green-300 focus:ring-2 focus:ring-green-300"
          placeholder="Write your message here..."
          required
        />
        <button
          type="submit"
          className="bg-green-900 hover:bg-green-950 font-semibold text-white p-2 rounded-md"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
