const mongoose = require('mongoose');

const UpvoteSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    post_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true }
});

module.exports = mongoose.model('Upvote', UpvoteSchema);
