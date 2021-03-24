const jwt = require("jsonwebtoken");

const userService = require("./users");
const config = require("../config/config");

/**
 * @description Authentication via Username & Password
 * @param {Object} User An object with a User's credentials.
 * @return {String} A JSON Web Token
 */
exports.login = async (username) => {
  const token = jwt.sign(
    { username: username},
    config.JWT_SECRET,
    {
        expiresIn: "3h",
    });
    return token;
}

/**
 * @description Verifies if a JWT is valid
 * @param {Object} User user Token object with a user uuid and role.
 * @return {Object} The user's document from the database minus password
 */
exports.verify = async (user) => {
  const userDocument = await userService.find({ username: user.username });

  userDocument["password"] = null;

  return userDocument;
};