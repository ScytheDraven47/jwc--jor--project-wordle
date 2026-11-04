import React from "react";
import GuessInput from "../GuessInput";
import GameGrid from "../GameGrid";
import GameEndBanner from "../GameEndBanner";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState("ongoing");

  function handleGuess(guess) {
    setGuesses([...guesses, guess]);

    console.log({ answer, guess });
    if (answer === guess) {
      setGameState("won");
    } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED - 1) {
      setGameState("lost");
    }
  }

  return (
    <>
      <GameGrid guesses={guesses} answer={answer}></GameGrid>
      <GuessInput
        handleGuess={handleGuess}
        disabled={gameState !== "ongoing"}
      ></GuessInput>
      {gameState !== "ongoing" && (
        <GameEndBanner
          gameState={gameState}
          numGuesses={guesses.length}
          answer={answer}
        ></GameEndBanner>
      )}
    </>
  );
}

export default Game;
