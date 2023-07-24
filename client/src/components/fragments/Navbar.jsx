import { NavLink, useNavigate } from "react-router-dom";
import Button from "../elements/Button/Button";
import { AiOutlineLogout } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";

const Navbar = () => {
  const items = [
    {
      id: 1,
      title: "Home",
      to: "/",
    },

    {
      id: 2,
      title: "About",
      to: "/about",
    },

    {
      id: 3,
      title: "blog",
      to: "/blog",
    },
  ];

  const navigate = useNavigate();

  const isActive = localStorage.getItem("active");
  return (
    <div className="h-12 w-full fixed top-0 z-10 bg-white flex items-center justify-between">
      <h1 className="ml-5 text-xl font-bold">Logo.</h1>
      <div className="mr-3 flex items-center gap-3 relative">
        {items.map((item) => (
          <NavLink key={item.id} to={item.to}>
            {item.title}
          </NavLink>
        ))}
        {isActive !== "true" ? (
          <Button className="bg-orange-500 p-1 rounded-md cursor-pointer" onClick={() => navigate("/register")}>
            Register
          </Button>
        ) : (
          <>
            <div className="w-8 h-8 bg-red-200 rounded-full cursor-pointer" onClick={profileHandler}></div>
            <div className="w-32 absolute top-10 right-0 bg-slate-950 shadow-xl hidden" id="profileControl">
              <Button className=" p-1 cursor-pointer flex items-center gap-2">
                <FaUserEdit /> Profile
              </Button>
              <Button className=" p-1 cursor-pointer flex items-center gap-2" onClick={logOutHandler}>
                <AiOutlineLogout /> Log Out
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const profileHandler = () => {
  const profileControl = document.getElementById("profileControl");
  profileControl.classList.toggle("hidden");
};

const logOutHandler = () => {
  localStorage.clear()
  window.location.reload()
}

export default Navbar;
