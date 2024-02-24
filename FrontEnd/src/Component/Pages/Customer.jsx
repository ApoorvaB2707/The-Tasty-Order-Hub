import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { IP_ADDRS } from "../../Service/Constant";
import "./Customer.css"; // You can reuse the Admin's CSS or create a separate CustomerSidebar.css

import UpdateCustomer from "./UpdateCustomer";
import CustomerOrderList from "./CustomerOrderList";
import CustomerOngoingList from "./CustomerOngoingList";

function Customer() {
  const [customer, setCustomer] = useState({
    firstName: "",
    email: "",
    lastName: "",
    id: "",
    jwt: "",
  });

  const [loggedIn, setLoggedIn] = useState(true);
  const [currentPage, setCurrentPage] = useState(
    <UpdateCustomer customer={customer} />
  ); // Keeps track of the current page/component

  const navigate = useNavigate();

  useEffect(() => {
    let cust = JSON.parse(sessionStorage.getItem("customer"));
    if (cust == null) {
      swal("Not Authorized", "", "error");
    } else {
      axios
        .get(`${IP_ADDRS}/customers/${cust.id}`)
        .then((res) => {
          console.log(res.data);
          setLoggedIn(true);
          setCustomer({
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            id: cust.id,
            email: res.data.email,
            jwt: cust.jwt,
          });
        })
        .catch((err) => {
          console.log(err);
          swal("Something went Wrong", "", "error");
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
              <img
                src={`${IP_ADDRS}/customers/${customer.id}/profileImage`}
                alt="Customer Avatar"
              />
              <h4 style={{ color: "white", fontSize: "16px" }}>
                Welcome,{" "}
                <strong style={{ color: "white", fontSize: "16px" }}>
                  {" "}
                  {customer.firstName}&nbsp;{customer.lastName}
                </strong>
              </h4>
            </div>
            <div className="menu">
              <button
                onClick={() =>
                  handlePageChange(<UpdateCustomer customer={customer} />)
                }
              >
                Update Profile
              </button>
              <button
                onClick={() =>
                  handlePageChange(<CustomerOrderList customer={customer} />)
                }
              >
                View Orders
              </button>
              <button
                onClick={() =>
                  handlePageChange(<CustomerOngoingList customer={customer} />)
                }
              >
                Current Subscription
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

export default Customer;
