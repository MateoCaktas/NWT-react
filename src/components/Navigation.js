import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Navigation = () => {
    return(
        <div className="header">
            <NavLink to="/" className="headerLink" >Home</NavLink>
            <NavLink to="/display" className="headerLink" >Posts</NavLink>
            <NavLink to="/post" className="headerLink" >Post</NavLink>
        </div>
    );
};

export default Navigation;