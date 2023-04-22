'use strict';

const eventPool = require('./eventPool');
const vendor = require('./vendor/handler');
const Chance = require('chance');
const chance = new Chance();

eventPool.on('pickup', (payload) => {
  console.log({
    event: 'pickup',
    time: new Date().toISOString(),
    payload,
  });
});

eventPool.on('in-transit', (payload) => {
  console.log({
    event: 'in-transit',
    time: new Date().toISOString(),
    payload,
  });
});

eventPool.on('delivered', (payload) => {
  console.log({
    event: 'delivered',
    time: new Date().toISOString(),
    payload,
  });
});

const start = () => {
  setInterval(() => {
    const store = chance.company();
    console.log(`EVENT: New order from ${store}.`);
    vendor.emitPickup(store);
  }, 10000);
};

start();
