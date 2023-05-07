import "./App.css";
import ProductPage from "./components/ProductPage";
import HomePage from "./components/MainPage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
// import ShopContextProvider from "./components/ShopContext";

function App() {
  return (
    <BrowserRouter>
      {/* <ShopContextProvider> */}
      <Routes className="App">
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      {/* </ShopContextProvider> */}
    </BrowserRouter>
  );
}

export default App;
