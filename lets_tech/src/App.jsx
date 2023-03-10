import "./App.css";
import TechArticles from "./services/tech_news_api";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>Lets Tech</span> <br />
        <span>Explore the world of Technology</span>
        <hr />
      </header>
      <main>
        <TechArticles />
      </main>
    </div>
  );
}

export default App;
