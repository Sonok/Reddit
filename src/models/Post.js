const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    subreddit_id: {
        type: String,  // Change this to String
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user_id: {
        type: String,  // Change this to String
        required: true
    },
    upvotes: {
        type: Number,
        default: 0
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

module.exports = mongoose.model('Post', postSchema);

