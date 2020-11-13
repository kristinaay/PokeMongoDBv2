import React from "react";
import "./styles/SignIn.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function SignIn() {
  const urlParams = new URLSearchParams(window.location.search);
  const error = urlParams.get("error");

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img
            src="./images/pika.png"
            alt="Pikachu"
            title="Pikachu"
            width="60"
          />
          PokeMongoDB
        </a>
        <Link to="/signin">
          <button className="myButton" type="button">
            Sign In
          </button>
        </Link>
        <Link to="/signup">
          <button className="myButton" type="button">
            Sign Up
          </button>
        </Link>
      </nav>
      <div className="SignIn">
        <div className="container-fluid d-flex justify-content-center">
          <div className="signcard">
            <div className="card-header">
              <h3>Sign In</h3>
            </div>
            <div className="card-body">
              <form action="/signinn" method="POST">
                <div className="form-group">
                  <label for="inputUserName">Username</label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    placeholder="Alice"
                    name="username"
                  />
                </div>
                <div className="form group">
                  <label for="inputPassword">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="123abc"
                    name="password"
                  />
                </div>
                <br />
                {error ? <div className="danger">{error}</div> : ""}
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-dark"
                    style={{ marginTop: "10px" }}
                    value="Sign In"
                  />
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div>
                <Link to="/signup">Sign up here</Link>
              </div>
              <div>
                <Link to="/">Cancel and return home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;