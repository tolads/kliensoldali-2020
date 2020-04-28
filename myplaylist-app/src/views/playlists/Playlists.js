import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getPlaylistsWithTracks } from "../../state/selectors";
import { addPlaylist } from "../../state/playlists/actions";
import { PlaylistLists } from "./PlaylistLists";
import { Playlist } from "./Playlist";
import { TrackDetails } from "./TrackDetails";
import { AddNewPlaylist } from "./AddNewPlaylist";

export const Playlists = () => {
  const dispatch = useDispatch();
  const { playlistId, trackId } = useParams();
  const selectedPlaylistId = playlistId;
  const selectedTrackId = trackId;

  const [open, setOpen] = useState(false);

  const playlistsWithTracks = useSelector(getPlaylistsWithTracks);
  console.log({ playlistsWithTracks });

  const selectedPlaylist = playlistsWithTracks.find(({ id }) => id === selectedPlaylistId);
  const selectedTrack =
    selectedPlaylist && selectedPlaylist.tracks.find(({ id }) => id === selectedTrackId);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="ui container">
        <h1>My Playlists</h1>
        <div className="ui stackable two column grid">
          <div className="ui six wide column">
            <h3>Playlists</h3>
            <PlaylistLists playlists={playlistsWithTracks} addNew={handleOpen} />
          </div>
          {selectedPlaylist && <Playlist {...selectedPlaylist} />}
        </div>
        <div className="ui divider"></div>
        <TrackDetails {...selectedTrack} />
      </div>

      <AddNewPlaylist
        open={open}
        onClose={handleClose}
        onSubmit={({ title }) => dispatch(addPlaylist(title))}
      />
    </>
  );
};
