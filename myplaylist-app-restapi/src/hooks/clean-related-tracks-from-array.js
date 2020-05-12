// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const playlists = context.result.data.map(playlist => {
      const pl = playlist.toJSON();
      return {
        ...pl,
        tracks: pl.tracks.map(track => track.id)
      };
    });
    context.result = {
      ...context.result,
      data: playlists
    };
    return context;
  };
};
