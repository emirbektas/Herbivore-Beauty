import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { BsBagHeart } from "react-icons/bs";
import Logo from "../../images/svg/leaves.svg";
import { Link } from "react-scroll";
import useWindowSize from "../Hook/useWindowSize";
import { useNavigate } from "react-router-dom";

function Navbar({ count }) {
  const size = useWindowSize();
  let navigateTo = useNavigate();

  const handleClick = () => {
    navigateTo("/");
  };
  return (
    <div className="grid grid-cols-3 items-center bg-cream p-5">
      <div className="basis-1/3">
        <div>
          <FiMenu size={25} className="text-guap lg:hidden" />
        </div>
        {size.width > 1024 && (
          <div>
            <ul className="flex gap-5">
              <li>
                <Link
                  to="ingredients"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={500}
                  className="hover:cursor-pointer hover:text-guap hover:text-lg transition-all duration-300"
                >
                  Ingredients
                </Link>
              </li>
              <li>
                <Link
                  to="products"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={500}
                  className="hover:cursor-pointer hover:text-guap hover:text-lg transition-all duration-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="faq"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={500}
                  className="hover:cursor-pointer hover:text-guap hover:text-lg transition-all duration-300"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="basis-1/3 justify-self-center">
        <Link
          to="/"
          className="flex items-center text-guap text-lg italic hover:cursor-pointer"
          onClick={handleClick}
        >
          Herbivore <img src={Logo} className="w-8 mx-2" alt="" />
          Beauty
        </Link>
      </div>
      <div className="basis-1/3 justify-self-end">
        <Link to="/cart">
          <div className="flex relative">
            <BsBagHeart size={25} className="text-guap" />
            <div className="absolute bottom-3 left-4 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-guap border-2 border-white rounded-full">
              {count}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
