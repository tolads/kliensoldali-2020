import React from "react";

export const Home = () => {
  return (
    <>
      <div className="ui center aligned container">
        <h1>My Playlist App</h1>
        <p>Welcome to MPA. To use this awesome piece of software you must log in.</p>
        <div className="ui segment">
          <div className="ui two column very relaxed stackable grid">
            <div className="column">
              <div className="ui form">
                <div className="field">
                  <label>Username</label>
                  <div className="ui left icon input">
                    <input type="text" placeholder="Username" />
                    <i className="user icon"></i>
                  </div>
                </div>
                <div className="field">
                  <label>Password</label>
                  <div className="ui left icon input">
                    <input type="password" />
                    <i className="lock icon"></i>
                  </div>
                </div>
                <div className="ui blue submit button">Login</div>
              </div>
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
      </div>
    </>
  );
};
