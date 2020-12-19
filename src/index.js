import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "normalize.css";
import { FirebaseContext } from "./context/FirebaseContext";
import { firebase } from "./lib/firebase.prod";
ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
