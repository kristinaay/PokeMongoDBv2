import React, { useState, useEffect } from "react";
import "./styles/App.css";
import { Link } from "react-router-dom";
import Pokemon from "./Pokemon.js";
import Player from "./Player.js";
import User from "./User.js";
import Favorites from "./Favorites.js";
import SignUp from "./SignUp.js";
import SignIn from "./SignIn.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [showPokemon, setShowPokemon] = useState(false);
  const [player, setPlayer] = useState([]);
  const [showTeam, setShowTeam] = useState(false);
  const [user, setUser] = useState("");
  const [showUserEnter, setShowUserEnter] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("username");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const _pokemon = await fetch("/pokemon").then((res) => res.json());
        setPokemon(_pokemon);
      } catch (err) {
        console.log("error ", err);
      }
    };
    getPokemon();
  }, []); // Only run the first time; fetches list of pokemon

  useEffect(() => {
    const getPlayer = async () => {
      console.log("getting player");
      try {
        const _player = await fetch("/player").then((res) => res.json());
        setPlayer(_player);
      } catch (err) {
        console.log("error ", err);
      }
    };
    getPlayer();
  }, []); // Only run the first time; fetches user's team

  useEffect(() => {
    const getFavorites = async () => {
      console.log("getting favorites");
      try {
        const _favorites = await fetch("/favorites").then((res) => res.json());
        setFavorites(_favorites);
      } catch (err) {
        console.log("error ", err);
      }
    };
    getFavorites();
  }, []); // Only run the first time; fetches user's team

  // Only run the first time; gets username
  return (
    <div>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route
              path="/favorites"
              render={(props) => (
                <Favorites {...props} favorites={favorites} user={user} />
              )}
            />
            <Route
              path="/player"
              render={(props) => (
                <Player
                  {...props}
                  player={player}
                  pokemon={pokemon}
                  user={user}
                />
              )}
            />
            <Route
              path="/pokemon"
              render={(props) => (
                <Pokemon
                  {...props}
                  player={player}
                  pokemon={pokemon}
                  user={user}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

// Image from https://www.freeiconspng.com/img/45343

export default App;
