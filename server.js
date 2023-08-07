"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const server = new socket_io_1.Server(3000);
console.log("Server socket started listening: ");
server.on("connection", (socket) => {
    console.log(socket.id, "has connected to server");
    socket.on("join", (room) => {
        socket.join(room);
        console.log(socket.id, "has joined", room);
    });
    socket.on("msg", (room, msg) => {
        socket.to(room).emit("rcv", {
            room,
            sender: socket.id,
            msg,
        });
    });
});
