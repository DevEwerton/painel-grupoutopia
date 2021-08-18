import React from "react";
import "./Footer.css";
import brand from "../assets/images/brand-developer.svg";

const Footer = props =>
{
    return (
        <div className="footer">
            <img src={brand} alt="" className="brand"/>
        </div>
    )
}

export default Footer;