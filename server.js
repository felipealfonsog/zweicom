
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

 
// app.get('/', function(req, res) {
//   res.status(200).send("n");
// });

app.use(express.static('public'));



var messages = [{
  id: 1,
  text: 'messages'
}];



io.on('connection', function(socket) {
  console.log('is it connected? oh yeah Cool!'); 
  socket.emit('messages', messages);


  socket.on('messages', function(socket) {
    console.log('cjeck it out bro! this is connected to sockjets!'); 
     messages.push(data); 
     console.log(data); 
     io.sockets.emit('nextData', messages);

  }); 
});




server.listen(8080, function() {
  console.log("Server running on port 5050, cause I'm not sure yet"); 

});

