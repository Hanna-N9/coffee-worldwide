import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import "@fontsource/league-spartan"; // Defaults to weight 400
import "@fontsource/league-spartan/400.css"; // Specify weight

function App() {
  const [coffees, setCoffees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/coffee")
      .then(res => res.json())
      .then(data => setCoffees(data));
  }, []);

  function handleSearch(e){
    setSearch(e.target.value)
  }

  const filteredCoffees = coffees.filter((c) => 
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Outlet context={{filteredCoffees, setCoffees, handleSearch}} />
    </div>
  );
}

export default App;
