const User = require("../models/User");
const uniqid = require("uniqid");

const userService = {
  /**
   * @description Creates a User document in the database
   * @param {Object} body Object containing username and password
   * @return {Object} User Document
   */
  create: async function (username, password) {
    let document = new User();

    document.uuid = uniqid("u");
    document.username = username;
    document.password = document.encryptPassword(password);

    await document.save();

    return document;
  },

  /**
   * @description Finds a User document in the database
   * @param {String} query Database Query
   * @return {Object} User Document
   */
  find: async function (query) {
    let document = await User.findOne(query);
    return document;
  }
};

module.exports = userService;
