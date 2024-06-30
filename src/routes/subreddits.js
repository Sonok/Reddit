const express = require('express');
const router = express.Router();
const subredditsController = require('../controllers/subredditsController');

router.get('/:subreddit_id/posts', subredditsController.getPosts);
router.post('/:subreddit_id/posts', subredditsController.createPost);

module.exports = router;
