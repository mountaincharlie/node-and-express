// Event drive programming - event emitter

const EventEmitter = require('events');  // returns the class

// creating an instance to emit and listen for it
const customEmitter = new EventEmitter();

// on => listen for an event (and says what to do when it recieves 'response')
// this listens for the event called 'response'
customEmitter.on('response', (name, id) => {
    console.log(`data recieved, user ${name} with id ${id}`)
});
// can have as many functions we want listening for our event
customEmitter.on('response', () => {
    console.log(`some other logic function`)
});

// emit => emits an event (called 'response' in this case)
// this emit must be below the event listeners
// can pass variables which need to be passed as params into the listening callback function
customEmitter.emit('response', 'john', 34)
