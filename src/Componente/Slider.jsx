import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Slider.css";

const breakPoints = [
  { id: 1, title: "item #1" },
  { id: 2, title: "item #2" },
  { id: 3, title: "item #3" },
  { id: 4, title: "item #4" },
];
const Slider = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Example to setup your carousel in react
      </h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
