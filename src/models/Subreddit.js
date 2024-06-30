const express = require('express');
const router = express.Router();
const Post = require('../models/Post'); // Ensure the path is correct

// Create a new post in a subreddit
router.post('/:subreddit_id/posts', async (req, res) => {
    const { title, content, user_id } = req.body;
    const post = new Post({
        subreddit_id: req.params.subreddit_id,  // This should be a string
        title,
        content,
        user_id,  // This should be a string
        upvotes: 0,
        comments: []
    });

    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
