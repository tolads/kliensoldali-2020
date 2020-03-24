import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

export const PlaylistLists = ({ playlists, selected }) => {
  return (
    <div className="ui very relaxed selection list">
      {playlists.map(({ id, title, tracks }) => (
        <div key={id} className={cn("item", { active: id === selected })}>
          <i className="large compact disc middle aligned icon"></i>
          <div className="content">
            <div className="header">{title}</div>
            <div className="description">{`${tracks.length} songs`}</div>
          </div>
        </div>
      ))}
      <div className="item" id="newPlaylist">
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
};
