import WebSocket from "ws"

export interface IRoom {
  name: string;

  add(user: WebSocket): void;
  push(from: WebSocket, message: string): void;
  remove(user: WebSocket): void;
}

export type RoomType = "set" | "array";
export declare function getImpl(): IRoom;
