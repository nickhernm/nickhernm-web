const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const auth = require('../middleware/auth');

// Get comments for a post
router.get('/:post', async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.post }).populate('user', 'username');
    res.json(comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Add a comment
router.post('/', auth, async (req, res) => {
  try {
    const newComment = new Comment({
      user: req.user.id,
      post: req.body.post,
      content: req.body.content
    });

    const comment = await newComment.save();
    res.json(comment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;