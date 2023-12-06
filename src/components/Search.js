import React from "react";
import { useOutletContext } from "react-router-dom";

function Search(){
    const {handleSearch, setSortName} = useOutletContext();

    return (
        <>
        <div>
        <h2 htmlFor="search" className="headerSpace"></h2>
        <input
            type="text"
            id="search"
            placeholder="Search..."
            style={{fontFamily: "League Spartan", 
                    width: "300px", 
                    height: "40px",
                    borderRadius: "5px" }}
            onChange={handleSearch}
        />
        <button 
            style={{ marginLeft: "10px", cursor:"pointer" }}
            onClick={() => setSortName("name")}
        >Sort</button>
        </div>
        </>
    )    
}

export default Search;