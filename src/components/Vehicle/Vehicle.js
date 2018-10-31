import React from "react";
import Data from "../../data/mission.json";
import Main from "./Main.js";

const Vehicle = () => (
    <div>
        <Main trip={Data.trip} vehicle={Data.vehicle} />
    </div>
)

export default Vehicle;