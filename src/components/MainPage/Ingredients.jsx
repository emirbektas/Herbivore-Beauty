import React from "react";
import Plant from "../../images/svg/plant2.svg";
import Fruit from "../../images/svg/fruits.svg";
import Vegetable from "../../images/svg/vegetables.svg";
import Essential from "../../images/svg/essential.svg";
import Native from "../../images/svg/native.svg";
import Botanical from "../../images/svg/botanical.svg";

function Ingredients() {
  return (
    <div className="text-center my-16" id="ingredients">
      <h1 className="font-bold text-guap text-2xl mb-5">OUR INGREDIENTS</h1>
      <div className="grid grid-cols-3 gap-y-10">
        <div className="bg-soft mx-3 py-3">
          <img src={Plant} className="w-16 mx-auto" />
          <h3 className="text-sm text-guap mt-2">Plant Oils</h3>
        </div>
        <div className="bg-soft mx-3 py-3">
          <img src={Fruit} className="w-16 mx-auto" />
          <h3 className="text-sm text-guap mt-2">Fruit</h3>
        </div>
        <div className="bg-soft mx-3 py-3">
          <img src={Vegetable} className="w-16 mx-auto" />
          <h3 className="text-sm text-guap mt-2">Vegetable</h3>
        </div>
        <div className="bg-soft mx-3 py-3">
          <img src={Essential} className="w-16 mx-auto" />
          <h3 className="text-sm text-guap mt-2">Essential Oils</h3>
        </div>
        <div className="bg-soft mx-3 py-3">
          <img src={Native} className="w-16 mx-auto" />
          <h3 className="text-sm text-guap mt-2">Natives</h3>
        </div>
        <div className="bg-soft mx-3 py-3">
          <img src={Botanical} className="w-16 mx-auto" />
          <h3 className="text-sm text-guap mt-2">Botanicals</h3>
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
