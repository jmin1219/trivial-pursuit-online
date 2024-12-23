import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";
import GameLobby from "./in-game/GameLobby";
import Header from "./partials/Header";
import { HomeSocketProvider } from "./context/HomeSocketContext";
import { GameSocketProvider } from "./context/GameSocketContext";

function App() {
  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <HomeSocketProvider>
            <GameSocketProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:gameId" element={<GameLobby />} />
              </Routes>
            </GameSocketProvider>
          </HomeSocketProvider>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
