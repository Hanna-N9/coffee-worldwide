import React, { useEffect, useState } from "react";
import Coffee from "./Coffee";
import { useOutletContext } from "react-router-dom";

function CoffeeList() {
  const [coffees] = useOutletContext();

  return (
    <div>
      {coffees.map(coffee => (
        <Coffee key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
}

export default CoffeeList;