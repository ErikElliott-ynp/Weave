const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const bodyParser = require('body-parser');
const passport = require('passport');
const ImgurStrategy = require("passport-imgur").Strategy;

const IMGUR_CONSUMER_KEY = require('./config/keys').imgur_id;
const IMGUR_CONSUMER_SECRET = require("./config/keys").imgur_secret;
        
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

passport.use(
  new ImgurStrategy(
    {
      clientID: IMGUR_CONSUMER_KEY,
      clientSecret: IMGUR_CONSUMER_SECRET,
      callbackURL: "http://127.0.0.1:3000/auth/imgur/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOrCreate({ imgurId: profile.id }, function(err, user) {
        return done(err, user);
      });
    }
  )
);

app.get("/auth/imgur", passport.authenticate("imgur"));

app.get(
  "/auth/imgur/callback",
  passport.authenticate("imgur", { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);


const youtube = require('./routes/api/youtube');

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB as smooth as butter"))
    .catch( err => console.log(err))

app.get("/", (req, res) => res.send('Sup doggies'))

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/api/users', users);

app.use('/api/youtube', youtube);

const port = process.env.PORT || 5000;

app.listen( port, () => console.log(`Server is humming on Port  ${port}`))

