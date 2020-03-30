import React from "react";
import PropTypes from "prop-types";

const fields = [
  {
    label: "Artist",
    name: "artist",
    placeholder: "John Williams",
  },
  {
    label: "Title",
    name: "title",
    placeholder: "Imperial March",
  },
  {
    label: "Length",
    name: "length",
    placeholder: "3:00",
  },
  {
    label: "Spotify URL",
    name: "spotifyURL",
    placeholder: "https://",
  },
  {
    label: "Lyrics URL",
    name: "lyricsURL",
    placeholder: "https://",
  },
  {
    label: "Guitar tab URL",
    name: "chordsURL",
    placeholder: "https://",
  },
];

export const AddNewTrack = ({ open, onClose, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="ui modal">
      <i className="close icon" onClick={onClose}></i>
      <div className="header">Add new Track</div>
      <div className="content">
        <div className="description">
          <form className="ui form three column grid" onSubmit={handleSubmit}>
            {fields.map((field) => (
              <div key={field.name} className="column field">
                <label htmlFor={field.name}>{field.label}</label>
                <input
                  type="text"
                  name={field.name}
                  id={field.name}
                  placeholder={field.placeholder}
                />
              </div>
            ))}
          </form>
        </div>
      </div>
      <div className="actions">
        <button className="ui black deny button" onClick={onClose}>
          Cancel
        </button>
        <button className="ui positive right labeled icon button" onClick={handleSubmit}>
          Add
          <i className="plus icon"></i>
        </button>
      </div>
    </div>
  );
};

AddNewTrack.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
