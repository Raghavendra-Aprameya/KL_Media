import React from "react";
import karthik from "../media/KarthikGY.png";
import lalith from "../media/Lalith.png";
import logo from "../media/kllogowhite.png";
import { Link, useNavigate } from "react-router-dom";

export default function AboutUs() {
    const Navigate = useNavigate();
    const logoClick = () => {
        Navigate("/");
    };
    return (

        <div style={{ backgroundColor: "#ced4da", fontFamily: "'Bebas Neue', sans-serif", color: "#18181b", padding: "20px" }}>
            <img
                src={logo}
                alt="kl media logo"
                className="h-[200px] w-[auto] absolute top-0 left-0 m-2 cursor-pointer"
                onClick={logoClick}
            />

            <div style={{ textAlign: "center", marginTop: "100px" }}>
                <h2 style={{ fontSize: "30px", paddingBottom: "5px", marginBottom: "30px" }}>About Us</h2>
                <div style={{ lineHeight: "1.5", textAlign: "center", wordSpacing: "1.5px", boxShadow: "2px 2px 10px 10px", marginLeft: "30px", marginRight: "30px", backgroundColor: "white", padding: "20px" }}>
                    <p style={{ fontSize: "20px" }}>
                        Welcome to the uproarious world of <strong>KL Productions – where laughter knows no bounds!</strong> KL Productions isn't just a stand-up comedy production house; it's a riotous playground where humor takes center stage. With a knack for turning everyday anecdotes into side-splitting sagas and transforming mundane moments into comic gold, KL Productions has redefined the art of comedy. Our team of gifted comedians, writers, and creatives work tirelessly to craft hilarious narratives that resonate with audiences from all walks of life. Whether it's a rib-tickling one-person show, an ensemble cast of jesters, or even an offbeat improv extravaganza, KL Productions delivers laughter that's bound to leave your cheeks sore and your spirits soaring. So buckle up and brace yourselves for a rollercoaster ride of chuckles, guffaws, and belly laughs, brought to you exclusively by KL Productions. Comedy has a new address, and it's one where the fun never stops!
                    </p>
                </div>
            </div>

            <h3 style={{ fontSize: "24px", paddingBottom: "5px", marginBottom: "20px", marginTop: "20px", textAlign: "center" }}>Founders</h3>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "black", marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", backgroundColor: "black", marginBottom: "20px", marginRight: "20px", marginLeft: "20px", borderRadius: "30px", border: "#fcd34d 7px solid" }}>
                    <img src={karthik} alt="founder-pic" style={{ borderRadius: "30px", backgroundColor: "transparent" }} width="250" />
                    <div style={{ marginLeft: "20px", backgroundColor: "black" }}>
                        <p style={{ fontSize: "24px", color: "whitesmoke", paddingLeft: "20px", backgroundColor: "black" }}>
                            <strong style={{ fontSize: "30px", backgroundColor: "black" }}>"</strong>As the founder of KL Productions, my passion for laughter and commitment to delivering top-notch comedic experiences have driven us to redefine the boundaries of entertainment, making us a premier destination for side-splitting joy and unforgettable moments. <strong style={{ fontSize: "30px", backgroundColor: "black" }}>"</strong>
                        </p>
                        <p style={{ fontSize: "40px", textAlign: "right", paddingRight: "40px", paddingTop: "20px", color: "whitesmoke", backgroundColor: "black" }}>-Karthik GY</p>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", backgroundColor: "black", marginBottom: "20px", marginRight: "20px", marginLeft: "20px", borderRadius: "30px", border: "#fcd34d 7px solid" }}>
                    <div style={{ marginRight: "20px", marginLeft: "20px", backgroundColor: "black" }}>
                        <p style={{ fontSize: "24px", color: "whitesmoke", paddingLeft: "20px", backgroundColor: "black" }}>
                            <strong style={{ fontSize: "30px", backgroundColor: "black" }}>"</strong>At KL Productions, we've turned the spotlight onto laughter, creating a platform that not only showcases the immense talents of comedians but also celebrates the shared human experience that unites us all through humor. <strong style={{ fontSize: "30px", backgroundColor: "black" }}>"</strong>
                        </p>
                        <p style={{ fontSize: "40px", textAlign: "right", paddingRight: "40px", paddingTop: "20px", color: "whitesmoke", backgroundColor: "black" }}>-Lalith Ramesh</p>
                    </div>
                    <img src={lalith} alt="founder-pic" style={{ borderRadius: "30px", backgroundColor: "transparent" }} width="250" />
                </div>
            </div>
        </div>
    );
}
