const eventPool = require('../../eventPool');

function pickup(payload) {
  console.log(`picking up ${payload.orderId}`);
  eventPool.emit('in-transit', { event: 'in-transit', time: new Date(), payload });
  setTimeout(() => {
    console.log(`delivered ${payload.orderId}`);
    eventPool.emit('delivered', { event: 'delivered', time: new Date(), payload });
  }, 10000);
}

module.exports = { pickup };
