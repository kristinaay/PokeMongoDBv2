import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/Home.css";

function Home() {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("username");
  sessionStorage.setItem("username", username);
  const [user, setUser] = useState("");
  useEffect(() => {
    const storedUser = sessionStorage.getItem("username");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div>
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
        <p>
          Welcome to PokeMongoDB! To get started create an account and then sign
          in. Once you've signed in, check out your team by clicking Team Page
          in the NavBar. The Team Page will display your Pokemon as well as the
          sum of their types! If you would like to change a Pokemon in your
          team, click on Pokemon List in the NavBar. From there, you can search
          for the Pokemon you would like in your team with the search form, or
          scroll until you find one you like. Choose the position you would like
          to place the Pokemon in your team and click the add Pokemon button to
          update your team! Finally, if there are Pokemon you would like to
          frequently move in and out of your team you can add them or remove
          them from your favorites section to do easily!
        </p>
      </div>
    </div>
  );
}

export default Home;
