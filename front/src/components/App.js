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
import EditProfile from "./EditProfile.js";
import EditTrainer from "./EditTrainer.js";
import TrainerProfile from "./TrainerProfile.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [showPokemon, setShowPokemon] = useState(false);
  const [player, setPlayer] = useState([]);
  const [trainer, setTrainer] = useState([]);
  const [showTeam, setShowTeam] = useState(false);
  const [user, setUser] = useState("");
  const [showUserEnter, setShowUserEnter] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    const getPlayer = async () => {
      console.log("getting player");
      try {
        const _player = await fetch("/player").then((res) => res.json());
        setPlayer(_player);
      } catch (err) {
        console.log("error ", err);
      }
      console.log("player");
      console.log(player);
    };
    getPlayer();
  }, []); // Only run the first time; fetches user's team

  useEffect(() => {
    const getPokemon = async () => {
      console.log("getting Pokemon");
      try {
        const _pokemon = await fetch("/pokemon").then((res) => res.json());
        let count = Object.keys(_pokemon).length;
        if (count === 0) {
          const _newDatabase = await fetch("/start").then((res) => res.json());
          setPokemon(_newDatabase);
        } else {
          setPokemon(_pokemon);
        }
      } catch (err) {
        console.log("error ", err);
      }
    };
    getPokemon();
  }, []); // Only run the first time; fetches list of pokemon

  useEffect(() => {
    const getTrainers = async () => {
      console.log("getting trainer profile info");
      try {
        const _trainer = await fetch("/trainers").then((res) => res.json());
        setTrainer(_trainer);
      } catch (err) {
        console.log("error ", err);
      }
    };
    getTrainers();
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
              path="/trainer"
              render={(props) => (
                <TrainerProfile
                  {...props}
                  trainer={trainer}
                  player={player}
                  user={user}
                />
              )}
            />
            <Route path="/editprofile" component={EditProfile} />
            <Route path="/edittrainer" component={EditTrainer} />
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

//     <Route path="/delete" component={Delete} />
//      <Route path="/editprofile" component={EditProfile} />
//      <Route path="/edittrainer" component={EditTrainer} />
