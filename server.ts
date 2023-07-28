import WebSocket from "ws";
import { getImpl } from "./chat/room";
import { Chat } from "./chat";

const server = new WebSocket.Server({port: 8080})
const chat = new Chat();

server.on("connection", function(socket) {
  chat.add(socket)
}) 

server.on("error", function(error) {
  console.log("err:", error)
})
