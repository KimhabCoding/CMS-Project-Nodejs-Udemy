const WSS = new WebSocket('ws://localhost:3082'); 

/* // Connection opened
WebSocket.addEventListener('open', function (event) {
    WebSocket.send('Hello Server!');
});

// Listen for messages
WebSocket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
}); */

WSS.onmessage = (payload) => {
    displayMessage(payload.data);
    // console.log(payload.data);
}; 
// More onmessage: https://javascript.info/websocket

WSS.onopen = () => {
    // console.log('Connection OPEN');
    displayTitle('Connect to Server'); 
}; 

WSS.onclose = () => {
    // console.log('Connection Close');
    displayTitle('Disconnect from Server'); 
};

function displayTitle(title) {
    document.querySelector('h1').innerHTML = title; 
}

function displayMessage(message) {
    let h1 = document.createElement('h1'); 
    h1.innerText = message; 
    document.querySelector('div.messages').appendChild(h1); 
}




document.forms[0].onsubmit = () => {
    let input_message = document.getElementById('message');
    // console.log(input_message.value);

    // Send Data 
    WSS.send(input_message.value); 
}; 