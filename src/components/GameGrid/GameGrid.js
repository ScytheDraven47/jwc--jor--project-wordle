import React from "react";
import GuessRow from "../GuessRow";

import { range } from "../../utils.js";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

function GameGrid({ guesses, answer }) {
  const guessesHolder = range(NUM_OF_GUESSES_ALLOWED).map(
    (_, index) => guesses[index] || { id: index, guess: "     " }
  );

  return (
    <div className="guess-results">
      {guessesHolder.map(({ guess, id }) => (
        <GuessRow key={id} guess={guess} answer={answer}></GuessRow>
      ))}
    </div>
  );
}

export default GameGrid;
