import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cupcake from "./pages/menuPages/Cupcake";
import Biryani from "./pages/menuPages/Biryani";
import Noodles from "./pages/menuPages/Noodles";
import Pancakes from "./pages/menuPages/Pancakes";
import Burger from "./pages/menuPages/Burger";
import MangoJuice from "./pages/menuPages/MangoJuice";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cupcake" element={<Cupcake />} />
          <Route path="/burger" element={<Burger />} />
          <Route path="/biryani" element={<Biryani />} />
          <Route path="/noodles" element={<Noodles />} />
          <Route path="/mangojuice" element={<MangoJuice />} />
          <Route path="/pancakes" element={<Pancakes />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
