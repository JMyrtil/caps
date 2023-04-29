const io = require('socket.io')(3001);
const Chance = require('chance');
const chance = new Chance();

io.on('connection', (socket) => {
  console.log(`Flower vendor connected to server on port ${3001}`);

  socket.on('placeOrder', (order) => {
    console.log(`Received order ${order.id} for ${order.flowerType} flowers`);

    // generate a random time between 5-15 seconds to simulate processing time
    const processingTime = chance.integer({ min: 5, max: 15 });
    setTimeout(() => {
      console.log(`Completed order ${order.id}`);
      io.emit('orderPlaced', order);
    }, processingTime * 1000);
  });
});
