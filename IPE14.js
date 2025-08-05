const events = require('events');

// Create an EventEmitter instance
const emitter = new events.EventEmitter();

// Listener 1
function listener1() {
    console.log('✅ Listener 1 executed');
}

// Listener 2
function listener2() {
    console.log('✅ Listener 2 executed');
}

// Register both listeners to a common event "greet"
emitter.on('greet', listener1);
emitter.on('greet', listener2);

// 🔢 Print number of listeners before emit
console.log('👥 Number of listeners before emit:', emitter.listenerCount('greet'));

// Emit the event (both listeners will run)
emitter.emit('greet');

// ❌ Remove listener2
emitter.removeListener('greet', listener2);

// 🔢 Print number of listeners after removal
console.log('👥 Number of listeners after removal:', emitter.listenerCount('greet'));

// Emit again (only listener1 will run)
emitter.emit('greet');

