import axios from "axios";
import { useEffect, useState } from "react";

const ConnectMe = () => {
  const [connect, setConnect] = useState([]);

  /// Fetch Contact Form from the API on component mount
  useEffect(() => {
    window.scrollTo(0, 0);

    axios
      .get("http://localhost:5000/api/socialmedia")
      .then((res) => {
        setConnect(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

  return (
    <div className="sm:px-10 md-p-5 lg:px-10 py-3 md:w-2/5 lg:w-1/2 rounded-2xl flex md:justify-center">
      <div>
        <h3 className="text-green-500 font-bold text-2xl self-start mb-5">
          Connect with Me
        </h3>
        <div className="flex flex-col gap-5">
          {connect.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-3 sm:gap-5">
                <img className="w-6" src={item.image} alt="Social Media" />
                <a
                  className="font-medium hover:opacity-100 hover:text-green-500 text-sm sm:text-base"
                  href={item.link}
                  target="blank"
                >
                  {item.title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ConnectMe;
