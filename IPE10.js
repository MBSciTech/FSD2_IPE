const express = require('express');
const app = express();
const events = require('events');
const em = new events.EventEmitter();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname, { index: 'IPE10.html' }));

em.on('Clicked', () => {
    console.log('📢 Button Clicked!');
});

app.post('/click', (req, res) => {
    em.emit('Clicked');
    res.send('Button was clicked');
});

app.listen(3000, () => {
    console.log('🚀 Server running at http://localhost:3000');
});
