const eventPool = require('./eventPool');

eventPool.on('pickup', payload => {
  console.log(`EVENT { event: 'pickup', time: ${payload.time}, payload: ${JSON.stringify(payload.payload)} }`);
});

eventPool.on('in-transit', payload => {
  console.log(`EVENT { event: 'in-transit', time: ${payload.time}, payload: ${JSON.stringify(payload.payload)} }`);
});

eventPool.on('delivered', payload => {
  console.log(`EVENT { event: 'delivered', time: ${payload.time}, payload: ${JSON.stringify(payload.payload)} }`);
});
