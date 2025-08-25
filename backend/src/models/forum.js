const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
    author: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    media:[String],
    replies: [this], // Array of nested replies, referencing the same schemac
});

const communityForumSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    disaster: { type: mongoose.Schema.Types.ObjectId, ref: 'Disaster', required: true },
    createdAt: { type: Date, default: Date.now },
    media:[String],
    replies: [replySchema], // Top-level replies
  });
const Post = mongoose.model('Post', communityForumSchema);

module.exports = {Post};
