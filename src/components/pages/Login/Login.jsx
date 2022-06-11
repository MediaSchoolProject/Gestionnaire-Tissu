import React from "react"
import { Link} from "react-router-dom";
import image from "../../../pictures/logo.jpg";
import "./Login.css";
import Menu from "../Menu/Menu";

export default function Login() {
  return (
    <>
      <div className="wrapper">
        <div className="logo">
          <img src={image} alt="" />
        </div>
        <div className="text-center mt-9 name">BIENVENUE</div>
        <form className="p-3 mt-3">
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Username"
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
            />
          </div>
          <Link to = "/Menu"><button className="btn mt-3">Login</button></Link>
        </form>
      </div>
    </>
  );
}
