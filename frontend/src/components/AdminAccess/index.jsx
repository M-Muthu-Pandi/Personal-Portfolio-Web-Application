import { useEffect } from "react";
import { useAdmin } from "../Common/AdminContext";
import Header from "../Common/Header";
import SkillsUpload from "./skillsAdd";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import ProjectUpload from "./projectsAdd";
import SocialMediaUpload from "./socialMediaAdd";

const AdminAccess = () => {
  const navigate = useNavigate();
  const admin = useAdmin(); // Get the admin status from context

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
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
              Admin Access
            </h2>
            <div className="self-end flex gap-3">
              <button
                onClick={() => navigate("/admin/contactforms")}
                className="bg-green-500 rounded-md hover:bg-green-600 p-2"
              >
                Check Contact Form
              </button>
              <button
                onClick={logoutUser}
                className="bg-green-500 rounded-md hover:bg-green-600 p-2"
              >
                Log Out
              </button>
            </div>
            <section className="flex flex-col gap-10">
              <SkillsUpload />
              <ProjectUpload />
              <SocialMediaUpload />
            </section>
          </main>
        </>
      ) : (
        // Display if the user is not an admin
        <div className="flex flex-col gap-5 items-center mt-5">
          <p className="md:text-lg">
            We're sorry, but this page is not available for user access.
          </p>
          {/* Button to go back to the home page */}
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

export default AdminAccess;
