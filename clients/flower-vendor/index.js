const io = require('socket.io-client');
const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('orderPlaced', (order) => {
  console.log(`Received order ${order.id} for ${order.flowerType} flowers`);

  console.log(`Completed order ${order.id}`);
});
