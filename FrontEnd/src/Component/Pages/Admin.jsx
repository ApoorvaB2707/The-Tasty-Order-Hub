import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { IP_ADDRS } from "./../../Service/Constant";
import "./Admin.css";
import Avatar from "./images/admin.png";
import ApprovedVendorList from "./ApprovedVendorList";
import CustomerList from "./CustomerList";
import UnApprovedVendorList from "./UnApprovedVendorList";
import BlockedVendorList from "./BlockedVendorList";

function Admin() {
  const [admin, setAdmin] = useState({
    email: "",
    id: "",
    jwt: "",
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState(<CustomerList />); // Keeps track of the current page/component
  const navigate = useNavigate();

  useEffect(() => {
    let adm = JSON.parse(sessionStorage.getItem("admin"));
    if (adm == null) {
      swal("Not Authorized", "", "error");
    } else {
      setLoggedIn(true);
      setAdmin({
        id: adm.id,
        email: adm.email,
        jwt: adm.jwt,
      });
    }
  }, []);

  const handlePageChange = (pageComponent) => {
    setCurrentPage(pageComponent);
  };

  return (
    <div className="admin-wrapper">
      <div className="sidebar">
        {loggedIn ? (
          <>
            <div className="profile">
              <img src={Avatar} alt="Admin Avatar" />
              <h4 style={{ color: "white" }}>
                Welcome,{" "}
                <strong style={{ color: "white" }}>{admin.email}</strong>
              </h4>
            </div>
            <div className="menu">
              <button onClick={() => handlePageChange(<ApprovedVendorList />)}>
                Approved Vendors
              </button>
              <button onClick={() => handlePageChange(<CustomerList />)}>
                All Customers
              </button>
              <button
                onClick={() => handlePageChange(<UnApprovedVendorList />)}
              >
                Unapproved Vendors
              </button>
              <button onClick={() => handlePageChange(<BlockedVendorList />)}>
                Blocked Vendors
              </button>
            </div>
          </>
        ) : (
          <div className="error-message">
            <h1>Please Log in to Access this page</h1>
          </div>
        )}
      </div>
      <div className="main-content">{currentPage}</div>
    </div>
  );
}

export default Admin;
