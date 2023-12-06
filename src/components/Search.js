import React from "react";
import { useOutletContext } from "react-router-dom";

function Search(){
    const {handleSearch} = useOutletContext();

    return (
        <div>
        <h3 htmlFor="search" id="searchbar" className="headerSpace">Coffee Drinks:</h3>
        <input
            type="text"
            id="search"
            placeholder="Search..."
            style={{ fontFamily: "League Spartan" }}
            onChange={handleSearch}
        />
        </div>
    )    
}

export default Search;