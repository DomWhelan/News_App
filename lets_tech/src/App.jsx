import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/partials/NavBar";
import TechArticles from "./services/tech_news_api";

function App() {
  return (
    <Router>
      <main>
        <NavBar />
        <body>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/TechNews" element={<TechArticles />}></Route>
          </Routes>
        </body>
      </main>
    </Router>
  );
}

export default App;
