import { io } from "socket.io-client";

const clientSocket = io("http://localhost:5001", {
  transports: ["websocket", "polling"],
});

export default clientSocket;
