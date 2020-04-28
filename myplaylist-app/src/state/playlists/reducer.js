import { ADD_PLAYLIST, ADD_TRACK_TO_PLAYLIST, SET_PLAYLISTS } from "./actions";
import { DELETE_TRACK } from "../tracks/actions";

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

  if (type === ADD_TRACK_TO_PLAYLIST) {
    const mapper = (playlist) => {
      if (playlist.id !== payload.playlistId) return playlist;
      if (playlist.tracks.some((trackId) => trackId === payload.trackId)) return playlist;
      return {
        ...playlist,
        tracks: [...playlist.tracks, payload.trackId],
      };
    };
    return {
      items: state.items.map(mapper),
    };
  }

  if (type === DELETE_TRACK) {
    const mapper = (playlist) => {
      return {
        ...playlist,
        tracks: playlist.tracks.filter((trackId) => trackId !== payload.id),
      };
    };
    return {
      items: state.items.map(mapper),
    };
  }

  return state;
};
