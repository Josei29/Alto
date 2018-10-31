import React from "react";
import { Link } from "react-router-dom";
import "./NavTabs.css";

const NavTabs = () => (
    <nav aria-label="breadcrumb row">
        <ol className="breadcrumb">
            <li><Link to="/" className={window.location.pathname === "/" ? "breadcrumb-item active" : "breadcrumb-item"}>Home</Link></li>
            <li><Link to="/driver" className={window.location.pathname === "/driver" ? "breadcrumb-item active" : "breadcrumb-item"}>Driver</Link></li>
            <li><Link to="/vehicle" className={window.location.pathname === "/vehicle" ? "breadcrumb-item active" : "breadcrumb-item"}>Vehicle</Link></li>
            <li><Link to="/destination" className={window.location.pathname === "/destination" ? "breadcrumb-item active" : "breadcrumb-item"}>Destination</Link></li>
        </ol>
    </nav>
);

export default NavTabs;