import React from "react";

import { exampleTracks } from "../../domain/track";
import { Track } from "./Track";
import { AddNewTrack } from "./AddNewTrack";

export const Tracks = () => {
  const tracks = exampleTracks;

  return (
    <React.Fragment>
      <div className="ui container">
        <button className="ui right floated green button" id="newModal">
          <i className="plus icon"></i>
          New track
        </button>
        <h1>Tracks</h1>
        <table className="ui celled striped table">
          <thead>
            <tr>
              <th>Artist</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track) => (
              <Track key={track.id} track={track} />
            ))}
          </tbody>
        </table>
      </div>

      <AddNewTrack />
    </React.Fragment>
  );
};
