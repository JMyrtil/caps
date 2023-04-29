const io = require('socket.io-client');
const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('deliveryRequest', (delivery) => {
  console.log(`Received delivery request: ${delivery}`);
});


socket.emit('requestDriver', '123 Main St');
