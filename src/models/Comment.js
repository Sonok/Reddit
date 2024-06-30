const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    post_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    creation_time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', CommentSchema);
