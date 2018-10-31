import React from "react";
import "./Main.css";

const Main = (props) => (
    <div className="back">

        <img className="logo" src="./assets/images/Alto_logo.png" alt="Logo"></img>
        <img className="map" src="/assets/images/Map_overview.png" alt="map"></img>
        <h2 className="titleD">Your Trip</h2>
        <h1 className="arrivalTime">{props.trip.estimated_arrival}</h1>
        <p className="destination">Estimated arrival at {props.trip.dropoff_location.name}</p>
        
        <div className="row">
            <h3 className="infoVibe">Current Vibe <strong>{props.vibe.name}</strong></h3>
        </div>
        
        <div className="row">
            <button className="change">Change Vehicle Vibe</button>
        </div>
        
        <div className="destiny">
            <img className="bottomIcons" src="./assets/images/Profile_icon.png" alt="profile"></img>
            <h3>{props.trip.dropoff_location.name}</h3>
            <h4 className="ETA">En route...</h4>
            <img className="bottomIcons bottom-right" src="./assets/images/Vibes_icon.png" alt="vibes"></img>
        </div>

    </div>
);

export default Main;