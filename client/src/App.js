import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import PhotoCarousel from "./Components/PhotoCarousel";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Artists from "./Components/Artists";
import Footer from "./Components/Footer";
import Shows from "./Components/Shows";
import UploadFile from "./Components/UploadFile";
import FullShowDetails from "./Components/FullShowDetails";
import AboutUs from "./Components/AboutUs";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <PhotoCarousel />
              <Artists />
              <Shows />
              {/* <UploadFile /> */}
              <Footer />
            </>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/shows" element={<Shows />} /> */}
        <Route path="/showFullDetails" element={<FullShowDetails />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
