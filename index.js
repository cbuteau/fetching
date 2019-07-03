
var exports = {
  fetching: {
    get: function(options) {
      return fetch(options);
    },
    post: function(options) {
      options.method = 'POST';
      return fetch(options);
    }
  }
};
