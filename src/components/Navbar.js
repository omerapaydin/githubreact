import React, { useContext } from "react"; // useContext ekledik
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { ThemeContext } from "../contexts/ThemeContext";

function Navbar() {
  const { color } = useContext(ThemeContext);
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-${color}`}>
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
