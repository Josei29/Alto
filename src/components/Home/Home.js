import React from "react";
import Data from "../../data/mission.json";
import Main from "./Main.js";

const Home = () => (
    <div>
        <Main trip={Data.trip} />
    </div>
)

export default Home;