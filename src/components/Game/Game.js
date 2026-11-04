import React from "react";
import GuessInput from "../GuessInput";
import GameGrid from "../GameGrid";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(guess) {
    console.info({ guess });
    setGuesses([
      ...guesses,
      {
        id: Date.now() + Math.random(),
        guess,
      },
    ]);
  }

  return (
    <>
      <GameGrid guesses={guesses}></GameGrid>
      <GuessInput handleGuess={handleGuess}></GuessInput>
    </>
  );
}

export default Game;
