import React, { useState } from "react";

function Coffee({ coffee }) {
    const { name, recipeLink, recipe, image, caffeine, roast, originate } = coffee;
    const [isClicked, setAsClicked] = useState(false);

    function handleClick() {
        setAsClicked((isClicked) => !isClicked);
    }

    return (
        <div className="coffee-item">
            <h3>{name}</h3>
            <img
                src={image}
                alt={name}
                onClick={handleClick}
                style={{ height: "75px", width: "75px" }}
            />
            {isClicked && (
                <>
                    <p>{recipeLink}</p>
                    <p>{recipe}</p>
                    <p>{caffeine}</p>
                    <p>{roast}</p>
                    <p>{originate}</p>
                </>
            )}
        </div>
    );
}

export default Coffee;