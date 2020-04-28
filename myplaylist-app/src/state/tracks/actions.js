export const ADD_TRACK = "ADD_TRACK";
export const UPDATE_TRACK = "UPDATE_TRACK";
export const DELETE_TRACK = "DELETE_TRACK";
export const SET_TRACKS = "SET_TRACKS";

export const setTracks = (tracks) => ({
  type: SET_TRACKS,
  payload: tracks,
});

export const addTrack = (track) => ({
  type: ADD_TRACK,
  payload: { ...track, id: Date.now().toString() },
});

export const updateTrack = (track) => ({
  type: UPDATE_TRACK,
  payload: track,
});

export const deleteTrack = (id) => ({
  type: DELETE_TRACK,
  payload: { id },
});
