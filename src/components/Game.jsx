import { useState } from "react";
import { setDoc, doc, updateDoc } from "firebase/firestore";
import db from "../firebase";
import "./../styles/game.scss";

const choiceMap = {
  Rock: "✊🏼",
  Paper: "🖐🏼",
  Scissors: "✌🏼",
};

const Game = ({ playerName, setJoinGame, playerData }) => {
  const [playerChoice, setPlayerChoice] = useState("");
  const opponent = playerData?.players?.find((name) => name !== playerName);

  const handleChoice = async (choice) => {
    const playerRef = doc(db, "RPS", "room");

    await updateDoc(playerRef, {
      [playerName]: choice,
    });
    console.log(`Player ${playerName} chose ${choice}.`);
    setPlayerChoice(choice);
  };

  const getResult = (otherChoice) => {
    let result = "";
    if (playerChoice === otherChoice) {
      result = "It's a tie!";
    } else if (
      (playerChoice === "Rock" && otherChoice === "Scissors") ||
      (playerChoice === "Paper" && otherChoice === "Rock") ||
      (playerChoice === "Scissors" && otherChoice === "Paper")
    ) {
      result = "You win!";
    } else {
      result = `${opponent} wins!`;
    }

    return result;
  };

  const handlePlayAgain = async () => {
    await setDoc(doc(db, "RPS", "room"), { players: [] });
    setJoinGame(false);
  };

  return (
    <div className="game">
      {playerData?.players?.length >= 2 ? (
        <div>
          {playerChoice.length ? null : (
            <>
              <p>Take a pick</p>
              <div className="pick-buttons">
                <button onClick={() => handleChoice("Rock")}>✊🏼</button>
                <button onClick={() => handleChoice("Paper")}>🖐🏼</button>
                <button onClick={() => handleChoice("Scissors")}>✌🏼</button>
              </div>
            </>
          )}
          {!playerChoice.length && playerData[opponent]?.length ? (
            <p>opponent made a pick</p>
          ) : null}
          {playerChoice.length && !playerData[opponent]?.length ? (
            <>
              <p>Your choice: {choiceMap[playerChoice]}</p>
              <p>waiting for the opponent make their choice</p>
            </>
          ) : null}
          {playerChoice.length && playerData[opponent]?.length ? (
            <>
              <div>
                <p>
                  {`${playerName}`}&apos;s choice: {choiceMap[playerChoice]}
                </p>
                <p>
                  {opponent}&apos;s choice:
                  {choiceMap[playerData[opponent]]}
                </p>
                <p>
                  Result:
                  {getResult(playerData[opponent])}
                </p>
              </div>
              <button
                className="play-again"
                role="button"
                onClick={handlePlayAgain}
              >
                play again
              </button>
            </>
          ) : null}
        </div>
      ) : (
        <p>waiting for the opponent</p>
      )}
    </div>
  );
};

export default Game;
