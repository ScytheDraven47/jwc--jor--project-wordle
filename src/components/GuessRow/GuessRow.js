import React from "react";

import { checkGuess } from "../../game-helpers.js";
import { range } from "../../utils.js";

function GuessRow({ guess, answer }) {
  let cells = range(5).map((_) => ({ letter: "" }));

  if (guess) {
    cells = checkGuess(guess, answer);
  }

  return (
    <p className="guess">
      {cells.map(({ letter, status }, index) => (
        <span className={`cell ${status && status}`} key={index}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default GuessRow;
