import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar_main container-fluid">
        <div className="container navbar-col gx-0">
          <NavLink className="" to="/">
            <h2>Faisal Nazir</h2>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto nav_ul" id="navbar">
              <li className="nav-item">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/skills"> Skills</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services"> Services</NavLink>
              </li>{" "}
              <li className="nav-item">
                <NavLink to="/portfolio">Project Work</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/experience"> Experience</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
