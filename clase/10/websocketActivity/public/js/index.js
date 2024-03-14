const socket = io();

const textInput = document.querySelector("#text-input");
const showText = document.querySelector("#show-text");

textInput.addEventListener("input", () => {
    socket.emit("message", textInput.value);
});

socket.on("messageShow", data => {
    showText.textContent = data;
});

