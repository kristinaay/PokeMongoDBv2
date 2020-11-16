import React from "react";
import { Link } from "react-router-dom";
import "./styles/Trainer.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function TrainerProfile(props) {
  const [user, setUser] = useState("");
  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  let trainer = [0, 0, 0, 0, 0];
  let age = 0;
  let gender = 0;
  let region = 0;
  let icon = 0;
  console.log("props: ");
  console.log(props.trainer);
  const train = props.trainer;
  let count = Object.keys(train).length;
  if (count === 0) {
    console.log("empty");
  }
  trainer = props.trainer.filter((t) => t.name.startsWith(user));
  if (trainer[0] !== undefined) {
    age = trainer[0].age;
    gender = trainer[0].gender;
    region = trainer[0].region;
    icon = trainer[0].icon;
  }

  console.log(trainer);

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
        <Link to="/trainerpage">
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
      <div className="TrainerCard">
        <div className="container-fluid d-flex justify-content-center">
          <div className="trainer">
            <div className="card-header" id="card-header-trainer">
              <h3 className="cardname">Trainer's Card</h3>
            </div>
            <div className="card-body-trainer">
              <div className="card-body-inner">
                <br />
                <div> Name: {user !== 0 ? `${user}` : "Unknown"}</div> <br />
                <div>
                  {" "}
                  Age: {age !== undefined && age !== 0 ? `${age}` : "Unknown"}
                </div>
                <br />
                <div>
                  {" "}
                  Gender:{" "}
                  {gender !== undefined && gender !== 0
                    ? `${gender}`
                    : "Unknown"}
                </div>
                <br />
                <div>
                  {" "}
                  Region:{" "}
                  {region !== undefined && region !== 0
                    ? `${region}`
                    : "Unknown"}
                </div>
                <br />
              </div>
              <img
                className="trainerpic"
                src={"./images/" + icon + ".png"}
                alt="Trainer"
              />
            </div>
            <div className="card-footer" id="trainer-footer">
              <p>Badges:</p>
              <img
                className="badges"
                src="./images/badges.png"
                alt="Pokemon gym badges"
              />
            </div>
            <div className="links">
              <Link to="/edittrainer">
                <button className="button4" type="button">
                  Edit Trainer Card
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

TrainerProfile.propTypes = {
  trainer: PropTypes.array,
};

export default TrainerProfile;
