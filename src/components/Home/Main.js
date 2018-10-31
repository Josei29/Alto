import React from "react";
import "./Main.css";

const Main = (props) => (
    <div className="back">

        <img className="logo" src="./assets/images/Alto_logo.png" alt="Logo"></img>
        <h2 className="title">Your Trip</h2>
        <h1 className="arrivalTime">{props.trip.estimated_arrival}</h1>
        <p className="destination">Estimated arrival at {props.trip.dropoff_location.name}</p>
        
        <div className="infoContainer row">
            <h3 className="info">Estimated Fare: <strong>${props.trip.estimated_fare_min} - ${props.trip.estimated_fare_max}</strong> <span><img src="./assets/images/Info_icon.png" alt="info"></img></span></h3>
            <h3 className="info">Passengers: <strong>{props.trip.passengers_min} - {props.trip.passengers_max}</strong></h3>
            <h3 className="info">Payment: <strong>{props.trip.payment}</strong></h3>
        </div>
        <br></br>
        <h2 className="origin">{props.trip.pickup_location.street_line1} {props.trip.pickup_location.city}, {props.trip.pickup_location.state} {props.trip.pickup_location.zipcode}</h2>
        <h2 className="drop"><strong>{props.trip.dropoff_location.name} {props.trip.dropoff_location.city}, {props.trip.dropoff_location.state} {props.trip.dropoff_location.zipcode}</strong></h2>
        <p className="comment">{props.trip.notes} <span><img src="./assets/images/Edit_icon.png" alt="edit"></img></span></p>
        
        <div className="row">
            <button className="cancel">CANCEL TRIP</button>
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