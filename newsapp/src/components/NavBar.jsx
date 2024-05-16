import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsMonkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto align-items-center  mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <Link to="/" className="cat-links2">Home</Link>
              </li>
              <li className="nav-item drop-down">
                <ul className="cat-links">
                  <li>
                    <Link to="/Science">Science</Link>
                  </li>
                  <li>
                    <Link to="/Sports">Sports</Link>
                  </li>
                  <li>
                    <Link to="/Health">Health</Link>
                  </li>
                  <li>
                    <Link to="/Entertainment">Entertainment</Link>
                  </li>
                  <li>
                    <Link to="/Business">Business</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
