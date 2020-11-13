import React from "react";
import { Link } from "react-router-dom";
import "./styles/Trainer.css";
import { useState, useEffect } from "react";

function TrainerProfile(props) {
  const [user, setUser] = useState("");
  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
  const trainer = [0, 0, 0, 0, 0];
  if (props.trainer !== undefined) {
    console.log(props.trainer);
    trainer = props.trainer.filter((t) =>
      t.name.toLowerCase().startsWith(user)
    );
  }

  let age = trainer[1];
  let gender = trainer[2];
  let region = trainer[3];
  let icon = trainer[4];

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
              <div> Name: {user ? { user } : "Unknown"}</div>
              <div> Age: {age ? { age } : "Unknown"}</div>
              <div> Gender: {gender ? { gender } : "Unknown"}</div>
              <div> Region: {region ? { region } : "Unknown"}</div>
            </div>
            <div className="card-footer-trainer">
              <p>Badges:</p>{" "}
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

export default TrainerProfile;
