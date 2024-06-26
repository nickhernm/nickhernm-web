const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// Get all comments for a post
router.get('/:postId', async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId }).sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new comment
router.post('/', async (req, res) => {
  const comment = new Comment({
    postId: req.body.postId,
    author: req.body.author,
    content: req.body.content
  });

  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;