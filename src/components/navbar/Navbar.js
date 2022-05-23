import React from "react";
import { Link } from "react-router-dom";
import image from "../../pictures/logo.jpg";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-light bg"
        style={{
          backgroundColor: " rgb(174, 174, 241)",
          color: "lightblue",
          marginBottom: "-18%",
        }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              style={{ width: "7%", height: "7%", marginLeft: "5%" }}
              src={image}
            />
            <span style={{ color: "blue", marginLeft: "5%" }}>
              UNIVERSAL KIDS
            </span>
            <Link
              to="/Login"
              style={{
                color: "blue",
                marginLeft: "55%",
                textDecoration: "none",
              }}
            >
              LOGIN
            </Link>
          </Link>
        </div>
      </nav>
    </>
  );
}
