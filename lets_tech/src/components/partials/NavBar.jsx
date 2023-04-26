import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";
import Popup from 'reactjs-popup';

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
        <Popup 
        trigger={<div className="headerIcon hamburger"> {menuIcon}</div>} 
        position="middle top"
        on="hover"
        mouseLeaveDelay={300}
        mouseEnterDelay={5}
        arrow={false}
        >
          <div>
            <ul className="menuDropdownList">
              <li className="menuDropdownItem link"><Link className="link" to={"/TechNews"}>{"Tech Crunch"}</Link></li>
              <li className="menuDropdownItem link"><Link className="link" to={"/TeslaNews"}>{"Tesla"}</Link></li>
              <li className="menuDropdownItem link"><Link className="link" to={"/AppleNews"}>{"Apple"}</Link></li>
              <li className="menuDropdownItem link"><Link className="link" to={"/TechNews"}>{"Tech News"}</Link></li>
            </ul>
          </div>
        </Popup>
      </div>
    </div>
  );
}
