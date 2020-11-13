import React from "react";
import "./styles/userprofile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function EditProfile() {
  const urlParams = new URLSearchParams(window.location.search);
  const error = urlParams.get("error");
  return (
    <div className="user">
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
          <button className="myButton2" type="button">
            Team Page
          </button>
        </Link>
        <Link to="/pokemon">
          <button className="myButton2" type="button">
            Pokemon List
          </button>
        </Link>
        <Link to="/favorites">
          <button className="myButton2" type="button">
            Favorites
          </button>
        </Link>
        <Link to="/trainer">
          <button className="myButton2" type="button">
            Trainer Page
          </button>
        </Link>
        <form className="form" action="/signout" method="post">
          <input
            className="myButton3"
            type="submit"
            name="signout"
            value="Sign Out"
          />
        </form>
      </nav>
      <div className="container-fluid d-flex justify-content-center">
        <div className="usercard3">
          <div className="card-header">
            <h3>My Account</h3>
          </div>
          <div className="card-body">
            <form id="update" action="/update" method="post"></form>
            <form>
              <div className="form-group">
                <label for="username">Current Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  placeholder="Ash"
                  form="update"
                />
              </div>

              <div className="form-group">
                <label for="newusername">New Username:</label>
                <input
                  type="text"
                  id="newusername"
                  name="newusername"
                  className="form-control"
                  placeholder="Ash Ketchum"
                  form="update"
                />
              </div>
              <div className="form group">
                <label for="newpassword">New Password:</label>
                <input
                  type="password"
                  id="newpassword"
                  name="newpassword"
                  className="form-control"
                  placeholder="pikachu"
                  form="update"
                />
              </div>
              {error ? <div className="danger">{error}</div> : ""}
              <div className="submitButtons">
                <div className="form-group">
                  <input
                    type="submit"
                    className="buttons"
                    value="Update Account"
                    form="update"
                  />
                </div>
              </div>
            </form>
            <div className="form-group">
              <Link to="/table">Cancel and return to previous page.</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
