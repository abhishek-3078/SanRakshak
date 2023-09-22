const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
    author: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    replies: [this], // Array of nested replies, referencing the same schema
});

const communityForumSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    disaster: { type: mongoose.Schema.Types.ObjectId, ref: 'Disaster', required: true },
    createdAt: { type: Date, default: Date.now },
    replies: [replySchema], // Top-level replies
  });
  
const CommunityForumPost = mongoose.model('CommunityForumPost', communityForumSchema);

module.exports = CommunityForumPost;
