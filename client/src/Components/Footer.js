import React from "react";
import stars from "../media/stars.png";
import logo from "../media/kllogowhite.png";

export default function Footer() {
  return (
    <div className="bg-black text-yellow-500">
      <div className="flex gap-2">
        {/* <img src={stars} alt="stars" width="64px" height="64px" className="mt-2 ml-6" /> */}
        {/* <p className="mt-4 ml-10 ">List With Us?</p> */}
        <p className="mt-7 ml-52  ">
          Got a Show or Great Experience? Partner With us and get associated
          with KL Media!!!
        </p>
        <button className="mt-2.5 rounded-xl text-yellow-500">
          <a href="https://www.instagram.com/media.kl01/" target="_blank" className="text-yellow-500">
            Contact Us
          </a>
        </button>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: 1, height: "3px" }} className="bg-yellow-500" />

        <p style={{ margin: "0 10px" }}>
          <img src={logo} alt="logo" width="200px" />
        </p>

        <div style={{ flex: 1, height: "3px" }} className="bg-yellow-500" />
      </div>
    </div>
  );
}
