const request = (path) => {
  return fetch(path, {
    headers: { Accept: "application/json" },
  }).then((response) => response.json());
};

const convertPlaylist = (playlist) => ({
  ...playlist,
  id: playlist.id.toString(),
  tracks: playlist.tracks.map((trackId) => trackId.toString()),
});

export const playlists = {
  getAll: async () => {
    const playlists = await request("http://localhost:3030/playlists").then(({ data }) => data);
    return playlists.map(convertPlaylist);
  },
  create: () => {},
  update: () => {},
  delete: () => {},
};

const convertTrack = (track) => ({
  ...track,
  id: track.id.toString(),
});

export const tracks = {
  getAll: async () => {
    const tracks = await request("http://localhost:3030/tracks").then(({ data }) => data);
    return tracks.map(convertTrack);
  },
  create: () => {},
  update: () => {},
  delete: () => {},
};
