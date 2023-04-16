import Hero from "./Hero";
import Info from "./Info";
import Navbar from "./Navbar";
import Bests from "./Bests";
import Products from "./Products";
import Ingredients from "./Ingredients";
import Footer from "./Footer";

import React from "react";

function HomePage() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Bests />
      <div className="px-5">
        <Info />
      </div>
      <Products />
      <Ingredients />
      <Footer />
    </div>
  );
}

export default HomePage;
