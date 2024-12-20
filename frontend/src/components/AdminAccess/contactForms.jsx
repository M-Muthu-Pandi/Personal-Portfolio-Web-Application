import axios from "axios";
import { useAdmin } from "../Common/AdminContext";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Common/Header";

const ContactFormsCheck = () => {
  const navigate = useNavigate();
  const admin = useAdmin(); // Get the admin status from context

  const [contactForm, setContactForm] = useState([]);

  // Fetch Contact Form from the API on component mount
  useEffect(() => {
    window.scrollTo(0, 0);

    axios
      .get("https://muthu-personal-portfolio.onrender.com/api/contactform")
      .then((res) => {
        setContactForm(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

  // Log out the user
  const logoutUser = async () => {
    await signOut(auth);
    navigate("/adminaccess");
    console.log("User Looged Out");
  };

  return (
    <>
      {admin ? (
        <>
          <Header />
          <main className="md:pt-24 flex flex-col gap-10 p-5 sm:p-10 lg:px-20 min-h-screen">
            <h2 className="text-center text-2xl sm:text-3xl font-semibold text-green-500 border-b border-green-500 pb-2">
              Admin Access Contact Form
            </h2>
            <button
              onClick={() => navigate("/mainadminaccess")}
              className="bg-green-500 rounded-md hover:bg-green-600 p-2 self-end"
            >
              Go back to Main Access
            </button>

            <section className="flex gap-5 flex-wrap">
              {contactForm.map((item) => {
                return (
                  <div
                    key={item._id}
                    className="flex-grow basis-1/3 rounded-md bg-black p-5 flex flex-col gap-3"
                  >
                    <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">
                      Name:{" "}
                      <span className="text-green-500">{item.userName}</span>
                    </h3>
                    <h4 className="font-medium text-sm sm:text-base md:text-lg lg:text-xl">
                      Email:{" "}
                      <span className="text-green-500">{item.email}</span>
                    </h4>
                    <h4 className="font-medium md:text-lg lg:text-xl">
                      Mobile Number:{" "}
                      <span className="text-green-500">{item.number}</span>
                    </h4>
                    <p className="font-medium text-sm md:text-base">
                      Message:{" "}
                      <span className="text-green-500">{item.message}</span>
                    </p>
                  </div>
                );
              })}
            </section>
          </main>
        </>
      ) : (
        // Display if the user is not an admin
        <div className="flex flex-col gap-5 items-center mt-5">
          <p className="md:text-lg">
            We're sorry, but this page is not available for user access.
          </p>

          <button
            onClick={logoutUser}
            className="bg-green-500 rounded-md hover:bg-green-600 p-2"
          >
            Log Out
          </button>
        </div>
      )}
    </>
  );
};

export default ContactFormsCheck;
