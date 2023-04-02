import React from "react";
import Caro1 from "../images/other/carousel1.png";
import Caro2 from "../images/other/carousel2.png";
import Caro3 from "../images/other/carousel3.jpeg";
import { Carousel } from "flowbite-react";

function Hero() {
  return (
    <div>
      <div>
        <Carousel>
          <div className="flex h-full items-center justify-center relative">
            <img src={Caro1} className="opacity-70" />
            <div className="absolute bottom-12">
              <h1 className="text-2xl font-bold italic text-guap">
                Glow with vegan beauty
              </h1>
            </div>
          </div>
          <div className="flex h-full items-center justify-center relative">
            <img src={Caro2} className="opacity-70" />
            <div className="absolute bottom-12">
              <h1 className="text-2xl font-bold italic text-guap">
                Vegan ingredients, beautiful skin
              </h1>
            </div>
          </div>
          <div className="flex h-full items-center justify-center relative">
            <img src={Caro3} className="h-full opacity-70" />
            <div className="absolute bottom-12">
              <h1 className="text-2xl font-bold italic text-guap">
                Compassion meets skincare
              </h1>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="p-16 items-center mx-auto ">
        <h1 className=" text-center">
          At <span className="text-guap italic">Herbivore Beauty</span>, we
          believe in harnessing the power of nature to create luxurious, vegan
          skincare that nourishes your skin and respects the planet.
        </h1>
        <div className="text-center mt-4">
          <button className="p-3 bg-guap text-white text-sm rounded-md">
            READ OUR STORY
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
