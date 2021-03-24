const userService = require("../services/users");

const { login, verify } = require("../services/auth");

exports.register = async (req, res, next) => {
  let { username, password } = req.body 

  if(!username || !password) {
    return res.status(400).send({ message: "Missing Credentials"})
  }

  const user = await userService.create(username, password);

  user.password = null

  //In production, DO NOT send back the full user object. This is for demo purposes
  return res
    .status(200)
    .send({ user });
};

exports.login = async (req, res, next) => {
  let { username, password } = req.body 

  if(!username || !password) {
    return res.status(400).send({ message: "Missing Credentials"})
  }

  let user = await userService.find({ username: username });

  if (!user) {
    return res.status(400).send({ message: "No User Exists" });
  }

  if(!user.validPassword(password)) {
    return res.status(400).send({ message: "Invalid Password" });
  }

  const token = await login(username);
  return res.status(200).send({ token });
};

exports.verify = async (req, res, next) => {
  const user = await verify(req.user);

  return res.status(200).send({ user });
};