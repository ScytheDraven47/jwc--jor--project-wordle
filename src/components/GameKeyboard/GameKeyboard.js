import React from "react";

const KEYS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function GameKeyboard({ guessedLetters }) {
  return (
    <div className="keyboard">
      {KEYS.map((row, index) => (
        <div key={index}>
          {row.map((key) => (
            <span
              key={key}
              className={
                guessedLetters?.hasOwnProperty(key)
                  ? guessedLetters[key]
                  : undefined
              }
            >
              {key}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameKeyboard;
