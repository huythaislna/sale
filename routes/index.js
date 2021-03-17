var express = require('express');
var router = express.Router();
const Post = require('../models/post')

/* GET home page. */
router.get('/', async function(req, res, next) {
  const posts = await Post.find()
  console.log(posts)
  res.render('index', { posts: posts});
});


module.exports = router;
