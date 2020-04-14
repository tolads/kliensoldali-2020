import React, { createContext, useState, useRef } from "react";
import PropTypes from "prop-types";

import { examplePlaylists } from "../domain/playlist";

export const PlaylistsContext = createContext();

export const PlaylistsProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState(examplePlaylists);
  const maxPlaylistId = useRef(playlists.reduce((acc, curr) => Math.max(acc, curr.id), 0));

  const addNewPlaylist = ({ title }) => {
    maxPlaylistId.current++;
    setPlaylists([...playlists, { id: maxPlaylistId.current, title: title, tracks: [] }]);
  };

  const addTrackToPlaylist = (playlistId, trackParam) => {
    const mapper = (playlist) => {
      if (playlist.id !== playlistId) return playlist;
      if (playlist.tracks.some((track) => track.id === trackParam.id)) return playlist;
      return {
        ...playlist,
        tracks: [...playlist.tracks, trackParam],
      };
    };
    setPlaylists(playlists.map(mapper));
  };

  const value = { playlists, addNewPlaylist, addTrackToPlaylist };

  return <PlaylistsContext.Provider value={value}>{children}</PlaylistsContext.Provider>;
};

PlaylistsProvider.propTypes = {
  children: PropTypes.node,
};
