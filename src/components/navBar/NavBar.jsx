import "./Navbar.css";

import { Link } from "react-router-dom";

import { CartWidget } from "../cartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="container-logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h4 className="logo-navbar">Unleash the Beast!!!</h4>
        </Link>
      </div>
      <ul className="navbar">
        <Link className="navbar-item" to="/">
          Todo
        </Link>
        <Link className="navbar-item" to="/category/protein">
          Proteina
        </Link>
        <Link className="navbar-item" to="/category/glutamine">
          Glutamine
        </Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
