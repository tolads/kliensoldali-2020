import { ADD_TRACK, UPDATE_TRACK, DELETE_TRACK, SET_TRACKS, START_TRACK_FETCHING } from "./actions";

const initialState = { items: [], fetching: false };

export const tracksReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === START_TRACK_FETCHING) {
    return {
      ...state,
      fetching: true,
    };
  }

  if (type === SET_TRACKS) {
    return {
      items: payload,
      fetching: false,
    };
  }

  if (type === ADD_TRACK) {
    return {
      items: [...state.items, payload],
      fetching: false,
    };
  }

  if (type === UPDATE_TRACK) {
    const mapper = (track) => {
      return track.id === payload.id ? payload : track;
    };
    return {
      items: state.items.map(mapper),
      fetching: false,
    };
  }

  if (type === DELETE_TRACK) {
    return {
      items: state.items.filter((track) => track.id !== payload.id),
      fetching: false,
    };
  }

  return state;
};
