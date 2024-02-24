import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { IP_ADDRS } from "../../Service/Constant";
import "./UpdateCustomer.css";
import UpdateBasic from "./UpdateBasic";
import UpdateAddress from "./UpdateAddress";
import UpdateProfilePicture from "./UpdateProfilePicture";
import ChangePassword from "./ChangePassword";
import axios from "axios";

function UpdateCustomer() {
  const [customer, setCustomer] = useState({
    firstName: "",
    email: "",
    lastName: "",
    id: "",
    jwt: "",
  });

  const [loggedIn, setLoggedIn] = useState(true);
  const [currentPage, setCurrentPage] = useState(<UpdateBasic />);
  const navigate = useNavigate();

  useEffect(() => {
    let cust = JSON.parse(sessionStorage.getItem("customer"));
    if (cust == null) {
      swal("Not Authorized", "", "error");
    } else {
      axios
        .get(`${IP_ADDRS}/customers/${cust.id}`, {
          headers: { Authorization: `Bearer ${cust.jwt}` },
        })
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
          swal("Something went Wrong", `${err}`, "error");
        });
    }
  }, []);

  const handlePageChange = (pageComponent) => {
    setCurrentPage(pageComponent);
  };

  return (
    <div className="update-customer-wrapper">
      {loggedIn ? (
        <>
          <div className="profile-menu-container">
            <div className="profile">
              <img
                className="profile-image"
                src={`${IP_ADDRS}/customers/${customer.id}/profileImage`}
                alt="Profile"
              />
              <h4>
                Welcome,{" "}
                <strong>
                  {customer.firstName} {customer.lastName}
                </strong>
              </h4>
            </div>
            <div className="menu">
              <button onClick={() => handlePageChange(<UpdateBasic />)}>
                Update Basic Details
              </button>
              <button onClick={() => handlePageChange(<UpdateAddress />)}>
                Edit Address
              </button>
              <button
                onClick={() => handlePageChange(<UpdateProfilePicture />)}
              >
                Upload Profile Picture
              </button>
              <button onClick={() => handlePageChange(<ChangePassword />)}>
                Change Password
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="login-message">
          <h1>Please Log in to Access this page</h1>
        </div>
      )}
      <div className="main-content">{currentPage}</div>
    </div>
  );
}

export default UpdateCustomer;
