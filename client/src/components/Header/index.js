import React from "react";
import logo from "./whaddyalogo.jpg";


import "./style.css"

function Header() {
    return <img className="headerImg" src={logo} alt="Logo" />;
    
}

export default Header;