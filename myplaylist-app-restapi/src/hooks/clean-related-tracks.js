// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const playlist = context.result.toJSON();
    context.result =  {
      ...playlist,
      tracks: playlist.tracks.map(track => track.id)
    };
    return context;
  };
};
