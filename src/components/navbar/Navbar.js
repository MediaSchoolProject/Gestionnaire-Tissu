import React from "react";
import { Link } from "react-router-dom";
import image from "../../pictures/logo.jpg";

export default function Navbar() {
  return (
     <nav>
        <label> 
           <img src={image}/>
           <Link to="/" className="Home">UNIVERSAL KIDS </Link>
           <Link to='/Login' className="Login" > LOGIN</Link>
        </label> 
      </nav>
    );
}


  