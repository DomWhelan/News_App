import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/partials/NavBar";
import TechArticles from "./components/TechNews";
import TeslaArticles from "./components/TeslaNews";

function App() {
  return (
    <Router>
      <main>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/TechNews" element={<TechArticles />}></Route>
            <Route path="/TeslaNews" element={<TeslaArticles />}></Route>
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
