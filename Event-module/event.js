
// Node js having built in module called as 'Events':
// where you have to 'create', 'fire',  and 'listen ' for your events.

// In Node.js, the EventEmitter class from the events module is used to create, listen to, and handle events. 
// You can create an instance of EventEmitter and then emit custom events or respond to them.

// 1. Register for the event to be fired only one uisng only once.
const EventEmitter = require('events');
const event = new EventEmitter();

event.on('click', ()=>{
    console.log('Hi, i am vishal')
})
// event.emit('click');


// 2. creaet an event emmiter instances and register couple of callbacks. (multiple event handaller)
event.on('click', ()=>{
    console.log('Here first callback ')
})
event.on('click', ()=>{
    console.log('Here 2nd callback ')
})
event.on('click', ()=>{
    console.log('Here 3rd callback ')
})
// Here you have to defined couple of callbacks 

event.emit('click');


// 3 Registring the event with callback parameters :
//Define an event handler function
event.on('pageCheck', (status, message)=>{
console.log(`state code is ${status} and messae is ${message}`);
})
// Emit the pageCheck event, passing status and message as an argument
event.emit('pageCheck', 200, 'ok (successFull...)');