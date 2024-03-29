import React, { useState } from "react";
import { BsFilter, BsChevronDown } from "react-icons/bs";
import Navbar from "./MainPage/Navbar";
import Cart from "./Cart";
import Acid from "../images/other/acid.webp";
import Moisturizer from "../images/other/moisturizing.webp";
import Bundle from "../images/other/bundle.webp";
import Cleanser from "../images/other/cleanser.webp";
import Sunscreen from "../images/other/sunscreen.webp";
import Vitamin from "../images/other/vitamin.webp";
import Product from "./Product";
import Footer from "./MainPage/Footer";

function ProductPage() {
  const [count, setCount] = useState(0);

  const products = [
    {
      id: 1,
      image: Moisturizer,
      name: "Moisturizer",
      price: "$15.99",
    },
    {
      id: 2,
      image: Sunscreen,
      name: "Sunscreen",
      price: "$15.99",
    },
    {
      id: 3,
      image: Acid,
      name: "Acid",
      price: "$15.99",
    },
    {
      id: 4,
      image: Cleanser,
      name: "Cleanser",
      price: "$15.99",
    },
    {
      id: 5,
      image: Vitamin,
      name: "Vitamin",
      price: "$15.99",
    },
    {
      id: 6,
      image: Bundle,
      name: "Bundle",
      price: "$49.99",
    },
  ];
  return (
    <div className="lg:px-20 xxl:px-52 bg-cream">
      <Navbar count={count} setCount={setCount} />
      <div className="nav">
        <div className="bg-gwite mb-4 text-center">
          <h1 className="text-2xl text-guap bg-cream">BEST SELLERS</h1>
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

        <div className="item-list grid grid-cols-2 gap-5 xl:grid-cols-3 xl:gap-14">
          {products.map((product) => (
            <Product
              count={count}
              setCount={setCount}
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
