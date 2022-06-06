import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
//* import packages and dependencies
import "bootstrap/dist/css/bootstrap.min.css"; // react bootstrap library

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
