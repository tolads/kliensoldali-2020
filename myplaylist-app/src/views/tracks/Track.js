import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Dropdown } from "semantic-ui-react";

import { TracksContext } from "../../state/TracksProvider";
import { PlaylistsContext } from "../../state/PlaylistsProvider";

export const Track = ({ track, onEdit }) => {
  const { deleteTrack } = useContext(TracksContext);
  const { playlists, addTrackToPlaylist } = useContext(PlaylistsContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filterText, setFilterText] = useState("");

  const handleDelete = () => deleteTrack(track.id);
  const handleChange = (event) => {
    setFilterText(event.target.value);
  };
  const filteredList = playlists.filter((playlist) =>
    playlist.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <tr>
      <td>
        <i className="user icon"></i> {track.artist}
      </td>
      <td>
        <i className="music icon"></i> {track.title}
      </td>
      <td className="right aligned collapsing">
        <Dropdown
          icon="plus"
          className="ui icon top right pointing dropdown button"
          open={dropdownOpen}
          onOpen={() => setDropdownOpen(true)}
          onClose={(event) => {
            if (event && event.target && event.target.closest(".track-dropdown")) return;
            setDropdownOpen(false);
          }}
        >
          <Dropdown.Menu className="menu track-dropdown">
            <div className="header">Add to playlist</div>
            <div className="ui search icon input">
              <i className="search icon"></i>
              <input
                type="text"
                name="search"
                placeholder="Search playlists..."
                value={filterText}
                onChange={handleChange}
              />
            </div>
            {filteredList.map((playlist) => (
              <div
                key={playlist.id}
                className="item"
                onClick={() => {
                  addTrackToPlaylist(playlist.id, track);
                  setDropdownOpen(false);
                }}
              >
                {playlist.title}
              </div>
            ))}
          </Dropdown.Menu>
        </Dropdown>
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
