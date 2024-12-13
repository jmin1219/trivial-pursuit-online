import { BrowserRouter, Route, Routes } from "react-router-dom";
import { io } from "socket.io-client";
import "./App.css";
import Home from "./home/Home";
import GameLobby from "./in-game/GameLobby";
import Header from "./partials/Header";

const socket = io("http://localhost:3001");

function App() {
  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:gameId" element={<GameLobby />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
