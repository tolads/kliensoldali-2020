import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

export const Playlist = ({ title, tracks, selected }) => {
  return (
    <div className="ui ten wide column">
      <h3>{title}</h3>
      <div className="ui very relaxed selection list">
        {tracks.map(({ id, artist, title }) => (
          <div key={id} className={cn("item", { active: id === selected })}>
            <i className="large music middle aligned icon"></i>
            <div className="content">
              <div className="header">{title}</div>
              <div className="description">{artist}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Playlist.propTypes = {
  title: PropTypes.string,
  tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selected: PropTypes.number,
};
