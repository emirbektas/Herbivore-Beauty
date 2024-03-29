import React from "react";
import Caro1 from "../../images/other/carousel1.jpg";
import Caro2 from "../../images/other/carousel2.jpg";
import Caro3 from "../../images/other/carousel3.jpg";
import { Carousel } from "flowbite-react";

function Hero() {
  return (
    <div>
      <div>
        <Carousel className="lg:h-[600px] xl:h-[700px]">
          <div className="flex h-full items-center justify-center relative">
            <img src={Caro1} className="opacity-70" />
            <div className="absolute bottom-1/2">
              <h1 className="text-4xl font-semibold italic text-guap ">
                Glow with vegan beauty
              </h1>
            </div>
          </div>
          <div className="flex h-full items-center justify-center relative">
            <img src={Caro2} className="opacity-70" />
            <div className="absolute bottom-1/2">
              <h1 className="text-4xl font-semibold italic text-whitey">
                Vegan ingredients, beautiful skin
              </h1>
            </div>
          </div>
          <div className="flex h-full items-center justify-center relative">
            <img src={Caro3} className="opacity-70" />
            <div className="absolute bottom-1/2">
              <h1 className="text-4xl font-semibold italic text-guap">
                Compassion meets skincare
              </h1>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="p-16 items-center mx-auto bg-cream">
        <h1 className="text-xl text-center">
          At{" "}
          <span className="text-guap italic font-semibold cursor-pointer">
            Herbivore Beauty
          </span>
          , we believe in harnessing the power of nature to create luxurious,
          vegan skincare that nourishes your skin and respects the planet.
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
