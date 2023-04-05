import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homePanel">
        <span className="button"><Link to="/TechNews">{"Explore Tech News"}</Link></span>
        <h2>{"Todays Top Story"}</h2>
        <h3>{"Virtual Reality Training Works"}</h3>
        <img src="https://images.unsplash.com/photo-1530825894095-9c184b068fcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" alt="" />
      </div>
    </div>
  );
}
