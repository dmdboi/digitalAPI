const userService = require("../services/users");

const { login, verify, register } = require("../services/auth");

exports.register = async (req, res, next) => {
  const user = await register(req.body);

  user.password = null

  return res
    .status(200)
    .send({ user: user });
};

exports.login = async (req, res, next) => {
  let user = await userService.find({ email: req.body.email });

  if (!user) {
    console.log("No user exists");
    return res.status(400).send({ message: "No User Exists" });
  }

  const token = await login(req.body);
  return res.status(200).send({ token });
};

exports.verify = async (req, res, next) => {
  const user = await verify(req.user);

  return res.status(200).send({ user });
};

exports.updateAccount = async (req, res, next) => {
  const { uuid } = req.user;

  let user = await userService.find({ uuid: uuid });

  const { email, password, username } = req.body;

  let update = {
    username: username,
    email: email,
  };

  if (!user.validPassword(password)) {
    console.log("Password Change");
    update.password = await user.encryptPassword(password);
  }

  await userService.update({ uuid: uuid }, update);

  return res.status(200).json({ message: "Account Updated" });
};

exports.deleteAccount = async (req, res, next) => {
  let user = await userService.find({ uuid: req.user.uuid });

  await userService.delete({ uuid: req.user.uuid });

  return res.status(200).json({ message: "Account Deleted" });
};

exports.me = async (req, res, next) => {
  let user = await userService.find({ uuid: req.user.uuid });

  user.password = null;

  return res.status(200).send({ user });
};
