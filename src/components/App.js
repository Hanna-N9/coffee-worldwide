import "../App.css";
import React from "react";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import NewCoffeeForm from "./NewForm";
import Search from "./Search";
import ErrorPage from "./ErrorPage";

function App() {

  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Search />
      <NewCoffeeForm />
      <ErrorPage />
    </div>
  );
}

export default App;