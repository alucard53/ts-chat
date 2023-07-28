import WebSocket from "ws";

export class Room {
  private users: WebSocket[];
  constructor(public name: string) {
    this.users = [];
  }

  add(user: WebSocket) {
    if (!this.users.includes(user)) {
      this.users.push(user)
    }
  }

  remove(user: WebSocket) {
    if(this.users.includes(user)) {
      this.users.splice(this.users.indexOf(user), 1);
    }
  }
}
