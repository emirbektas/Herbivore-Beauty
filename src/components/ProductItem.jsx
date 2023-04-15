import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Acid from "../images/other/acid.webp";
import Moisturizer from "../images/other/moisturizing.webp";
import Bundle from "../images/other/bundle.webp";
import Cleanser from "../images/other/cleanser.webp";
import Sunscreen from "../images/other/sunscreen.webp";
import Vitamin from "../images/other/vitamin.webp";

function ProductItem(props) {
  const { name, price, image } = props;
  return (
    <div className="item flex flex-col p-2 relative bg-soft rounded-lg hover:scale-105 transition-all">
      <img src={image} className="bg-soft cursor-pointer rounded-t-lg" />
      <h3 className="font-bold text-lg mb-1">{name}</h3>
      <p className="text-sm mb-2">{price}</p>
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
  );
}

export default ProductItem;
