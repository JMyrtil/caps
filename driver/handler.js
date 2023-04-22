const eventPool = require('../eventPool');

eventPool.on('pickup', (payload) => {
  console.log(`DRIVER: picked up ${payload.orderId}`);
  eventPool.emit('in-transit', payload);
});

eventPool.on('in-transit', (payload) => {
  console.log(`EVENT: Order ${payload.orderId} is in transit.`);
  eventPool.emit('delivered', payload);
});

module.exports = eventPool;
