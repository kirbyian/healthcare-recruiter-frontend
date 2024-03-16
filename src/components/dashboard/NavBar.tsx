import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {


  return (
    <nav className="navbar navbar-expand-lg main-color ">
      <div className="container-fluid main-color">
        <a className="navbar-brand nav-link-custom" href="/">
          Home
        </a>
        <button
          className="navbar-toggler nav-toggle"
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link nav-link-custom"
                aria-current="page"
                to="/archived"
              >
                Archived Jobs
              </NavLink>
            </li>
           
          </ul>
        
        </div>
      </div>
    </nav>
  );
};
