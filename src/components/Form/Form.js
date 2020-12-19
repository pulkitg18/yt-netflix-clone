import React from "react";
import "./styles.css";
const Form = () => {
  return (
    <div className="Form">
      <p className="Form__text">
        Ready to watch? Enter your email to create or restart your membership
      </p>
      <div className="Form__wrapper">
        <input className="Form__input" placeholder="Email Address" />
        <button className="Form__button">
          Try It Now
          <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </button>
      </div>
    </div>
  );
};

export default Form;
