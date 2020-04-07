import React, { createContext, useState, useRef } from "react";
import PropTypes from "prop-types";

import { exampleTracks } from "../domain/track";

export const TracksContext = createContext();

export const TracksProvider = ({ children }) => {
  const [tracks, setTracks] = useState(exampleTracks);
  const maxTrackId = useRef(tracks.reduce((acc, curr) => Math.max(acc, curr.id), 0));

  const addNewTrack = (newTrack) => {
    maxTrackId.current++;
    setTracks([...tracks, { ...newTrack, id: maxTrackId.current }]);
  };

  const editTrack = (editedTrack) => {
    const mapper = (track) => {
      return track.id === editedTrack.id ? editedTrack : track;
    };
    setTracks((prevTracks) => prevTracks.map(mapper));
  };

  const deleteTrack = (trackId) => {
    setTracks((prevTracks) => prevTracks.filter((track) => track.id !== trackId));
  };

  const value = { tracks, addNewTrack, editTrack, deleteTrack };

  return <TracksContext.Provider value={value}>{children}</TracksContext.Provider>;
};

TracksProvider.propTypes = {
  children: PropTypes.node,
};
