import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import Header from "../Header/Header";
import LogIn from "../LogIn/LogIn";
import { AuthContext } from "../Contexts/AuthContext";
import { useContext } from "react";




const Navbar = () => {
  const { userType } = useContext(AuthContext);
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <Header />
          </Link>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  Contactanos
                </Link>
              </li>
              {userType === "admin" ?(
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">
                    Admin
                  </Link>
                </li> ): userType === "employee" ? <li className="nav-item">
                  <Link className="nav-link" to="/employee">
                    Empleado
                  </Link>
                </li>: null}
              <div className="navbar-singin-shop">
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">
                    <FaShoppingCart />
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <LogIn />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
