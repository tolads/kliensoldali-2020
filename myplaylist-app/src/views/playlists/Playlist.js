import React from "react";
import PropTypes from "prop-types";
import { NavLink, useParams } from "react-router-dom";

export const Playlist = ({ title, tracks }) => {
  const { playlistId } = useParams();

  return (
    <div className="ui ten wide column">
      <h3>{title}</h3>
      <div className="ui very relaxed selection list">
        {/* ul > li > button */}
        {tracks.map(({ id, artist, title }) => (
          <NavLink key={id} className="item" to={`/playlists/${playlistId}/${id}`}>
            <i className="large music middle aligned icon"></i>
            <div className="content">
              <div className="header">{title}</div>
              <div className="description">{artist}</div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

Playlist.propTypes = {
  title: PropTypes.string,
  tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
