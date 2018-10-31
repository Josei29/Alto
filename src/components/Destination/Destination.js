import React from "react";
import Data from "../../data/mission.json";
import Main from "./Main.js";

const Destination = () => (
    <div>
        <Main vibe={Data.vibe} trip={Data.trip} />
    </div>
);

export default Destination;