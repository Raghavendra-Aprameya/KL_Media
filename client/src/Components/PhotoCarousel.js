import React from "react";
import { useNavigate } from "react-router-dom";
import download from "../media/download.jpeg";
import show1 from "../media/show1.png";
import show2 from "../media/show2.png";
import show3 from "../media/show3.png";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";


function UncontrolledExample() {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/login");
  };
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage src={show1} alt="First slide" width="200" />
        <Carousel.Caption>
          {/* <button className="bg-white text-black rounded-full py-1 px-4" onClick={handleClick}>Book Now</button> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={show2} alt="Second slide" width="200" />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="bg-black text-white rounded-full py-1 px-4" onClick={handleClick} >Book Now</button> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={show3} alt="Third slide" width="200" />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <button className="bg-white text-black rounded-full py-1 px-4" onClick={handleClick}>Book Now</button> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
