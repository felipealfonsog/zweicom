
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

 
// app.get('/', function(req, res) {
//   res.status(200).send("n");
// });

app.use(express.static('public'));



var messages = [{
  id: "",
  text: 'messages'
}];



io.on('connection', function(socket) {
  console.log('is it connected? oh yeah Cool!'); 
  socket.emit('messages', messages);


  socket.on('messages', function(socket) {
    console.log('check it out bro! this is connected to sockets!'); 
     messages.push(data); 
     console.log(data); 
     io.sockets.emit('messages', messages);

  }); 
});




server.listen(8080, function() {
  console.log("Server running on port 8080, cause I'm not sure yet"); 

});

