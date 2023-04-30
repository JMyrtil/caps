'use strict';

const io = require('socket.io-client');
const events = require('../../eventPool');
const { queue } = require('../../server/lib/queue');

const socket = io.connect('http://localhost:3000/caps');

socket.on('connect', () => {
  console.log(`DRIVER: Connected to CAPS server as ${socket.id}`);
});

socket.on('pickup', (payload) => {
  console.log(`DRIVER: Order ${payload.orderId} has been picked up`);
  queue.enqueue('driver', 'pickup', payload);
  events.emit('received', { clientId: 'driver', eventName: 'pickup', messageId: payload.id });
});

socket.on('getAll', (payload) => {
  console.log(`DRIVER: Received all events for ${payload.eventName}`);
  const messages = queue.getMessages('driver', payload.eventName);
  messages.forEach((message) => {
    socket.emit(message.eventName, message.payload);
  });
});

socket.on('delivered', (payload) => {
  console.log(`DRIVER: Order ${payload.orderId} has been delivered`);
});

socket.on('disconnect', () => {
  console.log(`DRIVER: Disconnected from CAPS server`);
});

module.exports = socket;
