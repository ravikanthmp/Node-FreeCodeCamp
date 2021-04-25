const EventEmitter = require('events')

let myEvent = new EventEmitter();
myEvent.on('response', function(){
    console.log('emitted 1')
})

myEvent.on('response', function(){
    console.log('emitted 2')
})

myEvent.emit('response');