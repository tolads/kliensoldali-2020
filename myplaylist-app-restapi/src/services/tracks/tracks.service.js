// Initializes the `tracks` service on path `/tracks`
const { Tracks } = require('./tracks.class');
const createModel = require('../../models/tracks.model');
const hooks = require('./tracks.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/tracks', new Tracks(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tracks');

  service.hooks(hooks);
};
