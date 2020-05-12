// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const tracks = sequelizeClient.define('tracks', {
    artist: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    length: {
      type: DataTypes.STRING,
      allowNull: true
    },
    thumbnailURL: {
      type: DataTypes.STRING,
      allowNull: true
    },
    spotifyURL: {
      type: DataTypes.STRING,
      allowNull: true
    },
    chordsURL: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lyricsURL: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  tracks.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    const {users, playlists} = models;
    tracks.belongsTo(users);
    tracks.belongsToMany(playlists, {through: 'PlaylistTrack'});
  };

  return tracks;
};
