import React from "react";
import swal from "sweetalert";
import "./Login.css";
import { Link} from "react-router-dom";

export default function Login() {
  const sweetAlert = () => {
    swal("welcome User name");
  };

  return (
    <>
      <div className="container" style={{ width: "50%"}}>
        <form className="row g-6" >
          <div className="col-md-6" >
            <label htmlFor="inputEmail4" className="form-label">
              User Name
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
          <Link to="/Menu">
            <button
              type="submit"
              className="btn btn-primary"
              id="button"
              onClick={() => {
                sweetAlert();
              }}>
              Sign in
            </button>
          </Link>
        </form>
      </div>
      <br />
    </>
  );
}
