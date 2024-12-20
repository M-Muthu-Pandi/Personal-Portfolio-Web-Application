import { useState } from "react";
import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ home, about, skills, projects, contact }) => {
  const navigate = useNavigate();
  const [isSideNavVisible, setIsSideNavVisible] = useState(false);

  const navigation = [
    { route: "/", style: home, icon: "fa-house", title: "Home" },
    { route: "/about", style: about, icon: "fa-user", title: "About" },
    {
      route: "/skills",
      style: skills,
      icon: "fa-laptop-code",
      title: "Skills",
    },
    { route: "/projects", style: projects, icon: "fa-code", title: "Projects" },
    {
      route: "/contact",
      style: contact,
      icon: "fa-comments",
      title: "Contact",
    },
  ];

  // Toggle the sidebar
  const handleSideNav = () => {
    setIsSideNavVisible(!isSideNavVisible);
  };

  // Close the sidebar
  const handleClose = () => {
    setIsSideNavVisible(false);
  };

  return (
    <header className="bg-black sticky md:fixed w-full top-0 p-4 flex justify-between items-center gap-3">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
        <span
          className="cursor-pointer"
          onClick={() => navigate("/adminaccess")}
        >
          M
        </span>
        uthupandi M
      </h1>

      <div className="hidden md:flex justify-evenly gap-3 font-semibold lg:text-lg p-2 w-1/2">
        {navigation.map((item, index) => {
          return (
            <Link
              to={item.route}
              key={index}
              className={`flex items-start justify-between cursor-pointer hover:font-bold opacity-80 hover:opacity-100 hover:text-green-500 ${item.style}`}
            >
              {item.title}
            </Link>
          );
        })}
      </div>

      <div className="hidden md:flex gap-3 text-2xl">
        <a
          className="opacity-80 hover:opacity-100 hover:text-green-500"
          href="https://github.com/M-Muthu-Pandi"
          target="blank"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          className="opacity-80 hover:opacity-100 hover:text-green-500"
          href="https://www.linkedin.com/in/muthupandim/"
          target="blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>

      <div
        onClick={handleSideNav}
        className="inline-block md:hidden opacity-80 hover:opacity-100 hover:text-green-500 text-2xl"
      >
        <i className="fa-solid fa-bars"></i>
      </div>

      {/* Sidebar navigation */}
      {isSideNavVisible && (
        <Sidebar
          setIsSideNavVisible={setIsSideNavVisible}
          handleClose={handleClose}
          navigation={navigation}
        />
      )}
    </header>
  );
};

export default Header;
