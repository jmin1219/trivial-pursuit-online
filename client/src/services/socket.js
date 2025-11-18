import { io } from "socket.io-client";

const clientSocket = io("https://trivial-pursuit-online.onrender.com", {
  transports: ["websocket", "polling"],
});

export default clientSocket;
