import React from "react";
import { Link } from "gatsby";
import logo from "../static/images/logo.png";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand navbar-dark">
        <Link to="/">
          <img src={logo} width="100" alt="company name" />
        </Link>
        <div className="navbar-collapse  justify-content-center collapse">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#projects">
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
