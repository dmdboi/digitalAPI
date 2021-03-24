const axios = require("axios")

exports.default = {
  get(url) {
    return axios
      .get(url)
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  },

  post(url, data) {
    return axios
      .post(url, data)
      .then(function(response) {
        return response
      })
  }
};