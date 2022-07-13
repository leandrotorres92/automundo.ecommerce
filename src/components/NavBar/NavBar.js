import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget.js";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <li className="logoMenu">Automundo</li>
        <ul className="containerLista">
          <li className="navbarContainer_type">
            <Link className="navbarLink" to="/">ALL CARS</Link>
            <Link className="navbarLink" to="/type/SUV">SUV</Link>
            <Link className="navbarLink" to="/type/Hatchback">HATCHBACK</Link>
            <Link className="navbarLink" to="/type/Sedan">SEDAN</Link>           
          </li>
        </ul>       
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
