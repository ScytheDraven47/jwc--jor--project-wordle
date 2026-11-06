import React from "react";
import GuessInput from "../GuessInput";
import GameGrid from "../GameGrid";
import GameEndBanner from "../GameEndBanner";
import GameKeyboard from "../GameKeyboard";

import { checkGuess } from "../../game-helpers.js";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [guessedLetters, setGuessedLetters] = React.useState({});
  const [gameState, setGameState] = React.useState("ongoing");

  function getStatusPriority(status) {
    switch (status) {
      case "correct":
        return 3;
      case "misplaced":
        return 2;
      case "incorrect":
        return 1;
      default:
        return 0;
    }
  }

  function getGameState(numGuesses, currentGuess) {
    console.log({ numGuesses, NUM_OF_GUESSES_ALLOWED, currentGuess, answer });
    if (answer === currentGuess) {
      return "won";
    } else if (numGuesses >= NUM_OF_GUESSES_ALLOWED) {
      return "lost";
    }
    return "ongoing";
  }

  function saveLetters(guess) {
    const letters = checkGuess(guess, answer);

    const newGuessedLetters = { ...guessedLetters };
    letters.forEach(({ letter, status }) => {
      const oldStatus = guessedLetters.hasOwnProperty(letter)
        ? guessedLetters[letter]
        : "";
      const newStatusPriority = getStatusPriority(status);
      const oldStatusPriority = getStatusPriority(oldStatus);

      if (newStatusPriority <= oldStatusPriority) return;

      newGuessedLetters[letter] = status;
    });

    setGuessedLetters(newGuessedLetters);
  }

  function handleGuess(guess) {
    console.log(guess);
    saveLetters(guess);

    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    console.log(guess);
    setGameState(getGameState(nextGuesses.length, guess));
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
      <GameKeyboard guessedLetters={guessedLetters}></GameKeyboard>
    </>
  );
}

export default Game;
