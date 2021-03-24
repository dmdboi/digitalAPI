
const { login, verify } = require("../services/auth");

exports.login = async (req, res, next) => {
  const { username, password } = req.body

  const userDB = {
    username: "username",
    password: "password"
  }

  if(!username || !password) {
    return res.status(400).send({ message: "Missing Credentials"})
  }

  if (username !== userDB.username) {
    return res.status(400).send({ message: "No User Exists" });
  }

  if(username === userDB.username && password !== userDB.password) {
    return res.status(400).send({ message: "Invalid Password" });
  }

  const token = await login(username);
  return res.status(200).send({ token });
};

exports.verify = async (req, res, next) => {
  const user = await verify(req.user);

  return res.status(200).send({ user });
};