import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Serum from "../images/other/car1.jpg";
import Cleanser from "../images/other/car2.jpg";
import Sunscreen from "../images/other/car3.jpg";
import Tonic from "../images/other/car4.jpg";
import Bundle from "../images/other/car5.jpg";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

function Products() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.75,
    slidesToScroll: 1,
  };
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        <div className="text-center p-6">
          <a href="">
            <div className="text-left">
              <img src={Serum} />
              <h1 className="font-bold mb-2">Serum</h1>
              <p className="text-guap italic text-sm">$15.99</p>
              <div className="reviews flex">
                <p className="text-sm flex text-yellow-400 my-auto">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                </p>

                <p className="text-sm ml-1 text-yellow-600">27 reviews</p>
              </div>
            </div>
          </a>
        </div>
        <div className="text-center p-6">
          <a href="">
            <div className="text-left">
              <img src={Cleanser} />
              <h1 className="font-bold mb-2">Cleanser</h1>
              <p className="text-guap italic text-sm">$15.99</p>
              <div className="reviews flex">
                <p className="text-sm flex my-auto text-yellow-400">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                </p>
                <p className="text-sm ml-1 text-yellow-600">5 Reviews</p>
              </div>
            </div>
          </a>
        </div>
        <div className="text-center p-6">
          <a href="">
            <div className="text-left">
              <div class="absolute overflow-hidden w-56 h-56">
                <div class="absolute left-0 top-0 h-16 w-16">
                  <div class="absolute transform -rotate-45 bg-guap text-center text-white font-semibold py-1 left-[-34px] top-[32px] w-[170px]">
                    Popular
                  </div>
                </div>
              </div>
              <img src={Sunscreen} />
              <h1 className="font-bold mb-2">Sunscreen</h1>

              <p className="text-guap italic text-sm">$15.99</p>
              <div className="reviews flex">
                <p className="text-sm flex my-auto text-yellow-400">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                </p>
                <p className="text-sm ml-1 text-yellow-600">5 Reviews</p>
              </div>
            </div>
          </a>
        </div>
        <div className="text-center p-6">
          <a href="">
            <div className="text-left">
              <img src={Tonic} />
              <h1 className="font-bold mb-2">Tonic</h1>
              <p className="text-guap italic text-sm">$15.99</p>
              <div className="reviews flex">
                <p className="text-sm flex my-auto text-yellow-400">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                </p>
                <p className="text-sm ml-1 text-yellow-600">5 Reviews</p>
              </div>
            </div>
          </a>
        </div>
        <div className="text-center p-6">
          <a href="">
            <div className="text-left">
              <div class="absolute overflow-hidden w-56 h-56">
                <div class="absolute left-0 top-0 h-16 w-16">
                  <div class="absolute transform -rotate-45 bg-guap text-center text-white font-semibold py-1 left-[-34px] top-[32px] w-[170px]">
                    Save 10$ !!
                  </div>
                </div>
              </div>
              <img src={Bundle} />
              <h1 className="font-bold mb-2">Bundle</h1>
              <p className="text-guap italic text-sm">$15.99</p>
              <div className="reviews flex">
                <p className="text-sm flex my-auto text-yellow-400">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                </p>
                <p className="text-sm ml-1 text-yellow-600">5 Reviews</p>
              </div>
            </div>
          </a>
        </div>
      </Slider>
      <div className="text-center">
        <button className="p-3 bg-guap text-white text-sm rounded-md mt-12">
          SEE ALL
        </button>
      </div>
    </div>
  );
}

export default Products;
