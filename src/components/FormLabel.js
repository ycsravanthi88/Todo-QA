import React from "react";

export default function FormLabel(props) {
  const { handleLabelChange, color, checked } = props;
  return (
    <button
      type="button"
      value={color}
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
