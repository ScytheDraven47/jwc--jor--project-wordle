import React from "react";

function GuessInput({ handleGuess }) {
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
        type="text"
        id="guess-input"
        value={guess}
        onChange={handleChange}
        pattern="[a-zA-Z]{5}"
      />
    </form>
  );
}

export default GuessInput;
