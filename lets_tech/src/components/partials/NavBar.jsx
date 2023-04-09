import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const homeIcon = <FontAwesomeIcon icon={faHome} />;
  const menuIcon = <FontAwesomeIcon icon={faBars} />;
  return (
    <div className="headerContainer">
      <div className="header">
        <Link to="/" className="headerIcon">
          {homeIcon}
        </Link>
        <span>{"Lets Tech"}</span>
        <Link to="" className="headerIcon">
          {menuIcon}
        </Link>
      </div>
    </div>
  );
}
