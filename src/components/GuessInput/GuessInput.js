import React from "react";

function GuessInput({ handleGuess }) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
        pattern="[a-zA-Z]{5}"
      />
    </form>
  );
}

export default GuessInput;
