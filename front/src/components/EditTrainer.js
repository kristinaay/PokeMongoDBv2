import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function EditTrainer() {
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
      </nav>
      <div className="TrainerCard">
        <div className="container-fluid d-flex justify-content-center">
          <div className="trainer">
            <div className="card-header">
              <h3 className="cardname">Edit Your Trainer Information</h3>
            </div>
            <form action="/edittrainerinfo" method="POST">
              <div className="card-body">
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
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-dark"
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
            <Link to="/trainer">
              <button className="button" type="button">
                Back to Trainer Card
              </button>
            </Link>
            <Link to="/editprofile">
              <button className="button" type="button">
                Edit Account Info
              </button>
            </Link>
            <Link to="/delete">
              <button className="button" type="button">
                Delete Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTrainer;
