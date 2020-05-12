const { authenticate } = require('@feathersjs/authentication').hooks;

const addUser = require('../../hooks/add-user');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    // all: [],
    find: [],
    get: [],
    create: [addUser()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
