import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";

import "./header.style.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <Logo className="logo" />
        </Link>
      </div>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="contact" className="option">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
