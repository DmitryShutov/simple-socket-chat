const PORT = 5000;

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


io.on('connection', (socket) => {
  console.log('The user is connected');

  socket.on('disconnect', () => {
    console.log('The user is disconnected');
  });

  socket.on('add-message', (message) => {
    io.emit('message', { type: message, text: message });
  });
});

http.listen(PORT, () => {
  console.log(`Started at ${PORT}`)
});
