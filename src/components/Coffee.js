import React, { useState } from "react";
import "../App.css";

function Coffee({ coffee }) {
  const [isClicked, setAsClicked] = useState(false);

  function handleClick() {
    setAsClicked(isClicked => !isClicked);
  }

  return (
      <div>
      <h3 className="headerSpace">{coffee.name}</h3>
      <img className="cardImg"
        src={coffee.image}
        alt={coffee.name}
        style={{ width: 200, height: 200 }}
        onClick={handleClick}
      />
      {isClicked ? (
        <>
          <p>{coffee.recipeLink}</p>
          <p>{coffee.recipe}</p>
          <p>{coffee.caffeine}</p>
          <p>{coffee.roast}</p>
          <p>{coffee.originate}</p>
        </>
      ) : null}
      </div>
  );
}

export default Coffee;
