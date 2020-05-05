/*
  - unit test
  - integration test
  - end-2-end test
*/
import { addTrackToStore, setTracks } from "./actions";
import { tracksReducer } from "./reducer";

it("should handle SET_TRACKS", () => {
  // given
  const tracks = [{ id: "1", artist: "Artist 1", title: "Title 1" }];
  const action = setTracks(tracks);

  // when
  const newState = tracksReducer(undefined, action);

  // then
  expect(newState).toEqual({ items: tracks });
});

it("should handle ADD_TRACK", () => {
  // given
  const prevState = {
    items: [{ id: "1", artist: "Artist 1", title: "Title 1" }],
  };
  const track = [{ id: "2", artist: "Artist 2", title: "Title 2" }];
  const action = addTrackToStore(track);

  // when
  const newState = tracksReducer(prevState, action);

  // then
  expect(newState).toEqual({ items: [...prevState.items, track] });
});
