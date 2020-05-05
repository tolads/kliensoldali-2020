import { getPlaylistsWithTracks } from "./selectors";

it("should handle empty data", () => {
  // given
  const input = {
    playlists: { items: [] },
    tracks: { items: [] },
  };

  // when
  const output = getPlaylistsWithTracks(input);

  // then
  expect(output).toEqual([]);
});

it("should handle filled data", () => {
  // given
  const input = {
    playlists: { items: [{ title: "Playlist 1", id: "1", tracks: ["2", "3"] }] },
    tracks: { items: [{ id: "2", artist: "Artist 1", title: "Title 1" }] },
  };

  // when
  const output = getPlaylistsWithTracks(input);

  // then
  expect(output).toEqual([
    {
      title: "Playlist 1",
      id: "1",
      tracks: [{ id: "2", artist: "Artist 1", title: "Title 1" }],
    },
  ]);
});
