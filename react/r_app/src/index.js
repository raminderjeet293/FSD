import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Btn from "./Components/Button/Button";
// import App from './App';Y
import reportWebVitals from "./reportWebVitals";
import TextBox from "./Components/TextBox/TextBox";
import { StatefulComponent } from "./Components/StatefulComponent";
import { Light } from "./Components/light";
import { Counter } from "./Components/Counter";
import Colour from "./Components/Colour/Colour";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Btn style="login" text="Login" />
    <br></br>
    <Btn style="confirm" text="Confffirm" />
    <br></br>
    <Btn style="delete" text="Delete" />
    <br></br>
    <TextBox />
    <StatefulComponent />
    <Light />
    <Counter />
    <Colour />
  </React.StrictMode>
);
// const nm = "MCA Sec A";
// const r_e = ["props", "element", "states", "components"];
// const ele = React.createElement("h1", {}, "hello" + r_e + nm);

// root.render(ele);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
