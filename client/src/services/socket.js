import { io } from "socket.io-client";

const clientSocket = io("http://localhost:3001");

export default clientSocket;
