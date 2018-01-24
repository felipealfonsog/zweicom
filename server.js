var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

 

app.use(express.static('public'));





var messages = [{
  id: 1,
  text: 'messages'
}];



app.get('/', function(req, res) {
  res.status(200).send("JS Working!");
});

io.on('connection', function(socket) {
  console.log('Alguien se ha conectado con Sockets');
  socket.emit('messages', messages);

  socket.on('messages', function(data) {
    messages.push(data);

    io.sockets.emit('messages', messages);
  });
});

server.listen(8080, function() {
  console.log("Servidor corriendo en http://localhost:8080");
});