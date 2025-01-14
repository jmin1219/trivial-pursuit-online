import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { GameProvider } from "./context/GameContext";
import { HomeProvider } from "./context/HomeContext";
import Home from "./home/Home";
import GameLobby from "./in-game/GameLobby";
import Header from "./partials/Header";
import { ChatProvider } from "./context/ChatContext";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-auto">
        <BrowserRouter>
          <HomeProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/:gameId"
                element={
                  <GameProvider>
                    <ChatProvider>
                      <GameLobby />
                    </ChatProvider>
                  </GameProvider>
                }
              />
            </Routes>
          </HomeProvider>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
