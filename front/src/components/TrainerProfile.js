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
import React from "react";
import { Link } from "react-router-dom";
import "./styles/Trainer.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function TrainerProfile(props) {
  console.log("player:");
  console.log(props.player);
  const [user, setUser] = useState("");
  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  let trainer = [0, 0, 0, 0, 0];
  console.log("props: ");
  console.log(props.trainer);
  const train = props.trainer;
    let count = Object.keys(train).length;
    if (count === 0) {
      return null;
    }
  trainer = props.trainer.filter((t) =>
      t.name.toLowerCase().startsWith(user)
    );

  console.log(trainer);

  let age = trainer[0].age;
  let gender = trainer[0].gender;
  let region = trainer[0].region;
  let icon = trainer;

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
              <h3 className="cardname">Trainer's Card</h3>
            </div>
            <div className="card-body">
              <div> Name: {user !== 0 ? `${user}` : "Unknown"}</div>
              <div>
                {" "}
                Age: {age !== undefined && age !== 0 ? `${age}` : "Unknown"}
              </div>
              <div>
                {" "}
                Gender:{" "}
                {gender !== undefined && gender !== 0 ? `${gender}` : "Unknown"}
              </div>
              <div>
                {" "}
                Region:{" "}
                {region !== undefined && region !== 0 ? `${region}` : "Unknown"}
              </div>
            </div>
            <div className="card-footer" id="trainer-footer">
              <p>Badges:</p>
              <img
                className="badges"
                src="./images/badges.png"
                alt="Pokemon gym badges"
              />
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

  let trainer = [0, 0, 0, 0, 0];
  console.log("props: ");
  console.log(props.player);
  if (props.trainer !== undefined) {
    console.log(props.trainer);
    trainer = props.trainer.filter((t) =>
      t.name.toLowerCase().startsWith(user)
    );
    console.log(trainer);
  }

  console.log(trainer);

  let age = trainer[0].age;
  let gender = trainer[0].gender;
  let region = trainer[0].region;
  let icon = trainer[0];

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
              <h3 className="cardname">Trainer's Card</h3>
            </div>
            <div className="card-body">
              <div> Name: {user !== 0 ? `${user}` : "Unknown"}</div>
              <div>
                {" "}
                Age: {age !== undefined && age !== 0 ? `${age}` : "Unknown"}
              </div>
              <div>
                {" "}
                Gender:{" "}
                {gender !== undefined && gender !== 0 ? `${gender}` : "Unknown"}
              </div>
              <div>
                {" "}
                Region:{" "}
                {region !== undefined && region !== 0 ? `${region}` : "Unknown"}
              </div>
            </div>
            <div className="card-footer" id="trainer-footer">
              <p>Badges:</p>
              <img
                className="badges"
                src="./images/badges.png"
                alt="Pokemon gym badges"
              />
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
