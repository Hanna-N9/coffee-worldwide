import React from "react";
import Coffee from "./Coffee";
import { useOutletContext } from "react-router-dom";

function CoffeeList() {
  const {coffees, setCoffees} = useOutletContext();

  return (
    <div className="coffeeCard">
      {coffees.map(coffee => (<><div className="card">
        <Coffee key={coffee.id} coffee={coffee} /> </div>
        </> ))}
      </div>
    
  );
}

export default CoffeeList;