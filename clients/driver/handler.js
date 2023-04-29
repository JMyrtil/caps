'use strict';

const events = require('../../server/lib/events');

const driver = {
  pickup(payload) {
    console.log(`DRIVER: picked up order ${payload.orderId}`);
    events.emit('in-transit', payload);
  },
  inTransit(payload) {
    console.log(`DRIVER: delivered order ${payload.orderId}`);
    events.emit('delivered', payload);
  },
};

events.on('pickup', driver.pickup);
events.on('in-transit', driver.inTransit);

module.exports = driver;
