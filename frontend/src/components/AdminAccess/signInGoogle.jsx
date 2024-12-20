// import { useEffect } from "react";
import Header from "../Common/Header";
import google from "../../assets/Google-logo.png";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const SignInGoogle = () => {
  const navigate = useNavigate();

  // Handle Google sign-in process
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user.displayName);
      navigate("/mainadminaccess");
    } catch (err) {
      console.log(`Error while signing in... ${err.message}`);
    }
  };

  return (
    <>
      <Header />
      <main className="md:pt-24 flex flex-col gap-10 p-5 sm:p-10 lg:px-20 min-h-screen">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-green-500 border-b border-green-500 pb-2">
          Admin Access
        </h2>
        <section className="flex justify-center">
          {/* Google SignIn */}
          <button
            onClick={handleSignIn}
            className="bg-blue-600 rounded-md p-2 text-sm text-white hover:bg-blue-700 flex justify-between items-center gap-2 font-medium"
          >
            <img
              className="w-7 bg-white rounded-full p-1"
              src={google}
              alt="Google Logo"
            />
            <span className="ml-8 mr-12">Sign In with Google</span>
          </button>
        </section>
      </main>
    </>
  );
};

export default SignInGoogle;
