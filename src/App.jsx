import { useState, useEffect } from "react";
import "./App.css";
import "./styles/home.scss";
import Home from "./components/Home";
import Game from "./components/Game";
import { doc, onSnapshot } from "firebase/firestore";
import db from "./firebase";

function App() {
  const [playerName, setPlayerName] = useState("");
  const [joinGame, setJoinGame] = useState(false);
  const [playerData, setPlayerData] = useState({});

  useEffect(() => {
    const playerRef = doc(db, "RPS", "room");

    const unsubscribe = onSnapshot(playerRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        setPlayerData(JSON.parse(JSON.stringify(data)));
        if (data?.players < 2) setJoinGame(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="app">
      <h1 className="title">Rock Paper Scissors Game</h1>
      {joinGame ? (
        <Game
          playerName={playerName}
          setPlayerName={setPlayerName}
          setJoinGame={setJoinGame}
          playerData={playerData}
          setPlayerData={setPlayerData}
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
