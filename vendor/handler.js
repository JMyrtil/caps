const eventPool = require('../eventPool');
const Chance = require('chance');
const chance = new Chance();

function simulateOrder(store) {
  const order = {
    store: store,
    orderId: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };
  return order;
}

function emitPickup(store) {
  const order = simulateOrder(store);
  console.log(`VENDOR: Order ${order.orderId} has been placed.`);
  eventPool.emit('pickup', order);
}

module.exports = {
  emitPickup,
};
