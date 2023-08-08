import React from "react";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <h3>Ecommerce</h3>
      <ul>
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <Link to={"/store"}>Store</Link>
        </li>
        <li> 
          <Link to={"/store/vege"}>Vegetables</Link>
        </li> 
        <li>
          <Link to={"/store/fruit"}>Fruits</Link>
        </li> 
        <li>
          <Link to={"/store/nut"}>Nuts</Link>
        </li> 
        <li>
          <Link to={"/about"}>About Us</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;