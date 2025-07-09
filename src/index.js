import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Assets/css/style.css";
import "./Assets/css/skin_color.css";
import "./Assets/css/style_rtl.css";
import "./Assets/css/color_theme.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
