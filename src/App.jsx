import { useState } from "react";
import "./App.css";
import "./styles/home.scss";
import Home from "./components/home";
import Game from "./components/game";

function App() {
  const [playerName, setPlayerName] = useState("");
  const [joinGame, setJoinGame] = useState(false);

  return (
    <div className="app">
      <h1 className="title">Rock Paper Scissors Game</h1>
      {joinGame ? (
        <Game
          playerName={playerName}
          setPlayerName={setPlayerName}
          setJoinGame={setJoinGame}
        />
      ) : (
        <Home
          playerName={playerName}
          setPlayerName={setPlayerName}
          setJoinGame={setJoinGame}
        />
      )}
    </div>
  );
}

export default App;
