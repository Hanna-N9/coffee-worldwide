import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./Header";
import "@fontsource/league-spartan"; // Defaults to weight 400
import "@fontsource/league-spartan/400.css"; // Specify weight

function App() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/coffee")
      .then(res => res.json())
      .then(data => setCoffees(data));
  }, []);

  return (
    <div className="App" style={{ display: 'inline'}}> 
    <Header />
    <NavBar /> 
      <Outlet context={{coffees, setCoffees}} />
    </div>
  );
}

export default App;
