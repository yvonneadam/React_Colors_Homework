import React from "react";
import "./ColorForm.css";

export const ColorForm = () => {
  return (
    <form className="color-form">
      <input type="color" />
      <button>Add</button>
    </form>
  );
};
