// ExampleCarouselImage.js
import React from "react";

const ExampleCarouselImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", height: "300px" }}
      // Adjust width and height
    />
  );
};

export default ExampleCarouselImage;
