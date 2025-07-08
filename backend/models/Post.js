// models/Post.js
const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
  username: String,
  text: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  username: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  replies: [replySchema]
});

module.exports = mongoose.model('Post', postSchema);
