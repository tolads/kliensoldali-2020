import React, { useState, /* useRef, */ useContext } from "react";

import { TracksContext } from "../../state/TracksProvider";
// import { exampleTracks } from "../../domain/track";
import { Track } from "./Track";
import { AddOrEditTrack } from "./AddOrEditTrack";

export const Tracks = () => {
  const { tracks, addNewTrack, editTrack } = useContext(TracksContext);

  // const [tracks, setTracks] = useState(exampleTracks);
  const [open, setOpen] = useState(false);
  const [editedTrack, setEditedTrack] = useState({});

  // const maxTrackId = useRef(tracks.reduce((acc, curr) => Math.max(acc, curr.id), 0));
  // console.log({ maxTrackId });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const startToEdit = (track) => {
    setEditedTrack(track);
    handleOpen();
  };

  const startToAddNew = () => {
    setEditedTrack({});
    handleOpen();
  };

  const handleSubmit = (track) => {
    if (typeof track.id === "number") {
      editTrack(track);
    } else {
      addNewTrack(track);
    }
  };

  return (
    <React.Fragment>
      <div className="ui container">
        <button className="ui right floated green button" id="newModal" onClick={startToAddNew}>
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
              <Track key={track.id} track={track} onEdit={() => startToEdit(track)} />
            ))}
          </tbody>
        </table>
      </div>

      <AddOrEditTrack
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
        track={editedTrack}
      />
    </React.Fragment>
  );
};
