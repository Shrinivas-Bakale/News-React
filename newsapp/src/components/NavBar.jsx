import React from "react";
import PropTypes from "prop-types";

function NavBar({ handleSendLink }) {
  const categories = [
    { name: "Business", link: "/business" },
    { name: "Entertainment", link: "/entertainment" },
    { name: "Health", link: "/health" },
    { name: "Science", link: "/science" },
    { name: "Sports", link: "/sports" },
  ];

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            NewsMonkey
          </a>
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
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto align-items-center  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item drop-down">
                <a href="" className="cat-drop">
                  Categories
                </a>
                <div className="drop-items">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => handleSendLink(category.name)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  handleSendLink: PropTypes.func.isRequired,
};

export default NavBar;
