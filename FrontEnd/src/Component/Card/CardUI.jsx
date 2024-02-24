import React from "react";
import { useNavigate } from 'react-router-dom';
import "./CardStyle.css"

const Card = props => {

    const navigate = useNavigate();

    return (
        <div id="cardStyle" className="card text-center shadow w-100 w3-col l3 m6 w3-margin-bottom" onClick={() => navigate(`/${props.resrc}/${props.id}`)}>
            <div className="overflow w3-display-container">
                {/* <img src={props.imgsrc} alt={props.imgsrc} className="card-img-top" height={225} /> */}
                <img src={props.imgsrc} alt={props.imgsrc} style={{width: '100%'}} />
                 <div className="w3-display-topleft w3-black w3-padding">{props.name}</div>
            </div>

        </div>);
}

export default Card;

