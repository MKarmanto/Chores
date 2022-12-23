import React from "react";
import { Link } from "react-router-dom";

//This component renders a navbar with links to the different pages.
function Navbar() {
  return (
    <nav>
      <ul>
        <li className="nav-item">
          <Link to="/">Info</Link>
        </li>
        <li className="nav-item">
          <Link to="/Chores">Chores</Link>
        </li>
        <li className="nav-item">
          <Link to="/Counter">Counter</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
