const ContactForm = () => {
  return (
    <div className="text-customDark sm:px-10 rounded-2xl md:w-1/2">
      <h3 className="text-green-500 font-bold text-2xl mb-5">Send a Message</h3>
      <form className="flex flex-col gap-5">
        <input
          className="border border-customDark p-2 rounded-md bg-green-200 focus:outline-none focus:bg-green-300 focus:ring-2 focus:ring-green-300"
          type="text"
          placeholder="Full Name"
          required
        />
        <input
          className="border border-customDark p-2 rounded-md bg-green-200 focus:outline-none focus:bg-green-300 focus:ring-2 focus:ring-green-300"
          type="text"
          placeholder="Email Address"
          required
        />
        <input
          className="border border-customDark p-2 rounded-md bg-green-200 focus:outline-none focus:bg-green-300 focus:ring-2 focus:ring-green-300"
          type="text"
          placeholder="Mobile Number (Optional)"
        />
        <textarea
          className="border border-customDark p-2 rounded-md bg-green-200 focus:outline-none focus:bg-green-300 focus:ring-2 focus:ring-green-300"
          placeholder="Write your message here..."
          required
        />
        <button className="bg-green-900 hover:bg-green-950 font-semibold text-white p-2 rounded-md">
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
