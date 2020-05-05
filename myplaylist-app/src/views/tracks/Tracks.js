import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTrack, updateTrack } from "../../state/tracks/actions";
import { getTracks, getIsTracksFetching } from "../../state/tracks/selectors";
import { Track } from "./Track";
import { AddOrEditTrack } from "./AddOrEditTrack";

export const Tracks = () => {
  const tracks = useSelector(getTracks);
  const fetching = useSelector(getIsTracksFetching);
  const dispatch = useDispatch();
  console.log({ tracks, fetching });
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
        <div style={{ position: "relative" }}>
          {fetching && (
            <div className="ui active inverted dimmer">
              <div className="ui large elastic text loader">Loading</div>
            </div>
          )}
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
