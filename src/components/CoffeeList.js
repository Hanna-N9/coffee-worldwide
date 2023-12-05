import React, { useEffect, useState } from "react";
import Coffee from "./Coffee";
import NavBar from "./NavBar";
import Search from "./Search";
import NewCoffeeForm from "./NewCoffeeForm";
import { Grid } from 'semantic-ui-react';

function CoffeeList() {
    const [coffees, setCoffeeBeverages] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3001/coffee")
      .then((res) => res.json())
      .then((data) => setCoffeeBeverages(data))
    }, [])

    return (
        <>
        <Search />
        <NewCoffeeForm />
        <Grid columns={5} doubling stackable>
            {coffees.map((coffee) => (
                <Grid.Column key={coffee.id}>
                    <Coffee coffee={coffee} />
                </Grid.Column>
            ))}
        </Grid>
        </>
    );
}

export default CoffeeList;