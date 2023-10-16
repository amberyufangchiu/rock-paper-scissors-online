import { useState } from "react";
import { getDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";
import db from "./../firebase";
import "./../styles/home.scss";

const Home = ({ playerName, setPlayerName, setJoinGame }) => {
  const [isRoomFull, setIsRoomFull] = useState(false);

  const updatePlayersField = async () => {
    const playerRef = doc(db, "RPS", "room");

    const playerSnapshot = await getDoc(playerRef);
    const playerData = playerSnapshot.data();

    if (playerData.players.length >= 2) return setIsRoomFull(true);

    if (playerData.players && playerData.players.includes(playerName)) {
      console.log(`Player ${playerName} already exists.`);
    } else {
      await updateDoc(playerRef, {
        players: arrayUnion(playerName),
        [playerName]: null,
      });
      console.log(`Player ${playerName} added to the room.`);
      setJoinGame(true);
    }
  };

  return (
    <div className="home">
      {isRoomFull ? (
        <p>Room is full</p>
      ) : (
        <div className="input-container">
          <label htmlFor="name">What is your name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <button
            className="button-82-pushable"
            role="button"
            onClick={updatePlayersField}
            disabled={!playerName.length}
          >
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text">Get started</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
