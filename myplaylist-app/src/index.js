import React from "react";
import ReactDOM from "react-dom";

import { PlaylistsProvider } from "./state/PlaylistsProvider";
import { TracksProvider } from "./state/TracksProvider";
import { App } from "./views/App";

ReactDOM.render(
  <PlaylistsProvider>
    <TracksProvider>
      <App />
    </TracksProvider>
  </PlaylistsProvider>,
  document.getElementById("root")
);
