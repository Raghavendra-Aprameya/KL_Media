import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../media/kllogowhite.png";

export default function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phno, setPhno] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const Navigate = useNavigate();
  const handleClick = async (e) => {
    try {
      e.preventDefault();
      console.log(name);
      await axios
        .post("http://localhost:8080/api/users/signup", {
          name,
          password,
          phno,
          email,
          role,
        })
        .then((response) => {
          console.log(response);
          if (response.data.status === "success") {
            alert("Registered Successfully");
            Navigate("/login");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  const logoClick = () => {
    Navigate("/");
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <img
        src={logo}
        alt="kl media logo"
        className="h-[200px] w-[auto] absolute top-0 left-0 m-2 cursor-pointer"
        onClick={logoClick}
      />
      <div className="w-full max-w-lg bg-white rounded-lg shadow-xl p-10">
        <h1 className="text-3xl text-yellow-500 font-bold mb-8 text-center">
          Register for KL Media
        </h1>
        <form className="registration-form">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-yellow-500 font-semibold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="phno"
              className="block text-yellow-500 font-semibold mb-2"
            >
              Phone Number:
            </label>
            <input
              type="text"
              name="phno"
              id="phno"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
              value={phno}
              onChange={(e) => setPhno(e.target.value)}
            />
          </div>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="role"
              className="block text-yellow-500 font-semibold mb-2"
            >
              Role:
            </label>
            <input
              type="text"
              name="role"
              id="role"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
            onClick={handleClick}
          >
            Register
          </button>
        </form>
        <p className="text-yellow-500 text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
