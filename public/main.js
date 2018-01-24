var socket = io.connect('http://localhost:8080', { 'forceNew': true});




// 


function addNumber(n) {




    var sequence = [1, n];
    
    var number = 0;
    
    function addToSequence(arr, n)    {
    
            number = sequence[n] + sequence[n -1];
    
            sequence.push(number);
    
            return number;
    
    }   // end addToSequence(num)
    
    var i = 1;
    
    do {
     
    
        var nextNum = addToSequence(sequence, i);
        console.log('Siguiente numero en la secuencia:', nextNum);
    
        i++;
    
    }   while (i < 200);




   
socket.emit('nextNum', messages);
return false;

}




socket.on('messages', function(data) {
    console.log(data);
    render(data);
  })
  
  function render (data) {
    var html = data.map(function(elem, index) {
      return(`<div>

                <em>${elem.text}</em>
              </div>`);
    }).join(" ");
  
    document.getElementById('messages').innerHTML = html;
  }
