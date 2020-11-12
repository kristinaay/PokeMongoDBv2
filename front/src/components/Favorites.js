import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Favorites(props) {
  const renderFavorites = () => {
    console.log(props.favorites);
    const favPlayer = props.favorites.filter((t) =>
      t._id.toLowerCase().startsWith(props.user)
    );
    console.log(favPlayer);
    const favArray = favPlayer[0].favMon;
    console.log(favArray);
    return favArray.map((p) => (
      <li key={p}>
        {p} (#{p}) <br />
        <img
          src={`./images/${p}.png`}
          alt={`${p} (#${p}) Sprite`}
          title={`${p} (#${p})`}
        />{" "}
        <br />
        <form action="/updateTeam" method="post">
          <label htmlFor="position">
            Choose the position: <br />
          </label>
          <select name="position" id={`position${p}`}>
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
            id={`newPokemon${p}`}
            value={`${p}`}
          />
          <input type="hidden" name="user" id="user" value={`${props.user}`} />
          <br />
          <button type="submit">Add to team!</button>
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
          <button type="submit">Delete favorite</button>
        </form>
        <br />
      </li>
    ));
  };

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
      <ol>{renderFavorites()}</ol>
    </div>
  );
}

Favorites.propTypes = {
  favorites: PropTypes.array,
};

export default Favorites;
