import { Server } from "socket.io";

const server = new Server(3000);

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
