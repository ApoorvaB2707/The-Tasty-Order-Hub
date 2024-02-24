import React, { useEffect } from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElement";
import { useState } from "react";
import { FaUser, FaSignInAlt, FaSignOutAlt } from "react-icons/fa"; // Import icons

const Navbar = (props) => {
  const [loggedIn, setLoggedIn] = useState(false); // Default to false
  const [cust, setCust] = useState();
  const [ven, setVen] = useState();
  const [adm, setAdm] = useState();

  useEffect(() => {
    setLoggedIn(props.signIn);
    setCust(JSON.parse(sessionStorage.getItem("customer")));
    setVen(JSON.parse(sessionStorage.getItem("vendor")));
    setAdm(JSON.parse(sessionStorage.getItem("admin")));
  }, [props.signIn]);

  const logout = () => {
    sessionStorage.clear();
    props.signOut(false);
  };

  return (
    <>
     {/* Navbar (sit on top) */}
  <div className="w3-top">
  <div
    className="w3-bar w3-white w3-padding w3-card"
    style={{ letterSpacing: 4 }}
  >
   
    <NavLink to="/">
    <span className="w3-bar-item w3-button">Online Ordering and Food Delivery</span>
  </NavLink>
    {/* Right-sided navbar links. Hide them on small screens */}
    <div className="w3-right w3-hide-small">
      <a href="#about" className="w3-bar-item w3-button">
        About
      </a>
      <a href="#menu" className="w3-bar-item w3-button">
        Menu
      </a>
      <a href="#contact" className="w3-bar-item w3-button">
        Contact
      </a>
    </div>
  </div>
</div>
</>
  );
};

export default Navbar;
