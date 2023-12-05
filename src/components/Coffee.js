import React, { useState } from "react";

function Coffee({ coffee }) {
  const [isClicked, setAsClicked] = useState(false);

  function handleClick() {
    setAsClicked(isClicked => !isClicked);
  }

  return (
    <div>
      <h3>{coffee.name}</h3>
      <img
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
