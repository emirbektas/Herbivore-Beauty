import "./App.css";
import ProductPage from "./components/pages/ProductPage";
import HomePage from "./components/pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes className="App">
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
