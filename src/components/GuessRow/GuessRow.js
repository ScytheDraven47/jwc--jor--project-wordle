import React from "react";

function GuessRow({ guess }) {
  return (
    <p className="guess">
      {guess.split("").map((char, index) => (
        <span className="cell" key={index}>
          {char}
        </span>
      ))}
    </p>
  );
}

export default GuessRow;
