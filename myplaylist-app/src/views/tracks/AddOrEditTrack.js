import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Modal } from "semantic-ui-react";

const fields = [
  {
    label: "Artist",
    name: "artist",
    placeholder: "John Williams",
    required: true,
  },
  {
    label: "Title",
    name: "title",
    placeholder: "Imperial March",
    required: true,
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
  const reset = useCallback((newState) => setValues(newState), []);
  return { values, setValues, reset };
};

const useValidatedForm = (defaultState) => {
  const { values, setValues, reset } = useForm(defaultState);
  const [error, setError] = useState({});

  useEffect(() => {
    const newError = {};
    fields.forEach((field) => {
      if (field.required && values[field.name].trim() === "") {
        newError[field.name] = `The ${field.label} field is required.`;
      }
    });
    setError(newError);
  }, [values]);

  const isError = Object.values(error).some((message) => message);

  return { values, setValues, reset, error, isError };
};

export const AddOrEditTrack = ({ open, onClose, onSubmit, track }) => {
  const { values, setValues, reset, error, isError } = useValidatedForm(defaultState);

  useEffect(() => {
    if (open) {
      reset({ ...defaultState, ...track });
    }
  }, [open, reset, track]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isError) return;

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
          {isError && (
            <ul className="ui negative message">
              {Object.entries(error).map(([fieldName, message]) => (
                <li key={fieldName}>{message}</li>
              ))}
            </ul>
          )}
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

AddOrEditTrack.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  track: PropTypes.shape({}).isRequired,
};
