import { Link } from "react-router-dom";
import Slider from "../Carousal/slider";
import Footer from "../Footer/Footer";
import Cards from "../Card/VendorCards";
import styled from "styled-components";
import "./HomeStyle.css";
import LaCatering from "./images/LaCatering.jpg";
import FoodDelivery from "./images/FoodDelivery.jpg";
import Restaurant from "./images/Restaurant.jpg";
import Vendor1 from "./images/Vendor1.jpg";
import Vendor2 from "./images/Vendor2.jpg";
import Vendor3 from "./images/Vendor3.jpg";
import Vendor4 from "./images/Vendor4.jpg";
import React, { useState } from "react";
import Popup from "./PopUp";

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  p {
    color: #666;
    margin-bottom: 20px;
  }

  button {
    background-color: #1f51ff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f39c12;
    }
  }
`;

// Styled components for advanced styling
const HomeContainer = styled.div`
  background-image: url("BG-Feast.jpg"); /* Replace with the actual image path */
  background-size: cover;
  background-repeat: no-repeat;
  padding: 20px;
`;

const Heading = styled.h2`
  font-size: 24px;
  margin: 30px 0;
  color: black; /* Add this line to set the color to red */
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dateTime, setDateTime] = useState("2020-11-16T20:00");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Mail", email);
    formData.append("date", dateTime);
    formData.append("Message", message);

    try {
      const response = await fetch("/api/send_email", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Message sent successfully.");
        // Display the popup
      } else {
        console.log("Message could not be sent.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <HomeContainer className="HomeContainer">
      <div className="container">
        <Heading>EAT HEALTHY FROM LUNCHBOX</Heading>

        <div>
          <link
            rel="stylesheet"
            href="https://www.w3schools.com/w3css/4/w3.css"
          />
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\nbody {font-family: "Times New Roman", Georgia, Serif;}\nh1, h2, h3, h4, h5, h6 {\n  font-family: "Playfair Display";\n  letter-spacing: 5px;\n}\n',
            }}
          />
        </div>
        <div>
          {/* Header */}
          <header
            className="w3-display-container w3-content w3-wide"
            style={{ maxWidth: "1600px", minWidth: "500px" }}
            id="home"
          >
            <img
              className="w3-image"
              src={LaCatering}
              alt="Hamburger Catering"
              width={1600}
              height={800}
            />
            <div className="w3-display-bottomleft w3-padding-large w3-opacity">
              <h1 className="w3-xxlarge">LunchBox</h1>
            </div>
          </header>

          <div className="w3-container w3-padding-32" id="projects">
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
              Our Trusted Vendors
            </h3>
          </div>
        </div>
        <Cards />

        {/* Page content */}
        <div className="w3-content" style={{ maxWidth: "1100px" }}>
          {/* About Section */}
          <div className="w3-row w3-padding-64" id="about">
            <div className="w3-col m6 w3-padding-large w3-hide-small">
              <img
                src={FoodDelivery}
                className="w3-round w3-image w3-opacity-min"
                alt="Table Setting"
                width={600}
                height={750}
              />
            </div>

            <div className="w3-col m6 w3-padding-large">
              <h1 className="w3-center">About LunchBox</h1>
              <br />
              <h5 className="w3-center">Tradition since 2023</h5>
              <p className="w3-large w3-text-grey w3-hide-medium">
                LunchBox is the easiest way to get delicious food delivered to
                your door. We partner with over 10,000 restaurants in your city,
                so you can find all your favorite dishes, from classic comfort
                food to new and exciting cuisine. Our delivery drivers are fast
                and efficient, so you can get your food hot and fresh. We also
                offer a variety of payment options, so you can pay the way
                that's most convenient for you.
              </p>
            </div>
          </div>
          <hr />
          {/* Menu Section */}
          <div className="w3-row w3-padding-64" id="menu">
            <div className="w3-col l6 w3-padding-large">
              <h1 className="w3-center">
                Here are just a few of the reasons why you should use LunchBox:
              </h1>
              <br />
              <p className="w3-large w3-text-grey w3-hide-medium">
                Huge selection of restaurants: We have over 10,000 restaurants
                in your city, so you're sure to find something you love.
              </p>
              <p className="w3-large w3-text-grey w3-hide-medium">
                Fast and efficient delivery: Our drivers are fast and efficient,
                so you can get your food hot and fresh.
              </p>
              <p className="w3-large w3-text-grey w3-hide-medium">
                Variety of payment options: You can pay with cash, credit card,
                or PayPal.
              </p>
              <p className="w3-large w3-text-grey w3-hide-medium">
                Easy to use website or app: Our website and app are easy to use,
                so you can order food in just a few clicks.
              </p>
              <p className="w3-large w3-text-grey w3-hide-medium">
                24/7 customer support: We're here to help you 24/7, so if you
                have any questions or problems, we're always just a phone call
                away.
              </p>
            </div>
            <div className="w3-col l6 w3-padding-large">
              <img
                src={Restaurant}
                className="w3-round w3-image w3-opacity-min"
                alt="Menu"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div>
        <div
          className="contact"
          style={{ border: "5px", borderColor: "white" }}
        >
          <div className="  " style={{ color: "white" }}>
            <div className="w3-container w3-padding-64" id="contact">
              <h1>Contact</h1>
              <br />
              <p>
                You can also use testimonials from happy customers to help
                convince people to use your service. <br />I hope this helps!
              </p>
              <p className="w3-text-blue-grey w3-large">
                <b>LunchBox, Sector 4, 400601 Navi Mumbai, Karghar</b>
              </p>
              <p>
                You can also contact us by phone 888-888-1111 or email
                LunchBox@gmail.com, or you can send us a message here:
              </p>

              <div>
                <form onSubmit={handleSubmit}>
                  <p>
                    <input
                      className="w3-input w3-padding-16"
                      type="text"
                      placeholder="Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </p>
                  <p>
                    <input
                      className="w3-input w3-padding-16"
                      type="email"
                      placeholder="Mail"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </p>
                  <p>
                    <input
                      className="w3-input w3-padding-16"
                      type="datetime-local"
                      required
                      value={dateTime}
                      onChange={(e) => setDateTime(e.target.value)}
                    />
                  </p>
                  <p>
                    <input
                      className="w3-input w3-padding-16"
                      type="text"
                      placeholder="Message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </p>
                  <p>
                    <button
                      className="w3-button w3-light-grey w3-section"
                      type="submit"
                    >
                      SEND MESSAGE
                    </button>
                  </p>
                </form>
              </div>
            </div>
          </div>

          <div>
            <div className="map location1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8596674029395!2d73.05167127405986!3d19.025904453545532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24cce39457b%3A0x8bd69eab297890b0!2sCentre%20for%20Development%20of%20Advanced%20Computing%20(CDAC)!5e0!3m2!1sen!2sin!4v1693325077405!5m2!1sen!2sin"
                width={550}
                height={600}
                className="map"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </HomeContainer>
  );
}

export default Home;
