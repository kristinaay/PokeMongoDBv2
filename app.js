const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const Session = require("express-session");
const Passport = require("passport");
const bodyParser = require("body-parser");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  Session({
    secret: "session secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(Passport.initialize());
app.use(Passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.locals.loggedIn = req.isAuthenticated();
  next();
});

Passport.serializeUser((user, done) => {
  done(null, user._id);
});

Passport.deserializeUser((id, done) => {
  done(null, { id });
});

app.use("/", indexRouter);

app.use(express.static(path.join(__dirname, "front/build")));
app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "./front/build", "index.html"));
});

module.exports = app;
