const BASE_PATH = "http://localhost:3030/";

const request = (path, params) => {
  return fetch(`${BASE_PATH}${path}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
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
  getAll: async () => {
    const playlists = await request("playlists").then(({ data }) => data);
    return playlists.map(convertPlaylist);
  },
  create: async (playlistParam) => {
    const playlist = await request("playlists", {
      method: "POST",
      body: JSON.stringify(playlistParam),
    });
    return convertPlaylist(playlist);
  },
  update: async (playlistParam) => {
    const playlist = await request(`playlists/${playlistParam.id}`, {
      method: "PUT",
      body: JSON.stringify(playlistParam),
    });
    return convertPlaylist(playlist);
  },
  delete: () => {},
};

const convertTrack = (track) => ({
  ...track,
  id: track.id.toString(),
});

export const tracks = {
  getAll: async () => {
    const tracks = await request("tracks").then(({ data }) => data);
    return tracks.map(convertTrack);
  },
  create: async (tracksParam) => {
    const tracks = await request("tracks", {
      method: "POST",
      body: JSON.stringify(tracksParam),
    });
    return convertTrack(tracks);
  },
  update: async (tracksParam) => {
    const tracks = await request(`tracks/${tracksParam.id}`, {
      method: "PUT",
      body: JSON.stringify(tracksParam),
    });
    return convertTrack(tracks);
  },
  delete: (id) => {
    return request(`tracks/${id}`, {
      method: "DELETE",
    });
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
