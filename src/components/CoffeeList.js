import React from "react";
import Coffee from "./Coffee";
import { useOutletContext } from "react-router-dom";
import Search from "./Search";

function CoffeeList() {
  const { filteredCoffees } = useOutletContext();

  return (
    <>
    <Search />
    <div className="coffeeCard">
      {filteredCoffees.map(coffee => (
      <>
        <div className="card">
          <Coffee key={coffee.id} coffee={coffee} /> 
        </div>
      </> 
      ))}
      </div>
      </>
  );
}

export default CoffeeList;
