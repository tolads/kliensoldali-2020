import React from "react";

export const Search = () => {
  return (
    <>
      <div className="ui container">
        <h1>Search</h1>
        <div className="ui fluid icon input">
          <input type="text" placeholder="Search for an artist or title..." />
          <i className="search icon"></i>
        </div>

        <div className="ui segment">
          <h2>Results</h2>
          <div className="ui active inverted dimmer">
            <div className="ui large elastic text loader">Loading</div>
          </div>
          <table className="ui celled striped table">
            <thead>
              <tr>
                <th>Artist</th>
                <th>Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="collapsing">
                  <i className="user icon"></i> Bon Jovi
                </td>
                <td>
                  <i className="music icon"></i> It's my life
                </td>
                <td className="right aligned collapsing">
                  <button className="ui icon button blue">
                    <i className="plus icon"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="user icon"></i> Bon Jovi
                </td>
                <td>
                  <i className="music icon"></i> Livin' on a prayer
                </td>
                <td className="right aligned">
                  <button className="ui icon button blue">
                    <i className="plus icon"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="user icon"></i> AC/DC
                </td>
                <td>
                  <i className="music icon"></i> Thunderstruck
                </td>
                <td className="right aligned">
                  <button className="ui icon button blue">
                    <i className="plus icon"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="user icon"></i> AC/DC
                </td>
                <td>
                  <i className="music icon"></i> Back in black
                </td>
                <td className="right aligned">
                  <button className="ui icon button blue">
                    <i className="plus icon"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="user icon"></i> AC/DC
                </td>
                <td>
                  <i className="music icon"></i> Highway to hell
                </td>
                <td className="right aligned">
                  <button className="ui icon button blue">
                    <i className="plus icon"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
