const events = require('events');

// Create EventEmitter instance
const emitter = new events.EventEmitter();

// Event for circle area
emitter.on('checkRadius', (radius) => {
    if (radius < 0) {
        console.log('❌ Radius must be positive');
    } else {
        const area = Math.PI * radius * radius;
        console.log(`✅ Area of Circle: ${area.toFixed(2)}`);
    }
});

// Event for square perimeter
emitter.on('checkSide', (side) => {
    if (side < 0) {
        console.log('❌ Side must be positive');
    } else {
        const perimeter = 4 * side;
        console.log(`✅ Perimeter of Square: ${perimeter}`);
    }
});

// --- Trigger Events ---

let radius = -7;     // try -5 to test negative input
let side = 10;      // try -2 to test negative input

emitter.emit('checkRadius', radius);
emitter.emit('checkSide', side);
