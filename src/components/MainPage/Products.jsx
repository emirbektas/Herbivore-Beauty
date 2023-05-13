import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Moisturiser from "../../images/other/moisturizing.webp";
import Acid from "../../images/other/acid.webp";
import Cleanser from "../../images/other/cleanser.webp";
import Cleanser2 from "../../images/other/cleanser2.webp";
import Sunscreen from "../../images/other/sunscreen.webp";
import Vitamin from "../../images/other/vitamin.webp";
import Bundle from "../../images/other/bundle.webp";

function Products() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.75,
    slidesToScroll: 1,
  };
  return (
    <div className="overflow-hidden bg-soft" id="products">
      <div className="px-6 pb-12">
        <Slider {...settings}>
          <div className="text-center p-10 ">
            <a href="">
              <div className="text-left">
                <img src={Moisturiser} className="bg-gray-50 rounded-lg p-3" />
                <h1 className="font-bold my-2">Moisturizer</h1>
                <p className="text-guap italic text-sm">$15.99</p>
                <div className="reviews flex">
                  <p className="text-sm">5 Reviews</p>
                </div>
              </div>
            </a>
          </div>

          <div className="text-center p-10 ">
            <a href="">
              <div className="text-left">
                <img src={Acid} className="bg-gray-50 rounded-lg p-3" />
                <h1 className="font-bold my-2">Azelaic Acid Suspension 10%</h1>
                <p className="text-guap italic text-sm">$15.99</p>
                <div className="reviews flex">
                  <p className="text-sm">5 Reviews</p>
                </div>
              </div>
            </a>
          </div>

          <div className="text-center p-10 ">
            <a href="">
              <div className="text-left">
                <img src={Cleanser} className="bg-gray-50 rounded-lg p-3" />
                <h1 className="font-bold my-2">Squalane Cleanser</h1>
                <p className="text-guap italic text-sm">$15.99</p>
                <div className="reviews flex">
                  <p className="text-sm">5 Reviews</p>
                </div>
              </div>
            </a>
          </div>
          <div className="text-center p-10 ">
            <a href="">
              <div className="text-left">
                <img src={Cleanser2} className="bg-gray-50 rounded-lg p-3" />
                <h1 className="font-bold my-2">Glucoside Foaming Cleanser</h1>
                <p className="text-guap italic text-sm">$15.99</p>
                <div className="reviews flex">
                  <p className="text-sm">5 Reviews</p>
                </div>
              </div>
            </a>
          </div>
          <div className="text-center p-10 ">
            <a href="">
              <div className="text-left">
                <img src={Sunscreen} className="bg-gray-50 rounded-lg p-3" />
                <h1 className="font-bold my-2">Sunscreen SPF 30</h1>
                <p className="text-guap italic text-sm">$15.99</p>
                <div className="reviews flex">
                  <p className="text-sm">5 Reviews</p>
                </div>
              </div>
            </a>
          </div>
          <div className="text-center p-10 ">
            <a href="">
              <div className="text-left">
                <img src={Vitamin} className="bg-gray-50 rounded-lg p-3" />
                <h1 className="font-bold my-2">Vitamin C</h1>
                <p className="text-guap italic text-sm">$15.99</p>
                <div className="reviews flex">
                  <p className="text-sm">5 Reviews</p>
                </div>
              </div>
            </a>
          </div>
          <div className="text-center p-10 ">
            <a href="">
              <div className="text-left">
                <div class="absolute overflow-hidden w-56 h-56">
                  <div class="absolute left-0 top-0">
                    <div class="absolute transform -rotate-45 bg-guap text-center text-white font-semibold py-1 left-[-34px] top-[32px] w-[170px]">
                      Save 10$ !!
                    </div>
                  </div>
                </div>
                <img src={Bundle} className="bg-gray-50 rounded-lg p-3" />
                <h1 className="font-bold my-2">Bundle</h1>
                <p className="text-guap italic text-sm">$49.99</p>
                <div className="reviews flex">
                  <p className="text-sm">5 Reviews</p>
                </div>
              </div>
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Products;
