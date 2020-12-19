import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FirebaseContext } from "../../context/FirebaseContext";
import "./style.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const { firebase } = useContext(FirebaseContext);

  const history = useHistory();

  const isInvalid = password === "" || email === "";
  const handleSubmit = (e) => {
    e.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/browse");
      })
      .catch((err) => {
        setEmail("");
        setPassword("");
        setError(err.message);
      });
  };
  return (
    <div className="signin">
      <h1 className="signin__title">Sign In</h1>
      {error && <div className="signin__error">{error}</div>}

      <form onSubmit={handleSubmit} className="signin__form">
        <input
          className="form__input"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form__input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          disabled={isInvalid}
          className={`form__button ${isInvalid && "disabled"}`}
        >
          Sign In
        </button>
      </form>
      <p className="signin__text">
        New to netflix?
        <Link className="signin__link" to="/signup">
          Sign up now
        </Link>
      </p>
      <p className="signin__infoText">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        Learn more.
      </p>
    </div>
  );
};

export default Signin;
