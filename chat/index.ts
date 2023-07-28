import WebSocket from "ws";
import { IRoom, getImpl } from "./room";

export class Chat {
  private users: WebSocket[];
  private rooms: IRoom[];

  constructor() {
    this.users = [];
    this.rooms = [];
  }

  add(user: WebSocket, ) {
    this.users.push(user);

    user.on("message", (message: string) => {
      const [command, ...rest] = message.split(" ");
      if (command === "join") {
        let room = this.rooms.filter(room => room.name===rest[0])[0]

        if (!room) {
          room = getImpl()
        }
      }
    });

    user.on("error", (error: Error) => {
      
    });

    user.on("close", (close: string) => {
      this.users.splice(this.users.indexOf(user), 1)
      this.rooms.forEach((room) => {
        room.remove(user);
      })
    });
  }
}

