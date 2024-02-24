import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, validateCaptcha, LoadCanvasTemplate } from "react-simple-captcha";
import swal from "sweetalert";

import { IP_ADDRS } from "../../Service/Constant"
import './Login.css'

function Login(props) {

    const [data, setData] = useState({
        username: "",
        password: "",
        loginerror: ""
    });
    const [passType, setPassType] = useState("text");
    const [isChecked, setIsChecked] = useState(false);


    useEffect(() => {
        loadCaptchaEnginge(6, 'red', 'black', 'upper');
    }, [])
    const handleShowPassword = () => {
        setIsChecked(!isChecked);
    }
    useEffect(() => {
        if (isChecked == true) {
            setPassType("text");
            return;
        }
        setPassType("password");
    }, [isChecked])


    const changeHandler = (e) => {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value
        }));
    }

    const navigate = useNavigate();

    const submitData = (e) => {
        if (data.username == '') {
            alert('Username cannot be null');
            return;
        }
        if (data.password == '') {
            alert('Password cannot be null');
            return;
        }
        e.preventDefault();

        let user_captcha = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(user_captcha) === true) {
            const obj = { "email": data.username, "password": data.password }
            axios.post(`${IP_ADDRS}/auth/signin`, obj)
                .then(response => {
                    props.isLogged(true);
                    if (response.data.role.includes("ROLE_CUSTOMER")) {
                        sessionStorage.setItem("customer", JSON.stringify(response.data));
                        navigate(`/customer`);
                    }
                    else if (response.data.role.includes("ROLE_VENDOR")) {
                        sessionStorage.setItem("vendor", JSON.stringify(response.data));
                        navigate(`/vendor`);
                    }
                    else if (response.data.role.includes("ROLE_ADMIN")) {
                        sessionStorage.setItem("admin", JSON.stringify(response.data));
                        navigate(`/admin`);
                    }
                }).catch(err => {
                    swal("Wrong Detials You were Entered", "Enter Correct Details again, Make Sure you are registered before Login", "error");
                })
        }

        else {
            swal("Captcha Does Not Match !", "Enter Correct Captcha", "error");
        }

    }



return (
    <div className="login-page">
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Welcome Back!</h2>
                <hr className="login-divider" />

                <form className="login-form">
                    <div className="form-group">
                        <label><i className="fa fa-envelope icon"></i> Email Id:</label>
                        <input type="email" placeholder="Enter Email ID" name="username" className="form-control" value={data.username} onChange={changeHandler} />
                    </div>

                    <div className="form-group">
                        <label><i className="fa fa-lock icon"></i> Password:</label>
                        <input type={passType} placeholder="Password" name="password" className="form-control" value={data.password} onChange={changeHandler} />
                        <div className="show-password">
                            <input type="checkbox" checked={isChecked} onChange={handleShowPassword} id="show" />
                            <label htmlFor="show" className="ShPw">Show Password</label>
                        </div>
                    </div>

                    <div className="form-group captcha-group">
                        <LoadCanvasTemplate />
                        <input type="text" placeholder="Enter Captcha" id="user_captcha_input" name="user_captcha_input" className="form-control" />
                    </div>

                    <div className="button-group">
                        <button className="btn btn-primary" onClick={submitData}>Login</button>
                        <button className="btn btn-secondary" onClick={() => navigate("/")}>Cancel</button>
                    </div>
                </form>

                <div className="footer-links">
                    <a href="/forgotpassword">Forgot password?</a>
                    {data.loginerror && <p className="text-danger">{data.loginerror}</p>}
                </div>
            </div>
        </div>
    </div>
);

    
    
}

export default Login;