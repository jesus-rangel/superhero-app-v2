import React from "react";
import HeroSearchForm from "./HeroSearchForm";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleViewTeam = (e) => {
    e.preventDefault();
    dispatch({ type: "VIEW_TEAM" });
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container fluid d-flex justify-content-around">
        <a className="navbar-brand" href="/" onClick={handleViewTeam}>
          SuperTeam Creator
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/" onClick={handleViewTeam}>
                My Team
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Logout
              </a>
            </li> */}
          </ul>
          <HeroSearchForm />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
