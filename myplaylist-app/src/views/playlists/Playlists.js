import React, { useState } from "react";

import { examplePlaylists } from "../../domain/playlist";
import { exampleTracks } from "../../domain/track";
import { PlaylistLists } from "./PlaylistLists";
import { Playlist } from "./Playlist";
import { TrackDetails } from "./TrackDetails";
import { AddNewPlaylist } from "./AddNewPlaylist";

export const Playlists = () => {
  const [playlists, setPlaylists] = useState(examplePlaylists);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(2);
  const [selectedTrackId, setSelectedTrackId] = useState(1);
  const [open, setOpen] = useState(false);

  const selectedPlaylist = playlists.find(({ id }) => id === selectedPlaylistId);
  const selectedTrack = exampleTracks.find(({ id }) => id === selectedTrackId);

  const handlePlaylistChange = (id) => {
    setSelectedPlaylistId(id);
    setSelectedTrackId(null);
  };

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
            <PlaylistLists
              playlists={playlists}
              selected={selectedPlaylistId}
              onSelect={handlePlaylistChange}
              addNew={handleOpen}
            />
          </div>
          <Playlist
            {...selectedPlaylist}
            selected={selectedTrackId}
            onSelect={setSelectedTrackId}
          />
        </div>
        <div className="ui divider"></div>
        <TrackDetails {...selectedTrack} />
      </div>

      <AddNewPlaylist open={open} onClose={handleClose} onSubmit={addNewPlaylist} />
    </>
  );
};
