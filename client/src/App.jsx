import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";
import GameLobby from "./in-game/GameLobby";
import Header from "./partials/Header";
import { HomeProvider } from "./context/HomeContext";

function App() {
  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <HomeProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:gameId" element={<GameLobby />} />
            </Routes>
          </HomeProvider>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
