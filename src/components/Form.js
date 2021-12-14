import React, { useState } from "react";

export function isStringValid(string) {
  if (string.length > 0 && typeof string === "string") {
    return true;
  } else {
    return false;
  }
}

function Form(props) {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!isStringValid(name)) {
      setError(true);
      return;
    }
    props.addTask(name);
    setName("");
    setError(false);
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>

      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        data-testid="new-todo-input"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      {error ? (
        <div
          className="error-message"
          style={{ color: "red", paddingLeft: "20px", paddingBottom: "5px" }}
          data-testid="error-message"
        >
          <li>You may not add a blank task!</li>
        </div>
      ) : null}
      <button
        type="submit"
        className="btn btn__primary btn__lg"
        data-testid="add-todo-button"
      >
        Add
      </button>
    </form>
  );
}

export default Form;
