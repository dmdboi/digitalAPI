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

/**
 * @swagger
 *
 * /api/posts:
 *   get:
 *     description: Returns all posts from dinotest.wpengine.com/
 *     security:
 *       - bearerAuth: []
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns an array of objects
 * 
 * /api/posts/id/{id}:
 *   get:
 *     description: Returns a post with matching id from dinotest.wpengine.com/
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           required: true
 *         description: Post ID i.e 31
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns an array of objects
 * 
 * /api/posts/slug/{slug}:
 *   get:
 *     description: Returns a post with matching slug from dinotest.wpengine.com/
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: slug
 *         schema:
 *           type: string
 *           required: true
 *         description: Post Slug i.e post-3
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns an array of objects
 */