
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
        .then(comments => res.json(tweets))
        .catch(err => res.status(404).json({ nocommentsfound: 'No comment found' }));
});

// router.get('/user/:user_id', (req, res) => {
//     Tweet.find({ user: req.params.user_id })
//         .then(tweets => res.json(tweets))
//         .catch(err =>
//             res.status(404).json({ notweetsfound: 'No tweets found from that user' }
//             )
//         );
// });

router.get('/:id', (req, res) => {
    Comment.findById(req.params.id)
        .then(comment => res.json(comment))
        .catch(err =>
            res.status(404).json({ nocommentfound: 'No comment found with that ID' })
        );
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