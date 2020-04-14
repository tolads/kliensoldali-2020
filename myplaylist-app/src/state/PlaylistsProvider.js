import React, { createContext, useState, useRef } from "react";
import PropTypes from "prop-types";

import "../api";
import { examplePlaylists } from "../domain/playlist";

export const PlaylistsContext = createContext();

export const PlaylistsProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState(examplePlaylists);
  const maxPlaylistId = useRef(playlists.reduce((acc, curr) => Math.max(acc, curr.id), 0));

  const addNewPlaylist = ({ title }) => {
    maxPlaylistId.current++;
    setPlaylists([...playlists, { id: maxPlaylistId.current, title: title, tracks: [] }]);
  };

  const addTrackToPlaylist = (playlistId, trackId) => {
    const mapper = (playlist) => {
      if (playlist.id !== playlistId) return playlist;
      if (playlist.tracks.some((track) => track.id === trackId)) return playlist;
      return {
        ...playlist,
        tracks: [...playlist.tracks, trackId],
      };
    };
    setPlaylists(playlists.map(mapper));
  };

  const deleteTrackFromPlaylist = (trackIdParam) => {
    const mapper = (playlist) => {
      return {
        ...playlist,
        tracks: playlist.tracks.filter((trackId) => trackIdParam !== trackId),
      };
    };
    setPlaylists(playlists.map(mapper));
  };

  console.log({ playlists });
  const value = { playlists, addNewPlaylist, addTrackToPlaylist, deleteTrackFromPlaylist };

  return <PlaylistsContext.Provider value={value}>{children}</PlaylistsContext.Provider>;
};

PlaylistsProvider.propTypes = {
  children: PropTypes.node,
};
