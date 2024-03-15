const socket = io();

const textInput = document.querySelector("#text-input");
const showText = document.querySelector("#show-text");
const chatInput = document.querySelector("#chat-message");
const allMessages = document.querySelector("#all-messages");

textInput.addEventListener("input", () => {
    socket.emit("message", textInput.value);
});

socket.on("messageShow", data => {
    showText.textContent = data;
});

socket.on("allMessages", data => {
    let chat = "";

    for (let item of data) {
        chat += `<b>${item.socketId}:</b> ${item.message}<br>`
    }

    allMessages.innerHTML = chat;
});

function send() {
    socket.emit("chatMessage", chatInput.value);
    chatInput.value = "";
}