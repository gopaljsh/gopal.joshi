//const bodyParser = require('body-parser');

const Post = require('../models/post');

exports.createPost = (req, res, next) => {

  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    imagePath: req.body.imagePath,
    creator: req.userData.userId
  });

  post.save().then(createdPost => {
    res.status(200).json({
      message: 'Post fetched successfully!',
      post: {
        id: createdPost._id,
        title: createdPost.title,
        content: createdPost.content,
        imagePath: createdPost.imagePath,
        creator: createdPost.creator
      }
    });
  });
};

exports.getPosts = (req, res, next) => {
  const pageSize = +req.query.pageSize;
  const currentPage = +req.query.page;
  const postQuery = Post.find();
  let fetchedPost;
  if (pageSize && currentPage) {
    postQuery
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize)
  }
  postQuery
    .then((document) => {
      fetchedPost = document;
      return Post.countDocuments();
    })
    .then(count => {
      res.status(200).json({
        message: 'Post fetched successfully!',
        posts: fetchedPost,
        maxPosts: count
      });
    });
};

exports.getSinglePost = (req, res, next) => {
  Post.findById(req.params.id).then((post) => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404);
    }
  });
};

exports.editPost = (req, res, next) => {
  let imagePath = req.body.imagePath;

  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,
    imagePath: imagePath,
    creator: req.userData.userId
  });

  Post.updateOne({ _id: req.params.id, creator: req.userData.userId }, post)
  .then((result) => {
    if (result.n > 0) {
      res.status(200).json({
        message: "Post updated successfull"
      })
    } else {
      res.status(401).json({
        message: "You are not allowed!"
      });
    }
  });
};

exports.deletePost = (req, res, next) => {
  //console.log(req.params.id);
  Post.deleteOne({_id: req.params.id, creator: req.userData.userId})
    .then((result) => {
      if (result.n > 0) {
        res.status(200).json({
          message: 'Post deleted!'
        })
      } else {
        res.status(401).json({
          message: "You are not allowed!"
        });
      }
  })
};




