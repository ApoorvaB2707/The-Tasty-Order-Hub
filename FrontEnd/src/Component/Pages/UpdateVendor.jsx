import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";
import { IP_ADDRS } from "../../Service/Constant"
import './UpdateVendor.css'
import './ListStyles.css'; 

function UpdateVendor() {
    const [vendor, setVendor] = useState({
        firstName: "",
        email: "",
        lastName: "",
        id: "",
        jwt: ""
    });

    const [loggedIn, setLoggedIn] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        let ven = JSON.parse(sessionStorage.getItem("vendor"));
        if (ven == null) {
            swal("Not Authorized", "", "error");
        }
        else {
            axios.get(`${IP_ADDRS}/vendors/${ven.id}`, { headers: { "Authorization": `Bearer ${ven.jwt}` } })
                .then((res) => {
                    console.log(res.data);
                    setLoggedIn(true);
                    setVendor({
                        firstName: res.data.firstName, lastName: res.data.lastName,
                        id: ven.id,
                        email: res.data.email,
                        jwt: ven.jwt
                    })
                })
                .catch((err) => {
                    console.log(err);
                    swal("Something went Wrong", `${err}`, "error");
                });
        }
    }, [])


    return (
        <div className="profile-page list-container">
            {loggedIn ? (
                <div className="profile-content">
                    <div className="jumbotron">
                        <img src={`${IP_ADDRS}/vendors/${vendor.id}/profileImage`} className="profile-image" />
                        <div className="profile-details">
                            <h3>Hello,</h3>
                            <h1>
                                {vendor.firstName}&nbsp;{vendor.lastName}
                            </h1>
                            <h5>{vendor.email}</h5>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card update-details-card" onClick={() => navigate("/updateBasicDetails")}>
                                    <div className="card-body">
                                        <h5 className="card-title">Update Basic Details</h5>
                                        <p className="card-text">First name, last name, email, mobile</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card update-address-card" onClick={() => navigate("/editAddress")}>
                                    <div className="card-body">
                                        <h5 className="card-title">Update Address</h5>
                                        <p className="card-text">Edit address details here</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-sm-6">
                                <div className="card update-profile-picture-card" onClick={() => navigate("/uploadProfilePicture")}>
                                    <div className="card-body">
                                        <h5 className="card-title">Update Profile Picture</h5>
                                        <p className="card-text">Upload new profile picture</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card change-password-card" onClick={() => navigate("/changePassword")}>
                                    <div className="card-body">
                                        <h5 className="card-title">Change Password</h5>
                                        <p className="card-text">Change your password</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="login-message">
                    <h1>Please Log in to Access this Page</h1>
                </div>
            )}
        </div>
    );
    

}

export default UpdateVendor;