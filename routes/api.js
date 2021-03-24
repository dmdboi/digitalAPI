const express = require("express");
const router = express.Router();

const authentication = require("../middleware/auth");

const postController = require("../controllers/posts");

//This catches errors that occur within wrapper() and forwards them to the default error handler in app.js
const wrapper = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next).catch(next));

router.use(authentication.check)

router.get("/posts", wrapper(postController.getPosts));

router.get("/posts/id/:id", wrapper(postController.getPostById));

router.get("/posts/slug/:slug", wrapper(postController.getPostBySlug));

module.exports = router;
