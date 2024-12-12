import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../media/kllogowhite.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(email, password);
      await axios
        .post("http://localhost:8080/api/users/login", {
          email: email,
          password: password,
        })
        .then((result) => {
          if (result.data.status === "success") {
            if (result.data.token)
              localStorage.setItem("token", result.data.token);
            localStorage.setItem("role", result.data.role);
            Navigate("/");
          }
        });
    } catch (err) {
      console.log("front");
      console.log(err);
    }
  };
  const logoClick = () => {
    Navigate("/");
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <img
          src={logo}
          alt="kl media logo"
          className="h-[200px] w-[auto] absolute top-0 left-0 m-2 cursor-pointer"
          onClick={logoClick}
        />
        <form className="w-full max-w-md bg-white rounded-lg shadow-xl p-10">
          <h1 className="text-3xl text-yellow-500 font-bold mb-8 text-center">
            Login to KL Media
          </h1>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-yellow-500 font-semibold mb-2"
            >
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-yellow-500 font-semibold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
          >
            Log In
          </button>
          <p className="text-gray-300 text-center mt-4">
            Not registered?
            <Link to="/register" className="text-yellow-500 font-semibold ml-2">
              Register Now
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
