import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cleanser from "../images/other/cleanser.jpg";
import Sunscreen from "../images/other/sunscreen.jpg";
import Tonic from "../images/other/tonic.jpg";
import Bundle from "../images/other/bundle.jpg";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import ProductPage from "./pages/ProductPage";

function Bests() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.75,
    slidesToScroll: 1,
  };
  return (
    <div className="overflow-hidden bg-probg bg-half bg-no-repeat bg-center-top h-screen w-full -mb-40">
      <div className="p-4">
        <h1 className="text-center font-bold text-2xl text-guap mt-2">
          OUR BEST SELLERS
        </h1>
        <Slider {...settings}>
          <div className="text-center p-10 ">
            <a href="">
              <div className="text-left">
                <img src={Cleanser} className="rounded" />
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
          <div className="text-center p-10 ">
            <a href="">
              <div className="text-left">
                {/* <div class="absolute overflow-hidden w-56 h-56">
                <div class="absolute left-0 top-0 h-16 w-16">
                  <div class="absolute transform -rotate-45 bg-guap text-center text-white font-semibold py-1 left-[-34px] top-[32px] w-[170px]">
                    Popular
                  </div>
                </div>
              </div> */}
                <img src={Sunscreen} className="rounded" />
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
          <div className="text-center p-10 ">
            <a href="">
              <div className="text-left">
                <img src={Tonic} className="rounded" />
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
          <div className="text-center p-10 ">
            <a href="">
              <div className="text-left">
                <div class="absolute overflow-hidden w-56 h-56">
                  <div class="absolute left-0 top-0 h-16 w-16">
                    <div class="absolute transform -rotate-45 bg-guap text-center text-white font-semibold py-1 left-[-34px] top-[32px] w-[170px]">
                      Save 10$ !!
                    </div>
                  </div>
                </div>
                <img src={Bundle} className="rounded" />
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
          <button className="p-3 bg-white border border-guap text-guap text-sm rounded-md mt-12 hover:bg-guap hover:text-white">
            <Link to="/products">SEE ALL</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bests;
