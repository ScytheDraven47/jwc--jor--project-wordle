import React from "react";

import { checkGuess } from "../../game-helpers.js";

function GuessRow({ guess, answer }) {
  return (
    <p className="guess">
      {checkGuess(guess, answer).map(({ letter, status }, index) => (
        <span className={`cell ${letter.trim() ? status : ""}`} key={index}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default GuessRow;
