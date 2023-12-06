import React from "react";
import Coffee from "./Coffee";
import { useOutletContext } from "react-router-dom";
import Search from "./Search";

function CoffeeList() {
  const {filteredCoffees, setCoffees} = useOutletContext();

  return (
    <div>
      <Search />
      {filteredCoffees.map(coffee => (
        <Coffee key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
}

export default CoffeeList;