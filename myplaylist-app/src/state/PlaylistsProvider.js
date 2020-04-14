import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import * as api from "../api";

export const PlaylistsContext = createContext();

export const PlaylistsProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    api.playlists.getAll().then((playlistsData) => setPlaylists(playlistsData));
  }, []);

  const addNewPlaylist = async ({ title }) => {
    const newPlaylist = await api.playlists.create({ title: title, tracks: [] });
    setPlaylists([...playlists, newPlaylist]);
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
