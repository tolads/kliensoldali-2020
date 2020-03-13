import React from "react";

// function Track(props) {
//   console.log(props);
//   const artist = props.artist;
//   const { title } = props;
//   return (
//     <li className="track">
//       <img src={props.img} alt="" />
//       <div className="track-content">
//         <div className="track-artist">{artist}</div>
//         <div className="track-title">{title}</div>
//       </div>
//     </li>
//   );
// }

function Track({ artist, title, img }) {
  return (
    <li className="track">
      <img src={img} alt="" />
      <div className="track-content">
        <div className="track-artist">{artist}</div>
        <div className="track-title">{title}</div>
      </div>
    </li>
  );
}

export default Track;
