import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs.js";
import Home from "./components/Home/Home.js";
import Driver from "./components/Driver/Driver.js";
import Vehicle from "./components/Vehicle/Vehicle.js";
import Destination from "./components/Destination/Destination.js";

const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={Home} />
      <Route exact path="/driver" component={Driver} />
      <Route exact path="/vehicle" component={Vehicle} />
      <Route path="/destination" component={Destination} />
    </div>
  </Router>
)

export default App;
