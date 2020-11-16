import React from "react";
import PropTypes from "prop-types";
import "./styles/Favorites.css";
import { Link } from "react-router-dom";

function Favorites(props) {
  const renderFavorites = () => {
    const poke = props.favorites;
    let count = Object.keys(poke).length;
    if (count === 0) {
      return null;
    }
    const teams = props.player.filter((t) => t.name.startsWith(props.user));
    const pokemon = props.pokemon;
    if (teams.length === 0) return null;
    if (pokemon.length === 0) return null;
    let poke0 = getPokemon(pokemon, teams[0].team[0]);
    let poke1 = getPokemon(pokemon, teams[0].team[1]);
    let poke2 = getPokemon(pokemon, teams[0].team[2]);
    let poke3 = getPokemon(pokemon, teams[0].team[3]);
    let poke4 = getPokemon(pokemon, teams[0].team[4]);
    let poke5 = getPokemon(pokemon, teams[0].team[5]);
    const favPlayer = props.favorites.filter((t) =>
      t._id.startsWith(props.user)
    );
    console.log(favPlayer);
    const favArray = favPlayer[0].favMon;
    console.log(favArray);
    return favArray.map((p) => (
      <li key={p}>
        #{p} <br />
        <img
          src={`./images/${p}.png`}
          alt={`${p} Sprite`}
          title={`${p}`}
        />{" "}
        <br />
        <form action="/updateTeam" method="post">
          <label htmlFor="position">
            Swap with: <br />
          </label>
          <select name="position" id={`position${p}`}>
            <option value="1">{poke0}</option>
            <option value="2">{poke1}</option>
            <option value="3">{poke2}</option>
            <option value="4">{poke3}</option>
            <option value="5">{poke4}</option>
            <option value="6">{poke5}</option>
          </select>
          <input
            type="hidden"
            name="newPokemon"
            id={`newPokemon${p}`}
            value={`${p}`}
          />
          <input type="hidden" name="user" id="user" value={`${props.user}`} />
          <br />
          <button className="subButton" type="submit">
            Add to team!
          </button>
        </form>
        <form action="/removeFav" method="post">
          <input
            type="hidden"
            name="removeMon"
            id={`newPokemon${p}`}
            value={`${p}`}
          />
          <input
            type="hidden"
            name="player"
            id="user"
            value={`${props.user}`}
          />
          <button className="subButton" type="submit">
            Delete favorite
          </button>
        </form>
        <br />
      </li>
    ));
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        role="navigation"
      >
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
      <br />
      <div role="main">
        <h1 className="header-center"> Your Favorites </h1>
        <br />
        <ol>{renderFavorites()}</ol>
      </div>
    </div>
  );
}

function getPokemon(pokemon, number) {
  const poke = pokemon.filter((p) => p._id.startsWith(number));
  return poke[0].Pokemon;
}

Favorites.propTypes = {
  favorites: PropTypes.array,
};

export default Favorites;
