import React from "react";
import Header from "./Header";
import CoffeeList from "./CoffeeList";

function HomePage( { coffees } ){
    return (
        <div>
            <Header />
            <CoffeeList 
                coffees={coffees}
            />
        </div>
    )
}

export default HomePage;