import React from "react";
import GuessRow from "../GuessRow";

import { range } from "../../utils.js";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

function GameGrid({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <GuessRow key={num} guess={guesses[num]} answer={answer}></GuessRow>
      ))}
    </div>
  );
}

export default GameGrid;
