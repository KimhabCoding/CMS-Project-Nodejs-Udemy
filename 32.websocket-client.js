const WSS = new WebSocket('ws://localhost:3082'); 

/* // Connection opened
WebSocket.addEventListener('open', function (event) {
    WebSocket.send('Hello Server!');
});

// Listen for messages
WebSocket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
}); */

document.forms[0].onsubmit = () => {
    let input_message = document.getElementById('message');
    console.log(input_message.value);

    // Send Data 
    WSS.send(input_message.value); 
}; 