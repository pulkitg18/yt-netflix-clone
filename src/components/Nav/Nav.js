import React, { useContext, useEffect, useState } from "react";
import useAuthListener from "../../context/AuthListener";
import { FirebaseContext } from "../../context/FirebaseContext";
import "./style.css";
const Nav = () => {
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);

  const { user } = useAuthListener();
  const { firebase } = useContext(FirebaseContext);
  const showUserTrue = () => {
    setShowUser(true);
  };

  const showUserFalse = () => {
    setShowUser(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const logout = (e) => {
    e.preventDefault();

    return firebase.auth().signOut();
  };
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src="/images/icons/logo.svg" alt="Netflix" />
      <div onMouseEnter={showUserTrue}>
        <img className="nav__avatar" src="/images/users/1.png" alt="Avatar" />

        {showUser && (
          <div onMouseLeave={showUserFalse} className="nav__dropdown">
            <div className="nav__group">
              <img
                className="nav__dropdown__avatar"
                src="/images/users/1.png"
                alt="Avatar"
              />
              <p className="nav__dropdown__text">{user.displayName}</p>
            </div>
            <div className="nav__group">
              <p className="nav__dropdown__logout" onClick={logout}>
                Logout
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
