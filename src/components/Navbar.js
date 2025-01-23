import React from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
        <div className="container">
          <Link className="navbar-brand" to="/">
            GitHub
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <SearchBar />
    </div>
  );
}

export default Navbar;
