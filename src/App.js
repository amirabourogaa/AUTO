// import { useEffect } from "react";
import "./App.css";
// import $ from "jquery"
// import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Huiles from "./pages/huiles/Huiles";
import Batterie from "./pages/batterie/Batterie";
import ArrowTop from "./components/top arrow/ArrowTop";
import { Routes, Route } from "react-router-dom";
import Accessoires from "./pages/accessoire/Accessoires";
import Liquide from "./pages/liquide/Liquide";

function App() {

    
  return (
    <div >
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/huile" element={<Huiles />} />
        <Route path="/batterie" element={<Batterie titre = "ma nouvelle page" />} />
        <Route path="/accessoires" element={<Accessoires />} />
        <Route path="/liquide" element={<Liquide />} />
      </Routes>


      <ArrowTop/>
    </div>
  );
}

export default App;
