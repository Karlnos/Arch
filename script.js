document.addEventListener("DOMContentLoaded", function () {
    const messages = document.getElementById("messages");
    const messageInput = document.getElementById("message");
    const sendButton = document.getElementById("send");

    // Generate a random username
    const username = "User" + Math.floor(Math.random() * 1000);

    // Simulate polling for new messages every 2 seconds
    function pollForMessages() {
        setTimeout(() => {
            checkForNewMessages();
            pollForMessages();
        }, 2000); // Poll every 2 seconds
    }

    // Start polling for messages
    pollForMessages();

    // Add a click event listener for the send button
    sendButton.addEventListener("click", () => {
        const text = messageInput.value;
        if (text.trim() !== "") {
            sendMessage(text);
            messageInput.value = "";
        }
    });

    // Simulate sending a message
    function sendMessage(text) {
        // In a real implementation, you would send this message to the server.
        // For this example, we'll just display it locally.
        displayMessage(username, text);
    }

    // Simulate checking for new messages from the server
    function checkForNewMessages() {
        // In a real implementation, you would fetch new messages from the server.
        // For this example, we'll simulate a new message being received.
        const newMessage = getNewMessageFromServer();
        if (newMessage) {
            const { username, text } = newMessage;
            displayMessage(username, text);
        }
    }

    // Display a message in the chat window
    function displayMessage(username, text) {
        const messageElement = document.createElement("div");
        messageElement.textContent = `${username}: ${text}`;
        messages.appendChild(messageElement);
    }

    // Simulate receiving a new message from the server
    function getNewMessageFromServer() {
        // In a real implementation, you would fetch new messages from the server.
        // For this example, we'll simulate a new message being received.
        return {
            username: "UserX",
            text: "Hello, chat!",
        };
    }
});
