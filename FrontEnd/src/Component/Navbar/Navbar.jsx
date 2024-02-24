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

  return (<div className="w3-top">
  <div className="w3-bar w3-white w3-padding w3-card" style={{ letterSpacing: '4px' }}>
    <NavLink to="/" className="w3-bar-item w3-button w3-black">
      LunchBox
    </NavLink>
    {/* Right-sided navbar links. Hide them on small screens */}
    <div className="w3-right w3-hide-small">
      {loggedIn ? (
        <>
          {cust != null ? (
            <NavLink to="/customer" className="w3-bar-item w3-button">
              <FaUser className="nav-icon" />
              {cust.firstName}
            </NavLink>
          ) : ven != null ? (
            <NavLink to="/vendor" className="w3-bar-item w3-button">
              <FaUser className="nav-icon" />
              {ven.firstName}
            </NavLink>
          ) : adm != null ? (
            <NavLink to="/admin" className="w3-bar-item w3-button">
              <FaUser className="nav-icon" />
              {adm.firstName}
            </NavLink>
          ) : (
            ""
          )}
          <NavLink onClick={logout} to="/" className="w3-bar-item w3-button w3-black">
            <FaSignOutAlt className="w3-black" />
            Logout
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/sign-in" className="w3-bar-item w3-button">
            <FaSignInAlt className="nav-icon" />
            Sign in
          </NavLink>
          <NavLink to="/sign-up" className="w3-bar-item w3-button">
            Sign Up
          </NavLink>
          <NavLink to="/sign-up" className="w3-bar-item w3-button">
            About
          </NavLink>
          <NavLink to="#about" className="nav-link">About
          </NavLink>
      <a href="#menu" className="w3-bar-item w3-button">
        Services
      </a>
      <a href="#contact" className="w3-bar-item w3-button">
        Contact
      </a>
        </>
      )}
      <a href="#about" className="w3-bar-item w3-button">
        About
      </a>
      <a href="#menu" className="w3-bar-item w3-button">
        Services
      </a>
      <a href="#contact" className="w3-bar-item w3-button">
        Contact
      </a>
    </div>
  </div>
</div>

  );
};

export default Navbar;
