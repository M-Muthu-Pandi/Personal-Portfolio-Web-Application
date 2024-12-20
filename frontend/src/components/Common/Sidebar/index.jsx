import { useNavigate } from "react-router-dom";

const Sidebar = ({ handleClose, navigation, setIsSideNavVisible }) => {
  const navigate = useNavigate();

  // Navigate to the cart and close the side nav
  const handleClick = (item) => {
    navigate(item);
    setIsSideNavVisible(false);
  };

  return (
    <aside className="fixed top-0 left-0 p-5 sm:p-5 bg-black w-3/4 sm:1/2 h-screen text-white">
      {/* Close button for the side nav */}
      <div className="flex justify-end p-2">
        <button onClick={handleClose} className="text-white text-xl font-bold">
          &times;
        </button>
      </div>

      <div className="h-full flex flex-col gap-20">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-green-500">Muthupandi M</h1>
        </div>

        <ul className="flex flex-col gap-5 font-semibold lg:text-lg">
          {navigation.map((item, index) => {
            return (
              <li
                onClick={() => {
                  handleClick(item.route);
                }}
                key={index}
                className={`flex items-center gap-3 cursor-pointer hover:font-bold hover:text-green-500 ${item.style}`}
              >
                <i className={`fa-solid ${item.icon} w-7 text-center`}></i>
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>

        {/* Admin access */}
        <div>
          <button className="cursor-pointer text-black hover:text-green-500">
            Admin
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
