import cors from "cors";
import express from "express";
import http from "http";
import { Server as SocketIO } from "socket.io";
import connectDB from "./config/db.js";
import configureSocket from "./config/socket.js";
import gameApiRoutes from "./services/api/routes/gameApiRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const httpServer = http.createServer(app);

app.use(cors());
app.use(express.json());

const io = new SocketIO(httpServer, {
  cors: {
    origin: `http://localhost:${process.env.CLIENT_PORT}`,
    methods: ["GET", "POST"],
  },
});

configureSocket(io);

connectDB();

app.use("/api/games", gameApiRoutes);

httpServer.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running on port ${process.env.SERVER_PORT}.`);
});
