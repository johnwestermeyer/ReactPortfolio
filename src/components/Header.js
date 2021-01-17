import React from "react";
import {useLocation, Link} from "react-router-dom";

function Header() {
  
  const location = useLocation();

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">John Westermeyer</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
          <ul className="navbar-nav ">
          <li className="nav-item">
          <Link className={location.pathname === "/" ? "nav-link active" : "nav-link"} to='/'>
          Home
          </Link>
          </li>
          <li className="nav-item">
          <Link className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"} to='/portfolio'>
          Portfolio
          </Link>
          </li>
          <li className="nav-item">
          <Link className={location.pathname === "/contact" ? "nav-link active" : "nav-link"} to='/contact'>
          Contact
          </Link>
          </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;