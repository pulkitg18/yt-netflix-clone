import React from "react";
import { Link } from "react-router-dom";
import { Form } from "..";
import "./style.css";
const Header = ({ show = true, children }) => {
  return (
    <div className="header">
      <div className="header__container">
        <Link to="/">
          <img
            className="header__image"
            src="/images/icons/logo.svg"
            alt="Netflix"
          />
        </Link>
        {show && (
          <Link to="/signin" className="header__btn">
            Sign In
          </Link>
        )}
      </div>
      {show && (
        <div className="header__text">
          <h1 className="header__text__heading">
            Unlimited films, TV programmes and more.
          </h1>
          <h2 className="header__text__subTitle">
            Watch anywhere. Cancel at any time
          </h2>
          <Form />
        </div>
      )}
      {children}
    </div>
  );
};

export default Header;
