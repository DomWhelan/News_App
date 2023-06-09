import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/partials/NavBar";
import Articles from "./components/Articles";

function App() {

  window.DEBUG = false;

  const teslaAPI = "https://newsapi.org/v2/everything?q=tesla&from=2023-05-09&sortBy=publishedAt&apiKey=c6501b7d86434b21b8e5fead22ba0d3f";
  const techcrunchAPI = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c6501b7d86434b21b8e5fead22ba0d3f";
  const appleAPI = "https://newsapi.org/v2/everything?q=apple&from=2023-06-08&to=2023-06-08&sortBy=popularity&apiKey=c6501b7d86434b21b8e5fead22ba0d3f";

  return (
    <Router>
      <main>
        <NavBar />
        <div className="appBody">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/TechNews" element={<Articles link={techcrunchAPI} />} ></Route>
            <Route path="/TeslaNews" element={<Articles link={teslaAPI} />}></Route>
            <Route path="/AppleNews" element={<Articles link={appleAPI} />}></Route>
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
