import React from "react";
import Coffee from "./Coffee";

function CoffeeList( { coffees } ){
    return (
        <div>
            {coffees.map((coffee) => 
                <Coffee 
                    key={coffee.id}
                    coffee={coffee}
                />
            )}
        </div>
    )
}

export default CoffeeList;