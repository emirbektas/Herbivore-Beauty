import React from "react";
import {
  BsFilter,
  BsChevronDown,
  BsStarFill,
  BsStarHalf,
} from "react-icons/bs";
import Navbar from "../Navbar";
import Acid from "../../images/other/acid.webp";
import Moisturizer from "../../images/other/moisturizing.webp";
import Bundle from "../../images/other/bundle.webp";
import Cleanser from "../../images/other/cleanser.webp";
import Sunscreen from "../../images/other/sunscreen.webp";
import Vitamin from "../../images/other/vitamin.webp";
import ProductItem from "../ProductItem";
function ProductPage() {
  return (
    <div className="container">
      <div className="nav">
        <Navbar />
        <div className="bg-gwite pb-4 text-center">
          <h1 className="text-2xl text-guap">BEST SELLERS</h1>
        </div>
      </div>
      <div className="products p-5">
        <div className="buttons flex justify-between mb-5 m-2">
          <button className="px-24 py-1 border border-guap flex hover:bg-guap hover:text-white">
            <BsFilter className="my-auto mr-2" />
            FILTER
          </button>
          <button className="px-24 py-1 border border-guap flex hover:bg-guap hover:text-white">
            <BsChevronDown className="my-auto mr-2" />
            Sort by
          </button>
        </div>
        <div className="item-list grid grid-cols-2 gap-5">
          <div className="item flex flex-col p-2 relative bg-soft rounded-lg hover:scale-105 transition-all">
            <img
              src={Moisturizer}
              className="bg-soft cursor-pointer rounded-t-lg"
            />
            <h3 className="font-bold text-lg mb-1">Moisturizer</h3>
            <p className="text-sm mb-2">$15.99</p>
            <button className="border border-guap text-center text-guap mb-2 hover:opacity-50 hover:transition-opacity">
              Add to bag
            </button>
            <span className="flex text-sm cursor-pointer">
              <BsStarFill className="my-auto" />
              <BsStarFill className="my-auto" />
              <BsStarFill className="my-auto" />
              <BsStarFill className="my-auto" />
              <BsStarHalf className="my-auto mr-1" />
              60 Reviews
            </span>
            <span className="absolute top-0 left-0 bg-guap p-1 text-white text-sm rounded-tl-lg">
              BESTSELLER
            </span>
          </div>
          <div className="item flex flex-col p-2 relative bg-soft rounded-lg hover:scale-105 transition-all">
            <img
              src={Sunscreen}
              className="bg-soft cursor-pointer rounded-t-lg"
            />
            <h3 className="font-bold text-lg mb-1">Sunscreen</h3>
            <p className="text-sm mb-2">$15.99</p>
            <button className="border border-guap text-center text-guap mb-2 hover:opacity-50 hover:transition-opacity">
              Add to bag
            </button>
            <span className="flex text-sm cursor-pointer">
              <BsStarFill className="my-auto" />
              <BsStarFill className="my-auto" />
              <BsStarFill className="my-auto" />
              <BsStarFill className="my-auto" />
              <BsStarHalf className="my-auto mr-1" />
              60 Reviews
            </span>
            <span className="absolute top-0 left-0 bg-guap p-1 text-white text-sm rounded-tl-lg">
              BESTSELLER
            </span>
          </div>
          <div className="item flex flex-col p-2 relative bg-soft rounded-lg hover:scale-105 transition-all">
            <img src={Acid} className="bg-soft cursor-pointer rounded-t-lg" />
            <h3 className="font-bold text-lg mb-1">Acid</h3>
            <p className="text-sm mb-2">$15.99</p>
            <button className="border border-guap text-center text-guap mb-2 hover:opacity-50 hover:transition-opacity">
              Add to bag
            </button>
            <span className="flex text-sm cursor-pointer">
              <BsStarFill className="my-auto" />
              <BsStarFill className="my-auto" />
              <BsStarFill className="my-auto" />
              <BsStarFill className="my-auto" />
              <BsStarHalf className="my-auto mr-1" />
              60 Reviews
            </span>
            <span className="absolute top-0 left-0 bg-guap p-1 text-white text-sm rounded-tl-lg">
              BESTSELLER
            </span>
          </div>
          <div className="item flex flex-col p-2 relative bg-soft rounded-lg hover:scale-105 transition-all">
            <img
              src={Cleanser}
              className="bg-soft cursor-pointer rounded-t-lg"
            />
            <h3 className="font-bold text-lg mb-1">Cleanser</h3>
            <p className="text-sm mb-2">$15.99</p>
            <button className="border border-guap text-center text-guap mb-2 hover:opacity-50 hover:transition-opacity">
              Add to bag
            </button>
            <span className="flex text-sm cursor-pointer">
              <BsStarFill className="my-auto" />
              <BsStarFill className="my-auto" />
              <BsStarFill className="my-auto" />
              <BsStarFill className="my-auto" />
              <BsStarHalf className="my-auto mr-1" />
              60 Reviews
            </span>
            <span className="absolute top-0 left-0 bg-guap p-1 text-white text-sm rounded-tl-lg">
              BESTSELLER
            </span>
          </div>
          <div className="item flex flex-col p-2 relative bg-soft rounded-lg hover:scale-105 transition-all">
            <img
              src={Vitamin}
              className="bg-soft cursor-pointer rounded-t-lg"
            />
            <h3 className="font-bold text-lg mb-1">Vitamin</h3>
            <p className="text-sm mb-2">$15.99</p>
            <button className="border border-guap text-center text-guap mb-2 hover:opacity-50 hover:transition-opacity">
              Add to bag
            </button>
            <span className="flex text-sm cursor-pointer">
              <BsStarFill className="my-auto" />
              <BsStarFill className="my-auto" />
              <BsStarFill className="my-auto" />
              <BsStarFill className="my-auto" />
              <BsStarHalf className="my-auto mr-1" />
              60 Reviews
            </span>
            <span className="absolute top-0 left-0 bg-guap p-1 text-white text-sm rounded-tl-lg">
              BESTSELLER
            </span>
          </div>
          <div className="item flex flex-col p-2 relative bg-soft rounded-lg hover:scale-105 transition-all">
            <img src={Bundle} className="bg-soft cursor-pointer rounded-t-lg" />
            <h3 className="font-bold text-lg mb-1">Bundle</h3>
            <p className="text-sm mb-2">$49.99</p>
            <button className="border border-guap text-center text-guap mb-2 hover:opacity-50 hover:transition-opacity">
              Add to bag
            </button>
            <span className="flex text-sm cursor-pointer">
              <BsStarFill className="my-auto" />
              <BsStarFill className="my-auto" />
              <BsStarFill className="my-auto" />
              <BsStarFill className="my-auto" />
              <BsStarHalf className="my-auto mr-1" />
              60 Reviews
            </span>
            <span className="absolute top-0 left-0 bg-guap p-1 text-white text-sm rounded-tl-lg">
              SAVE 10$
            </span>
          </div>
        </div>
      </div>
      <ProductItem name={Moisturizer} />
    </div>
  );
}

export default ProductPage;
