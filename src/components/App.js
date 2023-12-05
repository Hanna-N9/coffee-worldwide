import "../App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import NewCoffeeForm from "./NewCoffeeForm";
import Search from "./Search";
import ErrorPage from "./ErrorPage";

function App() {
  const [coffees, setCoffeeBeverages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/coffee")
    .then((res) => res.json())
    .then((data) => setCoffeeBeverages(data))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <HomePage 
        coffees={coffees}
      />
      <Search />
      <NewCoffeeForm />
      <ErrorPage />
    </div>
  );
}

export default App;