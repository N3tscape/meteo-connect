import React from "react";
import ReactDOM from "react-dom/client";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import "./index.css";
import App from "./App";
import CurrentWeather from "./components/Weather/CurrentWeather";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CurrentWeather />
  </React.StrictMode>
);

export default App;
