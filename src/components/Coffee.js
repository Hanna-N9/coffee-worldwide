import React, { useState } from "react";

function Coffee( { coffee } ){
    const {id, name, recipeLink, recipe, image, caffeine, roast, originate } = coffee;
    const [isClicked, setAsClicked]= useState(false);

    function handleClick(){
        setAsClicked((isClicked) => !isClicked)
    }

    return (
        <div>
            <h3>{name}</h3>
            <img 
                src={image} 
                alt={name} 
                style={{ width: 200, height: 200 }}
                onClick={handleClick}
            />
            {isClicked ? (
                <>
                <p>{recipeLink}</p>
                <p>{recipe}</p>
                <p>{caffeine}</p>
                <p>{roast}</p>
                <p>{originate}</p>
                </>
            ) : (
                null
            )}
        </div>
    )
}

export default Coffee;