import { ADD_TRACK, UPDATE_TRACK, DELETE_TRACK, SET_TRACKS } from "./actions";

const initialState = { items: [] };

export const tracksReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === SET_TRACKS) {
    return {
      items: payload,
    };
  }

  if (type === ADD_TRACK) {
    return {
      items: [...state.items, payload],
    };
  }

  if (type === UPDATE_TRACK) {
    const mapper = (track) => {
      return track.id === payload.id ? payload : track;
    };
    return {
      items: state.items.map(mapper),
    };
  }

  if (type === DELETE_TRACK) {
    return {
      items: state.items.filter((track) => track.id !== payload.id),
    };
  }

  return state;
};
