import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Afchamber from "./components/Chamber_datea_aficher";
import Contact_us from "./components/contactus/Contact_us";
import Login from "./components/account/Login";
import Signup from "./components/account/signup";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Afchamber",
    element: <Afchamber />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
  {
    path: "/Contact_us",
    element: <Contact_us />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/creataccount",
    element: <Signup />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
