// import React, { createContext, useState, useEffect } from "react";
// import PropTypes from "prop-types";

// import * as api from "../api";

// export const PlaylistsContext = createContext();

// export const PlaylistsProvider = ({ children }) => {
//   const [playlists, setPlaylists] = useState([]);

//   useEffect(() => {
//     api.playlists.getAll().then((playlistsData) => setPlaylists(playlistsData));
//   }, []);

//   const addNewPlaylist = async ({ title }) => {
//     const newPlaylist = await api.playlists.create({ title: title, tracks: [] });
//     setPlaylists([...playlists, newPlaylist]);
//   };

//   const addTrackToPlaylist = async (playlistId, trackId) => {
//     const playlist = playlists.find((pl) => pl.id === playlistId);
//     if (playlist.tracks.some((id) => id === trackId)) return;
//     const updatedPlaylist = { ...playlist, tracks: [...playlist.tracks, trackId] };
//     await api.playlists.update(updatedPlaylist);
//     const mapper = (playlist) => {
//       if (playlist.id !== playlistId) return playlist;
//       return updatedPlaylist;
//     };
//     setPlaylists(playlists.map(mapper));
//   };

//   const deleteTrackFromPlaylist = async (trackIdParam) => {
//     const mapper = async (playlist) => {
//       if (playlist.tracks.every((id) => id !== trackIdParam)) return playlist;

//       const newPlaylist = {
//         ...playlist,
//         tracks: playlist.tracks.filter((trackId) => trackIdParam !== trackId),
//       };
//       await api.playlists.update(newPlaylist);
//       console.log(newPlaylist);
//       return newPlaylist;
//     };
//     setPlaylists(await Promise.all(playlists.map(mapper)));
//   };

//   console.log({ playlists });
//   const value = { playlists, addNewPlaylist, addTrackToPlaylist, deleteTrackFromPlaylist };

//   return <PlaylistsContext.Provider value={value}>{children}</PlaylistsContext.Provider>;
// };

// PlaylistsProvider.propTypes = {
//   children: PropTypes.node,
// };
