import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { examplePlaylists } from "../../domain/playlist";
import { exampleTracks } from "../../domain/track";
import { PlaylistLists } from "./PlaylistLists";
import { Playlist } from "./Playlist";
import { TrackDetails } from "./TrackDetails";
import { AddNewPlaylist } from "./AddNewPlaylist";

export const Playlists = () => {
  const { playlistId, trackId } = useParams();
  const selectedPlaylistId = Number(playlistId);
  const selectedTrackId = Number(trackId);

  const [playlists, setPlaylists] = useState(examplePlaylists);
  const [open, setOpen] = useState(false);

  const selectedPlaylist = playlists.find(({ id }) => id === selectedPlaylistId);
  const selectedTrack = exampleTracks.find(({ id }) => id === selectedTrackId);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addNewPlaylist = ({ title }) => {
    const reducer = (acc, curr) => Math.max(acc, curr.id);
    const maxId = playlists.reduce(reducer, 0);
    setPlaylists([...playlists, { id: maxId + 1, title: title, tracks: [] }]);
  };

  return (
    <>
      <div className="ui container">
        <h1>My Playlists</h1>
        <div className="ui stackable two column grid">
          <div className="ui six wide column">
            <h3>Playlists</h3>
            <PlaylistLists playlists={playlists} addNew={handleOpen} />
          </div>
          {selectedPlaylist && <Playlist {...selectedPlaylist} />}
        </div>
        <div className="ui divider"></div>
        <TrackDetails {...selectedTrack} />
      </div>

      <AddNewPlaylist open={open} onClose={handleClose} onSubmit={addNewPlaylist} />
    </>
  );
};
