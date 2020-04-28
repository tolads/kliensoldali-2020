export const ADD_PLAYLIST = "ADD_PLAYLIST";
export const ADD_TRACK_TO_PLAYLIST = "ADD_TRACK_TO_PLAYLIST";
export const SET_PLAYLISTS = "SET_PLAYLISTS";

export const setPlaylists = (playlists) => ({
  type: SET_PLAYLISTS,
  payload: playlists,
});

export const addPlaylist = (title) => ({
  type: ADD_PLAYLIST,
  payload: { title, id: Date.now().toString(), tracks: [] },
});

export const addTrackToPlaylist = (playlistId, trackId) => ({
  type: ADD_TRACK_TO_PLAYLIST,
  payload: { playlistId, trackId },
});
