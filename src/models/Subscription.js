const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    subreddit_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subreddit', required: true }
});

module.exports = mongoose.model('Subscription', SubscriptionSchema);
