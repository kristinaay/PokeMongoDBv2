import React from "react";
import "./styles/Signup.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function SignUp() {
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
          <div className="container-fluid d-flex" role="main">
            <div className="signcard2" role="form">
              <div className="card-header">
                <h1 className="header1">Become a trainer today!</h1>
              </div>
              <div className="card-body">
                <form action="/signupp" method="POST">
                  <div className="form-group">
                    <label for="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="form-control"
                      placeholder="Misty"
                    />
                  </div>

                  <div className="form-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      placeholder="pikapika123"
                    />
                  </div>
                  <div className="form group">
                    <label for="password2">Verify Password</label>
                    <input
                      type="password"
                      id="password2"
                      name="password2"
                      className="form-control"
                      placeholder="pikapika123"
                    />
                  </div>
                  {error ? <div className="danger">{error}</div> : ""}
                  <br />
                  <button type="submit" className="button6">
                    Sign Up
                  </button>
                </form>
              </div>
              <div className="card-footer">
                Already a trainer? <Link to="/signin">Sign In</Link>
                <br />
                <Link to="/">Cancel and return home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
