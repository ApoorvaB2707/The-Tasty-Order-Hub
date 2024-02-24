import React, { useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./navbar.css";

const CustomNavbar = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cust, setCust] = useState(null);
  const [ven, setVen] = useState(null);
  const [adm, setAdm] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setLoggedIn(props.signIn);
    setCust(JSON.parse(sessionStorage.getItem("customer")));
    setVen(JSON.parse(sessionStorage.getItem("vendor")));
    setAdm(JSON.parse(sessionStorage.getItem("admin")));
  }, [props.signIn]);

  const logout = () => {
    sessionStorage.clear();
    props.signOut(false);
    navigate("/");
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/" style={{ marginLeft: 100 }}>
          LunchBox
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="row custom-navbar"
        >
          <div className="d-flex justify-content-end">
            <Nav className="ml-auto justify-content-space-evenly">
              {loggedIn ? (
                <>
                  {cust ? (
                    <NavDropdown
                      title={cust.firstName}
                      id="basic-nav-dropdown"
                      style={{ marginRight: 100 }}
                    >
                      <NavDropdown.Item href="/customer">
                        Profile
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={logout}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : ven ? (
                    <NavDropdown
                      title={ven.firstName}
                      id="basic-nav-dropdown"
                      style={{ marginRight: 100 }}
                    >
                      <NavDropdown.Item href="/vendor">
                        Profile
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={logout}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : adm ? (
                    <NavDropdown
                      title={adm.firstName}
                      id="basic-nav-dropdown"
                      style={{ marginRight: 100 }}
                    >
                      <NavDropdown.Item href="/admin">Profile</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={logout}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : null}
                </>
              ) : (
                <>
                  <div
                    className="d-flex justify-content-space-evenly"
                    style={{ marginRight: 100 }}
                  >
                    <Nav.Link href="/sign-in">Sign in</Nav.Link>
                    <Nav.Link href="/sign-up">Sign Up</Nav.Link>
                    <Nav.Link href="/Home#about">About</Nav.Link>
                    <Nav.Link href="/Home#menu">Services</Nav.Link>
                    <Nav.Link href="/Home#contact">Contact</Nav.Link>
                  </div>
                </>
              )}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
