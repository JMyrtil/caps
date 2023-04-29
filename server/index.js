require('dotenv').config();
const express = require('express');
const app = express();
const { EventEmitter } = require('events');
const Queue = require('./lib/queue');
const events = require('../eventPool');

const port = process.env.PORT || 3001;

const eventEmitter = new EventEmitter();
const queue = new Queue(eventEmitter);

events(eventEmitter, queue);

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
