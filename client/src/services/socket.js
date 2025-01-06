import { io } from "socket.io-client";

const clientSocket = io("https://trivial-pursuit-online.onrender.com");

export default clientSocket;
