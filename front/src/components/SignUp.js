import React from "react";
import "./styles/Signup.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function SignUp() {
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
        <Link to="/player">
          <button className="myButton" type="button">
            Team Page
          </button>
        </Link>
        <Link to="/pokemon">
          <button className="myButton" type="button">
            Pokemon List
          </button>
        </Link>
        <Link to="/favorites">
          <button className="myButton" type="button">
            Favorites
          </button>
        </Link>
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
      <div className="SignUp">
        <img
          className="oak"
          src="./images/oak.png"
          alt="Professor Oak fom Pokemon"
        />

        <div className="container-fluid d-flex justify-content-center">
          <div className="signcard">
            <div className="card-header">
              <h3>Become a trainer today!</h3>
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
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-dark"
                    style={{ marginTop: "10px" }}
                    value="Sign Up"
                  />
                </div>
                <div className="form-group">
                  Already a trainer? <Link to="/signin">Sign In</Link>
                  <br />
                  <Link to="/">Cancel and return home</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
