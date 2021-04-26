const EventEmitter = require('events')

let myEvent = new EventEmitter();
myEvent.on('response', function(name, age){
    console.log(`emitted 1. With name ${name} and age ${age}`)
})

myEvent.on('response', function(name, age){
    console.log(`emitted 2. With name ${name} and age ${age}`)
})

myEvent.emit('response', 'Ravi', 'Kanye');
myEvent.emit('response', 'Ishaan', 'Mangipudi');