import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import "../../index.css";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { IP_ADDRS } from "../../Service/Constant";
import Card from "../Card/CardUI"
import './Subscription.css'

const SubscriptionPlanDetails = () => {
  const [subscriptionPlan, setSubcriptionPlan] = useState([]);
  const navigate = useNavigate();
  const { spid } = useParams();
  const [subPlanList, setSubPlanList] = useState([]);
  const [userRoleCust, setUserRoleCust] = useState(false);
  const [custId, setCustId] = useState();

  useEffect(() => {
    let data = JSON.parse(sessionStorage.getItem("customer"));
    if (data != null) {
      setUserRoleCust(true)
      setCustId(data.id)
    }
    else
      setUserRoleCust(false)
    //Getting Subcription Details
    axios
      .get(`${IP_ADDRS}/subscription/plan/${spid}`)
      .then((res) => {
        console.log(res.data);
        setSubcriptionPlan(res.data);
      })
      .catch((err) => {
        console.log(err);
        swal("Something went Wrong", "", "error");
      });

    axios.get(`${IP_ADDRS}/tiffins/getTiffinsBySubscriptionId/${spid}`)
      .then(res => {
        console.log(res.data)
        setSubPlanList(res.data);
      })
      .catch(err => console.log(err))
  }, []);

  const purchase = () => {
    swal({
      title: "Do You Want to Place Order?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((conf) => {
        if (conf) {
          let orderDto = { customerId: custId, subscriptionId: [spid] }
          axios.post(`${IP_ADDRS}/orders/newOrder`, orderDto)
            .then(res =>
              swal("Order Placed", "", "success"))
            .catch(err => swal("Something Went Wrong", "", "error"))

        }
      })
  }
  return (
    <div className="page-container">
      <div className="jumbotron custom-jumbotron">
        <h1 className="display-4">
          {subscriptionPlan.name}
          <img 
            src={`${IP_ADDRS}/subscription/${spid}/dp`} 
            className="subscription-image" 
            alt="Subscription Plan"
          />
        </h1>
        <div className="description-container">
          <p>{subscriptionPlan.description}</p>
          <p>Plan Type : {subscriptionPlan.planType}</p>
          <p>Price : {subscriptionPlan.price} /- Rs</p>
        </div>
        {userRoleCust && 
          <button className="btn custom-btn-primary" onClick={purchase}>
            Buy
          </button>}
      </div>
  
      <hr className="custom-hr" />
  
      <div className="container details-container">
        <h2>Plan Details</h2>
        <div className="row row-cols-3 row-cols-md-4 g-4">
          {
            subPlanList.map((v, i) => {
              return (
                <div className="col" key={v.id}>
                  <Card 
                    imgsrc={`${IP_ADDRS}/tiffins/${v.id}/tiffinImage`} 
                    name={v.day} 
                    resrc={`tiffin/${spid}`} 
                    id={v.id} 
                  />
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
  
  
};

export default SubscriptionPlanDetails;
