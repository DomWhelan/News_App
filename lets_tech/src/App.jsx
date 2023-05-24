import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/partials/NavBar";
// import TechArticles from "./components/TechNews";
import Articles from "./components/Articles";
// import TeslaArticles from "./components/TeslaNews";
// import AppleArticles from "./components/AppleNews";

function App() {

  const teslaAPI = "https://newsapi.org/v2/everything?q=tesla&from=2023-04-02&sortBy=publishedAt&apiKey=c6501b7d86434b21b8e5fead22ba0d3f";
  const techcrunchAPI = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c6501b7d86434b21b8e5fead22ba0d3f";
  const appleAPI = "https://newsapi.org/v2/everything?q=apple&from=2023-04-25&to=2023-04-25&sortBy=popularity&apiKey=c6501b7d86434b21b8e5fead22ba0d3f";
  
  return (
    <Router>
      <main>
        <NavBar />
        <div className="appBody">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/TechNews" element={<Articles link={techcrunchAPI} />}></Route>
            <Route path="/TeslaNews" element={<Articles link={teslaAPI} />}></Route>
            <Route path="/AppleNews" element={<Articles link={appleAPI} />}></Route>
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
