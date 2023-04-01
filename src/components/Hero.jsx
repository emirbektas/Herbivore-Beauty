import React from "react";
import Carousel from "./Carousel";
import Caro1 from "../images/other/carousel1.png";
import Caro2 from "../images/other/carousel2.png";
import Caro3 from "../images/other/carousel3.jpeg";

const slides = [Caro1, Caro2, Caro3];

function Hero() {
  return (
    <div>
      <Carousel>
        {slides.map((s, index) => (
          <img key={index} src={s} />
        ))}
      </Carousel>
    </div>
  );
}

export default Hero;
