import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="footer-left col-md-4 col-sm-6">
          <p class="about">
            Indulge in Culinary Delights with LunchBox 🍔🚀 Satisfy your
            cravings with LunchBox, your gateway to a world of delectable
            flavors delivered right to your doorstep. From sizzling burgers to
            exotic salads, our app brings the best in food innovation to your
            plate. Explore, order, and experience culinary magic with LunchBox –
            your everyday food adventure!"
          </p>
        </div>
        <div class="footer-center col-md-4 col-sm-6">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span> CDAC Kharghar </span> Navi Mumbai , Maharashtra ,India.
            </p>
          </div>
          <div>
            <i class="fa fa-phone"></i>
            <p> (+91) 8383060565</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:LunchBox@gmail.com">
                OnlineLunchBoxWeb@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div class="footer-right  ">
          <h2>
            {" "}
            LunchBox<span> </span>
          </h2>
          <p style={{ color: "white" }}>
            <a href="#"> Home </a> |<a href="#about"> About </a> |
            <a href="#menu"> Services</a> | <a href="#contact"> Contact</a>
          </p>
          <p class="#"> LunchBox &copy; 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
