import "./App.css";
import Hero from "./components/Hero";
import Ingredients from "./components/Ingredients";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products />
      <div className="px-5">
        <Ingredients />
      </div>
    </div>
  );
}

export default App;
