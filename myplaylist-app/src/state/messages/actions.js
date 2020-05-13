import io from "socket.io-client";
import { toast } from "react-toastify";

import { fetchTracks } from "../tracks/actions";
// import fetchTracks from "../tracks/actions";
// import almafa from "../tracks/actions";

let socket = null;

// console.log(socket.id); // undefined

// socket.on("connect", () => {
//   console.log(socket.id); // 'G5p5...'

//   // setTimeout(() => {
//   //   socket.emit("create", "messages", { text: "Helló" });
//   // }, 1000);
// });

export const startListening = () => {
  return (dispatch) => {
    socket = io("http://localhost:3030");

    socket.on("messages created", (data) => {
      if (socket.id === data.emitter) return;
      toast.info(data.text);
      dispatch(fetchTracks());
    });

    // socket.on("state-changed", (json) => {
    //   dispatch(changeReceived(json));
    //   console.log(json);
    // })
  };
};

// export const sendMessage = (json) => {
//   return (dispatch) => {
//     socket.emit("sync-state", json);
//   }
// }
// dispatch(sendMessage({ ... }));

export const sendMessage = (message) => {
  socket.emit("create", "messages", { text: message, emitter: socket.id });
};

/*
socket.emit("sync-state", { a: 2, b: 3});

...

socket.on("state-changed", (json) => {
  console.log(json);
})
*/
