import React from "react";
import "./Main.css";

const Main = (props) => (
    <div className="back">

        <img className="logo" src="/assets/images/Alto_logo.png" alt="Logo"></img>
        <img className="vehicle" src="/assets/images/Vehicle_photo.png" alt="Vehicle"></img>
        <h3 className="titleD">Your Vehicle</h3>
        <h1 className="vehicleLicense">{props.vehicle.license}</h1>
        
        <div className="infoContainer row">
            <h3 className="info">Make / Model <strong>{props.vehicle.make}</strong></h3>
            <h3 className="info">Color <strong>{props.vehicle.color}</strong></h3>
        </div>

        <div className="row">
            <button className="identify">Identify Vehicle</button>
        </div>
        
        <div className="destiny">
            <img className="bottomIcons" src="./assets/images/Profile_icon.png" alt="profile"></img>
            <h3>{props.trip.dropoff_location.name}</h3>
            <h4 className="ETA">ETA: {props.trip.estimated_arrival}</h4>
            <img className="bottomIcons bottom-right" src="./assets/images/Vibes_icon.png" alt="vibes"></img>
        </div>

    </div>
)

export default Main;