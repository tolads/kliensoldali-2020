import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

export const PlaylistLists = ({ playlists, selected, onSelect, addNew }) => {
  return (
    <div className="ui very relaxed selection list">
      {playlists.map(({ id, title, tracks }) => (
        <div
          key={id}
          className={cn("item", { active: id === selected })}
          onClick={() => onSelect(id)}
        >
          <i className="large compact disc middle aligned icon"></i>
          <div className="content">
            <div className="header">{title}</div>
            <div className="description">{`${tracks.length} songs`}</div>
          </div>
        </div>
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
  selected: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
  addNew: PropTypes.func.isRequired,
};
