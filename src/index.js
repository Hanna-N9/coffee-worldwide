import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import "./index.css";

import HomePage from "./components/HomePage";
import CoffeeList from "./components/CoffeeList";
import NewCoffeeForm from "./components/NewCoffeeForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/coffeelist",
    element: <CoffeeList />
  },
  {
    path: "/form",
    element: <NewCoffeeForm />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
