import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./Header";
import "@fontsource/league-spartan"; // Defaults to weight 400
import "@fontsource/league-spartan/400.css"; // Specify weight

function App() {
  const [coffees, setCoffees] = useState([]);
  const [search, setSearch] = useState("");
  const [sortName, setSortName] = useState("");

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

  if(sortName === "name"){
    filteredCoffees.sort((a, b) =>
    a.name.localeCompare(b.name))
  }

  function handleDelete(id){
		const updatedCoffees = coffees.filter((drink) => drink.id != id)
		setCoffees(updatedCoffees)
	}

  return (
    <div className="App" style={{ display: 'inline'}}> 
    <Header />
    <NavBar /> 
      <Outlet 
        context=
        {{coffees, 
          filteredCoffees, 
          setCoffees, 
          handleSearch,
          sortName,
          setSortName,
          handleDelete
        }} />
    </div>
  );
}

export default App;
