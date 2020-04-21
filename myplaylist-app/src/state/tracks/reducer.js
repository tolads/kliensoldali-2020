import { exampleTracks } from "../../domain/track";

const initialState = { items: exampleTracks };

export const tracksReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === "ADD_TRACK") {
    return {
      items: [...state.items, payload],
    };
  }

  if (type === "UPDATE_TRACK") {
    const mapper = (track) => {
      return track.id === payload.id ? payload : track;
    };
    return {
      items: state.items.map(mapper),
    };
  }

  if (type === "DELETE_TRACK") {
    return {
      items: state.items.filter((track) => track.id !== payload.id),
    };
  }

  return state;
};
