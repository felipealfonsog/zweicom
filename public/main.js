var socket = io.connect('http://localhost:8080', { 'forceNew': true });
// DO NOT upload this ! 

socket.on('messages', function(data) {
  console.log(data);
  render(data);
})

function render (data) {
  var html = data.map(function(elem, index) {
    return(`<div>
              <strong>${elem.author}</strong>:
              <em>${elem.text}</em>
            </div>`);
  }).join(" ");

  document.getElementById('messages').innerHTML = html;
}

function addMessage(e) {
  var message = {
    author: "the fibonnaci sequence is now ", 
    text: document.getElementById('texto').value

  };
    // var numero_inicial = {
    //   num_init: document.getElementById('n').value,
    // };
  var init_n = document.getElementById('texto').value; 
  //  $(document).ready(function() {
  
      var sequence = [1, 2];
      var number = init_n; // con esta declaracion se muestran los numeros de fibanocci en console.log abajo. ===| 
      
      function addToSequence(arr, number)    { // decidi declarar dentro del array el numero con el valor que supuestamente cambia.- s
              number = sequence[number] + sequence[number -1];
              sequence.push(number);
  
              // var correlative = sequence; 
              var correlative = sequence; 
              return number;
      } 


      var i = 1;
    
      do { var nextNum = addToSequence(sequence, i);

          i++;
       if (nextNum == init_n) {
          console.log('Siguiente numero en la secuencia:', nextNum);
          // document.getElementById('messages').innerHTML = correlative;
       }
      }   while (i < 200);   

   // I'm trying to implement this iteration 
      if (nextNum == init_n) {
        // document.getElementById('messages').innerHTML = correlative;
        var resultingMssg =  correlative - init_n; 
        console.log(resultingMssg);
        document.getElementById('texto').innerHTML = resultingMssg; 
      }
    
  // I emit the message through Sockets.IO 
  socket.emit('new-message', message);
  return false;
}