import React from "react";
import "./Header.css";
import brand from "../assets/images/brand.png";

const Header = props =>
{
    return (
        <div className="header">
            <img src={brand} alt="" className="brand"/>
        </div>
    )
}

export default Header;