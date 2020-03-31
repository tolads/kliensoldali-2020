import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Modal } from "semantic-ui-react";

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
const defaultState = fields.reduce((acc, curr) => ({ ...acc, [curr.name]: "" }), {});

const useForm = (defaultState) => {
  const [values, setValues] = useState(defaultState);
  const reset = () => setValues(defaultState);
  return { values, setValues, reset };
};

export const AddNewTrack = ({ open, onClose, onSubmit }) => {
  const { values, setValues, reset } = useForm(defaultState);

  useEffect(() => {
    if (open) {
      reset();
    }
  }, [open]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(values);
    onClose();
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <Modal className="ui modal" open={open} onClose={onClose}>
      <i className="close icon" onClick={onClose}></i>
      <div className="header">Add new Track</div>
      <div className="content">
        <div className="description">
          <form
            id="add-new-track-form"
            className="ui form three column grid"
            onSubmit={handleSubmit}
          >
            {fields.map((field) => (
              <div key={field.name} className="column field">
                <label htmlFor={field.name}>{field.label}</label>
                <input
                  type="text"
                  name={field.name}
                  id={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name]}
                  onChange={handleChange}
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
        <button
          type="submit"
          form="add-new-track-form"
          className="ui positive right labeled icon button"
          onClick={handleSubmit}
        >
          Add
          <i className="plus icon"></i>
        </button>
      </div>
    </Modal>
  );
};

AddNewTrack.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
