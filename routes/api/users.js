const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jsw = require('jsonwebtoken');
const key = require('../../config/keys');
const validRegisterInput = require('../../validation/signup')
const validLoginInput = require('../../validation/login')

router.get('./test',  (req, res) => res.json({ msg:  "You made it bud"}));

router.post('/signup', (req, res) => {
    const { errors, isValid } = validRegisterInput(req.body);
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
                            .then( user => {
                                const payload = { id: user.id, email: user.email };

                                jwt.sign(payload, key.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                                    resn.json({
                                        success: true,
                                        token: "Bearer " + token
                                    });
                                });
                            })
                            .catch( err => console.log(err))
                })
            }
        })
})

router.post('/login', (req, res) => {

    const { errors, isValid} = validLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    user.findOne({ email })
        .then( user => {
            if (!user) {
                errors.email = "Email not Found /:";
                return res.status(400).json(errors);
            }

            bcrypt.compare(password, user.password).then(isMatch  => {
                if (isMatch) {
                    const payload = { id: user.id, name: user.name}; 

                    jwt.sign(payload, keys.save, {expiresIn: 3600}, (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    });
                } else {
                    errors.password = "Incorrect Password";
                    return res.status(400).json(errors);
                }
            })
        })
})

module.exports = router;