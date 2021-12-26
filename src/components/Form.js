import React, { useState } from 'react';
import FormLabel from './FormLabel'
import { INITIAL_LABEL_STATE, LABEL_NAMES } from './utils';

export function isStringValid(string) {
  if (string.length > 0 && typeof string === 'string') {
    return true;
  } else {
    return false;
  }
}

function Form(props) {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [labels, setLabels] = useState(INITIAL_LABEL_STATE);

  function handleSubmit(e) {
    e.preventDefault();
    if (!isStringValid(name)) {
      setError(true);
      return;
    }
    const taskLabels = LABEL_NAMES.filter(n => labels[n])
    props.addTask(name, taskLabels);
    setName('');
    setLabels(INITIAL_LABEL_STATE)
    setError(false);
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleLabelChange(e){
    const label = e.target.value

    setLabels({...labels, [label]: !labels[label]})
  }

  function renderLabelsOptions() {
    return (
      <div className="form-labels-container">
        Select color labels:
        {LABEL_NAMES.map((color, index) => {
          return (
            <FormLabel
              key={index}
              color={color}
              handleLabelChange={handleLabelChange}
              checked={labels[color]}
            />
          );
        })}
      </div>
    );
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
      {renderLabelsOptions()}
      {error ? (
        <div
          className="error-message"
          style={{ color: 'red', paddingLeft: '20px', paddingBottom: '5px' }}
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
