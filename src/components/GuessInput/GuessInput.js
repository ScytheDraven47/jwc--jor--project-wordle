import React from "react";

function GuessInput({ handleGuess, disabled }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleGuess(guess);
    setGuess("");
  }

  function handleChange(event) {
    setGuess(event.target.value.toUpperCase());
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        autoFocus
        type="text"
        id="guess-input"
        value={guess}
        minLength="5"
        maxLength="5"
        onChange={handleChange}
        pattern="[a-zA-Z]{5}"
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
