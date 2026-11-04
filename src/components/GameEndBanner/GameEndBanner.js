import React from "react";

function GameEndBanner({ gameState, numGuesses, answer }) {
  return (
    <div className={`banner ${gameState === "won" ? "happy" : "sad"}`}>
      {gameState === "won" ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numGuesses} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default GameEndBanner;
