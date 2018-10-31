import React from "react";
import Data from "../../data/mission.json";
import Main from "./Main.js";

const Driver = () => (
    <div>
        <Main driver={Data.driver} trip={Data.trip} />
    </div>
);

export default Driver;