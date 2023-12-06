import { NavLink } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
  
     <nav>
    
      <NavLink id="link" to="/" className="navLink">
        Home
      </NavLink>
      <NavLink id="link" to="/coffee" className="navLink">
        Coffee Drinks
      </NavLink>
      <NavLink id="link" to="/form" className="navLink">
        Add Drink
      </NavLink>
    </nav>
  
  );
}

export default NavBar;
