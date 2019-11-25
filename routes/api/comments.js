
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Comment = require('../../models/Comment');
const validateCommentInput = require('../../validation/comment');


// router.get('./test', (req, res) => res.json({ msg: "You made it bud" }));


router.get('/', (req, res) => {
    Comment.find()
        .sort({ date: -1 })
        .then(comments => res.json(comments))
});



router.get('/:id', (req, res) => {
    Comment.findById(req.params.id)
        .then(comment => res.json(comment))
});


router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateCommentInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newComment = new Comment({
            text: req.body.text,
        });

        newComment.save().then(comment => res.json(comment));
    }
);

module.exports = router;