import React from "react";
import "./Main.css";

const Main = (props) => (
    <div className="back">

        <img className="logo" src="./assets/images/Alto_logo.png" alt="Logo"></img>
        <img className="driver" src="/assets/images/Driver_photo.png" alt="Driver"></img>
        <h3 className="titleD">Your Driver</h3>
        <h1 className="driverName">{props.driver.name}</h1>
        <p className="bio">{props.driver.bio}</p>

        <div className="row">
            <button className="contact">Contact Driver</button>
        </div>
        
        <div className="destiny">
            <img className="bottomIcons" src="./assets/images/Profile_icon.png" alt="profile"></img>
            <h3>{props.trip.dropoff_location.name}</h3>
            <h4 className="ETA">ETA: {props.trip.estimated_arrival}</h4>
            <img className="bottomIcons bottom-right" src="./assets/images/Vibes_icon.png" alt="vibes"></img>
        </div>

    </div>
);

export default Main;