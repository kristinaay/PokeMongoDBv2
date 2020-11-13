import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles/Pokemon.css";
import { Link } from "react-router-dom";

function Pokemon(props) {
  const [search, setPokemon] = useState("");

  const renderPokemon = () => {
    return props.pokemon
      .filter(
        (p) =>
          p.Pokemon && p.Pokemon.toLowerCase().startsWith(search.toLowerCase())
      )
      .map((p) => (
        <li key={p._id}>
          {p.Pokemon} (#{p._id}) <br />
          <img
            src={`./images/${p._id}.png`}
            alt={`${p.Pokemon} (#${p._id}) Sprite`}
            title={`${p.Pokemon} (#${p._id})`}
          />{" "}
          <br />
          HP: {p.HP} <br />
          ATK: {p.Atk} <br />
          DEF: {p.Def} <br />
          Special Atk: {p.SpA} <br />
          Special Defense: {p.SpD} <br />
          Speed: {p.Spe} <br />
          Type: {p.Type_1} <br />
          Type II: {p.Type_2} <br />
          <form action="/updateTeam" method="post">
            <label htmlFor="position">
              Choose the position: <br />
            </label>
            <select name="position" id={`position${p._id}`}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <input
              type="hidden"
              name="newPokemon"
              id={`newPokemon${p._id}`}
              value={`${p._id}`}
            />
            <input
              type="hidden"
              name="user"
              id="user"
              value={`${props.user}`}
            />
            <br />
            <button type="submit">Add to your team</button>
          </form>
          <form action="/newFav" method="post">
            <input
              type="hidden"
              name="newPokemon"
              id={`newPokemon${p._id}`}
              value={`${p._id}`}
            />
            <input
              type="hidden"
              name="user"
              id="user"
              value={`${props.user}`}
            />
            <button type="submit">Add to favorites</button>
          </form>
          <br />
        </li>
      ));
  };

  console.log("rendering Pokemon", search);

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
      <div>
        <label htmlFor="search">
          Search for a pokemon to add to your team:{" "}
          <input
            type="text"
            value={search}
            onChange={(evt) => setPokemon(evt.target.value)}
          />
        </label>
        <br />
        <ol>{renderPokemon()}</ol>
      </div>
    </div>
  );
}

Pokemon.propTypes = {
  pokemon: PropTypes.array,
};

export default Pokemon;
