require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3001;
const server = new Server(PORT, {
  cors: {
    origin: '*',
  },
});

const caps = server.of('/caps');

caps.on('connection', socket => {
  console.log(`Client ${socket.id} has connected`);
  
  socket.on('join', room => {
    console.log(`${socket.id} is joining ${room}`);
    socket.join(room);
  });

  socket.on('disconnect', () => {
    console.log(`Client ${socket.id} has disconnected`);
  });
});

const start = () => {
  server.listen(PORT);
  console.log(`listening on ${PORT}`);
};

start();
