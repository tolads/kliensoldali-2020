import React from "react";
import { useSelector } from "react-redux";

import { getIsLoggedIn } from "state/auth/selectors";
import { Login } from "./Login";

export const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <div className="ui center aligned container">
        <h1>My Playlist App</h1>
        <p>Welcome to MPA. To use this awesome piece of software you must log in.</p>
        {!isLoggedIn && (
          <div className="ui segment">
            <div className="ui two column very relaxed stackable grid">
              <div className="column">
                <Login />
              </div>
              <div className="middle aligned column">
                <div className="ui big button">
                  <i className="signup icon"></i>
                  Sign Up
                </div>
              </div>
            </div>
            <div className="ui vertical divider">Or</div>
          </div>
        )}
      </div>
    </>
  );
};
