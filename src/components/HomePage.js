import React, { useEffect, useState } from "react";
import CoffeeList from "./CoffeeList";
import logo from "./logo.png";
import NavBar from "./NavBar";
import NewCoffeeForm from "./NewCoffeeForm";
import Search from "./Search";
import ErrorPage from "./ErrorPage";

import 'semantic-ui-css/semantic.min.css';

function HomePage(){
  
    return (
      <div className="App">
        <NavBar />
        <img src={logo} alt="logo"/>
      </div>
    );
  }

export default HomePage;