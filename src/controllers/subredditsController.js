const Post = require('../models/Post');

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find({ subreddit_id: req.params.subreddit_id }).sort({ creation_time: -1 });
        res.json(posts);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.createPost = async (req, res) => {
    try {
        const post = new Post({
            subreddit_id: req.params.subreddit_id,
            user_id: req.body.user_id,
            title: req.body.title,
            content: req.body.content
        });
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
