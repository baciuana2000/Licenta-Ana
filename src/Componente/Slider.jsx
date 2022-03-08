import React from "react";
import { Zoom } from "react-slideshow-image";
import "./Slider.css";
const Slider = () => {
  const images = ["images/img3.jpg", "images/img3.jpg"];

  const zoomInProperties = {
    indicators: true,
    scale: 1.4,
  };
  return (
    <div>
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} style={{ width: "100%" }}>
            <img style={{ objectFit: "cover", width: "100%" }} src={each} />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slider;
