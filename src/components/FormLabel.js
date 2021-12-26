import React from "react";

export default function FormLabel(props) {
  const { handleLabelChange, color, checked, key } = props;
  return (
    <button
      type="button"
      value={color}
      data-testid={`new-todo-input-${key}`}
      name="label"
      onClick={handleLabelChange}
      className={
        checked
          ? "form-labels form-labels-checked"
          : "form-labels form-labels-unchecked"
      }
      style={{
        backgroundColor: `${color}`,
      }}
    >
      {checked ? "✔️" : " "}
    </button>
  );
}
