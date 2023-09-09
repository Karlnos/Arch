document.addEventListener("DOMContentLoaded", function () {
    const messages = document.getElementById("messages");
    const messageInput = document.getElementById("message");
    const sendButton = document.getElementById("send");

    // Generate a random username
    const username = "User" + Math.floor(Math.random() * 1000);

    // Function to simulate polling for new messages
    function pollForMessages() {
        setTimeout(() => {
            checkForNewMessages();
            pollForMessages();
        }, 2000); // Poll every 2 seconds
    }

    pollForMessages();

    sendButton.addEventListener("click", () => {
        const text = messageInput.value;
        if (text.trim() !== "") {
            sendMessage(text);
            messageInput.value = "";
        }
    });

    function sendMessage(text) {
        displayMessage(username, text);
    }

    function checkForNewMessages() {
        // Simulate checking for new messages on the server.
        // In a real implementation, this would involve server logic.
        const newMessage = getNewMessageFromServer();
        if (newMessage) {
            const { username, text } = newMessage;
            displayMessage(username, text);
        }
    }

    function displayMessage(username, text) {
        const messageElement = document.createElement("div");
        messageElement.textContent = `${username}: ${text}`;
        messages.appendChild(messageElement);
    }

    function getNewMessageFromServer() {
        // In a real implementation, this function would fetch new messages from the server.
        // For the sake of this example, we'll simulate a new message being received.
        return {
            username: "UserX",
            text: "Hello, chat!",
        };
    }
});
