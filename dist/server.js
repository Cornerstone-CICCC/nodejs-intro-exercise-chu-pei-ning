"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const server = http_1.default.createServer((request, response) => {
    const { url, method } = request;
    if (url === "/" && method === "GET") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end("<h1>Welcome to my server!</h1>");
        return;
    }
    if (url === "/about") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end("<h2>This is about page</h2>");
    }
    if (request.url === "/admin") {
        response.writeHead(403, { "Content-Type": "text/plain" });
        response.end("You are not allowed to visit this page!");
        return;
    }
    if (request.url === "/checkout") {
        response.writeHead(402, { "Content-Type": "text/html" });
        response.end(`<h1>Checkout failed. Need money!</h1>`);
        return;
    }
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Page not found");
    return;
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
