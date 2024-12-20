import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SignInGoogle from "./components/AdminAccess/signInGoogle";
import AdminAccess from "./components/AdminAccess";
import ContactFormsCheck from "./components/AdminAccess/contactForms";
import { AdminProvider } from "./components/Common/AdminContext";

const App = () => {
  return (
    <div className="text-white font-poppins">
      <AdminProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/adminaccess" element={<SignInGoogle />} />
            <Route path="/mainadminaccess" element={<AdminAccess />} />
            <Route path="/admin/contactforms" element={<ContactFormsCheck />} />
          </Routes>
        </BrowserRouter>
      </AdminProvider>
    </div>
  );
};

export default App;
