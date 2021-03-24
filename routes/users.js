const express = require("express");
const router = express.Router();

const authentication = require("../middleware/auth");

const userController = require("../controllers/users");

const wrapper = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next).catch(next));

router.post("/login", wrapper(userController.login));

router.use(authentication.check);

//JWT Verification on login
router.get("/verify", wrapper(userController.verify));

module.exports = router;


/**
 * @swagger
 *
 * /users/login:
 *   post:
 *     description: Generates a JWT token to authenticate the user
 *     security: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Demo username is "username"
 *         in: body
 *         required: true
 *         schema:
 *           type: string
 *           example: username
 *       - name: password
 *         description: Demo password is "password"
 *         in: body
 *         required: true
 *         schema:
 *           type: string
 *           example: password
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *         schema:
 *          type: object
 *          properties: 
 *           username:
 *            example: username
 *            type: string
 *           password:
 *            example: password
 *            type: string 
 *     responses:
 *       200:
 *         description: Returns a JWT token
 * /users/verify:
 *   get:
 *     description: Check if JWT is valid and returns user object
 *     security:
 *       - bearerAuth: []
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns an object of the User
 */