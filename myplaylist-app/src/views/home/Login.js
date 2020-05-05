import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "state/auth/actions";

export const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "username") {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Username</label>
        <div className="ui left icon input">
          <input
            type="text"
            placeholder="Username"
            value={username}
            name="username"
            onChange={handleChange}
          />
          <i className="user icon"></i>
        </div>
      </div>
      <div className="field">
        <label>Password</label>
        <div className="ui left icon input">
          <input type="password" value={password} name="password" onChange={handleChange} />
          <i className="lock icon"></i>
        </div>
      </div>
      <button type="submit" className="ui blue submit button">
        Login
      </button>
    </form>
  );
};
