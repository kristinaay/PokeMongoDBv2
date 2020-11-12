const express = require("express");
const router = express.Router();

const myDB = require("../db/myPokeMongoDB.js");

const Passport = require("passport");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const Strategy = require("passport-local").Strategy;
const authUtils = require("../utils/auth");
const Session = require("express-session");
const cookieParser = require("cookie-parser");

app.use(cookieParser("cookie_secret"));
app.use(
  Session({
    secret: "cookie_secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(Passport.initialize());
app.use(Passport.session());

const MongoClient = require("mongodb").MongoClient;
const uri = process.env.MONGO_URL || "mongodb://localhost:27017";

Passport.use(
  new Strategy(
    { passReqToCallback: true },
    async (req, username, password, done) => {
      const client = new MongoClient(uri, { useUnifiedTopology: true });
      await client.connect();
      //database
      const db = await client.db("pokedb");
      const users = db.collection("users");

      users.findOne({ username }, (err, user) => {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false);
        }
        let newPass = authUtils.decrypt(user.password);
        if (password != newPass) {
          return done(null, false);
        }

        return done(null, user);
      });
    }
  )
);

Passport.serializeUser((user, done) => {
  done(null, user._id);
});

Passport.deserializeUser((id, done) => {
  done(null, { id });
});

router.post(
  "/signinn",
  // Passport.authenticate("local", {
  //   successRedirect: "/?username=req.user.username"",
  //   failureRedirect: "/signin?error=Invalid username or password.",
  // })
  Passport.authenticate("local", {
    failureRedirect: "/signin?error=Invalid username or password.",
  }),
  function (req, res) {
    res.redirect("/?username=" + req.user.username);
  }
);
//);

router.post("/signupp", async (req, res, next) => {
  const registrationParams = req.body;

  const users = await myDB.initializeUsers();
  let user = req.body.username;
  await myDB.createTeam(user);
  await myDB.createFavorites(user);

  if (
    registrationParams.password != registrationParams.password2 ||
    registrationParams.username == "" ||
    registrationParams.pasword == ""
  ) {
    res.redirect("/signup?error=Passwords must match.");
  } else {
    const payload = {
      username: registrationParams.username,
      password: authUtils.encrypt(registrationParams.password),
    };

    users.findOne({ username: registrationParams.username }, function (
      err,
      user
    ) {
      if (err) {
        return next(err);
      }
      if (user) {
        res.redirect("/signup?error=Username already exists.");
      } else {
        users.insertOne(payload, (err) => {
          if (err) {
            res.redirect("/signup?error=Error signing in.");
          }
        });
        res.redirect("/signin");
      }
    });
  }
}); //pokedb

router.get("/player", async (req, res) => {
  const player = await myDB.getPlayer("alex");
  res.json(player); // get player db
});

router.get("/pokemon", async (req, res) => {
  const pokemon = await myDB.getPokemon();
  res.json(pokemon); // get pokemon db
});

router.post("/updateTeam", async (req, res) => {
  let dex = req.body.position;
  dex = dex - 1;
  let pokemon = req.body.newPokemon;
  let user = req.body.user;
  myDB.setPokemon(user, "team", dex, pokemon);
  res.redirect("/player"); // redirect to home page
});

router.post("/newFav", async (req, res) => {
  let pokemon = req.body.newPokemon;
  let user = req.body.user;
  myDB.addFavorites(user, pokemon);
  res.redirect("/"); // redirect to home page
});

router.post("/removeFav", async (req, res) => {
  let pokemon = req.body.removeMon;
  let user = req.body.player;
  await myDB.removeFavorite(user, pokemon);
  res.redirect("/"); // redirect to home page
});

router.get("/start", async (req, res) => {
  myDB.loadPokemon();
  const pokemon = await myDB.getPokemon();
  res.json(pokemon);
});

router.post("/newUser", async (req, res) => {
  let user = req.body.newUsername;
  if (user != "") {
    await myDB.createTeam(user);
    await myDB.createFavorites(user);
  }
  res.redirect("/"); // redirect to home page
});

router.post("/deleteUser", async (req, res) => {
  let user = req.body.deletedUser;
  myDB.deletePlayer(user);
  res.redirect("/"); // redirect to home page
});

router.get("/favorites", async (req, res) => {
  const favs = await myDB.getFavorites();
  res.json(favs); // redirect to home page
});

module.exports = router;
