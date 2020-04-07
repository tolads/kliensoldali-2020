import React, { useContext } from "react";
import PropTypes from "prop-types";

import { TracksContext } from "../../state/TracksProvider";

export const Track = ({ track, /* onDelete,*/ onEdit }) => {
  const { deleteTrack } = useContext(TracksContext);

  const handleDelete = () => deleteTrack(track.id);

  return (
    <tr>
      <td>
        <i className="user icon"></i> {track.artist}
      </td>
      <td>
        <i className="music icon"></i> {track.title}
      </td>
      <td className="right aligned collapsing">
        <div className="ui icon top right pointing dropdown button">
          <i className="plus icon"></i>
          <div className="menu">
            <div className="header">Add to playlist</div>
            <div className="ui search icon input">
              <i className="search icon"></i>
              <input type="text" name="search" placeholder="Search playlists..." />
            </div>
            <div className="item">Heavy Metal</div>
            <div className="item">Classics</div>
            <div className="item">Movie Soundtracks</div>
          </div>
        </div>
        <button className="ui icon button" onClick={onEdit}>
          <i className="edit icon"></i>
        </button>
        <button className="ui icon button red" onClick={handleDelete}>
          <i className="trash icon"></i>
        </button>
      </td>
    </tr>
  );
};

Track.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.number.isRequired,
    artist: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
};
