import React from "react";

export const Tracks = () => {
  return (
    <React.Fragment>
      <div className="ui container">
        <button className="ui right floated green button" id="newModal">
          <i className="plus icon"></i>
          New track
        </button>
        <h1>Tracks</h1>
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
              <td>
                <i className="user icon"></i> Bon Jovi
              </td>
              <td>
                <i className="music icon"></i> It's my life
              </td>
              <td className="right aligned collapsing">
                <div className="ui icon top right pointing dropdown button">
                  <i className="plus icon"></i>
                  <div className="menu">
                    <div className="header">Add to playlist</div>
                    <div className="ui search icon input">
                      <i className="search icon"></i>
                      <input type="text" name="search" placeholder="Search playlists..." />
                    </div>
                    <div className="item">Heavy Metal</div>
                    <div className="item">Classics</div>
                    <div className="item">Movie Soundtracks</div>
                  </div>
                </div>
                <button className="ui icon button">
                  <i className="edit icon"></i>
                </button>
                <button className="ui icon button red">
                  <i className="trash icon"></i>
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
                <div className="ui icon top right pointing dropdown button">
                  <i className="plus icon"></i>
                  <div className="menu">
                    <div className="header">Add to playlist</div>
                    <div className="ui search icon input">
                      <i className="search icon"></i>
                      <input type="text" name="search" placeholder="Search playlists..." />
                    </div>
                    <div className="item">Heavy Metal</div>
                    <div className="item">Classics</div>
                    <div className="item">Movie Soundtracks</div>
                  </div>
                </div>
                <button className="ui icon button">
                  <i className="edit icon"></i>
                </button>
                <button className="ui icon button red">
                  <i className="trash icon"></i>
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
                <div className="ui icon top right pointing dropdown button">
                  <i className="plus icon"></i>
                  <div className="menu">
                    <div className="header">Add to playlist</div>
                    <div className="ui search icon input">
                      <i className="search icon"></i>
                      <input type="text" name="search" placeholder="Search playlists..." />
                    </div>
                    <div className="item">Heavy Metal</div>
                    <div className="item">Classics</div>
                    <div className="item">Movie Soundtracks</div>
                  </div>
                </div>
                <button className="ui icon button">
                  <i className="edit icon"></i>
                </button>
                <button className="ui icon button red">
                  <i className="trash icon"></i>
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
                <div className="ui icon top right pointing dropdown button">
                  <i className="plus icon"></i>
                  <div className="menu">
                    <div className="header">Add to playlist</div>
                    <div className="ui search icon input">
                      <i className="search icon"></i>
                      <input type="text" name="search" placeholder="Search playlists..." />
                    </div>
                    <div className="item">Heavy Metal</div>
                    <div className="item">Classics</div>
                    <div className="item">Movie Soundtracks</div>
                  </div>
                </div>
                <button className="ui icon button">
                  <i className="edit icon"></i>
                </button>
                <button className="ui icon button red">
                  <i className="trash icon"></i>
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
                <div className="ui icon top right pointing dropdown button">
                  <i className="plus icon"></i>
                  <div className="menu">
                    <div className="header">Add to playlist</div>
                    <div className="ui search icon input">
                      <i className="search icon"></i>
                      <input type="text" name="search" placeholder="Search playlists..." />
                    </div>
                    <div className="item">Heavy Metal</div>
                    <div className="item">Classics</div>
                    <div className="item">Movie Soundtracks</div>
                  </div>
                </div>
                <button className="ui icon button">
                  <i className="edit icon"></i>
                </button>
                <button className="ui icon button red">
                  <i className="trash icon"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <i className="user icon"></i> John Denver
              </td>
              <td>
                <i className="music icon"></i> Take me home, country roads
              </td>
              <td className="right aligned">
                <div className="ui icon top right pointing dropdown button">
                  <i className="plus icon"></i>
                  <div className="menu">
                    <div className="header">Add to playlist</div>
                    <div className="ui search icon input">
                      <i className="search icon"></i>
                      <input type="text" name="search" placeholder="Search playlists..." />
                    </div>
                    <div className="item">Heavy Metal</div>
                    <div className="item">Classics</div>
                    <div className="item">Movie Soundtracks</div>
                  </div>
                </div>
                <button className="ui icon button">
                  <i className="edit icon"></i>
                </button>
                <button className="ui icon button red">
                  <i className="trash icon"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="ui modal">
        <i className="close icon"></i>
        <div className="header">Add new Track</div>
        <div className="image content">
          <div className="description">
            <form className="ui form">
              <div className="two fields">
                <div className="field">
                  <label>Author</label>
                  <input required type="text" placeholder="John Williams" />
                </div>
                <div className="field">
                  <label>Track name</label>
                  <input required type="text" placeholder="Imperial March" />
                </div>
              </div>
              <div className="three fields">
                <div className="field">
                  <label>Spotify URL</label>
                  <input type="text" placeholder="https://" />
                </div>
                <div className="field">
                  <label>Lyrics URL</label>
                  <input type="text" placeholder="https://" />
                </div>
                <div className="field">
                  <label>Guitar tab URL</label>
                  <input type="text" placeholder="https://" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="actions">
          <div className="ui black deny button">Cancel</div>
          <div className="ui positive right labeled icon button">
            Add
            <i className="plus icon"></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
