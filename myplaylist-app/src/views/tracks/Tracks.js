import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTrack, updateTrack } from "../../state/tracks/actions";
import { getTracks } from "../../state/tracks/selectors";
import { Track } from "./Track";
import { AddOrEditTrack } from "./AddOrEditTrack";

export const Tracks = () => {
  const tracks = useSelector(getTracks);
  const dispatch = useDispatch();
  console.log(tracks);
  const [open, setOpen] = useState(false);
  const [editedTrack, setEditedTrack] = useState({});

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
    if (typeof track.id === "string") {
      dispatch(updateTrack(track));
    } else {
      dispatch(addTrack(track));
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
