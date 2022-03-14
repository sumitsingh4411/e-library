import React from "react";
import { Link } from "react-router-dom";
import { UrlPath } from "../../utils/constatnt";
import "./Header.scss";
function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <Link to={UrlPath.Home}> E-Library</Link>
      </div>
    </div>
  );
}

export default Header;
