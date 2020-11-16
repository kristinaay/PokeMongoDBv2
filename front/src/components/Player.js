import PropTypes from "prop-types";
import "./styles/Player.css";
import { Link } from "react-router-dom";

function Player(props) {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("username");
  if (username !== null && username !== undefined) {
    localStorage.setItem("username", username);
  }

  const renderTeams = () => {
    const teams = props.player.filter((t) => t.name.startsWith(props.user));
    console.log("teams");
    console.log(teams);
    if (teams.length === 0) return null;
    let poke = teams[0].team[0];
    let poke1 = teams[0].team[1];
    let poke2 = teams[0].team[2];
    let poke3 = teams[0].team[3];
    let poke4 = teams[0].team[4];
    let poke5 = teams[0].team[5];
    return (
      <div>
        <div>
          <ol>
            <li key={poke}>
              <img src={`./images/${poke}.png`} alt={`(#${poke}) Sprite`} />
              <br />
              <br />
            </li>
            <li key={poke1}>
              <img src={`./images/${poke1}.png`} alt={`(#${poke1}) Sprite`} />
              <br />
              <br />
            </li>
            <li key={poke2}>
              <img src={`./images/${poke2}.png`} alt={`(#${poke2}) Sprite`} />
              <br />
              <br />
            </li>
            <li key={poke3}>
              <img src={`./images/${poke3}.png`} alt={`(#${poke3}) Sprite`} />
              <br />
              <br />
            </li>
            <li key={poke4}>
              <img src={`./images/${poke4}.png`} alt={`(#${poke4}) Sprite`} />
              <br />
              <br />
            </li>
            <li key={poke5}>
              <img src={`./images/${poke5}.png`} alt={`(#${poke5}) Sprite`} />
              <br />
              <br />
            </li>
          </ol>
        </div>
      </div>
    );
  };

  const renderStats = () => {
    const teams = props.player.filter((t) => t.name.startsWith(props.user));
    console.log("getting teams", teams);
    if (teams.length === 0) return null;
    console.log("getting team in player");
    let poke = teams[0].team[0];
    let poke1 = teams[0].team[1];
    let poke2 = teams[0].team[2];
    let poke3 = teams[0].team[3];
    let poke4 = teams[0].team[4];
    let poke5 = teams[0].team[5];
    const pokeArray = [poke, poke1, poke2, poke3, poke4, poke5];
    console.log(pokeArray);
    let statMap = new Map();
    statMap.set("Bug", 0);
    statMap.set("Dragon", 0);
    statMap.set("Electric", 0);
    statMap.set("Fighting", 0);
    statMap.set("Flying", 0);
    statMap.set("Fire", 0);
    statMap.set("Ghost", 0);
    statMap.set("Grass", 0);
    statMap.set("Ground", 0);
    statMap.set("Ice", 0);
    statMap.set("Normal", 0);
    statMap.set("Poison", 0);
    statMap.set("Psychic", 0);
    statMap.set("Rock", 0);
    statMap.set("Steel", 0);
    statMap.set("Water", 0);
    for (const poke of pokeArray) {
      console.log("getting stats of:", poke);
      let test = parseInt(poke) - 1;
      if (props.pokemon[test] === undefined) {
        return null;
      }
      let type_1 = props.pokemon[test].Type_1;
      console.log(type_1);
      let type_2 = props.pokemon[test].Type_2;
      statMap.set(type_1, statMap.get(type_1) + 1);
      if (type_2 !== "") {
        statMap.set(type_2, statMap.get(type_2) + 1);
      }
    }

    if (statMap === undefined) return null;
    let weakBug = statMap.get("Grass") + statMap.get("Psychic");
    let weakDragon = statMap.get("Dragon");
    let weakElectric = statMap.get("Water") + statMap.get("Flying");
    let weakFighting =
      statMap.get("Normal") +
      statMap.get("Ice") +
      statMap.get("Rock") +
      statMap.get("Steel");
    let weakFlying =
      statMap.get("Grass") + statMap.get("Fighting") + statMap.get("Bug");
    let weakFire =
      statMap.get("Grass") +
      statMap.get("Ice") +
      statMap.get("Bug") +
      statMap.get("Steel");
    let weakGhost = statMap.get("Ghost") + statMap.get("Psychic");
    let weakGrass =
      statMap.get("Water") + statMap.get("Ground") + statMap.get("Rock");
    let weakGround =
      statMap.get("Fire") +
      statMap.get("Electric") +
      statMap.get("Poison") +
      statMap.get("Rock") +
      statMap.get("Steel");
    let weakIce =
      statMap.get("Grass") +
      statMap.get("Ground") +
      statMap.get("Flying") +
      statMap.get("Dragon");
    let weakPoison = statMap.get("Grass");
    let weakPsychic = statMap.get("Fighting") + statMap.get("Poison");
    let weakRock =
      statMap.get("Fire") +
      statMap.get("Ice") +
      statMap.get("Flying") +
      statMap.get("Bug");
    let weakSteel = statMap.get("Ice") + statMap.get("Rock");
    let weakWater =
      statMap.get("Fire") + statMap.get("Ground") + statMap.get("Rock");

    let weak = [];
    let veryWeak = [];

    if (weakBug > 2) veryWeak.push("Bug");
    else if (weakBug === 2) weak.push("Bug");
    if (weakDragon > 2) veryWeak.push("Dragon");
    else if (weakDragon === 2) weak.push("Dragon");
    if (weakElectric > 2) veryWeak.push("Electric");
    else if (weakElectric === 2) weak.push("Electric");
    if (weakFighting > 2) veryWeak.push("Fighting");
    else if (weakFighting === 2) weak.push("Fighting");
    if (weakFlying > 2) veryWeak.push("Flying");
    else if (weakFlying === 2) weak.push("Flying");
    if (weakFire > 2) veryWeak.push("Fire");
    else if (weakFire === 2) weak.push("Fire");
    if (weakGhost > 2) veryWeak.push("Ghost");
    else if (weakGhost === 2) weak.push("Ghost");
    if (weakGrass > 2) veryWeak.push("Grass");
    else if (weakGrass === 2) weak.push("Grass");
    if (weakGround > 2) veryWeak.push("Ground");
    else if (weakGround === 2) weak.push("Ground");
    if (weakIce > 2) veryWeak.push("Ice");
    else if (weakIce === 2) weak.push("Ice");
    if (weakPoison > 2) veryWeak.push("Poison");
    else if (weakPoison === 2) weak.push("Poison");
    if (weakPsychic > 2) veryWeak.push("Psychic");
    else if (weakPsychic === 2) weak.push("Psychic");
    if (weakRock > 2) veryWeak.push("Rock");
    else if (weakRock === 2) weak.push("Rock");
    if (weakSteel > 2) veryWeak.push("Steel");
    else if (weakSteel === 2) weak.push("Steel");
    if (weakWater > 2) veryWeak.push("Water");
    else if (weakWater === 2) weak.push("Water");

    return (
      <div>
        <div className="statContainer">
          <h2 className="statWord">Type Breakdown:</h2>
        </div>
        <ul className="breakdown">
          <li>
            <img class="type" src={`./images/Bug.png`} alt={`Bug type icon`} />{" "}
            : {statMap.get("Bug")}
          </li>
          <li>
            <img
              class="type"
              src={`./images/Dragon.png`}
              alt={`Dragon type icon`}
            />{" "}
            : {statMap.get("Dragon")}
          </li>
          <li>
            <img
              class="type"
              src={`./images/Electric.png`}
              alt={`Electric type icon`}
            />{" "}
            : {statMap.get("Electric")}
          </li>
          <li>
            <img
              class="type"
              src={`./images/Fighting.png`}
              alt={`Fighting type icon`}
            />{" "}
            : {statMap.get("Fighting")}
          </li>
          <li>
            <img
              class="type"
              src={`./images/Flying.png`}
              alt={`Flying type icon`}
            />{" "}
            : {statMap.get("Flying")}
          </li>
          <li>
            <img
              class="type"
              src={`./images/Fire.png`}
              alt={`Fire type icon`}
            />{" "}
            : {statMap.get("Fire")}
          </li>
          <li>
            <img
              class="type"
              src={`./images/Ghost.png`}
              alt={`Ghost type icon`}
            />{" "}
            : {statMap.get("Ghost")}
          </li>
          <li>
            <img
              class="type"
              src={`./images/Grass.png`}
              alt={`Grass type icon`}
            />{" "}
            : {statMap.get("Grass")}
          </li>
          <li>
            <img
              class="type"
              src={`./images/Ground.png`}
              alt={`Ground type icon`}
            />{" "}
            : {statMap.get("Ground")}
          </li>
          <li>
            <img class="type" src={`./images/Ice.png`} alt={`Ice type icon`} />{" "}
            : {statMap.get("Ice")}
          </li>
          <li>
            <img
              class="type"
              src={`./images/Normal.png`}
              alt={`Normal type icon`}
            />{" "}
            : {statMap.get("Normal")}
          </li>
          <li>
            <img
              class="type"
              src={`./images/Poison.png`}
              alt={`Poison type icon`}
            />{" "}
            : {statMap.get("Poison")}
          </li>
          <li>
            <img
              class="type"
              src={`./images/Psychic.png`}
              alt={`Psychic type icon`}
            />{" "}
            : {statMap.get("Psychic")}
          </li>
          <li>
            <img
              class="type"
              src={`./images/Rock.png`}
              alt={`Rock type icon`}
            />{" "}
            : {statMap.get("Rock")}
          </li>
          <li>
            <img
              class="type"
              src={`./images/Steel.png`}
              alt={`Steel type icon`}
            />{" "}
            : {statMap.get("Steel")}
          </li>
          <li>
            <img
              class="type"
              src={`./images/Water.png`}
              alt={`Water type icon`}
            />{" "}
            : {statMap.get("Water")}
          </li>
        </ul>
        <div className="weakWords">
          <h2 className="weakWord">Weak to:</h2>
          <h2 className="vWeakWord">Very weak to:</h2>
        </div>
        <div className="weakContainer">
          <ul className="weak">
            {weak.map((weakness) => (
              <li>
                <img
                  class="type"
                  src={`./images/${weakness}.png`}
                  alt={`${weakness} type icon`}
                />
              </li>
            ))}
          </ul>
          <ul className="vWeak">
            {veryWeak.map((weakness) => (
              <li>
                <img
                  class="type"
                  src={`./images/${weakness}.png`}
                  alt={`${weakness} type icon`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
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
      <div clasName="contain" role="main">
        <h1 className="header-center"> Your Team </h1>
        <div>
          <div>{renderTeams()}</div>
        </div>
        <br />
        {renderStats()}
        <br /> <br />
      </div>
    </div>
  );
}

Player.propTypes = {
  player: PropTypes.array,
};

export default Player;
