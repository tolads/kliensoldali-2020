// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const {tracks} = context.data;
    if (!tracks) return context;
    
    const sequelize = context.app.get('sequelizeClient');
    const { playlists } = sequelize.models;
    const id = context.result.id;
    const playlist = await playlists.findByPk(id);
    await playlist.setTracks(tracks);
    context.result.tracks = context.data.tracks;
    
    return context;
  };
};
