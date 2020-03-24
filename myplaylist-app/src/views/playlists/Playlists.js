import React from "react";

import { examplePlaylists } from "../../domain/playlist";
import { exampleTracks } from "../../domain/track";
import { PlaylistLists } from "./PlaylistLists";
import { Playlist } from "./Playlist";
import { TrackDetails } from "./TrackDetails";

export const Playlists = () => {
  const selectedPlaylistId = 2;
  const selectedPlaylist = examplePlaylists.find(({ id }) => id === selectedPlaylistId);
  const selectedTrackId = 1;
  const selectedTrack = exampleTracks.find(({ id }) => id === selectedTrackId);

  return (
    <>
      <div className="ui container">
        <h1>My Playlists</h1>
        <div className="ui stackable two column grid">
          <div className="ui six wide column">
            <h3>Playlists</h3>
            <PlaylistLists playlists={examplePlaylists} selected={selectedPlaylistId} />
          </div>
          <Playlist {...selectedPlaylist} selected={selectedTrackId} />
        </div>
        <div className="ui divider"></div>
        <TrackDetails {...selectedTrack} />
      </div>

      <div className="ui modal">
        <i className="close icon"></i>
        <div className="header">Add new Playlist</div>
        <div className="image content">
          <div className="description">
            <div className="ui form">
              <div className="field">
                <label>Name</label>
                <input required type="text" placeholder="My Playlist" />
              </div>
            </div>
          </div>
        </div>
        <div className="actions">
          <div className="ui black deny button">Cancel</div>
          <div className="ui positive right labeled icon button">
            Add
            <i className="plus icon"></i>
          </div>
        </div>
      </div>
    </>
  );
};
