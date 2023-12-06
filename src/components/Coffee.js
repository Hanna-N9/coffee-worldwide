import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Coffee({ coffee }) {
  return (
    
    <div>
      <h3>{coffee.name}</h3>
      <div id="card">
        <Link to={`/coffee/${coffee.id}`}>
          <img
            src={coffee.image}
            alt={coffee.name}
            style={{ width: 200, height: 200, borderRadius: "10px" }}
          />
        </Link>
      </div>
    </div>
  );
}

export default Coffee;
