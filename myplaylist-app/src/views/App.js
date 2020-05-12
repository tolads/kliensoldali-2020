import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getIsLoggedIn } from "state/auth/selectors";
import { fetchTracks } from "../state/tracks/actions";
import { fetchPlaylists } from "../state/playlists/actions";
import { Layout } from "./components/Layout";
import { Home } from "./home/Home";
import { Playlists } from "./playlists/Playlists";
import { Search } from "./search/Search";
import { Tracks } from "./tracks/Tracks";

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchPlaylists());
      dispatch(fetchTracks());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/playlists/:playlistId?/:trackId?">
            <Playlists />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/tracks">
            <Tracks />
          </Route>
          {/* <Route>
          {() => {
            return "Page not found";
          }}
        </Route> */}
          <Redirect to="/" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
