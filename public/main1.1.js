

// 
// 


var socket = io.connect('http://localhost:8080', { 'forceNew': true});

socket.on('messages', function(data) {
	console.log(data);
});



// función para intentar tomar valor numerico para desplegar fibonacci 

// document.getElementById('n').innerHTML=HTML;
//  console.log(n);

function addNumber(n) {
  var numero_inicial = {
    num_init: document.getElementById('n').value,
  };



    var sequence = [1, 2];
    var number = numero_inicial;
    
    function addToSequence(arr, n)    {
            number = sequence[numero_inicial] + sequence[numero_inicial -1];
            sequence.push(number);


            // var correlative = sequence; 
            return number;
    }  
  
    var i = 1;
    do { var nextNum = addToSequence(sequence, i);

        console.log('Siguiente numero en la secuencia:', nextNum);
        
        
        i++;
    

        // document.getElementById('messages').innerHTML = correlative;
      
    }   while (i < 200);   
  



// intento de envio de data via, socket.io
   
socket.emit('nextNum', messages);
return false;

}


// intento recoger data para enviarlo a un div

socket.on('nextNum', function(data) {
    console.log(data);
    render(data);
  })
  
  function render (data) {
    var html = data.map(function(elem, index) {
      return(`<div>

                <em>${elem.text}</em>
              </div>`);
    }).join(" ");
  
    document.getElementById('messages').innerHTML = nextNum;
  }

