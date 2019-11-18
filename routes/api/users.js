const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jsw = require('jsonwebtoken');
const key = require('../../config/keys');

router.get('./test',  (req, res) => res.json({ msg:  "You made it bud"}));

router.post('/signup', (req, res) => {
    User.findOne({ email: req.body.email })
        .then( user => {
            if (user) {
                return res.status(400).json({ email: "That Email is already registered"})
            } else {
                const newUser = new User({
                    email: req.body.email,
                    password: req.body.password
                })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then( user => res.json(user))
                            .catch( err => console.log(err))
                    })
                })
            }
        })
})

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    user.findOne({ email })
        .then( user => {
            if (!user) {
                return resjson({ msg: "Success"})
            } else {
                return res.status(400).json({ password: "Incorrect Password"})
            }
        })
})

module.exports = router;