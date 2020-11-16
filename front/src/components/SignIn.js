import React from "react";
import "./styles/SignIn.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function SignIn() {
  const urlParams = new URLSearchParams(window.location.search);
  const error = urlParams.get("error");

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        role="navigation"
      >
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
      <div className="containeroak">
        <div className="row" role="complementary">
          <img
            className="oak"
            src="./images/oak.png"
            alt="Professor Oak fom Pokemon"
          />
        </div>
        <div className="row">
          <div
            className="container-fluid d-flex justify-content-center"
            role="main"
          >
            <div className="signcard" role="form">
              <div className="card-header">
                <h1>Sign In</h1>
              </div>
              <div className="card-body">
                <form action="/signinn" method="POST">
                  <div className="form-group">
                    <label for="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      placeholder="Misty"
                      name="username"
                    />
                  </div>
                  <div className="form group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="pikapika123"
                      name="password"
                    />
                  </div>
                  <br />
                  {error ? <div className="danger">{error}</div> : ""}

                  <button type="submit" className="button6">
                    Sign In
                  </button>
                </form>
              </div>
              <div className="card-footer">
                <div>
                  Don't have an account? <Link to="/signup">Sign up here</Link>
                </div>
                <div>
                  <Link to="/">Cancel and return home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
