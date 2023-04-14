import React from "react";
import {
  BsFilter,
  BsChevronDown,
  BsStarFill,
  BsStarHalf,
} from "react-icons/bs";
import Navbar from "../Navbar";
import Acid from "../../images/other/acid.webp";
function ProductPage() {
  return (
    <div className="Container">
      <div className="nav">
        <Navbar />
        <div className="bg-gwite pb-4 text-center">
          <h1 className="text-2xl text-guap">BEST SELLERS</h1>
        </div>
      </div>
      <div className="products p-5">
        <div className="buttons flex justify-between p-2">
          <button className="px-24 py-1 border border-guap flex hover:bg-guap hover:text-white">
            <BsFilter className="my-auto mr-2" />
            FILTER
          </button>
          <button className="px-24 py-1 border border-guap flex hover:bg-guap hover:text-white">
            <BsChevronDown className="my-auto mr-2" />
            Sort by
          </button>
        </div>
        <div className="item-list grid grid-cols-2">
          <div className="item flex flex-col p-2 relative">
            <img src={Acid} className="bg-gwite cursor-pointer" />
            <h3 className="font-bold text-lg">Header</h3>
            <p className="text-sm">$10.99</p>
            <button className="border border-guap text-center text-guap hover:opacity-50 hover:transition-opacity">
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
            <span className="absolute top-0 left-0 bg-guap p-1 ml-2 mt-2 text-white text-sm ">
              BESTSELLER
            </span>
          </div>
          <div className="item flex flex-col p-2">
            <img src={Acid} className="bg-gwite" />
            <h3>Header</h3>
            <p>Price</p>
            <button className="flex">Add to bag</button>
            <span>Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
