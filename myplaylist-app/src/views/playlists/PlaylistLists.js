import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const PlaylistLists = ({ playlists, addNew }) => {
  return (
    <div className="ui very relaxed selection list">
      {playlists.map(({ id, title, tracks }) => (
        <NavLink key={id} className="item" to={`/playlists/${id}`}>
          <i className="large compact disc middle aligned icon"></i>
          <div className="content">
            <div className="header">{title}</div>
            <div className="description">{`${tracks.length} songs`}</div>
          </div>
        </NavLink>
      ))}
      <div className="item" id="newPlaylist" onClick={addNew}>
        <i className="large green plus middle aligned icon"></i>
        <div className="content">
          <div className="header">New</div>
          <div className="description">Create a new playlist</div>
        </div>
      </div>
    </div>
  );
};

PlaylistLists.propTypes = {
  playlists: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  addNew: PropTypes.func.isRequired,
};
