var webSocket = new WebSocket("ws://localhost:8080/JavaWebSocket/serverendpoint");

var messagesTextArea = document.getElementById("messagesTextArea");

webSocket.onopen = function(message) {
    processOpen(message);
}

webSocket.onmessage = function(message) {
    processMessage(message);
}

webSocket.onclose = function(message) {
    processClose(message);
}

function processOpen(message) {
    messagesTextArea.value += "Server Connect..." + message + "\n";
}

function processMessage(message) {
    messagesTextArea.value += "Received from Server ==> " + message.data + "\n";
}

function sendMessage(message) {

    if (textMessage.value == "close") {
        webSocket.close("bye...");
        return;
    }


    webSocket.send(textMessage.value);
    messagesTextArea.value += "Send to Server ==> " + textMessage.value + "\n";
    textMessage.value = '';
}

function processClose(message) {
    webSocket.send("client disconnected...");
    messagesTextArea.value += "Server Disconnect..." + message + "\n";
}

function processError(message) {
    messagesTextArea.value += "Error..." + message + "\n";
}