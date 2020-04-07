import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Modal } from "semantic-ui-react";
import cn from "classnames";

import "./AddNewPlaylist.css";

export const AddNewPlaylist = ({ open, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTitle("");
      inputRef.current.focus();
    }
  }, [open]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedTitle = title.trim();
    if (trimmedTitle === "") {
      setError("This field is required.");
      return;
    } else {
      setError(null);
    }

    console.log(event);
    onSubmit({ title }); // controlled
    // onSubmit({ title: inputRef.current.value }); // uncontrolled
    onClose();
    // return false; nem működik
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <Modal className="ui modal" open={open} onClose={onClose}>
      <i className="close icon" onClick={onClose}></i>
      <div className="header">Add new Playlist</div>
      <div className="image content">
        <div className="description">
          <form className="ui form" onSubmit={handleSubmit} noValidate>
            <div className={cn("field", { error })}>
              <label>Name</label>
              <input
                ref={inputRef}
                required
                type="text"
                placeholder="My Playlist"
                value={title}
                onChange={handleChange}
              />
              {error && (
                <p className="error-message" style={{ borderRadius: 8 }}>
                  {error}
                </p>
              )}
              {/* {error && <p className="ui negative message">{error}</p>} */}
            </div>
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
    </Modal>
  );
};

AddNewPlaylist.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
