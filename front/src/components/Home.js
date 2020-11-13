import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";

function Home() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-end">
          <a className="navbar-brand" href="/">
            <img
              src="./images/pika.png"
              alt="Pikachu"
              title="Pikachu"
              width="60"
            />
            PokeMongoDB
          </a>
          <div className="homebuttons">
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
          </div>
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
