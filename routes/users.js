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
