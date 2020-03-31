import React, { useState } from "react";

import { exampleTracks } from "../../domain/track";
import { Track } from "./Track";
import { AddNewTrack } from "./AddNewTrack";

export const Tracks = () => {
  const tracks = exampleTracks;
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <div className="ui container">
        <button className="ui right floated green button" id="newModal" onClick={handleOpen}>
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

      <AddNewTrack open={open} onClose={handleClose} onSubmit={console.log} />
    </React.Fragment>
  );
};
