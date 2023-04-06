import "./App.css";
import Hero from "./components/Hero";
import Ingredients from "./components/Ingredients";
import Navbar from "./components/Navbar";
import Bests from "./components/Bests";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Bests />
      <div className="px-5">
        <Ingredients />
      </div>
      <Products />
    </div>
  );
}

export default App;
