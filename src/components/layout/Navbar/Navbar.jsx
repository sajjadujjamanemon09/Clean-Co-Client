import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
                          {/* Navbar menu content here */}
                          <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "btn btn-sm btn-primary" : "btn btn-sm btn-ghost"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "btn btn-sm btn-primary" : "btn btn-sm btn-ghost"
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "btn btn-sm btn-primary" : "btn btn-sm btn-ghost"
                }
              >
                Login
              </NavLink>
        </div>
    );
};

export default Navbar;