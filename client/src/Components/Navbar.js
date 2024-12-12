import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../media/kllogowhite.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);

  const handleClick = () => {
    navigate("/login");
  };
  const handleProfile = () => {
    navigate("/profile");
  };
  const handleLogout = () => {
    console.log("here");
    localStorage.clear();
    setLogin(false);
  };
  useEffect(() => {
    console.log(login);
    if (localStorage.getItem("token")) {
      console.log(localStorage.getItem("token"));
      setLogin(true);
    }
  }, [login]);
  return (
    <div className="flex w-[100%] h-[150px] bg-[#000814] text-yellow-500">
      <img src={logo} alt="kl media logo" />
      <div>
        <h1 className="mt-4 ml-[340px] text-6xl text-yellow-500">KL MEDIA</h1>
        <ul className="flex gap-14 text-xl">
          <li className="ml-[300px] mt-[20px] ">
            <Link to="/" className="text-yellow-500 no-underline">
              Home
            </Link>
          </li>
          <li className="mt-[20px]">
            <Link to="/aboutus" className="text-yellow-500 no-underline">
              About Us
            </Link>
          </li>
          {/* <li className="mt-[20px]">
            <Link to="/" className="text-yellow-500 no-underline">
              Home
            </Link>
          </li> */}
          {login ? (
            <li>
              <button
                className="mt-[20px] hover:text-white"
                onClick={handleProfile}
              >
                Profile
              </button>
              <button
                className="ml-[30px] mt-[20px] hover:text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <button
                className="mt-[20px] hover:text-white"
                onClick={handleClick}
              >
                Login
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
