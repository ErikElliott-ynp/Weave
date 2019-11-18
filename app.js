const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const bodyParser = require('body-parser');
const passport = require('passport');


mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB as smooth as butter"))
    .catch( err => console.log(err))

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/api/users', users);


const port = process.env.PORT || 5000;

app.listen( port, () => console.log(`Server is humming on Port  ${port}`))

