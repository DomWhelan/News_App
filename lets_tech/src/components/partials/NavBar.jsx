import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const homeIcon = <FontAwesomeIcon icon={faHome} />;
  const menuIcon = <FontAwesomeIcon icon={faBars} />;
  return (
    <div className="App-header">
      <Link to="/" className="Header-icon">
        {homeIcon}
      </Link>
      <span>{"Lets Tech"}</span>
      <Link to="" className="Header-icon">
        {menuIcon}
      </Link>
    </div>
  );
}
