import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles/Pokemon.css";
import { Link } from "react-router-dom";

function Pokemon(props) {
  const [search, setPokemon] = useState("");

  const renderPokemon = () => {
    const teams = props.player.filter((t) => t.name.startsWith(props.user));
    console.log("teams");
    console.log(teams);
    const pokemon = props.pokemon;
    if (teams.length === 0) return null;
    if (pokemon.length === 0) return null;
    let poke = getPokemon(pokemon, teams[0].team[0]);
    let poke1 = getPokemon(pokemon, teams[0].team[1]);
    let poke2 = getPokemon(pokemon, teams[0].team[2]);
    let poke3 = getPokemon(pokemon, teams[0].team[3]);
    let poke4 = getPokemon(pokemon, teams[0].team[4]);
    let poke5 = getPokemon(pokemon, teams[0].team[5]);

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
              Swap with: <br />
            </label>
            <select name="position" id={`position${p._id}`}>
              <option value="1">{poke}</option>
              <option value="2">{poke1}</option>
              <option value="3">{poke2}</option>
              <option value="4">{poke3}</option>
              <option value="5">{poke4}</option>
              <option value="6">{poke5}</option>
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
        <Link to="/trainer">
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
      <br /> <br />
    </div>
  );
}

function getPokemon(pokemon, number) {
  const poke = pokemon.filter((p) => p._id.startsWith(number));
  return poke[0].Pokemon;
}

Pokemon.propTypes = {
  pokemon: PropTypes.array,
  player: PropTypes.array,
};

export default Pokemon;
