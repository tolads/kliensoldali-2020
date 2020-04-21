import { createStore, combineReducers } from "redux";

import { playlistsReducer } from "./playlists/reducer";
import { tracksReducer } from "./tracks/reducer";

// rootReducer(state, action) => state
const rootReducer = combineReducers({ playlists: playlistsReducer, tracks: tracksReducer });

export const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState);
};
