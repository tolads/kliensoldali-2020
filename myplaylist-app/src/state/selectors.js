import { getTracks } from "./tracks/selectors";
import { getPlaylists } from "./playlists/selectors";

export const getPlaylistsWithTracks = (state) => {
  const tracks = getTracks(state);
  const playlists = getPlaylists(state);

  return playlists.map((playlist) => ({
    ...playlist,
    tracks: playlist.tracks
      .map((trackId) => tracks.find((track) => track.id === trackId))
      .filter((track) => track),
  }));
};
