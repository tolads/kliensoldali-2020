const { authenticate } = require('@feathersjs/authentication').hooks;

const getRelatedTracks = require('../../hooks/get-related-tracks');

const updateTracks = require('../../hooks/update-tracks');

const cleanRelatedTracks = require('../../hooks/clean-related-tracks');

const cleanRelatedTracksFromArray = require('../../hooks/clean-related-tracks-from-array');

const addUser = require('../../hooks/add-user');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    // all:  [],
    find: [getRelatedTracks()],
    get: [getRelatedTracks()],
    create: [addUser()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [cleanRelatedTracksFromArray()],
    get: [cleanRelatedTracks()],
    create: [updateTracks()],
    update: [updateTracks()],
    patch: [updateTracks()],
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
