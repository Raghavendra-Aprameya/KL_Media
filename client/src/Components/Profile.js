import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../media/kllogowhite.png";

export default function Profile() {
  const [profileData, setProfileData] = useState(null);
  const [bookedData, setBookedData] = useState(null);
  const getUserDetails = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:8080/api/users/profile",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setProfileData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  // const getBookingDetails = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const response = await axios.get(
  //       "http://localhost:8080/api/users/booked",
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );
  //     setBookedData(response.data.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  useEffect(() => {
    // getBookingDetails();
    getUserDetails();
  }, []);
  const Navigate = useNavigate();
  const Click = () => {
    Navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <img
        src={logo}
        alt="kl media logo"
        className="h-[200px] w-[auto] absolute top-0 left-0 m-2 cursor-pointer"
        onClick={Click}
      />
      <div className="w-full max-w-lg bg-white rounded-lg shadow-xl p-10">
        <h1 className="text-3xl text-yellow-500 font-bold mb-8 text-center">
          User Profile
        </h1>
        {profileData && (
          <div className="registration-form">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-yellow-500 font-semibold mb-2"
              >
                Name:
              </label>
              <p className="text-gray-800">{profileData.name}</p>
            </div>
            <div className="mb-6">
              <label
                htmlFor="phno"
                className="block text-yellow-500 font-semibold mb-2"
              >
                Phone Number:
              </label>
              <p className="text-gray-800">{profileData.phno}</p>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-yellow-500 font-semibold mb-2"
              >
                Email:
              </label>
              <p className="text-gray-800">{profileData.email}</p>
            </div>
          </div>
        )}
        <div className="text-center mt-8">
          <button
            className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
            onClick={() => {
              localStorage.clear();
              Click();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
