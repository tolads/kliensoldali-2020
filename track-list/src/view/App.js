import React from "react";
import "./App.css";
import queenImg from "./queen.jpg";
import Track from "./Track";

const tracks = [
  {
    artist: "Linkin Park",
    title: "In The End",
    img: "https://via.placeholder.com/80"
  },
  {
    artist: "Queen",
    title: "Bohemian Rhapsody",
    img: queenImg
  }
];

export function App() {
  return (
    <div className="App">
      <ul className="tracks">
        {tracks.map(track => (
          <Track key={track.title} artist={track.artist} title={track.title} img={track.img} />
        ))}
      </ul>
    </div>
  );
}

// export function App() {
//   return (
//     <div className="App">
//       <ul className="tracks">
//         <Track artist="Linkin Park" title="In The End" img="https://via.placeholder.com/80" />
//         <Track artist="Queen" title="Bohemian Rhapsody" img={queenImg} />
//       </ul>
//     </div>
//   );
// }
