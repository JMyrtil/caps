const handler = require('./handler');
const { io } = require('socket.io-client');
const socket = io.connect('http://localhost:3003/caps');

const storeID = '1-206-flowers';
const room = `${storeID}-room`;

socket.emit('join', room);

socket.on('pickup', handler.pickup);
