const users = require('./users/users.service.js');
const polls = require('./polls/polls.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(polls);
};
