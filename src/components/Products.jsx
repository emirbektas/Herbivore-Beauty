import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Serum from "../images/other/car1.jpg";
import Cleanser from "../images/other/car2.jpg";
import Sunscreen from "../images/other/car3.jpg";
import Tonic from "../images/other/car4.jpg";
import Bundle from "../images/other/car5.jpg";

function Products() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.75,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="text-center p-6">
          <a href="">
            <div className="text-left">
              <img src={Serum} />
              <h1>Serum</h1>
              <p>$15.99</p>
              <p>5 Reviews</p>
            </div>
          </a>
        </div>
        <div className="text-center p-6">
          <a href="">
            <div className="text-left">
              <img src={Cleanser} />
              <h1>Cleanser</h1>
              <p>$15.99</p>
              <p>5 Reviews</p>
            </div>
          </a>
        </div>
        <div className="text-center p-6">
          <a href="">
            <div className="text-left">
              <img src={Sunscreen} />
              <h1>Sunscreen</h1>
              <p>$15.99</p>
              <p>5 Reviews</p>
            </div>
          </a>
        </div>
        <div className="text-center p-6">
          <a href="">
            <div className="text-left">
              <img src={Tonic} />
              <h1>Tonic</h1>
              <p>$15.99</p>
              <p>5 Reviews</p>
            </div>
          </a>
        </div>
        <div className="text-center p-6">
          <a href="">
            <div className="text-left">
              <img src={Bundle} />
              <h1>Bundle</h1>
              <p>$15.99</p>
              <p>5 Reviews</p>
            </div>
          </a>
        </div>
      </Slider>
    </div>
  );
}

export default Products;
