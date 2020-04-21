import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import { playlistsReducer } from "./playlists/reducer";
import { tracksReducer } from "./tracks/reducer";

// rootReducer(state, action) => state
const rootReducer = combineReducers({ playlists: playlistsReducer, tracks: tracksReducer });

export const configureStore = (preloadedState) => {
  const logger = createLogger({
    collapsed: true,
  });

  return createStore(rootReducer, preloadedState, applyMiddleware(logger));
};
