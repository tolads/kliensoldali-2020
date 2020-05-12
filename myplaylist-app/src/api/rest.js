const BASE_PATH = "http://localhost:3030/";

const request = (path, params, token) => {
  return fetch(`${BASE_PATH}${path}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(token ? { Authorization: token } : {}),
    },
    ...params,
  }).then((response) => response.json());
};

const convertPlaylist = (playlist) => ({
  ...playlist,
  id: playlist.id.toString(),
  tracks: playlist.tracks.map((trackId) => trackId.toString()),
});

export const playlists = {
  getAll: async (token) => {
    const playlists = await request("playlists", {}, token).then(({ data }) => data);
    return playlists.map(convertPlaylist);
  },
  create: async (playlistParam, token) => {
    const playlist = await request(
      "playlists",
      {
        method: "POST",
        body: JSON.stringify(playlistParam),
      },
      token
    );
    return convertPlaylist(playlist);
  },
  update: async (playlistParam, token) => {
    const playlist = await request(
      `playlists/${playlistParam.id}`,
      {
        method: "PUT",
        body: JSON.stringify(playlistParam),
      },
      token
    );
    return convertPlaylist(playlist);
  },
};

const convertTrack = (track) => ({
  ...track,
  id: track.id.toString(),
});

export const tracks = {
  getAll: async (token) => {
    const tracks = await request("tracks", {}, token).then(({ data }) => data);
    return tracks.map(convertTrack);
  },
  create: async (tracksParam, token) => {
    const tracks = await request(
      "tracks",
      {
        method: "POST",
        body: JSON.stringify(tracksParam),
      },
      token
    );
    return convertTrack(tracks);
  },
  update: async (tracksParam, token) => {
    const tracks = await request(
      `tracks/${tracksParam.id}`,
      {
        method: "PUT",
        body: JSON.stringify(tracksParam),
      },
      token
    );
    return convertTrack(tracks);
  },
  delete: (id, token) => {
    return request(
      `tracks/${id}`,
      {
        method: "DELETE",
      },
      token
    );
  },
};

export const login = async (username, password) => {
  const object = {
    email: username,
    password: password,
    strategy: "local",
  };
  return request("authentication", {
    method: "POST",
    body: JSON.stringify(object),
  });
};
