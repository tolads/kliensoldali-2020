const db = require('./sequelize') ;

const chatRoom = app => io => {
  io.on('connection', socket => {
    console.log('Chat room: connected');
    
    socket.on('create-room', async (fn) => {
      const {uuid} = await db.rooms.create();
      socket.join(uuid);
      fn({
        status: 'ok',
        roomId: uuid,
      });
    });

    socket.on('join-room', (uuid, fn) => {
      let message ='';
      try {

      
        const allRooms = io.sockets.adapter.rooms;
        if (Object.keys(allRooms).includes(uuid)) {
          if (!Object.keys(socket.rooms).includes(uuid)) {
            if (allRooms[uuid].length < 2) {
              socket.join(uuid);
              return fn({
                status: 'ok',
              });
            } else {
              message = 'The room is full.';
            }
          } else {
            message = 'This client is already in this room.';
          }
        } else {
          message = 'No such room.';
        }
      }
      catch (e) {
        message = e.message;
      }
      finally {
        fn({
          status: 'error',
          message
        });
      }
    });

    socket.on('sync-state', async (uuid, json, fn) => {
      let message ='';
      try {
        const allRooms = io.sockets.adapter.rooms;
        if (Object.keys(allRooms).includes(uuid)) {
          if (Object.keys(socket.rooms).includes(uuid)) {
            await db.rooms.update(
              { state: json  },
              { where: {uuid}}
            );
            socket.broadcast.to(uuid).emit('state-changed', json);
            return fn({
              status: 'ok'
            });
          } else {
            message = 'The client is not in this room.';
          }
        } else {
          message = 'No such room.';
        }
      }
      catch (e) {
        message = e.message;
      }
      finally {
        fn({
          status: 'error',
          message
        });
      }
    });

    socket.on('leave-room', async (uuid, fn) => {
      let message ='';
      try {
        const allRooms = io.sockets.adapter.rooms;
        if (Object.keys(allRooms).includes(uuid)) {
          if (Object.keys(socket.rooms).includes(uuid)) {
            socket.leave(uuid);
            return fn({
              status: 'ok'
            });
          } else {
            message = 'The client is not in this room.';
          }
        } else {
          message = 'No such room.';
        }
      }
      catch (e) {
        message = e.message;
      }
      finally {
        fn({
          status: 'error',
          message
        });
      }
    });



  });
};

module.exports = chatRoom;