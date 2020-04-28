import { ADD_PLAYLIST, UPDATE_PLAYLIST, SET_PLAYLISTS } from "./actions";

const initialState = { items: [] };

export const playlistsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === SET_PLAYLISTS) {
    return {
      items: payload,
    };
  }

  if (type === ADD_PLAYLIST) {
    return {
      items: [...state.items, payload],
    };
  }

  if (type === UPDATE_PLAYLIST) {
    const mapper = (playlist) => {
      if (playlist.id !== payload.id) return playlist;
      return payload;
    };
    return {
      items: state.items.map(mapper),
    };
  }

  return state;
};
