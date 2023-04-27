const eventPool = require('../../eventPool');

function pickup(payload) {
  console.log(`Picking up order ${payload.orderId}`);
  eventPool.emit('pickup', { event: 'pickup', time: new Date(), payload });
}

function delivered(payload) {
  console.log(`Thank you for your order ${payload.customer}`);
  eventPool.emit('delivered', { event: 'delivered', time: new Date(), payload });
}

module.exports = { pickup, delivered };
