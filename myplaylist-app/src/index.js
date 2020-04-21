import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { configureStore } from "./state/store";
import { PlaylistsProvider } from "./state/PlaylistsProvider";
import { TracksProvider } from "./state/TracksProvider";
import { App } from "./views/App";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PlaylistsProvider>
      <TracksProvider>
        <App />
      </TracksProvider>
    </PlaylistsProvider>
  </Provider>,
  document.getElementById("root")
);
