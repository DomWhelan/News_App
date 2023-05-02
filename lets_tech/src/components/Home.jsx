import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homePanel">
        <div className="generalInfo">
          <h1 className="generalHeading1">{"Welcome to Let's Tech"}</h1>
          <h2 className="generalHeading2">{"Get the latest in tech"}</h2>
          <h2 className="generalHeading2">{"Join our community! Get connected!"}</h2>
        </div>
        <div className="">
          <h2>{"Todays Top Story"}</h2>
          <h3>{"Virtual Reality Training Works"}</h3>
          <img src="https://images.unsplash.com/photo-1530825894095-9c184b068fcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" alt="" />
          <div className="centerAlign">
            <Link className="link button" to="/TechNews">{"Tech News"}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
