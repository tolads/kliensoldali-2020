import { examplePlaylists } from "../../domain/playlist";

const initialState = { items: examplePlaylists };

export const playlistsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  return state;
};
