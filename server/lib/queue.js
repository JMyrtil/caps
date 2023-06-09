class MessageQueue {
  constructor(){
    this.data = {};
  }

  store(key, value){
    this.data[key] = value;
    console.log('Added to queue');
    return key;
  }

  read(key){
    return this.data[key];
  }

  remove(key){
    console.log('Removed from queue');
    let value = this.data[key];
    delete this.data[key];
    return value;
  }
}

module.exports = MessageQueue;
