import "./Navbar.css"

import { Link } from "react-router-dom"

import { CartWidget } from "../cartWidget/CartWidget"

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="container-logo">
        <Link to="/" style={{textDecoration: "none"}}>
          <h4 className="logo-navbar">Unleash the beast!!!</h4>
        </Link>
      </div>
      <ul className="navbar">
        <Link className="navbar-item" to="/category/proteina">
          Proteinas
        </Link>
        <Link className="navbar-item" to="/category/creatina">
          Creatina
        </Link>
        <Link className="navbar-item" to="/category/glutamina">
          Glutamina
        </Link>
        <Link className="navbar-item" to="/category/pre-entreno">
          Pre-entreno
        </Link>
        <Link className="navbar-item" to="/category/accesorios">
          Accesorios
        </Link>
        <Link className="navbar-item" to="/category/vitaminas">
          Vitaminas
        </Link>
      </ul>
      <CartWidget />
    </div>
  )
}

export default NavBar
