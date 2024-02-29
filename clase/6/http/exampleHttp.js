const http = require("http");

const server = http.createServer((request, response) => {
    response.end("Mi primer hola mundo desde backend!");
});

const PORT = 8080;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
}).on('error', (error) => {
    console.error(`Error in init server on port ${PORT}`);
});