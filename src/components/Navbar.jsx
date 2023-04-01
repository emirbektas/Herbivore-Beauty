import React from "react";
import { FiMenu } from "react-icons/fi";
import { BsBagHeart } from "react-icons/bs";
import Logo from "../images/svg/leaves.svg";
function Navbar() {
  return (
    <div className="flex justify-between p-5 items-center bg-gwite ">
      <div>
        <FiMenu size={25} className="text-guap" />
      </div>
      <div className="flex items-center text-guap text-lg italic">
        Herbivore <img src={Logo} className="w-8 mx-2" alt="" />
        Beauty
      </div>
      <div>
        <BsBagHeart size={25} className="text-guap" />
      </div>
    </div>
  );
}

export default Navbar;
