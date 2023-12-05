import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";

function App() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/coffee")
      .then(res => res.json())
      .then(data => setCoffees(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Outlet context={[coffees]} />
    </div>
  );
}

export default App;
