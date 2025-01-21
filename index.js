// function add(a, b){
//     return(a + b)
// };

// console.log(add(1, 2))

const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {

    console.log('yum yum')
})

eventEmitter.emit('lunch');
eventEmitter.emit('lunch');