import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/editcard.css";

function EditTrainer() {
  const urlParams = new URLSearchParams(window.location.search);
  const msg = urlParams.get("msg");
  const error = urlParams.get("error");
  const [user, setUser] = useState("");
  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

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
      <div className="EditCard">
        <div className="container-fluid d-flex justify-content-center">
          <div className="edit">
            <div className="card-header" id="card-header-edit">
              <h3 className="editcardname">Edit Your Trainer Information</h3>
            </div>
            <form action="/edittrainerinfo" method="POST">
              <div className="card-body-edit">
                <div className="first">
                  <div className="form-group">
                    <label for="username">Current Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="form-control"
                      placeholder="Misty"
                    />
                  </div>
                  <div className="form-group">
                    <label for="age">Age</label>
                    <input
                      type="text"
                      id="age"
                      name="age"
                      className="form-control"
                      placeholder="18"
                    />
                  </div>
                </div>
                <div className="second">
                  <div className="form-group">
                    <label for="gender">Gender</label>
                    <input
                      type="text"
                      id="gender"
                      name="gender"
                      className="form-control"
                      placeholder="Girl"
                    />
                  </div>
                  <div className="form group">
                    <label for="region">Region</label>
                    <input
                      type="text"
                      id="region"
                      name="region"
                      className="form-control"
                      placeholder="North America"
                    />
                  </div>
                </div>
                <div className="third">
                  <label for="cars">Choose your trainer: </label> <br />
                  <select id="trainers" name="trainer">
                    <option value="0">Cute Blonde Girl</option>
                    <option value="1">Karate Girl</option>
                    <option value="2">Elegant Lady</option>
                    <option value="3">Swimmer Girl</option>
                    <option value="4">Swimmer Boy</option>
                    <option value="5">Rich Boy</option>
                    <option value="6">Sailor Boy</option>
                    <option value="7">Scuba Boy</option>
                    <option value="8">Ranger Boy</option>
                    <option value="9">Ranger Girl</option>
                    <option value="11">Ninja Boy</option>
                    <option value="12">Casual Girl</option>
                    <option value="13">Suspicious Boy</option>
                    <option value="14">Psychic Old Man</option>
                    <option value="16">Bug Boy</option>
                    <option value="17">Bikini Girl</option>
                    <option value="19">Cute Pink Girl</option>
                    <option value="20">Punk Boy</option>
                    <option value="21">Tourist Girl</option>
                    <option value="22">Tourist Boy</option>
                  </select>
                </div>
                <div className="msg"> {msg ? `${msg}` : ""}</div>
                {error ? <div className="danger">{error}</div> : ""}
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-dark"
                    id="submit"
                    style={{ marginTop: "10px" }}
                    value="Submit"
                  />
                </div>
              </div>
            </form>
            <div className="card-footer" id="trainer-footer">
              <p>Badges:</p>
              <img
                className="badges"
                src="./images/badges.png"
                alt="Pokemon gym badges"
              />
            </div>

            <div className="links">
              <Link to="/trainer">
                <button className="button4" type="button">
                  Back to Trainer Card
                </button>
              </Link>
              <Link to="/editprofile">
                <button className="button4" type="button">
                  Edit Account Info
                </button>
              </Link>
              <Link to="/delete">
                <button className="button4" type="button">
                  Delete Account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTrainer;
