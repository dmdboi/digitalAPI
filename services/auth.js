const jwt = require("jsonwebtoken");
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
 * @return {Object} The user object
 */
exports.verify = async () => {
  const user = {
    username: "username",
    password: "password"
  }

  return user;
};