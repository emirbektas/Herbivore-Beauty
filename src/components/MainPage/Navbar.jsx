import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { BsBagHeart } from "react-icons/bs";
import Logo from "../../images/svg/leaves.svg";
import { Link } from "react-router-dom";

function Navbar({ count, setCount }) {
  return (
    <div className="flex justify-between p-5 items-center bg-gwite">
      <div>
        <FiMenu size={25} className="text-guap" />
      </div>
      <Link to="/" className="flex items-center text-guap text-lg italic">
        Herbivore <img src={Logo} className="w-8 mx-2" alt="" />
        Beauty
      </Link>
      <Link to="/cart">
        <div className="flex relative">
          <BsBagHeart size={25} className="text-guap" />
          <div className="absolute bottom-3 left-4 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-guap border-2 border-white rounded-full">
            {count}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
