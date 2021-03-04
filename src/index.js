import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import store from "./store";
import { Provider } from "react-redux";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
