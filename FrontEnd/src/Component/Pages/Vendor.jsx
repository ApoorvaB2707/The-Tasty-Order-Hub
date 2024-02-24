import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { IP_ADDRS } from "../../Service/Constant";
import "./Vendor.css";
import UpdateVendor from "./UpdateVendor";
import AddSubscription from "./AddSubscription";
import EditSubscription from "./EditSubscription";
import VendorDisabledSubPlanList from "./VendorDisabledSubPlanList";
import VendorEnabledSubPlanList from "./VendorEnabledSubPlanList";
import VendorSubPlanList from "./VendorSubPlanList";
import VendorSubsList from "./VendorSubsList";

function Vendor() {
  const [vendor, setVendor] = useState({
    firstName: "",
    email: "",
    lastName: "",
    id: "",
    jwt: "",
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState(<UpdateVendor />); // Keeps track of the current page/component
  const navigate = useNavigate();

  useEffect(() => {
    let ven = JSON.parse(sessionStorage.getItem("vendor"));
    if (ven == null) {
      swal("Not Authorized", "", "error");
    } else {
      setLoggedIn(true);
      setVendor({
        firstName: ven.firstName,
        lastName: ven.lastName,
        id: ven.id,
        email: ven.email,
        jwt: ven.jwt,
      });
    }
  }, []);

  const handlePageChange = (pageComponent) => {
    setCurrentPage(pageComponent);
  };

  return (
    <div className="vendor-wrapper">
      <div className="sidebar">
        {loggedIn ? (
          <>
            <div className="profile">
              <img
                src={`${IP_ADDRS}/vendors/${vendor.id}/profileImage`}
                style={{ float: "right", marginRight: 18 }}
                height={165}
                width={165}
              />

              <h4 style={{ color: "white" }}>
                Hello,{" "}
                <strong style={{ color: "white" }}>
                  {vendor.firstName} {vendor.lastName}
                </strong>
              </h4>
            </div>
            <div className="menu">
              <button onClick={() => handlePageChange(<UpdateVendor />)}>
                Update Profile
              </button>
              <button onClick={() => handlePageChange(<AddSubscription />)}>
                Add Subscription Plan
              </button>
              <button onClick={() => handlePageChange(<VendorSubPlanList />)}>
                Display Subscription Plans
              </button>
              <button
                onClick={() => handlePageChange(<VendorEnabledSubPlanList />)}
              >
                Enabled Subscription Plans
              </button>
              <button onClick={() => handlePageChange(<EditSubscription />)}>
                Edit Subscriptions
              </button>

              <button
                onClick={() => handlePageChange(<VendorDisabledSubPlanList />)}
              >
                Disabled Subscription Plans
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

export default Vendor;
