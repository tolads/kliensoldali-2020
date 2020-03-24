import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import logo from "../../assets/logo.png";

export const Layout = ({ children }) => {
  return (
    <div className="ui container">
      <nav className="ui secondary menu">
        <img src={logo} alt="" />
        <NavLink exact className="item" to="/">
          <i className="home icon"></i> Home
        </NavLink>
        <NavLink className="item" to="/playlists">
          <i className="headphones icon"></i> My Playlists
        </NavLink>
        <NavLink className="item" to="/tracks">
          <i className="music icon"></i> Tracks
        </NavLink>
        <NavLink className="item" to="/search">
          <i className="search icon"></i> Search
        </NavLink>
        <div className="ui right dropdown item">
          John Doe
          <i className="dropdown icon"></i>
          <div className="menu">
            <div className="item">
              <i className="user icon"></i> Profile
            </div>
            <div className="item">
              <i className="settings icon"></i> Settings
            </div>
            <div className="item">
              <i className="sign out icon"></i>Log out
            </div>
          </div>
        </div>
      </nav>

      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
