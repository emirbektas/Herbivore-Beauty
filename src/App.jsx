import "./App.css";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Bests from "./components/Bests";
import Products from "./components/Products";
import Ingredients from "./components/Ingredients";
import Footer from "./components/Footer";

function App() {
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

export default App;
