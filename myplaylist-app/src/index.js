import React from "react";
import ReactDOM from "react-dom";

import { TracksProvider } from "./state/TracksProvider";
import { App } from "./views/App";

ReactDOM.render(
  <TracksProvider>
    <App />
  </TracksProvider>,
  document.getElementById("root")
);
