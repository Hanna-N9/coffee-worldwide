import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Coffee({ coffee }) {

  return (
    <div>
      <h3 id="cardTitle">{coffee.name}</h3>
      <div id="card">
        <Link to={`/coffee/${coffee.id}`}>
          <img src={coffee.image} alt={coffee.name} className="coffee-image" />
        </Link>
      </div>
    </div>
  );
  
}

export default Coffee;
