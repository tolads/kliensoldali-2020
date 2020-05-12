const users = require('./users/users.service.js');
const tracks = require('./tracks/tracks.service.js');
const playlists = require('./playlists/playlists.service.js');
const notifications = require('./notifications/notifications.service.js');
const messages = require('./messages/messages.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(tracks);
  app.configure(playlists);
  app.configure(notifications);
  app.configure(messages);
};
